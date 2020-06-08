import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ToastService } from "../services/toast.service";
import { feedback } from '../changeLang';
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
	loading: any;
	feedbackTitle = feedback;
	language: string;
	constructor(private translate: TranslateService,private _admobService: AdmobfreeService,public appcomponent: AppComponent, public platform: Platform, public _toastService: ToastService, public _userService: UserService, private router: Router) { }
	
	ionViewWillEnter(){
		this._admobService.interstitalAdOnFivePageChange()
	}
	ngOnInit() {
		this.language = localStorage.getItem('language')
		this.platform.backButton.subscribe(async () => {
			this.appcomponent.openRatingModal();
			if (this.router.url.includes('feedback')) {
				this.router.navigate(['settings']);
			}
		});
	}

	feedbackForm = new FormGroup({
		email: new FormControl('', Validators.required),
		name: new FormControl('', Validators.required),
		mobile: new FormControl('', Validators.required),
		message: new FormControl('', Validators.required),
	});

	feedback = {
		email: "",
		name: "",
		mobile: "",
		message: ""
	}

	userFeedback(feedback) {
		this.loading = true;
		this._userService.userFeedbackFrom(feedback).subscribe((res: any) => {
			this.loading = false;
			this.translate.get(res.message).subscribe((mes:any)=>{
				this._toastService.toastFunction(mes, 'success')
			})
			this.router.navigate(['settings']);
		}, err => {
			this.loading = false;
			this.translate.get(err.error.message).subscribe((mes:any)=>{
				this._toastService.toastFunction(mes, 'success')
			})
		})
	}
	backButton() {
		this.appcomponent.openRatingModal();
	}
}