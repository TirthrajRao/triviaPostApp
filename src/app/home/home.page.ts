import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NewsService } from '../services/news.service';
import { FCM } from '@ionic-native/fcm/ngx';
declare var $: any;
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Platform, NavController } from '@ionic/angular';
import * as _ from 'lodash';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from '../services/user.service';
import 'hammerjs';
import { ToastService } from "../services/toast.service";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { GeneralService } from '../services/general.service';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { AllPostPage } from '../all-post/all-post.page';
import { CategoriesPage } from '../categories/categories.page';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

    bookmarks: any;
    tokenLocalStorage: any;
    language: string;
    loggedInUser: any;
    height: any;
    width: any;
    notifyflag: any;
    currentPostId: any;
    mainSwiper: any;
    text: string;
    searchLength: any;
    catTitle: any;
    searchKey: any;
    newsArray: any = [];
    horizontalSwipers = [];
    error = '';
    isVisible = false;
    loading: boolean = false;
    isTextVisible = false;
    isCalled = false;
    bookMark: boolean = false;
    mediaPath = config.mediaApiUrl;
    data: { postId: any; postType: any; };
    appendedNews: { newsId: any; splice: (arg0: any, arg1: number) => void; };
    hide: boolean;
    resLength: number;
    subscription: any;

    opts = {
        icon: false,
        label: true,
        toolbarPos: 'top',
        scrollable: true,
    };

    config: SuperTabsConfig = {
        debug: true,
        allowElementScroll: false,
    };

    categoryPage;
    allPostPage; 
    categories: any;
    constructor(private _generalService: GeneralService, private firebaseDynamicLinks: FirebaseDynamicLinks, private localNotifications: LocalNotifications, private _toastService: ToastService, private _userService: UserService, private network: Network, private route: ActivatedRoute, private screenOrientation: ScreenOrientation, private platform: Platform, private socialSharing: SocialSharing, private deeplinks: Deeplinks, private fcm: FCM, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router, public keyboard: Keyboard) {
    }

    // Event Listeners
    ngOnInit() {
        this.categoryPage = CategoriesPage;
        this.allPostPage = AllPostPage;
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.language = localStorage.language;
    }

    // ionViewDidLoad() {
    //     this.categoryPage = CategoriesPage;
    //     this.allPostPage = AllPostPage;
    // }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }

    click($event) {
        console.log($event);
    }

    viewInitFunctions() {
        console.log('this.firebaseDynamicLinks', this.firebaseDynamicLinks);

        this.notificationTapped();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

        //  Deeplinks
        // this.deeplinks.route({
        //     '/': {},
        //     '/Rk22': { "post:": true },
        //     '/post/:id': { "post:": true }
        // }).subscribe((match) => {
        //     console.log("match link", match.$args.id);
        //     this.router.navigate(['single-post/' + match.$args.id]);
        // },
        //     (nomatch) => {
        //         // alert("UnMatched" + nomatch);
        //     });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.getCategories();
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
        })
        this.getNews();
        this.fcmToken();
        this.loading = true;
        setTimeout(() => {
            $('#snackbar').show();
        }, 3000);
        this.checkforInternet();
    }
    //check for internet

    checkforInternet() {
        // // Check Internet conectivity
        var offline = Observable.fromEvent(document, "offline");
        var online = Observable.fromEvent(document, "online");

        offline.subscribe(() => {
            this.hide = false;
            this._toastService.toastFunction('No internet connection', 'danger');
        });

        online.subscribe(() => {
            this.hide = true;
        });
    }

    getCategories() {
        this.language = localStorage.getItem('language');
        this._categoryService.getAll().subscribe((res) => {
          this.categories = res;
          console.log("after", this.categories);
        },
          (err) => {
          });
      }
      
    //get all news - HOME PAGE ( FEEDS )
    getNews(): void {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe(
            (res: any) => {
                console.log("all news==========>", res)
                this.newsArray = res;
                this.loading = false;
            },
            (err) => {
                this.loading = false;
                this.error = err;
            });
    }

    search() {
        this.router.navigateByUrl('/searchBar');
    }

    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            } else {
                console.log('Received in foreground');
            }
        });
    }

    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                this._userService.firstTimeUser().subscribe((res: any) => {
                    localStorage.setItem('annonymousNotify', 'true');
                },
                    (err) => {
                    });
            }, 1000);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                //console.log('Received in background');
            } else {
                //console.log('Received in foreground');
            }
        });
    }
    checkForToken() {
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
}