(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar *ngIf=\"!bookMark && !catTitle && !searchKey\">\n        <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\"></ion-icon>\n        <ion-title style=\"text-align: center;margin-right: 15px;\">Trivia Post</ion-title>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"bookMark\">\n        <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/bookmarks\"></ion-icon>\n        <ion-title>\n            Bookmarked News\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"catTitle\">\n        <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\"></ion-icon>\n        <ion-title>\n            {{catTitle}}\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"searchKey\">\n        <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/searchBar\"></ion-icon>\n        Results for \"{{searchKey}}\"\n    </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"homepage-ion-content\" *ngIf=\"!loading && !isTextVisible\">\n\n    <div class=\"swiper-container swiper-container-v \">\n        <div class=\"swiper-wrapper \">\n            <div class=\"swiper-slide background\" *ngFor=\"let news of newsArray; let i = index; last as isLast\"\n                id={{news.newsId}} style=\"padding:15px\" (swipeup)=\"swipeevent($event,i)\">\n                <div class=\"swiper-container swiper-container-h \" id=\"swiper-h-{{news.newsId}}\">\n                    <div class=\"swiper-wrapper\" id=\"swiper-wrapper{{i}}\">\n                        <div class=\"page_slider swiper-slide newsId-{{news.newsId}} \"\n                            style=\"background-color: transparent\" id=\"page_slider{{i}}\">\n                            <div class='content' style=\"position: relative; width: 100% !important;\">\n                                <div id=\"sliderContent{{i}}\">\n                                    <!-- Title & Logo -->\n                                    <ion-row>\n                                        <ion-col size=\"9\">\n                                            <p *ngIf=\"language == 'English'\" class=\"news-title\">\n                                                <b>{{news.newsTitleEnglish | slice:0:70}}</b><span\n                                                    *ngIf=\"news.newsTitleEnglish.length >= 56\">...</span></p>\n                                            <p *ngIf=\"language == 'Hindi'\" class=\"news-title\" style=\"font-size: 27px\">\n                                                <b>{{news.newsTitleHindi | slice:0:70}}</b><span\n                                                    *ngIf=\"news.newsTitleHindi.length >= 56\">...</span></p>\n                                        </ion-col>\n                                        <ion-col size=\"3\" style=\"padding-right: 0 !important;\">\n                                            <img src=\"../../assets/images/Logo.png\"\n                                                style=\"height: 75px; float: right;\" />\n                                        </ion-col>\n                                    </ion-row>\n\n                                    <!-- Post Image -->\n                                    <div class=\"post_img\">\n                                        <img src=\"{{mediaPath}}{{news.newsImage}}\" />\n                                    </div>\n\n                                    <!-- Content -->\n                                    <div class=\"contentPost\">\n                                        <div *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsEnglish\">\n                                        </div>\n\n                                        <div class=\"hindi-news\" *ngIf=\"language == 'Hindi'\"\n                                            [innerHTML]=\"news.newsHindi\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Bookmark -->\n                    <p id=\"lastPostToast\" *ngIf=\"isLast\">No more posts</p>\n                    <div style=\"position: absolute; bottom: 0px;z-index: 28;\">\n                        <img src=\"assets/images/Bookmarks1.png\" class=\"bookmark\" *ngIf=\"!news.bookmarkKey\"\n                            (click)=\"bookmark(i)\" />\n                        <img src=\"assets/images/Bookmark.png\" class=\"bookmark\" *ngIf=\"news.bookmarkKey\"\n                            (click)=\"bookmark(i)\" />\n                    </div>\n                    <!-- Share button -->\n                    <div class=\"share-button\" *ngIf=\"language == 'English'\"\n                        (click)=\"sharePost(news.newsId, news.newsTitleEnglish)\">\n                        <img src=\"../../assets/images/Share.png\" class=\"icon\" />\n                    </div>\n                    <div class=\"share-button\" *ngIf=\"language == 'Hindi'\"\n                        (click)=\"sharePost(news.newsId, news.newsTitleHindi)\">\n                        <img src=\"../../assets/images/Share.png\" class=\"icon\" />\n                    </div>\n                    <div class=\"swiper-pagination swiper-pagination-h\"></div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"swiper-pagination swiper-pagination-v\"></div> -->\n    </div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n    <div id=\"loader-wrapper\">\n        <div id=\"loader\">\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"ml-loader\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n            <p class=\"text-center\">Loding Data...</p>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"isTextVisible\">\n    <div class=\"no-news-text\">\n        <span>{{text}}</span>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-card {\n  border: 1px solid blue;\n  box-shadow: 0 2px 3px -4px blue;\n}\n\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: #c21c00;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n\n#lastPostToast {\n  display: none;\n  background-color: #8c8c8c;\n  line-height: 40px;\n  width: 141px;\n  border-radius: 30px;\n  color: white;\n  text-align: center;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 7%;\n  margin: auto;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYXBvc3Qvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRFdBO0VBQ0ksc0JBQUE7RUFHQSwrQkFBQTtBQ1JKOztBRFdBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUko7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1JKOztBRFdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURpQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2RKOztBRGlCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2RKOztBRGlCQTtFQUNJLGdCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtBQ2RKOztBRGtCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1nLmljb257XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDE3cHg7XG4vLyAgIG1hcmdpbjogMCAxMnB4XG4vLyB9XG4uaG9tZUJhY2sge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi8vIGlvbi1jb250ZW50e1xuLy8gICAtLWNvbG9yOiBibGFjaztcbi8vICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQnJvd24tQmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZFxuLy8gfVxuaW9uLWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggLTNweCBibHVlO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggM3B4IC00cHggYmx1ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xufVxuXG4ucG9zdF9pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNoYXJlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjFjMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFweDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi8vIC5iYWNrZ3JvdW5ke1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0Jyb3duLUJhY2tncm91bmQucG5nXCIpIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgcGFkZGluZzogMCAxMnB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4ubmV3cy10aXRsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4vL3RvYXN0IGxhc3QgcG9zdFxuI2xhc3RQb3N0VG9hc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjOGM4YztcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTQxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNyU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9wYWNpdHk6IDE7XG59IiwiLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0zcHggYmx1ZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxYzAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5pbWcuYm9va21hcmsge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogMTExMTExMTtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm5vLW5ld3MtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRQb3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4jbGFzdFBvc3RUb2FzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzhjOGM7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTQxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDclO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);

















let HomePage = class HomePage {
    constructor(_userService, network, route, screenOrientation, platform, socialSharing, toastController, deeplinks, fcm, _newsService, _categoryService, router, keyboard) {
        this._userService = _userService;
        this.network = network;
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.deeplinks = deeplinks;
        this.fcm = fcm;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.keyboard = keyboard;
        this.newsArray = [];
        this.horizontalSwipers = [];
        this.error = '';
        this.isVisible = false;
        this.loading = false;
        this.isTextVisible = false;
        this.isCalled = false;
        this.bookMark = false;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
    }
    // Event Listeners
    ngOnInit() {
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.backButtonFunction();
        this.checkForCurrentSlideFromLocalStorage();
        this.language = localStorage.language;
        this.route.params.subscribe((param) => {
            this.pageContent(this.router.url, param);
        });
    }
    ngOnExit() {
        console.warn("ngOnExit");
    }
    ionViewDidLeave() {
        console.warn("ionViewDidLeave");
        $("#homepage-ion-content").html("");
        delete this.newsArray;
        console.warn("Removing homepage-ion-content", $("#homepage-ion-content").html());
        this.removeSwiperJs();
    }
    viewInitFunctions() {
        this.notificationTapped();
        this.removeSwiperJs();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        this.checkForCurrentSlideFromLocalStorage();
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['home/single-news/' + match.$args.id]);
        }, (nomatch) => {
            // alert("UnMatched" + nomatch);
        });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
        });
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
        var offline = rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"].fromEvent(document, "offline");
        var online = rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this.toast = this.toastController.create({
                message: 'No internet connection',
                animated: true,
                duration: 2000,
                showCloseButton: true,
                closeButtonText: "OK",
                cssClass: "my-toast",
                position: "bottom",
                color: "danger"
            }).then((obj) => {
                obj.present();
            });
        });
        online.subscribe(() => {
            this.toastController.dismiss();
            this.hide = true;
        });
    }
    // ion-content RESET 
    doRefill() {
        console.log("Reseting ion-html");
        $(document).ready(() => {
            $("#homepage-ion-content").html("");
            console.log("ion-content before loading html ", $("#homepage-ion-content").html());
            $("#homepage-ion-content").html(this.refillIonContent());
            console.log("ion-content After loading html ", $("#homepage-ion-content").html());
        });
    }
    refillIonContent() {
        return `<div class="swiper-container swiper-container-v ">
        <div class="swiper-wrapper ">
        <div class="swiper-slide background" *ngFor="let news of newsArray; let i = index" id={{news.newsId}}
        style="padding:15px">
        <div class="swiper-container swiper-container-h " id="swiper-h-{{news.newsId}}">
        <div class="swiper-wrapper" id="swiper-wrapper{{i}}">
        <div class="page_slider swiper-slide newsId-{{news.newsId}} "
        style="background-color: transparent" id="page_slider{{i}}">
        <div class='content' style="position: relative">
        <div id="sliderContent{{i}}">
        <!-- Title & Logo -->
        <ion-row>
        <ion-col size="8">
        <p *ngIf="language == 'English'" class="news-title">
        {{news.newsTitleEnglish | slice:0:55}}...</p>
        <p *ngIf="language == 'Hindi'" class="news-title" style="font-size: 27px">
        {{news.newsTitleHindi | slice:0:55}}...</p>
        </ion-col>
        <ion-col size="4">
        <img src="../../assets/images/Logo.png" style="height: 110px" />
        </ion-col>
        </ion-row>
        <!-- Post Image -->
        <div class="post_img">
        <img src="{{mediaPath}}{{news.newsImage}}" style="height:350px !important;" />
        </div>
        <!-- Content -->
        <div class="contentPost">
        <div *ngIf="language == 'English'" [innerHTML]="news.newsEnglish">
        </div>
        <div class="hindi-news" *ngIf="language == 'Hindi'"
        [innerHTML]="news.newsHindi">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <!-- Bookmark -->
        <div style="position: absolute; bottom: 0px;z-index: 28;">
        <img src="assets/images/Bookmarks.png" class="bookmark" *ngIf="!news.bookmarkKey"
        (click)="bookmark(i)" />
        <img src="assets/images/Bookmark.png" class="bookmark" *ngIf="news.bookmarkKey"
        (click)="bookmark(i)" />
        </div>
        <!-- Share button -->
        <div class="share-button" *ngIf="language == 'English'"
        (click)="sharePost(news.newsId, news.newsTitleEnglish)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="share-button" *ngIf="language == 'Hindi'"
        (click)="sharePost(news.newsId, news.newsTitleHindi)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="swiper-pagination swiper-pagination-h"></div>
        </div>
        </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-v"></div> -->
        </div>
        <ion-content *ngIf="loading">
	    <div id="loader-wrapper">
		<div id="loader">
		<span class="logo_container">
		<img src="../../assets/images/Logo.png" alt="logo">
	    </span>
		<div class="ml-loader">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		</div>
		<p class="text-center">Loding Data...</p>
		</div>
	    </div>
        </ion-content>
        </ion-content>
        `;
    }
    // RENDEREING FLOW
    // Load Content according to url -- called from each GET api.
    pageContent(url, param) {
        this.doRefill();
        console.log("Redirected From : ", url, param);
        // this.loading = true;
        setTimeout(() => {
            if (url.includes('bookmark')) {
                this.loading = false;
                this.bookMark = true;
                this.bookmarkedNews();
            }
            else if (url.includes('category')) {
                this.loading = false;
                this.catTitle = param.catTitle;
                this.catNews(param.id);
            }
            else if (url.includes('single-news')) {
                this.loading = false;
                console.log("In single news");
                this.getSingleNews(param.id);
            }
            else if (url.includes('search-news')) {
                this.loading = false;
                this.searchKey = param.key;
                this.searchNews(param.key);
            }
            else {
                this.loading = false;
                console.log("Calling for All news in Feeds");
                this.getNews();
            }
        }, 1000);
    }
    //  Load news to newsArray for all scenarios.
    loadNewsToPage(res, userId, checkForBookmark = false) {
        console.info("loadToNewsPage Called ", "res = ", res, "userId", userId, "checkForBookmark", checkForBookmark);
        this.newsArray = [];
        this.loading = false;
        this.resLength = res.length;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.newsArray = res;
        if (this.tokenLocalStorage && !checkForBookmark) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.delay(500).then(any => {
            this.buildForSwiper().then(() => {
                this.addSwiperJs();
            });
        });
    }
    // Back Button actions
    backButtonFunction() {
        setTimeout(() => {
            this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.route.params.subscribe(param => {
                    if (this.router.url.includes('bookmark')) {
                        this.router.navigate(['bookmarks']);
                    }
                    else if (this.router.url.includes('category')) {
                        this.router.navigate(['allcategory']);
                    }
                    else if (this.router.url.includes('single-news')) {
                        this.router.navigate(['allcategory']);
                    }
                    else if (this.router.url.includes('search-news')) {
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                });
            }));
        }, 3000);
        // this.platform.backButton.subscribe(async () => {
        //     this.route.params.subscribe(param => {
        //         if (this.router.url.includes('bookmark')) {
        //             this.router.navigate(['bookmarks']);
        //         } else if (this.router.url.includes('category')) {
        //             this.router.navigate(['allcategory']);
        //         } else if (this.router.url.includes('single-news')) {
        //             this.router.navigate(['allcategory']);
        //         } else if (this.router.url.includes('search-news')) {
        //         } else {
        //             navigator['app'].exitApp();
        //         }
        //     });
        // });
    }
    // API CALLS
    // View Count increment
    newPostView(postId) {
        postId = postId.split("-")[1];
        this.data = {
            postId: postId,
            postType: localStorage.language
        };
        this._newsService.newsCount(this.data).subscribe();
    }
    /**
     * get Single news --- PENDING TO DEVELOP
     */
    getSingleNews(id) {
        //console.log("this.id", id)
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        //console.log(userId);
        this._newsService.getSingleNews(id).subscribe((res) => {
            //console.log("this.single", res);
            // this.newsArray = res;
            this.loadNewsToPage(res, userId);
            //console.log("for-----------------", this.newsArray);
            //console.log(this.newsArray);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    /**
     * Searched result
     */
    searchNews(key) {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.searchedNews(key).subscribe((res) => {
            this.keyboard.hide();
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //  Bookmarked News
    bookmarkedNews() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            var userId = this.loggedInUser;
            this.loadNewsToPage(res, userId, true);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    catNews(id) {
        console.log(this.loading);
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.allCatNews(id).subscribe((res) => {
            console.log("CATNEWS UPDATED!!!");
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //get all news - HOME PAGE ( FEEDS )
    getNews() {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe((res) => {
            console.log("all news==========>", res);
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //  On Clicking Notification
    appendSinleNews(res, userId) {
        this.loading = false;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.appendedNews = res;
        lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.appendedNews, (news, index) => {
            if (news.newsId == this.appendedNews.newsId) {
                this.appendedNews.splice(index, 1);
            }
        });
        this.newsArray = this.appendedNews;
        if (this.tokenLocalStorage) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.buildForSwiper();
    }
    // last slide toast
    // lastSlideToast() {
    //     console.log("Last post %%%%%%%%%%%%%%5")
    //     this.toast = this.toastController.create({
    //         message: 'No more post',
    //         animated: true,
    //         duration: 2000,
    //         showCloseButton: true,
    //         closeButtonText: "OK",
    //         cssClass: "my-toast",
    //         position: "bottom",
    //         color: "primary"
    //     }).then((obj) => {
    //         obj.present();
    //     });
    // }
    // BUTTON ACTIONS
    //  Do Bookmark
    bookmark(index) {
        if (this.network.type == 'none') {
            this.toast = this.toastController.create({
                message: "No internet connection",
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        }
        else {
            this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res) => {
                this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
                this.toast = this.toastController.create({
                    message: res.message,
                    duration: 2000,
                    color: 'success'
                }).then((toastData) => {
                    toastData.present();
                });
            }, err => {
                this.toast = this.toastController.create({
                    message: err.error.message,
                    duration: 2000,
                    color: 'danger'
                }).then((toastData) => {
                    toastData.present();
                });
            });
        }
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
            //console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    // SWIPER 
    delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("delay fired"));
        });
    }
    buildForSwiper() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.newsArray.length; i++) {
                $(function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        var window_height = $(document).height() * 0.60;
                        var content_height = window_height;
                        function buildNewsletter() {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if ($('#sliderContent' + i).contents().length > 0) {
                                    let page = $("#page_slider" + i).clone().addClass("swiper-slide").css("display", "block");
                                    $(".swiper-container-h > #swiper-wrapper" + i).append(page);
                                    $(".swiper-container-h > #swiper-wrapper" + i + "> .page_slider:first-child").css("display", "none");
                                    $('#sliderContent' + i).columnize({
                                        columns: 1,
                                        target: "#swiper-wrapper" + i + " .swiper-slide:last .content",
                                        overflow: {
                                            height: content_height,
                                            id: "#sliderContent" + i,
                                            doneFunc: function () {
                                                buildNewsletter();
                                            }
                                        },
                                    });
                                }
                                else {
                                }
                            });
                        }
                        yield buildNewsletter();
                    });
                });
            }
        });
    }
    removeSwiperJs() {
        $('#scriptid').remove();
    }
    addSwiperJs() {
        var script = document.createElement('script');
        script.setAttribute('id', 'scriptid');
        script.src = "assets/js/swiper.js";
        document.body.appendChild(script);
    }
    // END SWIPER
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
        });
    }
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                this._userService.firstTimeUser().subscribe((res) => {
                    localStorage.setItem('annonymousNotify', 'true');
                }, (err) => {
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
            }
            else {
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
    swipeevent(e, l) {
        if (l + 1 == this.resLength) {
            $('#lastPostToast').hide().fadeIn(800).delay(500).fadeOut(800);
            // $('#lastPostToast').show();
        }
    }
    checkForCurrentSlideFromLocalStorage() {
        var that = this;
        setInterval(function () {
            if (that.currentPostId != localStorage.currentPostId) {
                that.currentPostId = localStorage.currentPostId;
                console.log("postid", this.currentPostId);
                that.newPostView(localStorage.currentPostId);
            }
        }, 500);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map