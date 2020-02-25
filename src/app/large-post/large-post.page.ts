import { Component, OnInit, Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service'
@Component({
  selector: 'app-large-post',
  templateUrl: './large-post.page.html',
  styleUrls: ['./large-post.page.scss'],
})
export class LargePostPage implements OnInit {
  @Input('news') news: any;
  @Input('singleCat') singleCat: any;
  @Input('language') language: string;
  @Input('skip') skip: string;
  mediaPath = config.mediaApiUrl;
  firstLargePostClick: string;
  wrongStatus = false;
  noConnection: boolean
  visitedArray: any;
  isPresent: any;
  constructor(private _toastService: ToastService, private router: Router) {
  }

  ngOnInit() {
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.isPresent = this.visitedArray.includes(this.news.newsId);
    console.log("news[language].title", this.news[this.language].title)
    console.log('this.news', this.news)
    this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
    console.log("CATSELECT", this.skip)
  }

  ionViewWillEnter() {
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
    if (!localStorage.getItem('firstLargePostClick')) {
      console.log("firstLargePostClick")
    }
    this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
    this.skip = localStorage.getItem('skip');
    this.language = localStorage.getItem('language');
    console.log('this.language', this.language)
  }

  categoryClick(catId, catName) {
    localStorage.setItem('firstLargePostClick', '1');
    this.firstLargePostClick = '1';
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  singleNews(postid) {
    if(!localStorage.getItem('skip')){
      localStorage.setItem('skip','1')
    }
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.visitedArray.push(postid);
    localStorage.setItem('isVisited',JSON.stringify(this.visitedArray))
    if (navigator.onLine) {
      if (this.wrongStatus) {
        this.wrongStatus = false
      }
      else {
        localStorage.setItem('firstLargePostClick', '1')
        this.firstLargePostClick = '1';
        this.router.navigateByUrl('/single-post/' + postid);
      }
    } else {
      this._toastService.toastFunction('No internet connnection', 'danger');
    }
  }
}
