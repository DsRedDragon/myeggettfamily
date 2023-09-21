(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	//Modules
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var forms_1 = __webpack_require__(8);
	var primeng_1 = __webpack_require__(9);
	var angular_confirmation_popover_1 = __webpack_require__(10);
	var core_2 = __webpack_require__(11);
	var controls_1 = __webpack_require__(12);
	var overlay_play_1 = __webpack_require__(13);
	var buffering_1 = __webpack_require__(14);
	//Components
	var admin_component_1 = __webpack_require__(15);
	var app_component_1 = __webpack_require__(22);
	var archivecontainer_component_1 = __webpack_require__(27);
	var archivelist_component_1 = __webpack_require__(30);
	var archiveredirect_component_1 = __webpack_require__(32);
	var articleadminlist_component_1 = __webpack_require__(33);
	var article_component_1 = __webpack_require__(38);
	var articlecontainer_component_1 = __webpack_require__(40);
	var edit_component_1 = __webpack_require__(42);
	var articleeditredirect_component_1 = __webpack_require__(46);
	var articlelist_component_1 = __webpack_require__(47);
	var articleredirect_component_1 = __webpack_require__(49);
	var articleviewredirect_component_1 = __webpack_require__(50);
	var commentlist_component_1 = __webpack_require__(51);
	var commentadminlist_component_1 = __webpack_require__(54);
	var feedback_component_1 = __webpack_require__(56);
	var feedbacklist_component_1 = __webpack_require__(59);
	var feedbackredirect_component_1 = __webpack_require__(61);
	var footer_component_1 = __webpack_require__(62);
	var home_component_1 = __webpack_require__(64);
	var loading_indicator_1 = __webpack_require__(66);
	var login_component_1 = __webpack_require__(68);
	var newaccount_component_1 = __webpack_require__(71);
	var navmenu_component_1 = __webpack_require__(78);
	var ngcarousel_component_1 = __webpack_require__(82);
	var privacy_component_1 = __webpack_require__(84);
	var profile_component_1 = __webpack_require__(86);
	var profileredirect_component_1 = __webpack_require__(88);
	var setting_component_1 = __webpack_require__(89);
	var userdirectory_component_1 = __webpack_require__(92);
	var userlist_component_1 = __webpack_require__(94);
	var videoplayer_component_1 = __webpack_require__(96);
	var forgot_component_1 = __webpack_require__(98);
	//Services
	var ng2_facebook_sdk_1 = __webpack_require__(44);
	var user_service_1 = __webpack_require__(16);
	var comment_service_1 = __webpack_require__(52);
	var article_service_1 = __webpack_require__(28);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(19);
	//Pipes
	var yesNo_pipe_1 = __webpack_require__(101);
	var formatDate_pipe_1 = __webpack_require__(102);
	var phone_pipe_1 = __webpack_require__(104);
	//Resolvers
	var profile_resolve_1 = __webpack_require__(105);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            bootstrap: [app_component_1.AppComponent],
	            declarations: [
	                admin_component_1.AdminComponent,
	                app_component_1.AppComponent,
	                archivecontainer_component_1.ArchiveContainerComponent,
	                archivelist_component_1.ArchiveListComponent,
	                archiveredirect_component_1.ArchiveRedirectComponent,
	                articleadminlist_component_1.ArticleAdminListComponent,
	                article_component_1.ArticleComponent,
	                articlecontainer_component_1.ArticleContainerComponent,
	                edit_component_1.ArticleEditComponent,
	                articleeditredirect_component_1.ArticleEditRedirectComponent,
	                articlelist_component_1.ArticleListComponent,
	                articleredirect_component_1.ArticleRedirectComponent,
	                articleviewredirect_component_1.ArticleViewRedirectComponent,
	                yesNo_pipe_1.BooleanPipe,
	                commentlist_component_1.CommentListComponent,
	                commentadminlist_component_1.CommentAdminListComponent,
	                formatDate_pipe_1.DatePipe,
	                feedback_component_1.FeedbackComponent,
	                feedbacklist_component_1.FeedBackListComponent,
	                feedbackredirect_component_1.FeedbackRedirectComponent,
	                footer_component_1.FooterComponent,
	                forgot_component_1.ForgotComponent,
	                home_component_1.HomeComponent,
	                navmenu_component_1.NavMenuComponent,
	                ngcarousel_component_1.NGCarouselComponent,
	                loading_indicator_1.LoadingIndicator,
	                login_component_1.LoginComponent,
	                newaccount_component_1.NewAccountComponent,
	                privacy_component_1.PrivacyComponent,
	                profile_component_1.ProfileComponent,
	                profileredirect_component_1.ProfileRedirectComponent,
	                setting_component_1.SettingComponent,
	                userdirectory_component_1.UserDirectoryComponent,
	                userlist_component_1.UserListComponent,
	                videoplayer_component_1.VideoPlayerComponent,
	                phone_pipe_1.PhonePipe
	            ],
	            imports: [
	                angular2_universal_1.UniversalModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'home', pathMatch: 'full' },
	                    { path: 'home', component: home_component_1.HomeComponent },
	                    {
	                        path: 'article',
	                        children: [
	                            { path: 'view/:id', component: articlecontainer_component_1.ArticleContainerComponent },
	                            { path: 'edit/:id', component: edit_component_1.ArticleEditComponent },
	                            { path: 'new', component: edit_component_1.ArticleEditComponent }
	                        ]
	                    },
	                    { path: 'view/:id', component: articleviewredirect_component_1.ArticleViewRedirectComponent },
	                    { path: 'archive', component: archivecontainer_component_1.ArchiveContainerComponent },
	                    { path: 'archives', component: archiveredirect_component_1.ArchiveRedirectComponent },
	                    { path: 'create', component: articleredirect_component_1.ArticleRedirectComponent },
	                    { path: 'edit/:id', component: articleeditredirect_component_1.ArticleEditRedirectComponent },
	                    { path: 'admin', component: admin_component_1.AdminComponent },
	                    { path: 'feedback', component: feedback_component_1.FeedbackComponent },
	                    { path: 'login', component: login_component_1.LoginComponent },
	                    { path: 'login/:id', component: login_component_1.LoginComponent },
	                    { path: 'feedbackredirect', component: feedbackredirect_component_1.FeedbackRedirectComponent },
	                    {
	                        path: 'profile/:id', component: profile_component_1.ProfileComponent,
	                        resolve: {
	                            profile: profile_resolve_1.ProfileResolve
	                        }
	                    },
	                    { path: 'profileredirect/:id', component: profileredirect_component_1.ProfileRedirectComponent },
	                    { path: 'privacy', component: privacy_component_1.PrivacyComponent },
	                    { path: 'forgot', component: forgot_component_1.ForgotComponent },
	                    { path: 'newaccount', component: newaccount_component_1.NewAccountComponent },
	                    { path: 'directory', component: userdirectory_component_1.UserDirectoryComponent },
	                    { path: '**', redirectTo: 'home' }
	                ]),
	                primeng_1.CalendarModule,
	                ng2_bootstrap_1.CarouselModule.forRoot(),
	                angular_confirmation_popover_1.ConfirmationPopoverModule.forRoot({
	                    focusButton: 'confirm'
	                }),
	                ng2_bootstrap_1.DatepickerModule.forRoot(),
	                primeng_1.DropdownModule,
	                primeng_1.EditorModule,
	                primeng_1.FileUploadModule,
	                forms_1.FormsModule,
	                primeng_1.GrowlModule,
	                ng2_bootstrap_1.ModalModule.forRoot(),
	                primeng_1.SharedModule,
	                ng2_bootstrap_1.TabsModule.forRoot(),
	                ng2_bootstrap_1.TooltipModule.forRoot(),
	                core_2.VgCoreModule,
	                controls_1.VgControlsModule,
	                overlay_play_1.VgOverlayPlayModule,
	                buffering_1.VgBufferingModule
	            ],
	            providers: [article_service_1.ArticleService,
	                comment_service_1.CommentService,
	                ng2_facebook_sdk_1.FacebookService,
	                image_service_1.ImageService,
	                setting_service_1.SettingService,
	                user_service_1.UserService,
	                profile_resolve_1.ProfileResolve
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("ng2-bootstrap");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("primeng/primeng");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("angular-confirmation-popover");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("videogular2/core");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("videogular2/controls");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("videogular2/overlay-play");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("videogular2/buffering");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var AdminComponent = (function () {
	    function AdminComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.isLoggedIn = false;
	    }
	    AdminComponent.prototype.ngOnDestroy = function () {
	        if (this.userSubscription !== null && this.userSubscription !== undefined) {
	            this.userSubscription.unsubscribe();
	        }
	        if (this.stateSubscription !== null && this.stateSubscription !== undefined) {
	            this.stateSubscription.unsubscribe();
	        }
	    };
	    AdminComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	            if (_this.userService.isLoggedIn) {
	                _this.user = _this.userService.user;
	                _this.stateSubscription = _this.userService.stateChange.subscribe(function (value) {
	                    _this.isLoggedIn = value;
	                });
	                _this.userSubscription = _this.userService.userObjectChange.subscribe(function (value) {
	                    _this.user = value;
	                });
	            }
	        });
	    };
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: 'admin',
	            template: __webpack_require__(21)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
	    ], AdminComponent);
	    return AdminComponent;
	}());
	exports.AdminComponent = AdminComponent;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	var rxjs_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(6);
	var setting_service_1 = __webpack_require__(19);
	var ng2_cookies_1 = __webpack_require__(20);
	var router_2 = __webpack_require__(6);
	var core_2 = __webpack_require__(3);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var UserService = (function () {
	    function UserService(http, router, settingService, activatedRoute) {
	        this.http = http;
	        this.router = router;
	        this.settingService = settingService;
	        this.activatedRoute = activatedRoute;
	        this.userInfoChanged = false;
	        this.isLoggedIn = false;
	        this.userId = 0;
	        this.stateChange = new rxjs_1.Subject();
	        this.userChange = new rxjs_1.Subject();
	        this.userObjectChange = new rxjs_1.Subject();
	        this.userListObjectChange = new rxjs_1.Subject();
	    }
	    UserService.prototype.getUser = function (id) {
	        return this.http.get("/api/User/GetAppUserById?id=" + id)
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.getQuestion = function (username) {
	        return this.http.get("/api/User/GetQuestion?username=" + username)
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.resetPassword = function (user) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/User/ResetPassword', JSON.stringify(user), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    UserService.prototype.checkUsername = function (name, id) {
	        return this.http.get("/api/User/CheckUsername?username=" + name + "&id=" + id)
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.getApplicationUsers = function () {
	        return this.http.get('/api/User/GetApplicationUsers')
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.getApplicationUsersForNotifications = function () {
	        return this.http.get('/api/User/GetApplicationUsersForNotifications')
	            .map(function (result) { return result.json(); });
	    };
	    UserService.prototype.saveProfile = function (user, code) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post("/api/User/UpdateUser?code=" + code, JSON.stringify(user), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    UserService.prototype.saveImageUrl = function (url) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
	        return this.http.post('/api/User/UpdateUserDetail', JSON.stringify(this.user.applicationUserDetail), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    UserService.prototype.logout = function () {
	        this.router.navigate(['/login']);
	        this.user = undefined;
	        ng2_cookies_1.Cookie.delete('AUID');
	        this.change(false);
	    };
	    ;
	    UserService.prototype.login = function (user) {
	        var _this = this;
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var res = rxjs_1.Observable.create(function (obs) {
	            _this.http.post('/api/User/Login', JSON.stringify(user), {
	                headers: headers
	            })
	                .map(function (res) { return res.json(); })
	                .subscribe(function (result) {
	                if (result !== undefined && result.applicationUserId > 0) {
	                    _this.user = result;
	                    _this.userId = result.applicationUserId;
	                    ng2_cookies_1.Cookie.set('AUID', _this.userId.toString(), 30);
	                    _this.change(true);
	                    obs.next(_this.userId);
	                    obs.complete();
	                }
	                else {
	                    _this.router.navigate(['/login']);
	                    _this.user = undefined;
	                    ng2_cookies_1.Cookie.delete('AUID');
	                    _this.change(false);
	                    obs.next(_this.userId);
	                    obs.complete();
	                }
	            });
	        });
	        return res;
	    };
	    ;
	    UserService.prototype.saveLoginTime = function (fromCheck) {
	        var continueSave = false;
	        if (fromCheck) {
	            var d = new Date();
	            d.setDate(d.getDate() - 1);
	            if (new Date(this.user.lastLoggedInDt) < d) {
	                continueSave = true;
	            }
	        }
	        else {
	            continueSave = true;
	        }
	        if (continueSave) {
	            var headers = new http_1.Headers();
	            headers.append('Content-Type', 'application/json');
	            return this.http.post('/api/User/UpdateTime', JSON.stringify(this.user), {
	                headers: headers
	            })
	                .map(function (res) { return res.json(); });
	        }
	        else {
	            return rxjs_1.Observable.empty();
	        }
	    };
	    UserService.prototype.checkLogin = function (url) {
	        var _this = this;
	        var res = rxjs_1.Observable.create(function (obs) {
	            var myCookie = ng2_cookies_1.Cookie.get('AUID');
	            if (myCookie !== null && myCookie !== undefined) {
	                _this.getUser(myCookie)
	                    .subscribe(function (res) {
	                    _this.user = res;
	                    _this.userId = res.applicationUserId;
	                    _this.change(true);
	                    _this.saveLoginTime(true).subscribe(function (x) {
	                        var result = x;
	                    });
	                    obs.next(_this.isLoggedIn);
	                    obs.complete();
	                });
	            }
	            else {
	                obs.next(_this.isLoggedIn);
	                obs.complete();
	                _this.router.navigate(['/login', url.substring(1)]);
	            }
	        });
	        return res;
	    };
	    ;
	    UserService.prototype.change = function (login) {
	        this.isLoggedIn = login;
	        this.userObjectChange.next(this.user);
	        this.userChange.next(this.userId);
	        this.stateChange.next(this.isLoggedIn);
	        this.userListObjectChange.next(this.userList);
	    };
	    __decorate([
	        core_2.ViewChild('loginModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], UserService.prototype, "loginModal", void 0);
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, router_1.Router, setting_service_1.SettingService, router_2.ActivatedRoute])
	    ], UserService);
	    return UserService;
	}());
	exports.UserService = UserService;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var SettingService = (function () {
	    function SettingService(http) {
	        this.http = http;
	    }
	    SettingService.prototype.getSettings = function () {
	        return this.http.get('/api/Setting/GetSettings')
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.getStates = function () {
	        return this.http.get('/api/Setting/GetStates')
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.getCountries = function () {
	        return this.http.get('/api/Setting/GetCountries')
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.getSetting = function (settingId) {
	        return this.http.get("/api/Setting/GetSetting?settingId=" + settingId)
	            .map(function (result) { return result.json(); });
	    };
	    SettingService.prototype.saveSettings = function (setting) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Setting/UpdateSettings', JSON.stringify(setting), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    SettingService.prototype.saveSetting = function (setting) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Setting/UpdateSetting', JSON.stringify(setting), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    SettingService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], SettingService);
	    return SettingService;
	}());
	exports.SettingService = SettingService;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("ng2-cookies/ng2-cookies");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Admin</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <tabset>\r\n                        <tab heading=\"Articles\"><article-admin-list [activeOnly]=\"true\"></article-admin-list></tab>\r\n                        <tab heading=\"Archived Articles\"><article-admin-list [activeOnly]=\"false\"></article-admin-list></tab>\r\n                        <tab heading=\"Users\"><user-list></user-list></tab>\r\n                        <tab heading=\"Comments\"><comment-admin-list></comment-admin-list></tab>\r\n                        <tab *ngIf=\"userService.user.isSystemAdmin\" heading=\"Feedback\"><feedback-list [admin]=\"true\"></feedback-list></tab>\r\n                        <tab *ngIf=\"userService.user.isSystemAdmin\" heading=\"Settings\"><setting></setting></tab>\r\n                    </tabset>\r\n                </div>\r\n                <div class=\"row\">\r\n                    &nbsp;\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var AppComponent = (function () {
	    function AppComponent(viewContainerRef, userService, router) {
	        this.userService = userService;
	        this.router = router;
	        // You need this small hack in order to catch application root view container ref
	        this.viewContainerRef = viewContainerRef;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(23),
	            styles: [__webpack_require__(24)],
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, user_service_1.UserService, router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class=\"row\">\n        <div class='col-sm-12'>\n            <nav-menu></nav-menu>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n        <div class='col-sm-12 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <footer-item></footer-item>\n</div>\n"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(25);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var router_1 = __webpack_require__(6);
	var ArchiveContainerComponent = (function () {
	    function ArchiveContainerComponent(articleService, activatedRoute) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.articles = [];
	    }
	    ArchiveContainerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.articles = [];
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.date = param['date'];
	            _this.title = param['title'];
	        });
	        if (this.date != undefined) {
	            this.articleService.getArchivesByMonth(this.date)
	                .subscribe(function (articles) {
	                _this.articles = articles;
	            });
	        }
	    };
	    ArchiveContainerComponent = __decorate([
	        core_1.Component({
	            selector: 'archive-container',
	            template: __webpack_require__(29),
	            providers: [article_service_1.ArticleService]
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.ActivatedRoute])
	    ], ArchiveContainerComponent);
	    return ArchiveContainerComponent;
	}());
	exports.ArchiveContainerComponent = ArchiveContainerComponent;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var ArticleService = (function () {
	    function ArticleService(http) {
	        this.http = http;
	    }
	    ArticleService.prototype.getArticles = function () {
	        return this.http.get('/api/Article/GetArticles')
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.deleteArticle = function (articleId) {
	        return this.http.get("/api/Article/DeleteArticle?articleId=" + articleId).map(function (res) { return res.json; });
	    };
	    ArticleService.prototype.getArticlesList = function (activeOnly) {
	        return this.http.get("/api/Article/GetArticlesList?activeOnly=" + activeOnly)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArticle = function (articleId) {
	        return this.http.get("/api/Article/GetArticle?articleId=" + articleId)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArchiveList = function () {
	        return this.http.get("/api/Article/GetArchiveList")
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.getArchivesByMonth = function (id) {
	        return this.http.get("/api/Article/GetArchivesByMonth?start=" + id)
	            .map(function (result) { return result.json(); });
	    };
	    ArticleService.prototype.saveArticle = function (article) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Article/UpdateArticle', JSON.stringify(article), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ArticleService.prototype.sendNotification = function (article) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Article/SendNotification', JSON.stringify(article), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ArticleService.prototype.sendSubmittedNotification = function (article) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Article/SendSubmittedNotification', JSON.stringify(article), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ArticleService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], ArticleService);
	    return ArticleService;
	}());
	exports.ArticleService = ArticleService;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <h2>{{title}}</h2>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\" *ngIf=\"articles.length < 1\">\r\n                            <loading-indicator></loading-indicator>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"articles.length > 0\">\r\n                            <div *ngFor=\"let article of articles\">\r\n                                <article-item [article]=\"article\"></article-item>\r\n                                <hr />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var ArchiveListComponent = (function () {
	    function ArchiveListComponent(articleService) {
	        var _this = this;
	        this.articleService = articleService;
	        this.archives = [];
	        this.loaded = false;
	        this.articleService.getArchiveList()
	            .subscribe(function (archives) {
	            _this.archives = archives;
	            _this.loaded = true;
	        });
	    }
	    ArchiveListComponent = __decorate([
	        core_1.Component({
	            selector: 'archive-list',
	            template: __webpack_require__(31),
	            providers: [article_service_1.ArticleService]
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService])
	    ], ArchiveListComponent);
	    return ArchiveListComponent;
	}());
	exports.ArchiveListComponent = ArchiveListComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Archives</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\" *ngIf=\"archives.length < 1 && !loaded\">\r\n            <loading-indicator></loading-indicator>\r\n        </div>\r\n        <div *ngIf=\"loaded && archives.length < 1\">\r\n            There are no archives\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"archives.length > 0\">\r\n            <div class=\"row\" style=\"margin-left: 10px\" *ngFor=\"let archive of archives\">\r\n                <a [routerLink]=\"['/archives', { date: archive.monthStart, title: archive.archiveName } ]\">\r\n                    {{archive.archiveName}}\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArchiveRedirectComponent = (function () {
	    function ArchiveRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.date = param['date'];
	            _this.title = param['title'];
	        });
	        this.router.navigate(["/archive", { date: this.date, title: this.title }]);
	    }
	    ArchiveRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'archiveredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
	    ], ArchiveRedirectComponent);
	    return ArchiveRedirectComponent;
	}());
	exports.ArchiveRedirectComponent = ArchiveRedirectComponent;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var image_service_1 = __webpack_require__(34);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var setting_service_1 = __webpack_require__(19);
	var ArticleAdminListComponent = (function () {
	    function ArticleAdminListComponent(articleService, imageService, settingService) {
	        this.articleService = articleService;
	        this.imageService = imageService;
	        this.settingService = settingService;
	        this.articles = [];
	        this.activeOnly = false;
	        this.title = 'Delete Article';
	        this.message = 'Are you <b>sure</b> you want to delete this article?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.hiddenTitle = 'Show Article';
	        this.hiddenMessage = 'Are you <b>sure</b> you want to make this article visible?';
	        this.newTitle = 'Mark as Read';
	        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
	        this.readTitle = 'Mark as Unread';
	        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
	        this.visibleTitle = 'Hide Article';
	        this.visibleMessage = 'Are you <b>sure</b> you want to hide this article?';
	        this.imagesToDelete = [];
	        this.loaded = false;
	        this.fbT = '';
	    }
	    ArticleAdminListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.articleService.getArticlesList(this.activeOnly)
	            .subscribe(function (articles) {
	            _this.articles = articles;
	            _this.loaded = true;
	        });
	        this.settingService.getSetting(1004).subscribe(function (result) {
	            _this.fbT = result.settingValue;
	        });
	    };
	    ArticleAdminListComponent.prototype.confirmClicked = function (article) {
	        var _this = this;
	        this.imageService.deleteImages(article.articleId)
	            .subscribe(function (result) {
	            _this.imagesToDelete = result;
	            if (_this.imagesToDelete !== undefined) {
	                _this.imagesToDelete.forEach(function (x) {
	                    if (x.externalId !== null) {
	                        hello('facebook')
	                            .api("/" + x.externalId, 'delete', {
	                            token: _this.fbT
	                        })
	                            .then(function (result) {
	                        });
	                    }
	                    if (x.externalAlbumId !== null) {
	                        hello('facebook')
	                            .api("/" + x.externalAlbumId, 'delete', {
	                            token: _this.fbT
	                        })
	                            .then(function (result) {
	                        });
	                    }
	                });
	            }
	            _this.articleService.deleteArticle(article.articleId).subscribe(function (result) {
	                var index = _this.articles.indexOf(article);
	                _this.articles.splice(index, 1);
	                _this.deleteModal.show();
	            });
	        });
	    };
	    ArticleAdminListComponent.prototype.showArticle = function (article) {
	        var _this = this;
	        article.visible = true;
	        article.isNew = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	            article.isNew = true;
	            _this.articleService.sendNotification(article).subscribe(function (x) {
	                article.isNew = false;
	            });
	        });
	    };
	    ArticleAdminListComponent.prototype.hideArticle = function (article) {
	        article.visible = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    ArticleAdminListComponent.prototype.markRead = function (article) {
	        article.isNew = false;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    ArticleAdminListComponent.prototype.markUnRead = function (article) {
	        article.isNew = true;
	        this.articleService.saveArticle(article)
	            .subscribe(function (result) {
	        });
	    };
	    __decorate([
	        core_1.ViewChild('deleteModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ArticleAdminListComponent.prototype, "deleteModal", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArticleAdminListComponent.prototype, "activeOnly", void 0);
	    ArticleAdminListComponent = __decorate([
	        core_1.Component({
	            selector: 'article-admin-list',
	            template: __webpack_require__(37)
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService, image_service_1.ImageService, setting_service_1.SettingService])
	    ], ArticleAdminListComponent);
	    return ArticleAdminListComponent;
	}());
	exports.ArticleAdminListComponent = ArticleAdminListComponent;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	var rxjs_1 = __webpack_require__(18);
	var image_model_1 = __webpack_require__(35);
	var platform_browser_1 = __webpack_require__(36);
	var setting_service_1 = __webpack_require__(19);
	var ImageService = (function () {
	    function ImageService(http, sanitizer, settingService) {
	        var _this = this;
	        this.http = http;
	        this.sanitizer = sanitizer;
	        this.settingService = settingService;
	        this.images = [];
	        this.files = [];
	        this.header = new image_model_1.Image();
	        this.imageUrl = '';
	        this.imagesToDelete = [];
	        this.imageChange = new rxjs_1.Subject();
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.fbT = '';
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	            _this.settingService.getSetting(1002).subscribe(function (result) {
	                _this.fbS = result.settingValue;
	            });
	            _this.settingService.getSetting(1003).subscribe(function (result) {
	                _this.fbP = result.settingValue;
	                hello()
	                    .init({
	                    facebook: _this.fbA
	                }, { scope: 'publish_pages,manage_pages,user_photos' });
	            });
	        });
	    }
	    ImageService.prototype.deleteImages = function (articleId) {
	        return this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.getImagesByArticleId = function (articleId) {
	        var _this = this;
	        this.settingService.getSetting(1004).subscribe(function (result) {
	            _this.fbT = result.settingValue;
	            return _this.http.get("/api/Image/GetImagesByArticleId?articleId=" + articleId)
	                .map(function (res) { return res.json(); }).subscribe(function (result) {
	                _this.images = result;
	                _this.change();
	                _this.images.forEach(function (x) {
	                    var now = new Date();
	                    var pastDate = new Date();
	                    if (x !== undefined) {
	                        pastDate = new Date(x.urlRetrievalDate);
	                        pastDate.setDate(pastDate.getDate() + 7);
	                    }
	                    if (pastDate < now) {
	                        if (x.externalId !== null && x.isVideo) {
	                            hello('facebook')
	                                .api("/" + x.externalId, {
	                                fields: 'source,thumbnails{uri}',
	                                token: _this.fbT
	                            })
	                                .then(function (res) {
	                                x.imageUrl = res.source;
	                                x.thumbnailUrl = res.thumbnails.data[0].uri;
	                                x.urlRetrievalDate = now;
	                                _this.updateImage(x)
	                                    .subscribe(function (r) {
	                                    var index = _this.images.indexOf(x);
	                                    _this.images.splice(index, 1, x);
	                                    _this.change();
	                                });
	                            });
	                        }
	                        else {
	                            if (x.externalId !== null && !x.isVideo) {
	                                hello('facebook')
	                                    .api("/" + x.externalId, {
	                                    fields: 'source,album',
	                                    token: _this.fbT
	                                })
	                                    .then(function (res) {
	                                    x.imageUrl = res.source;
	                                    x.externalAlbumId = res.album.id;
	                                    x.urlRetrievalDate = now;
	                                    _this.updateImage(x)
	                                        .subscribe(function (r) {
	                                        var index = _this.images.indexOf(x);
	                                        _this.images.splice(index, 1, x);
	                                        _this.change();
	                                    });
	                                });
	                            }
	                        }
	                    }
	                });
	            });
	        });
	    };
	    ImageService.prototype.sanitize = function (url) {
	        var sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
	        return sanitizedUrl;
	    };
	    ImageService.prototype.onUpload = function (event, articleId) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.files.push(file);
	            var img = new image_model_1.Image();
	            img.articleId = articleId;
	            img.captionText = file.captionText;
	            img.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	            img.thumbnailUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	            if (file.type.includes('video')) {
	                img.isVideo = true;
	            }
	            else {
	                img.isVideo = false;
	            }
	            this.insertImage(img);
	        }
	        this.msgs = [];
	        this.msgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
	    };
	    ImageService.prototype.onHeaderUpload = function (event) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.header = file;
	            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	        }
	        this.headerMsgs = [];
	        this.headerMsgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
	    };
	    ImageService.prototype.deleteImage = function (imageId) {
	        this.http.get("/api/Image/DeleteImage?imageId=" + imageId).map(function (res) { return res.json; }).subscribe(function (result) {
	        });
	    };
	    ImageService.prototype.insertImage = function (image) {
	        this.images.push(image);
	        this.images = this.images;
	    };
	    ImageService.prototype.saveImage = function (image) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Image/SaveImage', JSON.stringify(image), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.updateImage = function (image) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Image/UpdateImage', JSON.stringify(image), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    ImageService.prototype.change = function () {
	        this.imageChange.next(this.images);
	    };
	    ImageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.DomSanitizer, setting_service_1.SettingService])
	    ], ImageService);
	    return ImageService;
	}());
	exports.ImageService = ImageService;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Image = (function () {
	    function Image() {
	    }
	    Image = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Image);
	    return Image;
	}());
	exports.Image = Image;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("@angular/platform-browser");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"articles.length < 1 && !loaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div *ngIf=\"articles.length < 1 && loaded\">\r\n                    There are no articles here\r\n                    <br /><br />\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"articles.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Un-Read</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-4 border-right\">\r\n                                <h5>Title</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Posted By</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Posted Date</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Visible</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Edit</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center\">\r\n                                <h5>Delete</h5>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let article of articles\">\r\n                            <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{article.isNew | yesNo: 'readUnread'}}\" placement=\"top\">\r\n                                <a *ngIf=\"!article.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"readTitle\"\r\n                                   [message]=\"readMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markUnRead(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-circle-o\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"article.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"newTitle\"\r\n                                   [message]=\"newMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markRead(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-check-circle-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-4 border-right\" tooltip=\"{{article.title}}\" placement=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                {{article.title}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" tooltip=\"{{article.authorName}}\" placement=\"top\">\r\n                                {{article.authorName}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" tooltip=\"{{article.postedDT | formatDate: 'MM/DD/YYYY'}}\" placement=\"top\">\r\n                                {{article.postedDT | formatDate: 'MM/DD/YYYY'}}\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{article.visible | yesNo: 'visible'}}\" placement=\"top\">\r\n                                <a *ngIf=\"article.visible\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"visibleTitle\"\r\n                                   [message]=\"visibleMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"hideArticle(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-up\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"!article.visible\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"hiddenTitle\"\r\n                                   [message]=\"hiddenMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"showArticle(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-down\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\">\r\n                                <a [routerLink]=\"['/edit/' + article.articleId]\">\r\n                                    <i class=\"fa fa-lg fa-pencil-square-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center\">\r\n                                <a role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"title\"\r\n                                   [message]=\"message\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"confirmClicked(article)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-ban\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Article Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Article has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var router_1 = __webpack_require__(6);
	var ArticleComponent = (function () {
	    function ArticleComponent(articleService, activatedRoute) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.id = 0;
	    }
	    ArticleComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        if (this.id > 0) {
	            this.articleService.getArticle(this.id)
	                .subscribe(function (article) {
	                _this.article = article;
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArticleComponent.prototype, "article", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArticleComponent.prototype, "id", void 0);
	    ArticleComponent = __decorate([
	        core_1.Component({
	            selector: 'article-item',
	            template: __webpack_require__(39)
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.ActivatedRoute])
	    ], ArticleComponent);
	    return ArticleComponent;
	}());
	exports.ArticleComponent = ArticleComponent;


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\r\n<a [routerLink]=\"['/view/' + article.articleId]\">\r\n    <h1>{{ article.title }}</h1>\r\n</a>\r\n<h6 class=\"text-primary\">\r\n    - Posted By: {{ article.authorName }} on {{ article.postedDT | formatDate: 'MM/DD/YYYY' }}\r\n</h6>\r\n<div [innerHTML]=\"article.articleContent\"></div>\r\n<div class=\"row\">&nbsp;</div>\r\n<ng-carousel [id]=\"article.articleId\"></ng-carousel>\r\n<div class=\"row\">&nbsp;</div>\r\n<div class=\"row\">\r\n    <comment-list [id]=\"article.articleId\" ></comment-list>\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var article_service_1 = __webpack_require__(28);
	var ArticleContainerComponent = (function () {
	    function ArticleContainerComponent(articleService, activatedRoute, router) {
	        this.articleService = articleService;
	        this.activatedRoute = activatedRoute;
	        this.router = router;
	        this.id = 0;
	        this.article = {};
	    }
	    ArticleContainerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        if (this.id > 0) {
	            this.articleService.getArticle(this.id)
	                .subscribe(function (article) {
	                if (!article.visible) {
	                    _this.router.navigate(['/home']);
	                }
	                _this.article = article;
	            });
	        }
	    };
	    ArticleContainerComponent = __decorate([
	        core_1.Component({
	            selector: 'article-container',
	            template: __webpack_require__(41)
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.ActivatedRoute, router_1.Router])
	    ], ArticleContainerComponent);
	    return ArticleContainerComponent;
	}());
	exports.ArticleContainerComponent = ArticleContainerComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <article-item [article]=\"article\"></article-item>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var user_service_1 = __webpack_require__(16);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(19);
	var rxjs_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var image_model_1 = __webpack_require__(35);
	var articledetail_model_1 = __webpack_require__(43);
	var ng2_facebook_sdk_1 = __webpack_require__(44);
	var ArticleEditComponent = (function () {
	    function ArticleEditComponent(articleService, router, userService, fb, activatedRoute, imageService, settingService) {
	        this.articleService = articleService;
	        this.router = router;
	        this.userService = userService;
	        this.fb = fb;
	        this.activatedRoute = activatedRoute;
	        this.imageService = imageService;
	        this.settingService = settingService;
	        this.id = 0;
	        this.article = new articledetail_model_1.ArticleDetail();
	        //accessToken = '';
	        this.albumId = '';
	        this.imageCount = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.fbT = '';
	        this.currentState = 'Edit';
	        this.isNew = false;
	        this.isLoggedIn = false;
	        this.images = [];
	        this.myImages = [];
	        this.imageDetails = [];
	        this.imagestoDelete = [];
	        this.notifyUsers = [];
	        this.maxDate = new Date();
	    }
	    ArticleEditComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	        this.imageSubscription.unsubscribe();
	    };
	    ArticleEditComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	            _this.settingService.getSetting(1001)
	                .subscribe(function (result) {
	                _this.fbA = result.settingValue;
	                var fbParams = {
	                    appId: _this.fbA,
	                    xfbml: true,
	                    version: 'v2.8'
	                };
	                _this.fb.init(fbParams);
	                hello()
	                    .init({
	                    facebook: _this.fbA
	                }, { scope: 'publish_pages,manage_pages,user_photos' });
	                _this.settingService.getSetting(1002)
	                    .subscribe(function (result) {
	                    _this.fbS = result.settingValue;
	                    _this.settingService.getSetting(1003)
	                        .subscribe(function (result) {
	                        _this.fbP = result.settingValue;
	                        _this.settingService.getSetting(1004)
	                            .subscribe(function (result) {
	                            _this.fbT = result.settingValue;
	                        });
	                    });
	                });
	            });
	            _this.user = _this.userService.user;
	            _this.isLoggedIn = true;
	            _this.userSubscription = _this.userService.userObjectChange.subscribe(function (value) {
	                _this.user = value;
	            });
	            _this.activatedRoute.params.subscribe(function (param) {
	                _this.id = param['id'];
	            });
	            if (_this.id > 0) {
	                _this.articleService.getArticle(_this.id)
	                    .subscribe(function (article) {
	                    _this.article = article;
	                });
	                _this.imageService.getImagesByArticleId(_this.id);
	            }
	            else {
	                _this.imageService.images = [];
	                _this.currentState = 'New';
	                _this.isNew = true;
	                _this.article.authorName = _this.user.firstName + ' ' + _this.user.lastName;
	                _this.article.postedDT = new Date();
	                _this.article.applicationUserId = _this.user.applicationUserId;
	                _this.article.isNew = true;
	                _this.article.title = '';
	                _this.article.articleContent = '';
	            }
	            _this.images = _this.imageService.images;
	            _this.imageSubscription = _this.imageService.imageChange.subscribe(function (value) {
	                _this.images = value;
	                if (_this.images !== null) {
	                    _this.images.forEach(function (image) {
	                        if (image.externalAlbumId !== null) {
	                            _this.albumId = image.externalAlbumId;
	                        }
	                    });
	                }
	            });
	        });
	    };
	    //ngAfterViewInit() {
	    //    if (!this.isLoggedIn) {
	    //        if (this.loginModal !== undefined)
	    //            this.loginModal.show();
	    //    }
	    //}
	    ArticleEditComponent.prototype.dismissModal = function () {
	        this.router.navigate([("/edit/" + this.article.articleId)]);
	    };
	    ArticleEditComponent.prototype.dismissLoginModal = function () {
	        this.router.navigate(['/home']);
	    };
	    ArticleEditComponent.prototype.toggleVisibility = function () {
	        this.article.visible = !this.article.visible;
	    };
	    ArticleEditComponent.prototype.toggleArchived = function () {
	        this.article.archived = !this.article.archived;
	    };
	    ArticleEditComponent.prototype.sendNotification = function () {
	        this.fb.ui({
	            method: 'feed',
	            link: "http://www.myeggettfamily.com/view/" + this.article.articleId,
	            quote: "My Eggett Family has updated the article called: " + this.article.title,
	            from: this.fbP
	        });
	        this.articleService.sendNotification(this.article).subscribe(function (x) {
	        });
	    };
	    ArticleEditComponent.prototype.deleteImage = function (image) {
	        this.imagestoDelete.push(image);
	        var index2 = this.imageService.images.indexOf(image);
	        this.imageService.images.splice(index2, 1);
	        var index = this.myImages.indexOf(image);
	        this.myImages.splice(index, 1);
	        var index1 = this.imageService.files.indexOf(image);
	        this.imageService.files.splice(index1, 1);
	    };
	    ArticleEditComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        this.savingModal.show();
	        hello()
	            .init({
	            facebook: this.fbA
	        }, { scope: 'publish_pages,manage_pages,user_photos' });
	        if (form.imagesToDelete !== undefined) {
	            form.imagesToDelete.forEach(function (x) {
	                if (x.imageId > 0) {
	                    hello('facebook')
	                        .api("/" + x.externalId, 'delete', {
	                        token: _this.fbT
	                    })
	                        .then(function (result) {
	                    });
	                    _this.imageService.deleteImage(x.imageId);
	                }
	            });
	        }
	        this.article.title = form.title;
	        this.article.archived = form.archived;
	        this.article.articleContent = form.articleContent;
	        this.article.visible = form.visible;
	        this.myImages = form.images;
	        this.albumId = form.albumId;
	        this.imageDetails = form.imageDetails;
	        this.imagestoDelete = form.imagestoDelete;
	        this.articleService.saveArticle(this.article)
	            .subscribe(function (res) {
	            _this.article = res;
	            _this.imageDetails.forEach(function (x) {
	                if (x.imageId !== undefined) {
	                    _this.imageService.updateImage(x)
	                        .subscribe(function (r) {
	                    });
	                }
	            });
	        });
	        var res = rxjs_1.Observable.create(function (obs) {
	            if (form.images.length > 0) {
	                if (form.albumId === '') {
	                    hello('facebook')
	                        .api("/" + _this.fbP + "/albums", 'post', {
	                        name: form.title,
	                        token: _this.fbT
	                    })
	                        .then(function (result) {
	                        _this.albumId = result.id;
	                        obs.next(_this.albumId);
	                        obs.complete();
	                    });
	                }
	                else {
	                    _this.albumId = form.albumId;
	                    obs.next(_this.albumId);
	                    obs.complete();
	                }
	            }
	            else {
	                obs.next(_this.albumId);
	                obs.complete();
	            }
	        });
	        res.subscribe(function (x) {
	            var count = 0;
	            if (_this.myImages.length > 0) {
	                var r = rxjs_1.Observable.create(function (observer) {
	                    for (var i = 0; i < _this.myImages.length; i++) {
	                        _this.currentImage = _this.myImages[i];
	                        if (_this.currentImage.type.includes('video')) {
	                            hello('facebook')
	                                .api("/" + _this.fbP + "/videos", 'post', {
	                                file: _this.currentImage,
	                                token: _this.fbT
	                            })
	                                .then(function (result) {
	                                hello('facebook')
	                                    .api("/" + result.id, {
	                                    "fields": 'source',
	                                    token: _this.fbT
	                                })
	                                    .then(function (res) {
	                                    var img = new image_model_1.Image();
	                                    img.articleId = _this.article.articleId;
	                                    img.captionText = _this.currentImage.captionText;
	                                    img.externalAlbumId = _this.albumId;
	                                    img.imageUrl = res.source;
	                                    img.externalId = res.id;
	                                    img.isVideo = true;
	                                    _this.imageService.saveImage(img)
	                                        .subscribe(function (resu) {
	                                        count++;
	                                        if (count >= _this.myImages.length) {
	                                            observer.next(count);
	                                            observer.complete();
	                                        }
	                                    });
	                                });
	                            });
	                        }
	                        else {
	                            hello('facebook')
	                                .api("/" + _this.albumId + "/photos", 'post', {
	                                file: _this.currentImage,
	                                token: _this.fbT
	                            })
	                                .then(function (result) {
	                                hello('facebook')
	                                    .api("/" + result.id, {
	                                    "fields": 'source',
	                                    token: _this.fbT
	                                })
	                                    .then(function (res) {
	                                    var img = new image_model_1.Image();
	                                    img.articleId = _this.article.articleId;
	                                    img.captionText = _this.currentImage.captionText;
	                                    img.externalAlbumId = _this.albumId;
	                                    img.externalId = res.id;
	                                    img.imageUrl = res.source;
	                                    img.isVideo = false;
	                                    _this.imageService.saveImage(img)
	                                        .subscribe(function (resu) {
	                                        count++;
	                                        if (count >= _this.myImages.length) {
	                                            observer.next(count);
	                                            observer.complete();
	                                        }
	                                    });
	                                });
	                            });
	                        }
	                    }
	                });
	                r.subscribe(function (result) {
	                    _this.imageService.images = _this.imageDetails;
	                    _this.imageService.files = [];
	                    _this.imagestoDelete = [];
	                    _this.savingModal.hide();
	                    _this.articleModal.show();
	                    if (_this.article.isNew && _this.article.visible) {
	                        //this.fb.ui({
	                        //    method: 'feed',
	                        //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
	                        //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
	                        //    from: this.fbP
	                        //});
	                        _this.articleService.sendNotification(_this.article)
	                            .subscribe(function (x) {
	                            var blah = x;
	                        });
	                    }
	                    if (_this.article.isNew && !_this.userService.user.isAdmin) {
	                        _this.articleService.sendSubmittedNotification(_this.article)
	                            .subscribe(function (x) {
	                            var blah = x;
	                        });
	                    }
	                });
	            }
	            else {
	                _this.imageService.images = _this.imageDetails;
	                _this.imageService.files = [];
	                _this.imagestoDelete = [];
	                _this.savingModal.hide();
	                _this.articleModal.show();
	                if (_this.article.isNew && _this.article.visible) {
	                    //this.fb.ui({
	                    //    method: 'feed',
	                    //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
	                    //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
	                    //    from: this.fbP
	                    //});
	                    _this.articleService.sendNotification(_this.article)
	                        .subscribe(function (x) {
	                        var blah = x;
	                    });
	                }
	                if (_this.article.isNew && !_this.userService.user.isAdmin) {
	                    _this.articleService.sendSubmittedNotification(_this.article)
	                        .subscribe(function (x) {
	                        var blah = x;
	                    });
	                }
	            }
	        });
	        return false;
	    };
	    __decorate([
	        core_1.ViewChild('articleModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ArticleEditComponent.prototype, "articleModal", void 0);
	    __decorate([
	        core_1.ViewChild('savingModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ArticleEditComponent.prototype, "savingModal", void 0);
	    __decorate([
	        core_1.ViewChild('loginModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ArticleEditComponent.prototype, "loginModal", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArticleEditComponent.prototype, "id", void 0);
	    ArticleEditComponent = __decorate([
	        core_1.Component({
	            selector: 'article-edit',
	            template: __webpack_require__(45)
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.Router, user_service_1.UserService, ng2_facebook_sdk_1.FacebookService, router_1.ActivatedRoute, image_service_1.ImageService, setting_service_1.SettingService])
	    ], ArticleEditComponent);
	    return ArticleEditComponent;
	}());
	exports.ArticleEditComponent = ArticleEditComponent;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ArticleDetail = (function () {
	    function ArticleDetail() {
	    }
	    ArticleDetail = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ArticleDetail);
	    return ArticleDetail;
	}());
	exports.ArticleDetail = ArticleDetail;


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("ng2-facebook-sdk");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>{{currentState}} Article</h2>\r\n                    <button class=\"btn btn-primary\" (click)=\"titleModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Title</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"contentModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Content</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"imageModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Add Images/Videos</button>\r\n                    <button [disabled]=\"imageService.images !== null && imageService.images.length < 1\" class=\"btn btn-primary\" (click)=\"captionModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Edit Images/Videos</button>\r\n                    <button *ngIf=\"(user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"dateModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Change Date</button>\r\n                    <button *ngIf=\"!article.visible && (user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"toggleVisibility()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Make Visible</button>\r\n                    <button *ngIf=\"article.visible && (user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"toggleVisibility()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Make Hidden</button>\r\n                    <button *ngIf=\"!article.archived && (user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"toggleArchived()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Archive</button>\r\n                    <button *ngIf=\"article.archived && (user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"toggleArchived()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Un-Archive</button>\r\n                    <button class=\"btn btn-success\" [disabled]=\"!form.form.valid\" (click)=\"form.ngSubmit.emit()\"><span class=\"glyphicon glyphicon-save\"></span> Save Changes</button>\r\n                    <button *ngIf=\"article.visible && !article.isNew && (user && user.isAdmin)\" class=\"btn btn-primary\" (click)=\"sendNotification()\"><i class=\"fa fa-bullhorn\"></i>&nbsp;Notify Users of Change</button>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value); form.reset()\" enctype=\"multipart/form-data\">\r\n\r\n                        <input type=\"hidden\" name=\"title\" [(ngModel)]=\"article.title\" required />\r\n                        <input type=\"hidden\" name=\"articleContent\" [(ngModel)]=\"article.articleContent\" required />\r\n                        <input type=\"hidden\" name=\"visible\" [(ngModel)]=\"article.visible\" />\r\n                        <input type=\"hidden\" name=\"archived\" [(ngModel)]=\"article.archived\" />\r\n                        <input type=\"hidden\" name=\"images\" [(ngModel)]=\"imageService.files\" />\r\n                        <input type=\"hidden\" name=\"imageDetails\" [(ngModel)]=\"imageService.images\" />\r\n                        <input type=\"hidden\" name=\"albumId\" [(ngModel)]=\"albumId\" />\r\n                        <input type=\"hidden\" name=\"imagesToDelete\" [(ngModel)]=\"imagestoDelete\" />\r\n                        <input type=\"hidden\" name=\"applicationUserId\" [(ngModel)]=\"article.applicationUserId\" />\r\n                        <input type=\"hidden\" name=\"isNew\" [(ngModel)]=\"article.isNew\" />\r\n\r\n                        <div *ngIf=\"article.title === undefined || article.title === ''\" class=\"alert alert-danger\">Title Required</div>\r\n                        <h1>{{ article.title }}</h1>\r\n                        <h6 class=\"text-primary\">\r\n                            - Posted By: {{ article.authorName }} on {{ article.postedDT | formatDate: 'MM/DD/YYYY': !isNew }}\r\n                        </h6>\r\n                        <div *ngIf=\"article.articleContent === undefined || article.articleContent === ''\" class=\"alert alert-danger\">Content Required</div>\r\n                        <div [innerHTML]=\"article.articleContent\"></div>\r\n                        <div class=\"row\">&nbsp;</div>\r\n                        <div class=\"row\" *ngIf=\"imageService.images !== null && imageService.images.length > 0\">\r\n\r\n                            <carousel [interval]=\"5000\" [noWrap]=\"false\">\r\n                                <slide *ngFor=\"let image of imageService.images\" [active]=\"image.isActive\">\r\n\r\n                                    <div *ngIf=\"!image.isVideo\">\r\n                                        <img [src]=\"imageService.sanitize(image.imageUrl)\" class=\"fluid center-block\" height=\"400\">\r\n                                    </div>\r\n                                    <div *ngIf=\"image.isVideo\">\r\n                                        <video-player [image]=\"image\"></video-player>\r\n                                    </div>\r\n                                    <div class=\"carousel-caption alert\" style=\"bottom: -60px\">\r\n                                        <p>{{image.captionText}}</p>\r\n                                    </div>\r\n                                    <div class=\"alert\">\r\n                                        <p>&nbsp;</p>\r\n                                    </div>\r\n                                </slide>\r\n                            </carousel>\r\n                        </div>\r\n                        <div class=\"row\">&nbsp;</div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #loginModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissLoginModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"loginModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You must be logged in and be an administrator to access this page.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #articleModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"articleModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes to article have been saved successfully. Video uploads may take several minutes to process on facebook, and become active on the article.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #savingModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Saving Changes</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes are being saved. Please wait for the save process to complete.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #titleModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"titleModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Title</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <input type=\"text\" [(ngModel)]=\"article.title\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #dateModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dateModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Change Posted Date</h4>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"margin: 0px -6px;\">\r\n                <datepicker [(ngModel)]=\"article.postedDT\" [maxDate]=\"maxDate\" [showWeeks]=\"false\"></datepicker>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #contentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"contentModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Content</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p-editor [(ngModel)]=\"article.articleContent\" [style]=\"{'height':'320px'}\"></p-editor>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #imageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"imageModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Add Images</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p-growl [value]=\"imageService.msgs\"></p-growl>\r\n\r\n                <p-fileUpload name=\"demo[]\" url=\"/image/onUpload\" (onUpload)=\"imageService.onUpload($event, article.articleId)\"\r\n                              multiple=\"multiple\" accept=\"image/*,video/*\" maxFileSize=\"100000000\">\r\n                    <template let-file pTemplate=\"file\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-4\" *ngIf=\"!file.type.includes('video')\">\r\n                                <img [src]=\"imageService.sanitize(file.objectURL.changingThisBreaksApplicationSecurity)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"file.type.includes('video')\">\r\n                                <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\">\r\n                                {{file.size}} bytes\r\n                            </div>\r\n                            <div class=\"col-xs-3\">\r\n                                Caption:<br /> <input type=\"text\" [(ngModel)]=\"file.captionText\" />\r\n                            </div>\r\n                        </div>\r\n                        <br />\r\n                    </template> \r\n                    <template pTemplate type=\"content\">\r\n                        <p *ngIf=\"imageService.files !== undefined && imageService.files.length\">Uploaded and Ready to Submit:</p>\r\n                        <div *ngIf=\"imageService.files !== undefined && imageService.files.length\" style=\"max-height: 400px; overflow-y: auto\">\r\n                            <div *ngFor=\"let file of imageService.files\" style=\"width: 98%\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-4\" *ngIf=\"!file.type.includes('video')\">\r\n                                        <img [src]=\"imageService.sanitize(file.objectURL.changingThisBreaksApplicationSecurity)\" height=\"75\">\r\n                                    </div>\r\n                                    <div class=\"col-xs-4\" *ngIf=\"file.type.includes('video')\">\r\n                                        <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                                    </div>\r\n                                    <div class=\"col-xs-4\">\r\n                                        {{file.size}} bytes\r\n                                    </div>\r\n                                    <div class=\"col-xs-3\">\r\n                                        Caption:<br/> <input type=\"text\" [(ngModel)]=\"file.captionText\"/>\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                            </div>\r\n                        </div>\r\n                    </template>\r\n                </p-fileUpload>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #captionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"captionModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Images</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div *ngIf=\"imageService.images !== undefined && imageService.images.length\" style=\"max-height: 400px; overflow-y: auto\">\r\n                    <div *ngFor=\"let image of imageService.images\" style=\"width: 98%\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-4\" *ngIf=\"!image.isVideo\">\r\n                                <img [src]=\"imageService.sanitize(image.imageUrl)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"image.isVideo && image.thumbnailUrl !== undefined && !image.thumbnailUrl.includes('blob')\">\r\n                                <img [src]=\"imageService.sanitize(image.thumbnailUrl)\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-4\" *ngIf=\"image.isVideo && image.thumbnailUrl !== undefined && image.thumbnailUrl.includes('blob')\">\r\n                                <img src=\"/css/video-player.jpg\" height=\"75\">\r\n                            </div>\r\n                            <div class=\"col-xs-5\">\r\n                                Caption: <input type=\"text\" [(ngModel)]=\"image.captionText\" />\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <button class=\"btn btn-danger\" (click)=\"deleteImage(image)\"><i class=\"fa fa-lg fa-ban\"></i> Delete</button>\r\n                            </div>\r\n                        </div>\r\n                        <br />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleEditRedirectComponent = (function () {
	    function ArticleEditRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        this.router.navigate([("/article/edit/" + this.id)]);
	    }
	    ArticleEditRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'articleeditredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
	    ], ArticleEditRedirectComponent);
	    return ArticleEditRedirectComponent;
	}());
	exports.ArticleEditRedirectComponent = ArticleEditRedirectComponent;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var article_service_1 = __webpack_require__(28);
	var ArticleListComponent = (function () {
	    function ArticleListComponent(articleService) {
	        var _this = this;
	        this.articleService = articleService;
	        this.articles = [];
	        this.articleService.getArticles()
	            .subscribe(function (articles) {
	            _this.articles = articles;
	        });
	    }
	    ArticleListComponent = __decorate([
	        core_1.Component({
	            selector: 'article-list',
	            template: __webpack_require__(48),
	            providers: [article_service_1.ArticleService]
	        }), 
	        __metadata('design:paramtypes', [article_service_1.ArticleService])
	    ], ArticleListComponent);
	    return ArticleListComponent;
	}());
	exports.ArticleListComponent = ArticleListComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "    \r\n<div class=\"col-sm-12\">\r\n    <div class=\"row\" *ngIf=\"articles.length < 1\">\r\n        <loading-indicator></loading-indicator>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"articles.length > 0\">\r\n        <div class=\"row\" *ngFor=\"let article of articles\">\r\n            <article-item [article]=\"article\"></article-item>\r\n            <hr />\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleRedirectComponent = (function () {
	    function ArticleRedirectComponent(router) {
	        this.router = router;
	        this.router.navigate(['/article/new']);
	    }
	    ArticleRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'articleredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], ArticleRedirectComponent);
	    return ArticleRedirectComponent;
	}());
	exports.ArticleRedirectComponent = ArticleRedirectComponent;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ArticleViewRedirectComponent = (function () {
	    function ArticleViewRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        this.router.navigate([("/article/view/" + this.id)]);
	    }
	    ArticleViewRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'articleviewredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
	    ], ArticleViewRedirectComponent);
	    return ArticleViewRedirectComponent;
	}());
	exports.ArticleViewRedirectComponent = ArticleViewRedirectComponent;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var CommentListComponent = (function () {
	    function CommentListComponent(commentService, activatedRoute, userService) {
	        this.commentService = commentService;
	        this.activatedRoute = activatedRoute;
	        this.userService = userService;
	        this.comments = [];
	        this.id = 0;
	        this.isLoggedIn = false;
	        this.comment = {
	            message: 'You must be logged in to comment',
	            articleId: 0,
	            applicationUserId: 0,
	            isAdmin: false
	        };
	    }
	    CommentListComponent.prototype.saveComment = function (form) {
	        var _this = this;
	        this.comment.message = form.message;
	        this.commentService.saveComment(this.comment).subscribe(function (result) {
	            if (result.approved) {
	                _this.commentModal.show();
	            }
	            else {
	                _this.commentNoAdminModal.show();
	            }
	            _this.commentService.getComments(result.articleId).subscribe(function (result) {
	                _this.comments = result;
	                _this.comment.message = 'Enter Comment';
	            });
	        });
	        return false;
	    };
	    CommentListComponent.prototype.ngOnDestroy = function () {
	        this.subscription.unsubscribe();
	        this.userSubscription.unsubscribe();
	    };
	    CommentListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.id === 0 || this.id === undefined) {
	            this.activatedRoute.params.subscribe(function (param) {
	                _this.id = param['id'];
	            });
	        }
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.comment.articleId = this.id;
	        if (this.userService.user !== undefined) {
	            this.comment.applicationUserId = this.userService.user.applicationUserId;
	            this.comment.isAdmin = this.userService.user.isAdmin;
	        }
	        if (this.id > 0) {
	            this.commentService.getComments(this.id)
	                .subscribe(function (comment) {
	                _this.comments = comment;
	            });
	        }
	        if (this.isLoggedIn) {
	            this.comment.message = 'Enter Comment';
	        }
	        this.subscription = this.userService.stateChange.subscribe(function (value) {
	            _this.isLoggedIn = value;
	            _this.comment.message = 'Enter Comment';
	        });
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            if (value !== undefined) {
	                _this.comment.applicationUserId = value.applicationUserId;
	                _this.comment.isAdmin = value.isAdmin;
	            }
	        });
	    };
	    __decorate([
	        core_1.ViewChild('commentNoAdminModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], CommentListComponent.prototype, "commentNoAdminModal", void 0);
	    __decorate([
	        core_1.ViewChild('commentModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], CommentListComponent.prototype, "commentModal", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CommentListComponent.prototype, "id", void 0);
	    CommentListComponent = __decorate([
	        core_1.Component({
	            selector: 'comment-list',
	            template: __webpack_require__(53),
	            providers: [comment_service_1.CommentService]
	        }), 
	        __metadata('design:paramtypes', [comment_service_1.CommentService, router_1.ActivatedRoute, user_service_1.UserService])
	    ], CommentListComponent);
	    return CommentListComponent;
	}());
	exports.CommentListComponent = CommentListComponent;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(17);
	__webpack_require__(18);
	var CommentService = (function () {
	    function CommentService(http) {
	        this.http = http;
	    }
	    CommentService.prototype.getComments = function (articleId) {
	        return this.http.get("/api/Comment/GetComments?articleId=" + articleId)
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.getCommentsAdmin = function () {
	        return this.http.get('/api/Comment/GetCommentsAdmin')
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.getSuggestionViews = function (userId) {
	        return this.http.get("/api/Comment/GetSuggestionViews?userId=" + userId)
	            .map(function (result) { return result.json(); });
	    };
	    CommentService.prototype.saveComment = function (comment) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/SaveComment', JSON.stringify(comment), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.updateComment = function (comment) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/UpdateComment', JSON.stringify(comment), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.deleteComment = function (commentId) {
	        return this.http.get("/api/Comment/DeleteComment?commentId=" + commentId).map(function (res) { return res.json; });
	    };
	    CommentService.prototype.updateSuggestion = function (feedback) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/UpdateSuggestion', JSON.stringify(feedback), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.deleteSuggestion = function (feedbackId) {
	        return this.http.get("/api/Comment/DeleteSuggestion?suggestionId=" + feedbackId).map(function (res) { return res.json; });
	    };
	    CommentService.prototype.getSuggestionTypes = function () {
	        return this.http.get('/api/Comment/GetSuggestionTypes').map(function (res) { return res.json(); });
	    };
	    CommentService.prototype.insertFeedback = function (feedback) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post('/api/Comment/InsertSuggestion', JSON.stringify(feedback), {
	            headers: headers
	        })
	            .map(function (res) { return res.json(); });
	    };
	    CommentService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], CommentService);
	    return CommentService;
	}());
	exports.CommentService = CommentService;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h5 class=\"text-primary\">\r\n            Comments:\r\n        </h5>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"comments.length < 1\" style=\"margin-left: 10px\">\r\n    <div class=\"col-sm-12\">\r\n        <h6>\r\n            No Comments have been posted yet\r\n        </h6>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"comments.length > 0\" style=\"max-height: 300px; overflow: auto; border: 1px solid #121416\">\r\n    <div class=\"col-sm-12\" *ngFor=\"let comment of comments\">\r\n        <h6>\r\n            Posted By: {{ comment.applicationUser.firstName }} {{comment.applicationUser.lastName}} on {{ comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A' }}\r\n        </h6>\r\n        <div style=\"margin-left: 10px\">\r\n            {{comment.commentText}}\r\n        </div>\r\n        <hr />\r\n    </div>\r\n</div>\r\n<div class=\"row\">&nbsp;</div>\r\n<div class=\"col-sm-12\">\r\n    Leave a Comment:\r\n</div>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"saveComment(form.value); form.reset()\">\r\n    <div class=\"col-sm-12 form-group\">\r\n        <textarea [disabled]=\"!isLoggedIn\" placeholder=\"{{comment.message}}\" name=\"message\" ngModel required cols=\"50\" rows=\"3\" style=\"width: 100%\"></textarea>\r\n    </div>\r\n    <div class=\"col-sm-12 form-group\">\r\n        <div class=\"col-sm-2\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!isLoggedIn\" type=\"submit\">\r\n                <span class=\"glyphicon glyphicon-save\"></span> Submit\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div bsModal #commentNoAdminModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"commentNoAdminModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your Comment has been submitted. After it has been approved it will show up on this post.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #commentModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"commentModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your Comment has been submitted. It should show on the article now.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var CommentAdminListComponent = (function () {
	    function CommentAdminListComponent(commentService) {
	        this.commentService = commentService;
	        this.comments = [];
	        this.commentsLoaded = false;
	        this.title = 'Delete Comment';
	        this.message = 'Are you <b>sure</b> you want to delete this comment?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.newTitle = 'Mark as Read';
	        this.newMessage = 'Are you <b>sure</b> you want to mark this item as read?';
	        this.readTitle = 'Mark as Unread';
	        this.readMessage = 'Are you <b>sure</b> you want to mark this item as unread?';
	        this.unApproveTitle = 'Approve Comment';
	        this.unApproveMessage = 'Are you <b>sure</b> you want to approve this comment?';
	        this.approveTitle = 'Un-Approve Comment';
	        this.approveMessage = 'Are you <b>sure</b> you want to un-approve this comment?';
	    }
	    CommentAdminListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.commentService.getCommentsAdmin()
	            .subscribe(function (comments) {
	            _this.comments = comments;
	            _this.commentsLoaded = true;
	        });
	    };
	    CommentAdminListComponent.prototype.confirmClicked = function (comment) {
	        var _this = this;
	        this.commentService.deleteComment(comment.commentId).subscribe(function (result) {
	            var index = _this.comments.indexOf(comment);
	            _this.comments.splice(index, 1);
	            _this.deleteModal.show();
	        });
	    };
	    CommentAdminListComponent.prototype.approveComment = function (comment) {
	        comment.approved = true;
	        comment.isNew = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.unApproveComment = function (comment) {
	        comment.approved = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.markRead = function (comment) {
	        comment.isNew = false;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    CommentAdminListComponent.prototype.markUnRead = function (comment) {
	        comment.isNew = true;
	        this.commentService.updateComment(comment)
	            .subscribe(function (result) {
	        });
	    };
	    __decorate([
	        core_1.ViewChild('deleteModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], CommentAdminListComponent.prototype, "deleteModal", void 0);
	    CommentAdminListComponent = __decorate([
	        core_1.Component({
	            selector: 'comment-admin-list',
	            template: __webpack_require__(55)
	        }), 
	        __metadata('design:paramtypes', [comment_service_1.CommentService])
	    ], CommentAdminListComponent);
	    return CommentAdminListComponent;
	}());
	exports.CommentAdminListComponent = CommentAdminListComponent;


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"comments.length < 1 && !commentsLoaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"comments.length < 1 && commentsLoaded\">\r\n                    <div class=\"col-xs-12\">\r\n                        There are no comments\r\n                        <br /><br />\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"comments.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Un-Read</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Article</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-3 border-right\">\r\n                                <h5>Comment</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Comment By</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-2 border-right\">\r\n                                <h5>Comment Date</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Approved</h5>\r\n                            </th>\r\n                            <th class=\"col-xs-1 text-center border-right\">\r\n                                <h5>Delete</h5>\r\n                            </th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let comment of comments\">\r\n                            <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{comment.isNew | yesNo: 'readUnread'}}\" placement=\"top\">\r\n                                <a *ngIf=\"!comment.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"readTitle\"\r\n                                   [message]=\"readMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markUnRead(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-circle-o\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"comment.isNew\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"newTitle\"\r\n                                   [message]=\"newMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"markRead(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-check-circle-o\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" tooltip=\"{{comment.article.title}}\" placement=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                {{comment.article.title}}\r\n                            </td>\r\n                            <td class=\"col-xs-3 border-right\" tooltip=\"{{comment.commentText}}\" placement=\"top\" style=\"overflow: hidden; white-space: nowrap;\">\r\n                                {{comment.commentText}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" tooltip=\"{{comment.applicationUser.firstName}} {{comment.applicationUser.lastName}}\" placement=\"top\">\r\n                                {{comment.applicationUser.firstName}} {{comment.applicationUser.lastName}}\r\n                            </td>\r\n                            <td class=\"col-xs-2 border-right\" tooltip=\"{{comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A'}}\" placement=\"top\">\r\n                                {{comment.commentDt | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{comment.approved | yesNo: 'approved' }}\" placement=\"top\">\r\n                                <a *ngIf=\"comment.approved\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"approveTitle\"\r\n                                   [message]=\"approveMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"unApproveComment(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-up\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"!comment.approved\" role=\"button\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"unApproveTitle\"\r\n                                   [message]=\"unApproveMessage\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"approveComment(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-thumbs-o-down\"></i>\r\n                                </a>\r\n                            </td>\r\n                            <td class=\"col-xs-1 text-center border-right\">\r\n                                <a role=\"button\" title=\"Delete\"\r\n                                   mwlConfirmationPopover\r\n                                   [title]=\"title\"\r\n                                   [message]=\"message\"\r\n                                   [confirmText]=\"confirmText\"\r\n                                   [cancelText]=\"cancelText\"\r\n                                   [placement]=\"placement\"\r\n                                   (confirm)=\"confirmClicked(comment)\"\r\n                                   confirmButtonType=\"danger\"\r\n                                   cancelButtonType=\"default\"\r\n                                   [appendToBody]=\"true\">\r\n                                    <i class=\"fa fa-lg fa-ban\"></i>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Comment Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Comment has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var comment_service_1 = __webpack_require__(52);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var suggestion_model_1 = __webpack_require__(57);
	var FeedbackComponent = (function () {
	    function FeedbackComponent(userService, router, commentService) {
	        this.userService = userService;
	        this.router = router;
	        this.commentService = commentService;
	        this.isLoggedIn = false;
	        this.suggestion = new suggestion_model_1.Suggestion();
	    }
	    FeedbackComponent.prototype.ngOnDestroy = function () {
	        if (this.userSubscription !== null && this.userSubscription !== undefined) {
	            this.userSubscription.unsubscribe();
	        }
	    };
	    FeedbackComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	            if (_this.userService.isLoggedIn) {
	                _this.user = _this.userService.user;
	                _this.userSubscription = _this.userService.userObjectChange.subscribe(function (value) {
	                    _this.user = value;
	                });
	                if (_this.userService.isLoggedIn) {
	                    _this.commentService.getSuggestionTypes()
	                        .subscribe(function (res) {
	                        _this.types = [];
	                        res.forEach(function (result) {
	                            _this.types.push({ label: result.value, value: result.listEnumId });
	                        });
	                    });
	                    _this.suggestion.typeId = 0;
	                }
	            }
	        });
	    };
	    FeedbackComponent.prototype.saveFeedback = function (form) {
	        var _this = this;
	        this.suggestion.applicationUserId = this.user.applicationUserId;
	        this.suggestion.typeId = form.typeId;
	        this.suggestion.value = form.feedback;
	        this.commentService.insertFeedback(this.suggestion).subscribe(function (res) {
	            _this.feedbackModal.show();
	        });
	        return false;
	    };
	    FeedbackComponent.prototype.dismissModal = function () {
	        this.router.navigate(['/feedbackredirect']);
	    };
	    __decorate([
	        core_1.ViewChild('feedbackModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], FeedbackComponent.prototype, "feedbackModal", void 0);
	    FeedbackComponent = __decorate([
	        core_1.Component({
	            selector: 'feedback',
	            template: __webpack_require__(58)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, comment_service_1.CommentService])
	    ], FeedbackComponent);
	    return FeedbackComponent;
	}());
	exports.FeedbackComponent = FeedbackComponent;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Suggestion = (function () {
	    function Suggestion() {
	    }
	    Suggestion = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Suggestion);
	    return Suggestion;
	}());
	exports.Suggestion = Suggestion;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Feedback</h2>\r\n                </div>\r\n                <div class=\"panel-body\" *ngIf=\"userService.isLoggedIn\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveFeedback(form.value); form.reset()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Name:</h4>\r\n                            </div>\r\n                            <div *ngIf=\"userService.user !== undefined\" class=\"col-sm-9\">\r\n                                <h4>{{userService.user.firstName}} {{userService.user.lastName}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Type:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <select [(ngModel)]=\"suggestion.typeId\" name=\"typeId\" class=\"form-control\" required>\r\n                                    <option *ngFor=\"let type of types\" value=\"{{type.value}}\">\r\n                                        {{type.label}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Feedback:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"text\" name=\"feedback\" [(ngModel)]=\"suggestion.value\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">\r\n                            <span class=\"fa fa-lg fa-save\"></span> Submit Feedback\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"userService.isLoggedIn\">\r\n            <feedback-list [admin]=\"false\"></feedback-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #feedbackModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" (onHide)=\"dismissModal()\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"feedbackModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Feedback Submitted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Your feedback has been submitted. Thank you for your feedback.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var comment_service_1 = __webpack_require__(52);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var user_service_1 = __webpack_require__(16);
	var FeedBackListComponent = (function () {
	    function FeedBackListComponent(commentService, userService) {
	        this.commentService = commentService;
	        this.userService = userService;
	        this.suggestions = [];
	        this.suggestionLoaded = true;
	        this.title = 'Delete Feedback';
	        this.message = 'Are you <b>sure</b> you want to delete this feedback?';
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.progressTitle = 'Mark In progress';
	        this.progressMessage = 'Are you <b>sure</b> you want to mark this as In Progress?';
	        this.completeTitle = 'Mark As Complete';
	        this.completeMessage = 'Are you <b>sure</b> you want to mark this as Complete?';
	        this.isLoggedIn = false;
	        this.userId = 0;
	    }
	    FeedBackListComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    FeedBackListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.isLoggedIn = this.userService.isLoggedIn;
	        this.user = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.user = value;
	        });
	        if (!this.admin) {
	            this.userId = this.user.applicationUserId;
	        }
	        this.refresh();
	    };
	    FeedBackListComponent.prototype.confirmClicked = function (feedback) {
	        var _this = this;
	        this.commentService.deleteSuggestion(feedback.suggestionId).subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1);
	            _this.suggestionLoaded = true;
	            _this.deleteModal.show();
	        });
	    };
	    FeedBackListComponent.prototype.markInProgress = function (feedback) {
	        var _this = this;
	        feedback.statusId = 6;
	        this.commentService.updateSuggestion(feedback)
	            .subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1, result);
	            _this.refresh();
	        });
	    };
	    FeedBackListComponent.prototype.markComplete = function (feedback) {
	        var _this = this;
	        feedback.statusId = 8;
	        this.commentService.updateSuggestion(feedback)
	            .subscribe(function (result) {
	            var index = _this.suggestions.indexOf(feedback);
	            _this.suggestions.splice(index, 1, result);
	            _this.refresh();
	        });
	    };
	    FeedBackListComponent.prototype.refresh = function () {
	        var _this = this;
	        this.commentService.getSuggestionViews(this.userId)
	            .subscribe(function (feedback) {
	            _this.suggestions = feedback;
	            _this.suggestionLoaded = true;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], FeedBackListComponent.prototype, "admin", void 0);
	    __decorate([
	        core_1.ViewChild('deleteModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], FeedBackListComponent.prototype, "deleteModal", void 0);
	    FeedBackListComponent = __decorate([
	        core_1.Component({
	            selector: 'feedback-list',
	            template: __webpack_require__(60)
	        }), 
	        __metadata('design:paramtypes', [comment_service_1.CommentService, user_service_1.UserService])
	    ], FeedBackListComponent);
	    return FeedBackListComponent;
	}());
	exports.FeedBackListComponent = FeedBackListComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"suggestions.length < 1 && !suggestionLoaded\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"suggestions.length < 1 && suggestionLoaded\">\r\n                    <div class=\"col-xs-12\">\r\n                        There is no feedback\r\n                        <br /><br />\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"suggestions.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Status</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\" *ngIf=\"admin\">\r\n                                    <h5>Feedback</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-4 border-right\" *ngIf=\"!admin\">\r\n                                    <h5>Feedback</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Feedback By</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Feedback Date</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Resolution Date</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Type</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\" *ngIf=\"admin\">\r\n                                    <h5>Delete</h5>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let suggestion of suggestions\">\r\n                                <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{suggestion.statusName}}\" placement=\"top\">\r\n                                    <a *ngIf=\"suggestion.statusId === 5 && admin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"progressTitle\"\r\n                                       [message]=\"progressMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"markInProgress(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-battery-empty\"></i>\r\n                                    </a>\r\n                                    <span *ngIf=\"suggestion.statusId === 5 && !admin\"><i class=\"fa fa-lg fa-battery-empty\"></i></span>\r\n                                    <span *ngIf=\"suggestion.statusId === 6 && !admin\"><i class=\"fa fa-lg fa-battery-half\"></i></span>\r\n                                    <a *ngIf=\"suggestion.statusId === 6 && admin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"completeTitle\"\r\n                                       [message]=\"completeMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"markComplete(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-battery-half\"></i>\r\n                                    </a>\r\n                                    <span *ngIf=\"suggestion.statusId === 8\"><i class=\"fa fa-lg fa-battery-full\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\" *ngIf=\"admin\" tooltip=\"{{suggestion.value}}\" placement=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                    {{suggestion.value}}\r\n                                </td>\r\n                                <td class=\"col-xs-4 border-right\" *ngIf=\"!admin\" tooltip=\"{{suggestion.value}}\" placement=\"top\" style=\"overflow: hidden; white-space:nowrap;\">\r\n                                    {{suggestion.value}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\" tooltip=\"{{suggestion.authorName}}\" placement=\"top\" style=\"overflow: hidden\">\r\n                                    {{suggestion.authorName}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\" tooltip=\"{{suggestion.createdDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\" placement=\"top\">\r\n                                    {{suggestion.createdDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                                </td>\r\n                                <td *ngIf=\"suggestion.resolutionDT === undefined\" class=\"col-xs-2 border-right\">\r\n                                    &nbsp;\r\n                                </td>\r\n                                <td *ngIf=\"suggestion.resolutionDT !== undefined\" class=\"col-xs-2 border-right\" tooltip=\"{{suggestion.resolutionDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\" placement=\"top\">\r\n                                    {{suggestion.resolutionDT | formatDate: 'MM/DD/YYYY hh:mm A'}}\r\n                                </td>\r\n                                <td class=\"col-xs-1 border-right\" tooltip=\"{{suggestion.typeName}}\" placement=\"top\">\r\n                                    {{suggestion.typeName}}\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"admin\">\r\n                                    <a role=\"button\" title=\"Delete\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"title\"\r\n                                       [message]=\"message\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"confirmClicked(suggestion)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-ban\"></i>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Feedback Deleted</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Feedback has been deleted successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var FeedbackRedirectComponent = (function () {
	    function FeedbackRedirectComponent(router) {
	        this.router = router;
	        this.router.navigate(['/feedback']);
	    }
	    FeedbackRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'feedbackredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], FeedbackRedirectComponent);
	    return FeedbackRedirectComponent;
	}());
	exports.FeedbackRedirectComponent = FeedbackRedirectComponent;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FooterComponent = (function () {
	    function FooterComponent() {
	        this.year = '';
	        this.build = '';
	        var today = new Date();
	        this.year = today.getFullYear().toString();
	        this.build = '2017.08.01.01';
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer-item',
	            template: __webpack_require__(63)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div class=\"text-center\">\r\n    <hr />\r\n    <a [routerLink]=\"['/privacy']\">Privacy Policy</a> - <i class=\"fa fa-copyright\"></i> {{year}} Dragonmir Development - {{build}}\r\n</div>\r\n<div class=\"row\">\r\n    &nbsp;\r\n</div>"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var setting_service_1 = __webpack_require__(19);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var HomeComponent = (function () {
	    function HomeComponent(settingService, userService, router) {
	        this.settingService = settingService;
	        this.userService = userService;
	        this.router = router;
	        this.imageUrl = '';
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.settingService.getSetting(1)
	            .subscribe(function (x) {
	            _this.imageUrl = x.settingValue;
	        });
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	            if (!_this.userService.isLoggedIn) {
	                _this.router.navigate(['/login']);
	            }
	        });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(65)
	        }), 
	        __metadata('design:paramtypes', [setting_service_1.SettingService, user_service_1.UserService, router_1.Router])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\r\n    <div id=\"wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"siteHeader\">\r\n                    <img src=\"{{imageUrl}}\" height=\"375\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">\r\n                    <article-list></article-list>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <archive-list></archive-list>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var LoadingIndicator = (function () {
	    function LoadingIndicator() {
	    }
	    LoadingIndicator = __decorate([
	        core_1.Component({
	            selector: 'loading-indicator',
	            template: __webpack_require__(67),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LoadingIndicator);
	    return LoadingIndicator;
	}());
	exports.LoadingIndicator = LoadingIndicator;


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"circle\"></div>\r\n<div class=\"circle1\"></div>"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var login_model_1 = __webpack_require__(69);
	var LoginComponent = (function () {
	    function LoginComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.loginInfo = new login_model_1.Login();
	    }
	    LoginComponent.prototype.login = function (form) {
	        var _this = this;
	        this.loginInfo.username = form.username;
	        this.loginInfo.password = form.password;
	        this.userService.login(this.loginInfo)
	            .subscribe(function (res) {
	            if (res !== undefined && res !== null && res > 0) {
	                _this.successModal.show();
	            }
	            else {
	                _this.failureModal.show();
	            }
	        });
	        return false;
	    };
	    LoginComponent.prototype.dismissModal = function () {
	        var url = this.router.url.replace('/login', '');
	        this.userService.saveLoginTime(false).subscribe(function (x) {
	            var res = x;
	        });
	        this.router.navigate([url]);
	    };
	    __decorate([
	        core_1.ViewChild('successModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], LoginComponent.prototype, "successModal", void 0);
	    __decorate([
	        core_1.ViewChild('failureModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], LoginComponent.prototype, "failureModal", void 0);
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            template: __webpack_require__(70)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
	    ], LoginComponent);
	    return LoginComponent;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Login = (function () {
	    function Login() {
	    }
	    Login = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Login);
	    return Login;
	}());
	exports.Login = Login;


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Login</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"login(form.value); form.reset()\">\r\n                       \r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Username:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"text\" name=\"username\" [(ngModel)]=\"loginInfo.username\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Password:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"password\" name=\"password\" [(ngModel)]=\"loginInfo.password\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <h4>\r\n                                    <button class=\"btn btn-primary\" type=\"submit\">\r\n                                        <span class=\"fa fa-lg fa-key\"></span> Login\r\n                                    </button>\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                &nbsp;\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <a [routerLink]=\"['/forgot']\">\r\n                                    <span class=\"fa fa-lg fa-question-circle\"></span> I Forgot My Password\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <a [routerLink]=\"['/newaccount']\">\r\n                                    <span class=\"fa fa-lg fa-plus-circle\"></span> Create Account\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" (onHide)=\"dismissModal()\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"successModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Success</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                You have been logged in successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #failureModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"failureModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Username/Password combination does not match our records. Please try again.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var setting_service_1 = __webpack_require__(19);
	var rxjs_1 = __webpack_require__(18);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var appUser_model_1 = __webpack_require__(72);
	var router_1 = __webpack_require__(6);
	var appchild_model_1 = __webpack_require__(73);
	var image_service_1 = __webpack_require__(34);
	var applicationUserDetail_model_1 = __webpack_require__(74);
	var state_model_1 = __webpack_require__(75);
	var country_model_1 = __webpack_require__(76);
	var NewAccountComponent = (function () {
	    function NewAccountComponent(userService, router, settingService, imageService, activatedRoute) {
	        this.userService = userService;
	        this.router = router;
	        this.settingService = settingService;
	        this.imageService = imageService;
	        this.activatedRoute = activatedRoute;
	        this.user = new appUser_model_1.AppUser();
	        this.maxDate = new Date();
	        this.states = [];
	        this.countries = [];
	        this.code = '';
	        this.fbT = '';
	        this.imageId = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.imageUrl = '';
	        this.success = false;
	    }
	    NewAccountComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.user.applicationUserDetail = new applicationUserDetail_model_1.ApplicationUserDetail();
	        this.user.applicationUserDetail.state = new state_model_1.State();
	        this.user.applicationUserDetail.state.country = new country_model_1.Country();
	        this.user.appChild = new Array();
	        this.settingService.getCountries().subscribe(function (x) {
	            _this.countries = x;
	        });
	        this.settingService.getStates().subscribe(function (x) {
	            _this.states = x;
	        });
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	        });
	        this.settingService.getSetting(1002).subscribe(function (result) {
	            _this.fbS = result.settingValue;
	        });
	        this.settingService.getSetting(1003).subscribe(function (result) {
	            _this.fbP = result.settingValue;
	        });
	        hello()
	            .init({
	            facebook: this.fbA
	        }, { scope: 'publish_pages,manage_pages,user_photos' });
	    };
	    NewAccountComponent.prototype.checkUsername = function (name, id) {
	        var _this = this;
	        this.userService.checkUsername(name, id).subscribe(function (x) {
	            var result = x;
	            if (result) {
	                _this.usernameModal.show();
	                _this.userService.user.username = '';
	            }
	            return result;
	        });
	    };
	    NewAccountComponent.prototype.addChild = function () {
	        var child = new appchild_model_1.AppChild();
	        this.user.appChild.push(child);
	    };
	    NewAccountComponent.prototype.confirmClicked = function (child) {
	        var index = this.user.appChild.indexOf(child);
	        if (index !== -1) {
	            this.user.appChild.splice(index, 1);
	        }
	    };
	    NewAccountComponent.prototype.onHeaderUpload = function (event) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.image = file;
	            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	        }
	    };
	    NewAccountComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        var url;
	        if (this.imageUrl !== '') {
	            this.doSaveProfile('');
	            var result = rxjs_1.Observable.create(function (obs) {
	                _this.settingService.getSetting(1004).subscribe(function (result) {
	                    _this.fbT = result.settingValue;
	                    hello('facebook')
	                        .api('/159267017952244/photos', 'post', {
	                        file: _this.image,
	                        token: _this.fbT
	                    })
	                        .then(function (result) {
	                        _this.imageId = result.id;
	                        hello('facebook')
	                            .api('myeggettfamilypage/albums', {
	                            "fields": 'photos{source}',
	                            token: _this.fbT
	                        })
	                            .then(function (res) {
	                            res.data.forEach(function (x) {
	                                if (x.id === '159267017952244') {
	                                    x.photos.data.forEach(function (y) {
	                                        if (y.id === _this.imageId) {
	                                            url = _this.imageService.sanitize(y.source);
	                                            _this.doSaveProfile(url).subscribe(function (x) {
	                                                obs.next(url);
	                                                obs.complete;
	                                            });
	                                        }
	                                    });
	                                }
	                            });
	                        });
	                    });
	                });
	            });
	            result.subscribe(function (x) {
	                if (_this.success) {
	                    _this.profileModal.show();
	                }
	                else {
	                    _this.failModal.show();
	                }
	            });
	        }
	        else {
	            this.doSaveProfile('').subscribe(function (x) {
	                if (_this.success) {
	                    _this.profileModal.show();
	                }
	                else {
	                    _this.failModal.show();
	                }
	            });
	        }
	        return false;
	    };
	    NewAccountComponent.prototype.dismissModal = function () {
	        this.router.navigate(['/login']);
	    };
	    NewAccountComponent.prototype.doSaveProfile = function (url) {
	        var _this = this;
	        if (url !== '') {
	            this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
	        }
	        var result = rxjs_1.Observable.create(function (obs) {
	            _this.userService.saveProfile(_this.user, _this.code).subscribe(function (res) {
	                _this.user = res;
	                if (_this.user.applicationUserId > 0) {
	                    _this.success = true;
	                }
	                if (_this.user.applicationUserDetail.birthday !== null && _this.user.applicationUserDetail.birthday !== undefined) {
	                    _this.user.applicationUserDetail.birthday = new Date(_this.user.applicationUserDetail.birthday);
	                }
	                if (_this.user.applicationUserDetail.spouseBirthday !== null && _this.user.applicationUserDetail.spouseBirthday !== undefined) {
	                    _this.user.applicationUserDetail.spouseBirthday = new Date(_this.user.applicationUserDetail.spouseBirthday);
	                }
	                _this.user.appChild.forEach(function (x) {
	                    if (x.birthday !== undefined && x.birthday !== null) {
	                        x.birthday = new Date(x.birthday);
	                    }
	                });
	                obs.next(_this.user);
	                obs.complete;
	            });
	        });
	        return result;
	    };
	    __decorate([
	        core_1.ViewChild('profileModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], NewAccountComponent.prototype, "profileModal", void 0);
	    __decorate([
	        core_1.ViewChild('loginModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], NewAccountComponent.prototype, "loginModal", void 0);
	    __decorate([
	        core_1.ViewChild('failModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], NewAccountComponent.prototype, "failModal", void 0);
	    __decorate([
	        core_1.ViewChild('usernameModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], NewAccountComponent.prototype, "usernameModal", void 0);
	    NewAccountComponent = __decorate([
	        core_1.Component({
	            selector: 'newaccount',
	            template: __webpack_require__(77)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, setting_service_1.SettingService, image_service_1.ImageService, router_1.ActivatedRoute])
	    ], NewAccountComponent);
	    return NewAccountComponent;
	}());
	exports.NewAccountComponent = NewAccountComponent;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppUser = (function () {
	    function AppUser() {
	    }
	    AppUser = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppUser);
	    return AppUser;
	}());
	exports.AppUser = AppUser;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppChild = (function () {
	    function AppChild() {
	    }
	    AppChild = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppChild);
	    return AppChild;
	}());
	exports.AppChild = AppChild;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var ApplicationUserDetail = (function () {
	    function ApplicationUserDetail() {
	    }
	    ApplicationUserDetail = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ApplicationUserDetail);
	    return ApplicationUserDetail;
	}());
	exports.ApplicationUserDetail = ApplicationUserDetail;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var State = (function () {
	    function State() {
	    }
	    State = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], State);
	    return State;
	}());
	exports.State = State;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Country = (function () {
	    function Country() {
	    }
	    Country = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Country);
	    return Country;
	}());
	exports.Country = Country;


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>New Account</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value); form.reset()\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-10\"></div>\r\n                            <div class=\"col=sm-2\">\r\n                                <a class=\"btn btn-warning\" [routerLink]=\"['/home']\">\r\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Cancel\r\n                                </a>\r\n                                <button class=\"btn btn-primary\" type=\"submit\">\r\n                                    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Submit\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br /><br />\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Code:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input class=\"form-control\" name=\"code\" type=\"text\" [(ngModel)]=\"code\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>First Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input class=\"form-control\" name=\"firstName\" type=\"text\" [(ngModel)]=\"user.firstName\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Middle Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"middleName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.middleName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Last Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"lastName\" type=\"text\" [(ngModel)]=\"user.lastName\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Birthday:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <p-calendar  \r\n                                            [showIcon]=\"true\" \r\n                                            name=\"birthday\" \r\n                                            [(ngModel)]=\"user.applicationUserDetail.birthday\" \r\n                                            yearRange=\"1900:2200\" \r\n                                            [maxDate]=\"maxDate\"\r\n                                            hourFormat=\"12\"\r\n                                            >\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Cell Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"cellPhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.cellPhone\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Home Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"homePhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.homePhone\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Email:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"emailAddress\" type=\"text\" [(ngModel)]=\"user.emailAddress\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Street Address:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"streetAddress\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.streetAddress\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>City:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"city\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.city\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>State:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <select  [(ngModel)]=\"user.applicationUserDetail.stateId\" name=\"stateId\" class=\"form-control\" required>\r\n                                    <option *ngFor=\"let state of states\" value=\"{{state.stateId}}\">\r\n                                        {{state.stateName}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Zip Code:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"zipCode\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.zipCode\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse First Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"spouseFirstName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseFirstName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Middle Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"spouseMiddleName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseMiddleName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Last Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"spouseLastName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseLastName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Birthday:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <p-calendar \r\n                                            [showIcon]=\"true\"\r\n                                            name=\"spouseBirthday\"\r\n                                            [(ngModel)]=\"user.applicationUserDetail.spouseBirthday\"\r\n                                            yearRange=\"1900:2200\"\r\n                                            [maxDate]=\"maxDate\"\r\n                                            hourFormat=\"12\">\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Cell Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <input  class=\"form-control\" name=\"spouseCellPhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.spouseCellPhone\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Username:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input  class=\"form-control\" name=\"username\" type=\"text\" [(ngModel)]=\"user.username\" (blur)=\"checkUsername(user.username, user.applicationUserId)\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Password:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" name=\"password\" type=\"password\" [(ngModel)]=\"user.password\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Secret Question:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input  class=\"form-control\" name=\"secretQuestion\" type=\"text\" [(ngModel)]=\"user.secretQuestion\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Secret Answer:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input  class=\"form-control\" name=\"secretAnswer\" type=\"text\" [(ngModel)]=\"user.secretAnswer\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Receive Notifications:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                    <input  class=\"form-control\" name=\"receiveNotifications\" type=\"checkbox\" [(ngModel)]=\"user.receiveNotifications\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h4>Household Picture:</h4>\r\n\r\n                        <p-fileUpload  name=\"demo[]\" url=\"~/upload\" (onUpload)=\"onHeaderUpload($event)\"\r\n                                      accept=\"image/*\" auto=\"auto\" maxFileSize=\"4000000\">\r\n                        </p-fileUpload>\r\n                        <div style=\"max-height: 505px; max-width: 505px\">\r\n                            <img [src]=\"imageService.sanitize(imageUrl)\" style=\"max-height:500px; max-width: 500px\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"col-sm-10\">\r\n                                <h4>Children:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-1 text-right\">\r\n                                <button  class=\"btn btn-primary\" (click)=\"addChild()\" type=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-plus\"></span> Add Child\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\"><br /></div>\r\n                        <div class=\"col-sm-12\">\r\n                            <table class=\"table table-striped table-fixed\">\r\n                                <thead>\r\n                                    <tr class=\"col-sm-12\">\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>First Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-2 border-right\">\r\n                                            <h5>Middle Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>Last Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>Birthday</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-1 border-right text-center\">\r\n                                            <h5 >Delete</h5>\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr class=\"col-sm-12\" *ngFor=\"let child of user.appChild; let idx = index\">\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <input  class=\"form-control\" name=\"childFirstName{{idx}}\" type=\"text\" [(ngModel)]=\"child.firstName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-2 border-right\">\r\n                                            <input  class=\"form-control\" name=\"childMiddleName{{idx}}\" type=\"text\" [(ngModel)]=\"child.middleName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <input  class=\"form-control\" name=\"childLastName{{idx}}\" type=\"text\" [(ngModel)]=\"child.lastName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <p-calendar  [showIcon]=\"true\"\r\n                                                        name=\"childBirthday{{idx}}\"\r\n                                                        [(ngModel)]=\"child.birthday\"\r\n                                                        yearRange=\"1900:2200\"\r\n                                                        [maxDate]=\"maxDate\"\r\n                                                        hourFormat=\"12\">\r\n                                            </p-calendar>\r\n                                        </td>\r\n                                        <td class=\"col-xs-1 border-right text-center\">\r\n                                            <a  role=\"button\"\r\n                                               mwlConfirmationPopover\r\n                                               title=\"Delete Child\"\r\n                                               message=\"Are you sure you want to delete this child from the list?\"\r\n                                               confirmText=\"Yes\"\r\n                                               cancelText=\"No\"\r\n                                               placement=\"top\"\r\n                                               (confirm)=\"confirmClicked(child)\"\r\n                                               confirmButtonType=\"danger\"\r\n                                               cancelButtonType=\"default\"\r\n                                               [appendToBody]=\"true\">\r\n                                                <i class=\"fa fa-lg fa-ban\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #profileModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" (onHide)=\"dismissModal()\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"profileModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Account Created Successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #failModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"failModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Code does not match. Please try again.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #usernameModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"usernameModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Username Already Taken</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                This username is already taken by another user. Please use a different one.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	    }
	    NavMenuComponent.prototype.ngOnInit = function () {
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	        });
	    };
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-menu',
	            template: __webpack_require__(79),
	            styles: [__webpack_require__(80)]
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\r\n<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"border-bottom: 1px solid white\" role=\"navigation\">\r\n    <div class='navbar-header'>\r\n        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n            <span class='sr-only'>Toggle navigation</span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n            <span class='icon-bar'></span>\r\n        </button>\r\n        <a class='navbar-brand' [routerLink]=\"['/home']\">Eggett Family Blog</a>\r\n    </div>\r\n    <div class='navbar-collapse collapse navbar-right'>\r\n        <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n                <a [routerLink]=\"['/home']\">\r\n                    <span class='fa fa-lg fa-home'></span> Home\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/create']\">\r\n                    <span class='fa fa-file-text-o'></span> Submit\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/feedback']\">\r\n                    <span class='fa fa-lg fa-commenting'></span> Feedback\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/directory']\">\r\n                    <span class='fa fa-lg fa-address-book-o'></span> Directory\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn && userService.user != null && userService.user.isAdmin\">\r\n                <a [routerLink]=\"['/admin']\">\r\n                    <span class='fa fa-lg fa-empire'></span> Admin\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\">\r\n                <a [routerLink]=\"['/profileredirect/' + userService.user.applicationUserId]\">\r\n                    <span class='fa fa-user-o'></span> Profile - {{userService.user.firstName}}\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"userService.isLoggedIn\" style=\"cursor: pointer\">\r\n                <a (click)=\"userService.logout()\">\r\n                    <span class='fa fa-lg fa-unlock-alt'></span> Logout\r\n                </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\" *ngIf=\"!userService.isLoggedIn\" style=\"cursor: pointer\">\r\n                <a [routerLink]=\"['/login']\">\r\n                    <span class='fa fa-lg fa-lock'></span> Login\r\n                </a>\r\n            </li>\r\n            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(81);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n\n", ""]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var router_1 = __webpack_require__(6);
	var NGCarouselComponent = (function () {
	    function NGCarouselComponent(imageService, activatedRoute) {
	        this.imageService = imageService;
	        this.activatedRoute = activatedRoute;
	        this.images = [];
	        this.id = 0;
	        this.imagesLoaded = false;
	    }
	    NGCarouselComponent.prototype.ngOnDestroy = function () {
	        this.imageSubscription.unsubscribe();
	    };
	    NGCarouselComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.id == undefined) {
	            this.activatedRoute.params.subscribe(function (param) {
	                _this.id = param['id'];
	            });
	        }
	        if (this.id > 0) {
	            this.imageService.getImagesByArticleId(this.id);
	            this.imagesLoaded = true;
	        }
	        this.images = this.imageService.images;
	        this.imageSubscription = this.imageService.imageChange.subscribe(function (value) {
	            _this.images = value;
	            _this.imagesLoaded = true;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NGCarouselComponent.prototype, "id", void 0);
	    NGCarouselComponent = __decorate([
	        core_1.Component({
	            selector: 'ng-carousel',
	            template: __webpack_require__(83),
	            providers: [image_service_1.ImageService]
	        }), 
	        __metadata('design:paramtypes', [image_service_1.ImageService, router_1.ActivatedRoute])
	    ], NGCarouselComponent);
	    return NGCarouselComponent;
	}());
	exports.NGCarouselComponent = NGCarouselComponent;


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" *ngIf=\"imagesLoaded == false\">\r\n    <loading-indicator></loading-indicator>\r\n</div>\r\n<div class=\"row\" *ngIf=\"imageService.images.length > 0\">\r\n    <carousel [interval]=\"5000\" [noWrap]=\"false\">\r\n        <slide *ngFor=\"let image of imageService.images\" [active]=\"image.isActive\">\r\n            \r\n            <div *ngIf=\"!image.isVideo\">\r\n                <img [src]=\"imageService.sanitize(image.imageUrl)\" class=\"fluid center-block\" height=\"400\">    \r\n            </div>\r\n            <div *ngIf=\"image.isVideo\">\r\n                <video-player [image]=\"image\"></video-player>\r\n            </div>\r\n            <div class=\"carousel-caption alert\" style=\"bottom: -60px\">\r\n                <p>{{image.captionText}}</p>\r\n            </div>\r\n            <div class=\"alert\">\r\n                <p>&nbsp;</p>\r\n            </div>\r\n        </slide>\r\n    </carousel>\r\n</div>\r\n"

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var PrivacyComponent = (function () {
	    function PrivacyComponent() {
	    }
	    PrivacyComponent = __decorate([
	        core_1.Component({
	            selector: 'privacy',
	            template: __webpack_require__(85)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PrivacyComponent);
	    return PrivacyComponent;
	}());
	exports.PrivacyComponent = PrivacyComponent;


/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <span>\r\n                    <p class=\"ql-align-center\"><strong>Privacy Policy</strong></p><p><br></p><p>Protecting your private information is our priority. This Statement of Privacy applies to the http://www.MyEggettFamily.com and Dragonmir Development and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Dragonmir Development include http://www.MyEggettFamily.com, and My Eggett Family. The Dragonmir Development website is a news and information site. By using the Dragonmir Development website, you consent to the data practices described in this statement.</p><p><br></p><p><strong>Collection of your Personal Information</strong></p><p>Dragonmir Development may collect personally identifiable information, such as your name. We may gather additional personal or non-personal information in the future.</p><p><br></p><p>Information about your computer hardware and software may be automatically collected by Dragonmir Development. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Dragonmir Development website.</p><p><br></p><p>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Dragonmir Development's public message boards, this information may be collected and used by others.</p><p><br></p><p>Dragonmir Development encourages you to review the privacy statements of websites you choose to link to from Dragonmir Development so that you can understand how those websites collect, use and share your information. Dragonmir Development is not responsible for the privacy statements or other content on websites outside of the Dragonmir Development website.</p><p><br></p><p><strong>Use of your Personal Information </strong></p><p>Dragonmir Development collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p><p><br></p><p>Dragonmir Development may also use your personally identifiable information to inform you of other products or services available from Dragonmir Development and its affiliates. Dragonmir Development may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.</p><p><br></p><p>Dragonmir Development does not sell, rent or lease its customer lists to third parties.</p><p><br></p><p>Dragonmir Development may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Dragonmir Development, and they are required to maintain the confidentiality of your information.</p><p><br></p><p>Dragonmir Development will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Dragonmir Development or the site; (b) protect and defend the rights or property of Dragonmir Development; and, (c) act under exigent circumstances to protect the personal safety of users of Dragonmir Development, or the public.</p><p><br></p><p><strong>Security of your Personal Information</strong></p><p><br></p><p><br></p><p>Dragonmir Development secures your personal information from unauthorized access, use or disclosure.</p><p><br></p><p><br></p><p><strong>Children Under Thirteen</strong></p><p>Dragonmir Development does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p><p><br></p><p><strong>Disconnecting your Dragonmir Development Account from Third Party Websites</strong></p><p>You will be able to connect your Dragonmir Development account to third party accounts. BY CONNECTING YOUR DRAGONMIR DEVELOPMENT ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED INTHIS MANNER, DO NOT USE THE THIS FEATURE. You may disconnect your account from a third party account at any time. Users can deny access to my site from their Facebook account..</p><p><br></p><p><strong>Opt-Out &amp; Unsubscribe</strong></p><p>We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from Dragonmir Development by changing your preference form your profile.</p><p><br></p><p><strong>Changes to this Statement</strong></p><p>Dragonmir Development will occasionally update this Statement of Privacy to reflect company and customer feedback. Dragonmir Development encourages you to periodically review this Statement to be informed of how Dragonmir Development is protecting your information.</p><p><br></p><p>Effective as of December 14, 2016</p>\r\n                </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var setting_service_1 = __webpack_require__(19);
	var rxjs_1 = __webpack_require__(18);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var appUser_model_1 = __webpack_require__(72);
	var router_1 = __webpack_require__(6);
	var appchild_model_1 = __webpack_require__(73);
	var image_service_1 = __webpack_require__(34);
	var ProfileComponent = (function () {
	    function ProfileComponent(userService, router, settingService, imageService, activatedRoute) {
	        this.userService = userService;
	        this.router = router;
	        this.settingService = settingService;
	        this.imageService = imageService;
	        this.activatedRoute = activatedRoute;
	        this.id = 0;
	        this.user = new appUser_model_1.AppUser();
	        this.maxDate = new Date();
	        this.states = [];
	        this.countries = [];
	        this.originalUser = new appUser_model_1.AppUser();
	        this.fbT = '';
	        this.imageId = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.imageUrl = '';
	        this.success = false;
	    }
	    ProfileComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.checkLogin(window.location.pathname)
	            .subscribe(function (res) {
	            if (_this.userService.isLoggedIn) {
	                _this.user = _this.activatedRoute.snapshot.data['profile'];
	                if (_this.user.applicationUserDetail.birthday !== null && _this.user.applicationUserDetail.birthday !== undefined) {
	                    _this.user.applicationUserDetail.birthday = new Date(_this.user.applicationUserDetail.birthday);
	                }
	                if (_this.user.applicationUserDetail.spouseBirthday !== null && _this.user.applicationUserDetail.spouseBirthday !== undefined) {
	                    _this.user.applicationUserDetail.spouseBirthday = new Date(_this.user.applicationUserDetail.spouseBirthday);
	                }
	                _this.user.appChild.forEach(function (x) {
	                    if (x.birthday !== undefined && x.birthday !== null) {
	                        x.birthday = new Date(x.birthday);
	                    }
	                });
	                _this.settingService.getCountries().subscribe(function (x) {
	                    _this.countries = x;
	                });
	                _this.settingService.getStates().subscribe(function (x) {
	                    _this.states = x;
	                });
	                _this.settingService.getSetting(1001).subscribe(function (result) {
	                    _this.fbA = result.settingValue;
	                });
	                _this.settingService.getSetting(1002).subscribe(function (result) {
	                    _this.fbS = result.settingValue;
	                });
	                _this.settingService.getSetting(1003).subscribe(function (result) {
	                    _this.fbP = result.settingValue;
	                });
	                hello()
	                    .init({
	                    facebook: _this.fbA
	                }, { scope: 'publish_pages,manage_pages,user_photos' });
	            }
	        });
	    };
	    ProfileComponent.prototype.checkUsername = function (name, id) {
	        var _this = this;
	        this.userService.checkUsername(name, id).subscribe(function (x) {
	            var result = x;
	            if (result) {
	                _this.usernameModal.show();
	                _this.userService.user.username = '';
	            }
	            return result;
	        });
	    };
	    ProfileComponent.prototype.addChild = function () {
	        var child = new appchild_model_1.AppChild();
	        this.user.appChild.push(child);
	    };
	    ProfileComponent.prototype.confirmClicked = function (child) {
	        var index = this.user.appChild.indexOf(child);
	        if (index !== -1) {
	            this.user.appChild.splice(index, 1);
	        }
	    };
	    ProfileComponent.prototype.toggleEdit = function (editMode) {
	        this.editMode = editMode;
	        if (editMode) {
	            Object.assign(this.originalUser, this.user);
	        }
	        else {
	            Object.assign(this.user, this.originalUser);
	            this.image = {};
	            this.imageUrl = '';
	        }
	    };
	    ProfileComponent.prototype.onHeaderUpload = function (event) {
	        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
	            var file = _a[_i];
	            this.image = file;
	            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
	        }
	    };
	    ProfileComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        var url;
	        if (this.imageUrl !== '') {
	            this.doSaveProfile('');
	            var result = rxjs_1.Observable.create(function (obs) {
	                _this.settingService.getSetting(1004).subscribe(function (result) {
	                    _this.fbT = result.settingValue;
	                    hello('facebook')
	                        .api('/159267017952244/photos', 'post', {
	                        file: _this.image,
	                        token: _this.fbT
	                    })
	                        .then(function (result) {
	                        _this.imageId = result.id;
	                        hello('facebook')
	                            .api('myeggettfamilypage/albums', {
	                            "fields": 'photos{source}',
	                            token: _this.fbT
	                        })
	                            .then(function (res) {
	                            res.data.forEach(function (x) {
	                                if (x.id === '159267017952244') {
	                                    x.photos.data.forEach(function (y) {
	                                        if (y.id === _this.imageId) {
	                                            url = _this.imageService.sanitize(y.source);
	                                            _this.doSaveProfile(url).subscribe(function (x) {
	                                                obs.next(url);
	                                                obs.complete;
	                                            });
	                                        }
	                                    });
	                                }
	                            });
	                        });
	                    });
	                });
	            });
	            result.subscribe(function (x) {
	                if (_this.success) {
	                    _this.profileModal.show();
	                    _this.editMode = false;
	                }
	                //else {
	                //    this.failModal.show();
	                //}
	            });
	        }
	        else {
	            this.doSaveProfile('').subscribe(function (x) {
	                if (_this.success) {
	                    _this.profileModal.show();
	                    _this.editMode = false;
	                }
	                //else {
	                //    this.failModal.show();
	                //}
	            });
	        }
	        return false;
	    };
	    //saveProfile(form: any) {
	    //    var url;
	    //    if (this.imageUrl !== '') {
	    //        this.doSaveProfile('');
	    //        var result = Observable.create(obs => {
	    //            this.settingService.getSetting(1004).subscribe(result => {
	    //                this.fbT = result.settingValue;
	    //                hello('facebook')
	    //                    .api('/159267017952244/photos',
	    //                    'post',
	    //                    {
	    //                        file: this.image,
	    //                        token: this.fbT
	    //                    })
	    //                    .then(result => {
	    //                        this.imageId = result.id;
	    //                        hello('facebook')
	    //                            .api('myeggettfamilypage/albums',
	    //                            {
	    //                                "fields": 'photos{source}',
	    //                                token: this.fbT
	    //                            }
	    //                            )
	    //                            .then(res => {
	    //                                res.data.forEach(x => {
	    //                                    if (x.id === '159267017952244') {
	    //                                        x.photos.data.forEach(y => {
	    //                                            if (y.id === this.imageId) {
	    //                                                url = this.imageService.sanitize(y.source);
	    //                                                this.doSaveProfile(url);
	    //                                                obs.next(url);
	    //                                                obs.complete;
	    //                                            }
	    //                                        });
	    //                                    }
	    //                                });
	    //                            });
	    //                    });
	    //            });
	    //        });
	    //        result.subscribe(x => {
	    //            this.profileModal.show();
	    //            this.editMode = false;
	    //        });
	    //    }
	    //    else
	    //    {
	    //        this.doSaveProfile('');
	    //    }
	    //    return false;
	    //}
	    ProfileComponent.prototype.doSaveProfile = function (url) {
	        var _this = this;
	        if (url !== '') {
	            this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
	        }
	        var result = rxjs_1.Observable.create(function (obs) {
	            _this.userService.saveProfile(_this.user, '').subscribe(function (res) {
	                _this.user = res;
	                if (_this.user.applicationUserId > 0) {
	                    _this.success = true;
	                }
	                if (_this.user.applicationUserDetail.birthday !== null && _this.user.applicationUserDetail.birthday !== undefined) {
	                    _this.user.applicationUserDetail.birthday = new Date(_this.user.applicationUserDetail.birthday);
	                }
	                if (_this.user.applicationUserDetail.spouseBirthday !== null && _this.user.applicationUserDetail.spouseBirthday !== undefined) {
	                    _this.user.applicationUserDetail.spouseBirthday = new Date(_this.user.applicationUserDetail.spouseBirthday);
	                }
	                _this.user.appChild.forEach(function (x) {
	                    if (x.birthday !== undefined && x.birthday !== null) {
	                        x.birthday = new Date(x.birthday);
	                    }
	                });
	                obs.next(_this.user);
	                obs.complete;
	            });
	        });
	        return result;
	    };
	    __decorate([
	        core_1.ViewChild('profileModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ProfileComponent.prototype, "profileModal", void 0);
	    __decorate([
	        core_1.ViewChild('loginModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ProfileComponent.prototype, "loginModal", void 0);
	    __decorate([
	        core_1.ViewChild('usernameModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ProfileComponent.prototype, "usernameModal", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ProfileComponent.prototype, "id", void 0);
	    ProfileComponent = __decorate([
	        core_1.Component({
	            selector: 'profile',
	            template: __webpack_require__(87)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, setting_service_1.SettingService, image_service_1.ImageService, router_1.ActivatedRoute])
	    ], ProfileComponent);
	    return ProfileComponent;
	}());
	exports.ProfileComponent = ProfileComponent;


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Profile</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value); form.reset()\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col=sm-12 text-right\" *ngIf=\"user.applicationUserId === userService.user.applicationUserId\">\r\n                                <button *ngIf=\"!editMode\" class=\"btn btn-info\" (click)=\"toggleEdit(true)\" type=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-pencil\"></span> Edit\r\n                                </button>\r\n                                <button *ngIf=\"editMode\" class=\"btn btn-warning\" (click)=\"toggleEdit(false)\" type=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Cancel\r\n                                </button>\r\n                                <button *ngIf=\"editMode\" class=\"btn btn-primary\" type=\"submit\">\r\n                                    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Save Changes\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>First Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.firstName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"firstName\" type=\"text\" [(ngModel)]=\"user.firstName\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Middle Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.middleName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"middleName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.middleName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Last Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.lastName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"lastName\" type=\"text\" [(ngModel)]=\"user.lastName\" required />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Birthday:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.birthday | formatDate: 'MMMM DD'}}</h4>\r\n                                <p-calendar *ngIf=\"editMode\" \r\n                                            [showIcon]=\"true\" \r\n                                            name=\"birthday\" \r\n                                            [(ngModel)]=\"user.applicationUserDetail.birthday\" \r\n                                            yearRange=\"1900:2200\" \r\n                                            [maxDate]=\"maxDate\"\r\n                                            hourFormat=\"12\"\r\n                                            >\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Cell Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.cellPhone | phone}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"cellPhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.cellPhone\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Home Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.homePhone | phone}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"homePhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.homePhone\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Email:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.emailAddress}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"emailAddress\" type=\"text\" [(ngModel)]=\"user.emailAddress\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Street Address:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.streetAddress}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"streetAddress\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.streetAddress\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>City:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.city}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"city\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.city\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>State:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.state?.stateName}}</h4>\r\n                                <select *ngIf=\"editMode\" [(ngModel)]=\"user.applicationUserDetail.stateId\" name=\"stateId\" class=\"form-control\">\r\n                                    <option *ngFor=\"let state of states\" value=\"{{state.stateId}}\">\r\n                                        {{state.stateName}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Zip Code:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.zipCode}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"zipCode\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.zipCode\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Country:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>{{user.applicationUserDetail?.state?.country?.countryName}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse First Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.spouseFirstName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"spouseFirstName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseFirstName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Middle Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.spouseMiddleName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"spouseMiddleName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseMiddleName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Last Name:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.spouseLastName}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"spouseLastName\" type=\"text\" [(ngModel)]=\"user.applicationUserDetail.spouseLastName\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Birthday:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.spouseBirthday | formatDate: 'MMMM DD'}}</h4>\r\n                                <p-calendar *ngIf=\"editMode\"\r\n                                            [showIcon]=\"true\"\r\n                                            name=\"spouseBirthday\"\r\n                                            [(ngModel)]=\"user.applicationUserDetail.spouseBirthday\"\r\n                                            yearRange=\"1900:2200\"\r\n                                            [maxDate]=\"maxDate\"\r\n                                            hourFormat=\"12\">\r\n                                </p-calendar>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <h4>Spouse Cell Phone #:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                                <h4 *ngIf=\"!editMode\">{{user.applicationUserDetail?.spouseCellPhone | phone}}</h4>\r\n                                <input *ngIf=\"editMode\" class=\"form-control\" name=\"spouseCellPhone\" type=\"number\" [(ngModel)]=\"user.applicationUserDetail.spouseCellPhone\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div *ngIf=\"user.applicationUserId === userService.user.applicationUserId\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Last Logged In:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>{{user.lastLoggedInDt | date: 'MM/dd/yyyy hh:mm a' }}</h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Username:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4 *ngIf=\"!editMode\">{{user.username }}</h4>\r\n                                    <input *ngIf=\"editMode\" class=\"form-control\" name=\"username\" type=\"text\" [(ngModel)]=\"user.username\" (blur)=\"checkUsername(user.username, user.applicationUserId)\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Secret Question:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4 *ngIf=\"!editMode\">{{user.secretQuestion }}</h4>\r\n                                    <input *ngIf=\"editMode\" class=\"form-control\" name=\"secretQuestion\" type=\"text\" [(ngModel)]=\"user.secretQuestion\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Secret Answer:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4 *ngIf=\"!editMode\">{{user.secretAnswer }}</h4>\r\n                                    <input *ngIf=\"editMode\" class=\"form-control\" name=\"secretAnswer\" type=\"text\" [(ngModel)]=\"user.secretAnswer\" required />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4>Receive Notifications:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                    <h4 *ngIf=\"!editMode\">{{user.receiveNotifications | yesNo: 'yesNo'}}</h4>\r\n                                    <input *ngIf=\"editMode\" class=\"form-control\" name=\"receiveNotifications\" type=\"checkbox\" [(ngModel)]=\"user.receiveNotifications\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <h4>Household Picture:</h4>\r\n\r\n                        <p-fileUpload *ngIf=\"editMode\" name=\"demo[]\" url=\"~/upload\" (onUpload)=\"onHeaderUpload($event)\"\r\n                                      accept=\"image/*\" auto=\"auto\" maxFileSize=\"4000000\">\r\n                        </p-fileUpload>\r\n                        <div style=\"max-height: 505px; max-width: 505px\" *ngIf=\"imageUrl === ''\">\r\n                            <img [src]=\"user.applicationUserDetail?.imageUrl\" style=\"max-height:500px; max-width: 500px\" />\r\n                        </div>\r\n                        <div style=\"max-height: 505px; max-width: 505px\" *ngIf=\"imageUrl !== ''\">\r\n                            <img [src]=\"imageService.sanitize(imageUrl)\" style=\"max-height:500px; max-width: 500px\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"col-sm-10\">\r\n                                <h4>Children:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-1 text-right\">\r\n                                <button *ngIf=\"editMode\" class=\"btn btn-primary\" (click)=\"addChild()\" type=\"button\">\r\n                                    <span class=\"glyphicon glyphicon-plus\"></span> Add Child\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\"><br /></div>\r\n                        <div class=\"col-sm-12\">\r\n                            <table *ngIf=\"user.appChild !== undefined && user.appChild !== null\" class=\"table table-striped table-fixed\">\r\n                                <thead>\r\n                                    <tr class=\"col-sm-12\">\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>First Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-2 border-right\">\r\n                                            <h5>Middle Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>Last Name</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-3 border-right\">\r\n                                            <h5>Birthday</h5>\r\n                                        </th>\r\n                                        <th class=\"col-xs-1 border-right text-center\">\r\n                                            <h5 *ngIf=\"editMode\">Delete</h5>\r\n                                            <h5 *ngIf=\"!editMode\">&nbsp;</h5>\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr class=\"col-sm-12\" *ngFor=\"let child of user.appChild; let idx = index\">\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <span *ngIf=\"!editMode\">{{child.firstName}}&nbsp;</span>\r\n                                            <input *ngIf=\"editMode\" class=\"form-control\" name=\"childFirstName{{idx}}\" type=\"text\" [(ngModel)]=\"child.firstName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-2 border-right\">\r\n                                            <span *ngIf=\"!editMode\">{{child.middleName}}&nbsp;</span>\r\n                                            <input *ngIf=\"editMode\" class=\"form-control\" name=\"childMiddleName{{idx}}\" type=\"text\" [(ngModel)]=\"child.middleName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <span *ngIf=\"!editMode\">{{child.lastName}}&nbsp;</span>\r\n                                            <input *ngIf=\"editMode\" class=\"form-control\" name=\"childLastName{{idx}}\" type=\"text\" [(ngModel)]=\"child.lastName\" />\r\n                                        </td>\r\n                                        <td class=\"col-xs-3 border-right\">\r\n                                            <span *ngIf=\"!editMode\">{{child.birthday | formatDate: 'MMMM DD'}}&nbsp;</span>\r\n                                            <p-calendar *ngIf=\"editMode\" [showIcon]=\"true\"\r\n                                                        name=\"childBirthday{{idx}}\"\r\n                                                        [(ngModel)]=\"child.birthday\"\r\n                                                        yearRange=\"1900:2200\"\r\n                                                        [maxDate]=\"maxDate\"\r\n                                                        hourFormat=\"12\">\r\n                                            </p-calendar>\r\n                                        </td>\r\n                                        <td class=\"col-xs-1 border-right text-center\">\r\n                                            <a *ngIf=\"editMode\" role=\"button\"\r\n                                               mwlConfirmationPopover\r\n                                               title=\"Delete Child\"\r\n                                               message=\"Are you sure you want to delete this child from the list?\"\r\n                                               confirmText=\"Yes\"\r\n                                               cancelText=\"No\"\r\n                                               placement=\"top\"\r\n                                               (confirm)=\"confirmClicked(child)\"\r\n                                               confirmButtonType=\"danger\"\r\n                                               cancelButtonType=\"default\"\r\n                                               [appendToBody]=\"true\">\r\n                                                <i class=\"fa fa-lg fa-ban\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            &nbsp;\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #profileModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"profileModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Changes to your profile have been saved successfully.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #usernameModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"usernameModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Username Already Taken</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                This username is already taken by another user. Please use a different one.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var ProfileRedirectComponent = (function () {
	    function ProfileRedirectComponent(router, activatedRoute) {
	        var _this = this;
	        this.router = router;
	        this.activatedRoute = activatedRoute;
	        this.activatedRoute.params.subscribe(function (param) {
	            _this.id = param['id'];
	        });
	        this.router.navigate([("/profile/" + this.id)]);
	    }
	    ProfileRedirectComponent = __decorate([
	        core_1.Component({
	            selector: 'profileredirect',
	            template: '<div></div>'
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
	    ], ProfileRedirectComponent);
	    return ProfileRedirectComponent;
	}());
	exports.ProfileRedirectComponent = ProfileRedirectComponent;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var setting_service_1 = __webpack_require__(19);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var setting_model_1 = __webpack_require__(90);
	var SettingComponent = (function () {
	    function SettingComponent(settingService, imageService, router) {
	        this.settingService = settingService;
	        this.imageService = imageService;
	        this.router = router;
	        this.headerSetting = {};
	        this.codeSetting = {};
	        this.setting = new setting_model_1.Setting();
	        this.imageId = 0;
	        this.fbA = '';
	        this.fbS = '';
	        this.fbP = '';
	        this.fbT = '';
	    }
	    SettingComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.settingService.getSetting(1001).subscribe(function (result) {
	            _this.fbA = result.settingValue;
	        });
	        this.settingService.getSetting(1002).subscribe(function (result) {
	            _this.fbS = result.settingValue;
	        });
	        this.settingService.getSetting(1003).subscribe(function (result) {
	            _this.fbP = result.settingValue;
	        });
	        this.settingService.getSettings()
	            .subscribe(function (x) {
	            _this.headerSetting = x[0], _this.codeSetting = x[1];
	        });
	    };
	    SettingComponent.prototype.saveProfile = function (form) {
	        var _this = this;
	        hello()
	            .init({
	            facebook: this.fbA
	        }, { scope: 'publish_pages,manage_pages,user_photos' });
	        this.settingService.getSetting(1004).subscribe(function (result) {
	            _this.fbT = result.settingValue;
	            _this.setting.headerId = form.headerId;
	            _this.setting.codeId = form.codeId;
	            _this.setting.code = form.code;
	            if (_this.imageService.imageUrl !== '') {
	                hello('facebook')
	                    .api('/159267017952244/photos', 'post', {
	                    file: form.image,
	                    token: _this.fbT
	                })
	                    .then(function (result) {
	                    _this.imageId = result.id;
	                    hello('facebook')
	                        .api('myeggettfamilypage/albums', {
	                        "fields": 'photos{source}',
	                        token: _this.fbT
	                    })
	                        .then(function (res) {
	                        res.data.forEach(function (x) {
	                            if (x.id === '159267017952244') {
	                                x.photos.data.forEach(function (y) {
	                                    if (y.id === _this.imageId) {
	                                        _this.setting.image = y.source;
	                                        _this.settingService.saveSettings(_this.setting)
	                                            .subscribe(function (res) {
	                                            _this.profileModal.show();
	                                        });
	                                    }
	                                });
	                            }
	                        });
	                    });
	                });
	            }
	            else {
	                _this.setting.image = '';
	                _this.settingService.saveSettings(_this.setting)
	                    .subscribe(function (res) {
	                    _this.profileModal.show();
	                });
	            }
	        });
	        return false;
	    };
	    __decorate([
	        core_1.ViewChild('profileModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], SettingComponent.prototype, "profileModal", void 0);
	    SettingComponent = __decorate([
	        core_1.Component({
	            selector: 'setting',
	            template: __webpack_require__(91)
	        }), 
	        __metadata('design:paramtypes', [setting_service_1.SettingService, image_service_1.ImageService, router_1.Router])
	    ], SettingComponent);
	    return SettingComponent;
	}());
	exports.SettingComponent = SettingComponent;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Setting = (function () {
	    function Setting() {
	    }
	    Setting = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Setting);
	    return Setting;
	}());
	exports.Setting = Setting;


/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"row\">&nbsp;</div>\r\n                <div class=\"panel panel-default\">\r\n\r\n                    <div class=\"panel-body\">\r\n                        <form #form=\"ngForm\" (ngSubmit)=\"saveProfile(form.value);\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <h4>Header Image:</h4> <button type=\"button\" class=\"btn btn-primary\" (click)=\"imageModal.show()\"><i class=\"fa fa-pencil-square-o\"></i>&nbsp;Update Image</button>\r\n\r\n                                    <input type=\"hidden\" name=\"image\" [(ngModel)]=\"imageService.header\"/>\r\n                                    <input type=\"hidden\" name=\"headerId\" [(ngModel)]=\"headerSetting.settingId\" />\r\n                                    <input type=\"hidden\" name=\"codeId\" [(ngModel)]=\"codeSetting.settingId\" />\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                    <div *ngIf=\"imageService.imageUrl === ''\">\r\n                                        <img src=\"{{headerSetting.settingValue}}\" height=\"200\" />\r\n                                    </div>\r\n                                    <div *ngIf=\"imageService.imageUrl !== ''\">\r\n                                        <img [src]=\"imageService.sanitize(imageService.imageUrl)\" height=\"200\"/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">&nbsp;</div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <h4>Code:</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <input class=\"form-control\" type=\"text\" name=\"code\" [(ngModel)]=\"codeSetting.settingValue\" />\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary\" type=\"submit\">\r\n                                <span class=\"glyphicon glyphicon-save\"></span> Save Changes\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div bsModal #profileModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"profileModal.hide()\">\r\n                        <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Changes Saved Successfully</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Changes to the settings have been saved successfully.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div bsModal #imageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"imageModal.hide()\">\r\n                        <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Update Image</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p-growl [value]=\"imageService.headerMsgs\"></p-growl>\r\n\r\n                    <p-fileUpload name=\"demo[]\" url=\"~/upload\" (onUpload)=\"imageService.onHeaderUpload($event)\"\r\n                                   accept=\"image/*\" auto=\"auto\" maxFileSize=\"4000000\">\r\n                    </p-fileUpload>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var UserDirectoryComponent = (function () {
	    function UserDirectoryComponent(userService) {
	        this.userService = userService;
	        this.users = [];
	    }
	    UserDirectoryComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    UserDirectoryComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.users = this.userService.userList;
	        this.userSubscription = this.userService.userListObjectChange.subscribe(function (value) {
	            _this.users = value;
	        });
	        this.userService.getApplicationUsers()
	            .subscribe(function (users) {
	            _this.userService.userList = users;
	            _this.userService.change(true);
	        });
	    };
	    UserDirectoryComponent = __decorate([
	        core_1.Component({
	            selector: 'user-directory',
	            template: __webpack_require__(93)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService])
	    ], UserDirectoryComponent);
	    return UserDirectoryComponent;
	}());
	exports.UserDirectoryComponent = UserDirectoryComponent;


/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Directory</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\" *ngIf=\"userService.userList?.length < 1\">\r\n                        <loading-indicator></loading-indicator>\r\n                    </div>\r\n                    <table *ngIf=\"userService.userList?.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Name</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\">\r\n                                    <h5>Email Address</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Cell Phone</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Home Phone</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>City</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Details</h5>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of users\">\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.firstName}} {{user.lastName}}&nbsp;\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\">\r\n                                    {{user.emailAddress}}&nbsp;\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.applicationUserDetail?.cellPhone | phone}}&nbsp;\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.applicationUserDetail?.homePhone | phone}}&nbsp;\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.applicationUserDetail?.city}}&nbsp;\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\">\r\n                                    <a [routerLink]=\"['/profile/' + user.applicationUserId]\">\r\n                                        <span class='fa fa-th-list'></span>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var UserListComponent = (function () {
	    function UserListComponent(userService) {
	        this.userService = userService;
	        this.users = [];
	        this.isSystemAdmin = false;
	        this.confirmText = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
	        this.cancelText = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';
	        this.unApproveTitle = 'Make Admin';
	        this.unApproveMessage = 'Are you <b>sure</b> you want to make this user an Admin?';
	        this.approveTitle = 'Remove Admin';
	        this.approveMessage = 'Are you <b>sure</b> you want to remove this users admin permissions?';
	        this.unApproveSysTitle = 'Make System Admin';
	        this.unApproveSysMessage = 'Are you <b>sure</b> you want to make this user a System Admin?';
	        this.approveSysTitle = 'Remove System Admin';
	        this.approveSysMessage = 'Are you <b>sure</b> you want to remove this users system admin permissions?';
	    }
	    UserListComponent.prototype.ngOnDestroy = function () {
	        this.userSubscription.unsubscribe();
	    };
	    UserListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.getApplicationUsers()
	            .subscribe(function (users) {
	            _this.users = users;
	        });
	        this.myUser = this.userService.user;
	        this.userSubscription = this.userService.userObjectChange.subscribe(function (value) {
	            _this.myUser = value;
	            _this.isSystemAdmin = value.isSystemAdmin;
	        });
	    };
	    UserListComponent.prototype.approveUser = function (user) {
	        user.isAdmin = true;
	        this.userService.saveProfile(user, '');
	    };
	    UserListComponent.prototype.unApproveUser = function (user) {
	        user.isAdmin = false;
	        this.userService.saveProfile(user, '');
	    };
	    UserListComponent.prototype.approveSysUser = function (user) {
	        user.isSystemAdmin = true;
	        this.userService.saveProfile(user, '');
	    };
	    UserListComponent.prototype.unApproveSysUser = function (user) {
	        user.isSystemAdmin = false;
	        this.userService.saveProfile(user, '');
	    };
	    UserListComponent = __decorate([
	        core_1.Component({
	            selector: 'user-list',
	            template: __webpack_require__(95)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService])
	    ], UserListComponent);
	    return UserListComponent;
	}());
	exports.UserListComponent = UserListComponent;


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"panel\">\r\n\r\n    <div id=\"wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">&nbsp;</div>\r\n            <div class=\"row\">\r\n                <div class=\"row\" *ngIf=\"users.length < 1\">\r\n                    <loading-indicator></loading-indicator>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <table *ngIf=\"users.length > 0\" class=\"table table-striped table-fixed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Name</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-3 border-right\">\r\n                                    <h5>Email Address</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Username</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-2 border-right\">\r\n                                    <h5>Last Logged In</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Admin</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center border-right\">\r\n                                    <h5>Sys Admin</h5>\r\n                                </th>\r\n                                <th class=\"col-xs-1 text-center\">\r\n                                    <h5>Notify?</h5>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of users\">\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.firstName}} {{user.lastName}}\r\n                                </td>\r\n                                <td class=\"col-xs-3 border-right\">\r\n                                    {{user.emailAddress}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.username}}\r\n                                </td>\r\n                                <td class=\"col-xs-2 border-right\">\r\n                                    {{user.lastLoggedInDt | date: 'MM/dd/yyyy hh:mm a' }}\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{user !== undefined && user.isAdmin | yesNo: 'admin' }}\" placement=\"top\" *ngIf=\"myUser.isSystemAdmin\">\r\n                                    <a *ngIf=\"user !== undefined && user.isAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"approveTitle\"\r\n                                       [message]=\"approveMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"unApproveUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-rebel\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"user !== undefined && !user.isAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"unApproveTitle\"\r\n                                       [message]=\"unApproveMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"approveUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-empire\"></i>\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"!myUser.isSystemAdmin\" tooltip=\"{{user !== undefined && user.isAdmin | yesNo: 'admin' }}\" placement=\"top\">\r\n                                    <span *ngIf=\"user !== undefined && user.isAdmin\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"user !== undefined && !user.isAdmin\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" *ngIf=\"!myUser.isSystemAdmin\" tooltip=\"{{user !== undefined && user.isSystemAdmin | yesNo: 'sysAdmin' }}\" placement=\"top\">\r\n                                    <span *ngIf=\"user !== undefined && user.isSystemAdmin\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"user !== undefined && !user.isSystemAdmin\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center border-right\" tooltip=\"{{user !== undefined && user.isSystemAdmin | yesNo: 'sysAdmin' }}\" placement=\"top\" *ngIf=\"myUser.isSystemAdmin\">\r\n                                    <a *ngIf=\"user.isSystemAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"approveSysTitle\"\r\n                                       [message]=\"approveSysMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"unApproveSysUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-rebel\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"!user.isSystemAdmin\" role=\"button\"\r\n                                       mwlConfirmationPopover\r\n                                       [title]=\"unApproveSysTitle\"\r\n                                       [message]=\"unApproveSysMessage\"\r\n                                       [confirmText]=\"confirmText\"\r\n                                       [cancelText]=\"cancelText\"\r\n                                       [placement]=\"placement\"\r\n                                       (confirm)=\"approveSysUser(user)\"\r\n                                       confirmButtonType=\"danger\"\r\n                                       cancelButtonType=\"default\"\r\n                                       [appendToBody]=\"true\">\r\n                                        <i class=\"fa fa-lg fa-empire\"></i>\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"col-xs-1 text-center\" tooltip=\"{{user.receiveNotifications | yesNo: 'notification' }}\" placement=\"top\">\r\n                                    <span *ngIf=\"user.receiveNotifications\"><i class=\"fa fa-lg fa-rebel\"></i></span>\r\n                                    <span *ngIf=\"!user.receiveNotifications\"><i class=\"fa fa-lg fa-empire\"></i></span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var image_service_1 = __webpack_require__(34);
	var VideoPlayerComponent = (function () {
	    function VideoPlayerComponent(imageService) {
	        this.imageService = imageService;
	        this.sources = [];
	    }
	    VideoPlayerComponent.prototype.ngOnInit = function () {
	        this.sources.push(this.image);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], VideoPlayerComponent.prototype, "image", void 0);
	    VideoPlayerComponent = __decorate([
	        core_1.Component({
	            selector: 'video-player',
	            template: __webpack_require__(97)
	        }), 
	        __metadata('design:paramtypes', [image_service_1.ImageService])
	    ], VideoPlayerComponent);
	    return VideoPlayerComponent;
	}());
	exports.VideoPlayerComponent = VideoPlayerComponent;


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<vg-player style=\"width: 50%; height: 400px\" class=\"fluid center-block\">\r\n    <vg-overlay-play></vg-overlay-play>\r\n    <vg-buffering></vg-buffering>\r\n\r\n    <vg-scrub-bar>\r\n        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n    </vg-scrub-bar>\r\n\r\n    <vg-controls>\r\n        <vg-play-pause></vg-play-pause>\r\n        <vg-playback-button></vg-playback-button>\r\n\r\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\r\n\r\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-mute></vg-mute>\r\n    </vg-controls>\r\n\r\n    <video vgMedia #media id=\"singleVideo\" preload=\"auto\" crossorigin class=\"fluid center-block\">\r\n        <source *ngFor=\"let video of sources\" [src]=\"imageService.sanitize(video.imageUrl)\" type=\"video/mp4\">\r\n    </video>\r\n</vg-player>"

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var router_1 = __webpack_require__(6);
	var ng2_bootstrap_1 = __webpack_require__(7);
	var forgot_model_1 = __webpack_require__(99);
	var ForgotComponent = (function () {
	    function ForgotComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.loginInfo = new forgot_model_1.Forgot();
	        this.gotUser = false;
	    }
	    ForgotComponent.prototype.login = function (form) {
	        var _this = this;
	        this.loginInfo.username = form.username;
	        this.userService.getQuestion(this.loginInfo.username)
	            .subscribe(function (res) {
	            if (res.question !== null && res.question !== undefined && res.question !== '') {
	                _this.gotUser = true;
	                _this.loginInfo = res;
	            }
	            else {
	                _this.gotUser = false;
	                _this.failureModal.show();
	            }
	        });
	        return false;
	    };
	    ForgotComponent.prototype.reset = function (questionForm) {
	        var _this = this;
	        this.loginInfo.answer = questionForm.answer;
	        this.loginInfo.newPassword = questionForm.newPassword;
	        this.loginInfo.applicationUserId = questionForm.applicationUserId;
	        this.userService.resetPassword(this.loginInfo)
	            .subscribe(function (res) {
	            if (res.success) {
	                _this.successModal.show();
	            }
	            else {
	                _this.failureQuestionModal.show();
	            }
	        });
	        return false;
	    };
	    ForgotComponent.prototype.dismissModal = function () {
	        this.router.navigate(['/home']);
	    };
	    __decorate([
	        core_1.ViewChild('successModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ForgotComponent.prototype, "successModal", void 0);
	    __decorate([
	        core_1.ViewChild('failureModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ForgotComponent.prototype, "failureModal", void 0);
	    __decorate([
	        core_1.ViewChild('failureQuestionModal'), 
	        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
	    ], ForgotComponent.prototype, "failureQuestionModal", void 0);
	    ForgotComponent = __decorate([
	        core_1.Component({
	            selector: 'forgot',
	            template: __webpack_require__(100)
	        }), 
	        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
	    ], ForgotComponent);
	    return ForgotComponent;
	}());
	exports.ForgotComponent = ForgotComponent;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Forgot = (function () {
	    function Forgot() {
	    }
	    Forgot = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Forgot);
	    return Forgot;
	}());
	exports.Forgot = Forgot;


/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "\r\n<div id=\"wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2>Forgot Password</h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <form *ngIf=\"!gotUser\" #form=\"ngForm\" (ngSubmit)=\"login(form.value);\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Username:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"text\" name=\"username\" [(ngModel)]=\"loginInfo.username\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <h4>\r\n                                    <button class=\"btn btn-primary\" type=\"submit\">\r\n                                        <span class=\"fa fa-lg fa-share\"></span> Submit\r\n                                    </button>\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <form *ngIf=\"gotUser\" #questionForm=\"ngForm\" (ngSubmit)=\"reset(questionForm.value);\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Secret Question:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4>{{loginInfo.question}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>Secret Answer:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4>\r\n                                    <input type=\"text\" name=\"answer\" [(ngModel)]=\"loginInfo.answer\" class=\"form-control\" required />\r\n                                    <input type=\"hidden\" name=\"applicationUserId\" [(ngModel)]=\"loginInfo.applicationUserId\" />\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <h4>New Password:</h4>\r\n                            </div>\r\n                            <div class=\"col-sm-5\">\r\n                                <h4><input type=\"password\" name=\"newPassword\" [(ngModel)]=\"loginInfo.newPassword\" class=\"form-control\" required /></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                                <h4>\r\n                                    <button class=\"btn btn-primary\" type=\"submit\">\r\n                                        <span class=\"fa fa-lg fa-share\"></span> Submit\r\n                                    </button>\r\n                                </h4>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" (onHide)=\"dismissModal()\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"successModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Success</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Password has been reset successfully. You may now login using the new password.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #failureModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"failureModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Unable to find that username in system. Please try again.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #failureQuestionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"failureModal.hide()\">\r\n                    <span aria-hidden=\"true\" class=\"text-primary\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Error</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Unable to verify answer to question. Please try again.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var BooleanPipe = (function () {
	    function BooleanPipe() {
	    }
	    BooleanPipe.prototype.transform = function (boolean, type) {
	        var result = '';
	        if (type === 'yesNo') {
	            result = boolean ? 'Yes' : 'No';
	        }
	        if (type === 'approved') {
	            result = boolean ? 'Approved' : 'Un-Approved';
	        }
	        if (type === 'readUnread') {
	            result = boolean ? 'Unread' : 'Read';
	        }
	        if (type === 'visible') {
	            result = boolean ? 'Visible' : 'Hidden';
	        }
	        if (type === 'admin') {
	            result = boolean ? 'Admin' : 'Non-Admin';
	        }
	        if (type === 'sysAdmin') {
	            result = boolean ? 'System Admin' : 'Non-System Admin';
	        }
	        if (type === 'notification') {
	            result = boolean ? 'Gets Notified' : 'Does not get Notified';
	        }
	        return result;
	    };
	    BooleanPipe = __decorate([
	        core_1.Pipe({
	            name: 'yesNo'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BooleanPipe);
	    return BooleanPipe;
	}());
	exports.BooleanPipe = BooleanPipe;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var moment = __webpack_require__(103);
	var DatePipe = (function () {
	    function DatePipe() {
	    }
	    DatePipe.prototype.transform = function (date, args, transform) {
	        if (transform === void 0) { transform = true; }
	        if (date !== null && date !== undefined) {
	            var d = new Date(date);
	            if (transform) {
	                d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
	                return moment(d).format(args);
	            }
	            else {
	                return moment(d).format(args);
	            }
	        }
	        else {
	            return null;
	        }
	    };
	    DatePipe = __decorate([
	        core_1.Pipe({
	            name: 'formatDate'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DatePipe);
	    return DatePipe;
	}());
	exports.DatePipe = DatePipe;


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var PhonePipe = (function () {
	    function PhonePipe() {
	    }
	    PhonePipe.prototype.transform = function (tel, args) {
	        if (tel !== undefined && tel !== null) {
	            var value = tel.toString().trim().replace(/^\+/, '');
	            if (value.match(/[^0-9]/)) {
	                return tel;
	            }
	            var country, city, number;
	            switch (value.length) {
	                case 10:
	                    country = 1;
	                    city = value.slice(0, 3);
	                    number = value.slice(3);
	                    break;
	                case 11:
	                    country = value[0];
	                    city = value.slice(1, 4);
	                    number = value.slice(4);
	                    break;
	                case 12:
	                    country = value.slice(0, 3);
	                    city = value.slice(3, 5);
	                    number = value.slice(5);
	                    break;
	                default:
	                    return tel;
	            }
	            if (country == 1) {
	                country = "";
	            }
	            number = number.slice(0, 3) + '-' + number.slice(3);
	            return (country + " (" + city + ") " + number).trim();
	        }
	        else {
	            return '';
	        }
	    };
	    PhonePipe = __decorate([
	        core_1.Pipe({
	            name: 'phone'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PhonePipe);
	    return PhonePipe;
	}());
	exports.PhonePipe = PhonePipe;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(16);
	var ProfileResolve = (function () {
	    function ProfileResolve(userService) {
	        this.userService = userService;
	    }
	    ProfileResolve.prototype.resolve = function (route) {
	        return this.userService.getUser(route.params['id']);
	    };
	    ProfileResolve = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [user_service_1.UserService])
	    ], ProfileResolve);
	    return ProfileResolve;
	}());
	exports.ProfileResolve = ProfileResolve;


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjVkYWI3OTkyNGZkOWUxZmEzMjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZW5nL3ByaW1lbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmlkZW9ndWxhcjIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZpZGVvZ3VsYXIyL2NvbnRyb2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmlkZW9ndWxhcjIvb3ZlcmxheS1wbGF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmlkZW9ndWxhcjIvYnVmZmVyaW5nXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1jb29raWVzL25nMi1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVjb250YWluZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVjb250YWluZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVsaXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVyZWRpcmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL2ltYWdlLm1vZGVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlYWRtaW5saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL21vZGVscy9hcnRpY2xlZGV0YWlsLm1vZGVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1mYWNlYm9vay1zZGtcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVlZGl0cmVkaXJlY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVsaXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlcmVkaXJlY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGV2aWV3cmVkaXJlY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRsaXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50bGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50YWRtaW5saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50YWRtaW5saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc3VnZ2VzdGlvbi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2tyZWRpcmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL2xvZ2luLm1vZGVsLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbmV3YWNjb3VudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvYXBwVXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL21vZGVscy9hcHBjaGlsZC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL21vZGVscy9hcHBsaWNhdGlvblVzZXJEZXRhaWwubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc3RhdGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvY291bnRyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbmV3YWNjb3VudC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmdjYXJvdXNlbC9uZ2Nhcm91c2VsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmdjYXJvdXNlbC9uZ2Nhcm91c2VsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlcmVkaXJlY3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbW9kZWxzL3NldHRpbmcubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyZGlyZWN0b3J5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyZGlyZWN0b3J5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyL3VzZXJsaXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlci91c2VybGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW9wbGF5ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92aWRlby92aWRlb3BsYXllci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vZm9yZ290LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL21vZGVscy9mb3Jnb3QubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2ZvcmdvdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3BpcGVzL3llc05vLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9mb3JtYXREYXRlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcmVzb2x2ZXJzL3Byb2ZpbGUucmVzb2x2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0EscUJBQU8sQ0FBOEIsQ0FBQztBQUN0QyxxQkFBTyxDQUFTLENBQUM7QUFDakIsa0NBQStCLENBQWUsQ0FBQztBQUMvQyxnREFBb0MsQ0FBb0IsQ0FBQztBQUN6RCx3Q0FBMEIsQ0FBa0IsQ0FBQztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElB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RUFBRSxDQUFDO2FBQ2pCLENBQUM7YUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFcEQsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFELENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQzthQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDZCxDQUFDO0tBQ0wsQ0FBQztLQWpETDtTQUFDLFdBQUksQ0FBQzthQUNGLElBQUksRUFBRSxPQUFPO1VBQ2hCLENBQUM7O2tCQUFBO0tBZ0RGLGdCQUFDO0FBQUQsRUFBQztBQTlDWSxrQkFBUyxZQThDckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRELGtDQUEyQixDQUFlLENBQUM7QUFFM0MsMENBQTRCLEVBQTBCLENBQUM7QUFJdkQ7S0FFSSx3QkFBb0IsV0FBd0I7U0FBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7S0FBSSxDQUFDO0tBRWpELGdDQUFPLEdBQVAsVUFBUSxLQUE2QjtTQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELENBQUM7S0FQTDtTQUFDLGlCQUFVLEVBQUU7O3VCQUFBO0tBUWIscUJBQUM7QUFBRCxFQUFDO0FBUFksdUJBQWMsaUJBTzFCIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjVkYWI3OTkyNGZkOWUxZmEzMjciLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSk6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL01vZHVsZXNcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUsIE1vZGFsTW9kdWxlLCBUYWJzTW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFZGl0b3JNb2R1bGUsIFNoYXJlZE1vZHVsZSwgRmlsZVVwbG9hZE1vZHVsZSwgR3Jvd2xNb2R1bGUsIERyb3Bkb3duTW9kdWxlLCBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyJztcclxuaW1wb3J0IHsgVmdDb3JlTW9kdWxlIH0gZnJvbSAndmlkZW9ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFZnQ29udHJvbHNNb2R1bGUgfSBmcm9tICd2aWRlb2d1bGFyMi9jb250cm9scyc7XHJcbmltcG9ydCB7IFZnT3ZlcmxheVBsYXlNb2R1bGUgfSBmcm9tICd2aWRlb2d1bGFyMi9vdmVybGF5LXBsYXknO1xyXG5pbXBvcnQgeyBWZ0J1ZmZlcmluZ01vZHVsZSB9IGZyb20gJ3ZpZGVvZ3VsYXIyL2J1ZmZlcmluZyc7XHJcblxyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBBcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcmNoaXZlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFyY2hpdmVSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVyZWRpcmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlQWRtaW5MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnRpY2xlL2VkaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVlZGl0cmVkaXJlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJ0aWNsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnRpY2xlUmVkaXJlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlcmVkaXJlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGV2aWV3cmVkaXJlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50bGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGFkbWlubGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWVkYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWVkQmFja0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2tsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlZWRiYWNrUmVkaXJlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2tyZWRpcmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3InO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL25ld2FjY291bnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTkdDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uZ2Nhcm91c2VsL25nY2Fyb3VzZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJpdmFjeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZVJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZXJlZGlyZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJEaXJlY3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyZGlyZWN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlcmxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlkZW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8vdmlkZW9wbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9yZ290Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2ZvcmdvdC5jb21wb25lbnQnO1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UsIEZhY2Vib29rVWlQYXJhbXMsIEZhY2Vib29rSW5pdFBhcmFtcyB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJztcclxuXHJcbi8vUGlwZXNcclxuaW1wb3J0IHsgQm9vbGVhblBpcGUgfSBmcm9tICcuL3BpcGVzL3llc05vLnBpcGUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvZm9ybWF0RGF0ZS5waXBlJztcclxuaW1wb3J0IHsgUGhvbmVQaXBlIH0gZnJvbSAnLi9waXBlcy9waG9uZS5waXBlJztcclxuXHJcblxyXG4vL1Jlc29sdmVyc1xyXG5pbXBvcnQgeyBQcm9maWxlUmVzb2x2ZSB9IGZyb20gJy4vcmVzb2x2ZXJzL3Byb2ZpbGUucmVzb2x2ZSc7XHJcblxyXG5AXHJcbk5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBZG1pbkNvbXBvbmVudCxcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgQXJjaGl2ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBBcmNoaXZlTGlzdENvbXBvbmVudCxcclxuICAgICAgICBBcmNoaXZlUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgQXJ0aWNsZUFkbWluTGlzdENvbXBvbmVudCxcclxuICAgICAgICBBcnRpY2xlQ29tcG9uZW50LFxyXG4gICAgICAgIEFydGljbGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgQXJ0aWNsZUVkaXRDb21wb25lbnQsXHJcbiAgICAgICAgQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudCxcclxuICAgICAgICBBcnRpY2xlTGlzdENvbXBvbmVudCxcclxuICAgICAgICBBcnRpY2xlUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgQXJ0aWNsZVZpZXdSZWRpcmVjdENvbXBvbmVudCxcclxuICAgICAgICBCb29sZWFuUGlwZSxcclxuICAgICAgICBDb21tZW50TGlzdENvbXBvbmVudCxcclxuICAgICAgICBDb21tZW50QWRtaW5MaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIERhdGVQaXBlLFxyXG4gICAgICAgIEZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgICAgIEZlZWRCYWNrTGlzdENvbXBvbmVudCxcclxuICAgICAgICBGZWVkYmFja1JlZGlyZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgICAgICBGb3Jnb3RDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIE5HQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgICAgICAgTG9hZGluZ0luZGljYXRvcixcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBOZXdBY2NvdW50Q29tcG9uZW50LFxyXG4gICAgICAgIFByaXZhY3lDb21wb25lbnQsXHJcbiAgICAgICAgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICBQcm9maWxlUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICAgICAgU2V0dGluZ0NvbXBvbmVudCxcclxuICAgICAgICBVc2VyRGlyZWN0b3J5Q29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFZpZGVvUGxheWVyQ29tcG9uZW50LFxyXG4gICAgICAgIFBob25lUGlwZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FydGljbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3ZpZXcvOmlkJywgY29tcG9uZW50OiBBcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ2VkaXQvOmlkJywgY29tcG9uZW50OiBBcnRpY2xlRWRpdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICduZXcnLCBjb21wb25lbnQ6IEFydGljbGVFZGl0Q29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAndmlldy86aWQnLCBjb21wb25lbnQ6IEFydGljbGVWaWV3UmVkaXJlY3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2FyY2hpdmUnLCBjb21wb25lbnQ6IEFyY2hpdmVDb250YWluZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2FyY2hpdmVzJywgY29tcG9uZW50OiBBcmNoaXZlUmVkaXJlY3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2NyZWF0ZScsIGNvbXBvbmVudDogQXJ0aWNsZVJlZGlyZWN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdlZGl0LzppZCcsIGNvbXBvbmVudDogQXJ0aWNsZUVkaXRSZWRpcmVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnYWRtaW4nLCBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdmZWVkYmFjaycsIGNvbXBvbmVudDogRmVlZGJhY2tDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnbG9naW4vOmlkJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnZmVlZGJhY2tyZWRpcmVjdCcsIGNvbXBvbmVudDogRmVlZGJhY2tSZWRpcmVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdwcm9maWxlLzppZCcsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IFByb2ZpbGVSZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ3Byb2ZpbGVyZWRpcmVjdC86aWQnLCBjb21wb25lbnQ6IFByb2ZpbGVSZWRpcmVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAncHJpdmFjeScsIGNvbXBvbmVudDogUHJpdmFjeUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnZm9yZ290JywgY29tcG9uZW50OiBGb3Jnb3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ25ld2FjY291bnQnLCBjb21wb25lbnQ6IE5ld0FjY291bnRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgICAgIHsgcGF0aDogJ2RpcmVjdG9yeScsIGNvbXBvbmVudDogVXNlckRpcmVjdG9yeUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnaG9tZScgfVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICAgICAgICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICAgICAgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgICAgIGZvY3VzQnV0dG9uOiAnY29uZmlybSdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIERhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgICAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgICAgICAgICAgRWRpdG9yTW9kdWxlLFxyXG4gICAgICAgICAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICAgICAgR3Jvd2xNb2R1bGUsXHJcbiAgICAgICAgICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgICAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICAgICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgICAgIFZnQ29yZU1vZHVsZSxcclxuICAgICAgICAgICAgVmdDb250cm9sc01vZHVsZSxcclxuICAgICAgICAgICAgVmdPdmVybGF5UGxheU1vZHVsZSxcclxuICAgICAgICAgICAgVmdCdWZmZXJpbmdNb2R1bGVcclxuXHJcblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJvdmlkZXJzOiBbQXJ0aWNsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgIENvbW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICBGYWNlYm9va1NlcnZpY2UsXHJcbiAgICAgICAgICAgIEltYWdlU2VydmljZSxcclxuICAgICAgICAgICAgU2V0dGluZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBQcm9maWxlUmVzb2x2ZVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lbmcvcHJpbWVuZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvcHJpbWVuZ1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2aWRlb2d1bGFyMi9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2NvbnRyb2xzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmlkZW9ndWxhcjIvY29udHJvbHNcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmlkZW9ndWxhcjIvb3ZlcmxheS1wbGF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmlkZW9ndWxhcjIvb3ZlcmxheS1wbGF5XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZpZGVvZ3VsYXIyL2J1ZmZlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZpZGVvZ3VsYXIyL2J1ZmZlcmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcnRpY2xlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9hcHBVc2VyLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYWRtaW4nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FkbWluLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIHVzZXI6IEFwcFVzZXI7XHJcbiAgICBpc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB1c2VyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBzdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VyU3Vic2NyaXB0aW9uICE9PSBudWxsICYmIHRoaXMudXNlclN1YnNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVN1YnNjcmlwdGlvbiAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlU3Vic2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5jaGVja0xvZ2luKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlclNlcnZpY2UudXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2Uuc3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBFeHRlcm5hbERhdGEgfSBmcm9tICcuLi9tb2RlbHMvZXh0ZXJuYWxEYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwJztcclxuIFxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbG9naW5Nb2RhbCcpIHB1YmxpYyBsb2dpbk1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICB1c2VyTGlzdDogQXBwVXNlcltdO1xyXG4gICAgdXNlcjogQXBwVXNlcjtcclxuICAgIG15VXNlcjogQXBwVXNlcjtcclxuICAgIHVzZXJJbmZvQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgdXNlcklkID0gMDtcclxuICAgIHN0YXRlQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHVzZXJDaGFuZ2U9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgIHVzZXJPYmplY3RDaGFuZ2UgPSBuZXcgU3ViamVjdDxBcHBVc2VyPigpO1xyXG4gICAgdXNlckxpc3RPYmplY3RDaGFuZ2UgPSBuZXcgU3ViamVjdDxBcHBVc2VyW10+KCk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL1VzZXIvR2V0QXBwVXNlckJ5SWQ/aWQ9JHtpZH1gKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRRdWVzdGlvbih1c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL1VzZXIvR2V0UXVlc3Rpb24/dXNlcm5hbWU9JHt1c2VybmFtZX1gKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFBhc3N3b3JkKHVzZXIpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Vc2VyL1Jlc2V0UGFzc3dvcmQnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tVc2VybmFtZShuYW1lLCBpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL1VzZXIvQ2hlY2tVc2VybmFtZT91c2VybmFtZT0ke25hbWV9JmlkPSR7aWR9YClcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwbGljYXRpb25Vc2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9Vc2VyL0dldEFwcGxpY2F0aW9uVXNlcnMnKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcHBsaWNhdGlvblVzZXJzRm9yTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9Vc2VyL0dldEFwcGxpY2F0aW9uVXNlcnNGb3JOb3RpZmljYXRpb25zJylcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVByb2ZpbGUodXNlciwgY29kZSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAvYXBpL1VzZXIvVXBkYXRlVXNlcj9jb2RlPSR7Y29kZX1gLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlSW1hZ2VVcmwodXJsKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmltYWdlVXJsID0gdXJsLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Vc2VyL1VwZGF0ZVVzZXJEZXRhaWwnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIENvb2tpZS5kZWxldGUoJ0FVSUQnKTtcclxuICAgICAgICB0aGlzLmNoYW5nZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luKHVzZXIpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnMgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QoJy9hcGkvVXNlci9Mb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdC5hcHBsaWNhdGlvblVzZXJJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3VsdC5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llLnNldCgnQVVJRCcsIHRoaXMudXNlcklkLnRvU3RyaW5nKCksIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9icy5uZXh0KHRoaXMudXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llLmRlbGV0ZSgnQVVJRCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9icy5uZXh0KHRoaXMudXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHNhdmVMb2dpblRpbWUoZnJvbUNoZWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb250aW51ZVNhdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZnJvbUNoZWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3IERhdGUodGhpcy51c2VyLmxhc3RMb2dnZWRJbkR0KSA8IGQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlU2F2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGludWVTYXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250aW51ZVNhdmUpIHtcclxuICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL1VzZXIvVXBkYXRlVGltZScsXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMb2dpbih1cmwpIHtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IE9ic2VydmFibGUuY3JlYXRlKG9icyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBteUNvb2tpZSA9IENvb2tpZS5nZXQoJ0FVSUQnKTtcclxuICAgICAgICAgICAgaWYgKG15Q29va2llICE9PSBudWxsICYmIG15Q29va2llICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlcihteUNvb2tpZSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSByZXMuYXBwbGljYXRpb25Vc2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVMb2dpblRpbWUodHJ1ZSkuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnMubmV4dCh0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9icy5uZXh0KHRoaXMuaXNMb2dnZWRJbik7XHJcbiAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJywgdXJsLnN1YnN0cmluZygxKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNoYW5nZShsb2dpbikge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGxvZ2luO1xyXG4gICAgICAgIHRoaXMudXNlck9iamVjdENoYW5nZS5uZXh0KHRoaXMudXNlcik7XHJcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlLm5leHQodGhpcy51c2VySWQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UubmV4dCh0aGlzLmlzTG9nZ2VkSW4pO1xyXG4gICAgICAgIHRoaXMudXNlckxpc3RPYmplY3RDaGFuZ2UubmV4dCh0aGlzLnVzZXJMaXN0KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anNcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL1NldHRpbmcvR2V0U2V0dGluZ3MnKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvU2V0dGluZy9HZXRTdGF0ZXMnKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3VudHJpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvU2V0dGluZy9HZXRDb3VudHJpZXMnKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U2V0dGluZyhzZXR0aW5nSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL2FwaS9TZXR0aW5nL0dldFNldHRpbmc/c2V0dGluZ0lkPSR7c2V0dGluZ0lkfWApXHJcbiAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZXR0aW5ncyhzZXR0aW5nKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvU2V0dGluZy9VcGRhdGVTZXR0aW5ncycsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHNldHRpbmcpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZXR0aW5nKHNldHRpbmcpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9TZXR0aW5nL1VwZGF0ZVNldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2V0dGluZyksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1jb29raWVzL25nMi1jb29raWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWNvb2tpZXMvbmcyLWNvb2tpZXNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDI+QWRtaW48L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFic2V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWIgaGVhZGluZz1cXFwiQXJ0aWNsZXNcXFwiPjxhcnRpY2xlLWFkbWluLWxpc3QgW2FjdGl2ZU9ubHldPVxcXCJ0cnVlXFxcIj48L2FydGljbGUtYWRtaW4tbGlzdD48L3RhYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFiIGhlYWRpbmc9XFxcIkFyY2hpdmVkIEFydGljbGVzXFxcIj48YXJ0aWNsZS1hZG1pbi1saXN0IFthY3RpdmVPbmx5XT1cXFwiZmFsc2VcXFwiPjwvYXJ0aWNsZS1hZG1pbi1saXN0PjwvdGFiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWIgaGVhZGluZz1cXFwiVXNlcnNcXFwiPjx1c2VyLWxpc3Q+PC91c2VyLWxpc3Q+PC90YWI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYiBoZWFkaW5nPVxcXCJDb21tZW50c1xcXCI+PGNvbW1lbnQtYWRtaW4tbGlzdD48L2NvbW1lbnQtYWRtaW4tbGlzdD48L3RhYj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS51c2VyLmlzU3lzdGVtQWRtaW5cXFwiIGhlYWRpbmc9XFxcIkZlZWRiYWNrXFxcIj48ZmVlZGJhY2stbGlzdCBbYWRtaW5dPVxcXCJ0cnVlXFxcIj48L2ZlZWRiYWNrLWxpc3Q+PC90YWI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYiAqbmdJZj1cXFwidXNlclNlcnZpY2UudXNlci5pc1N5c3RlbUFkbWluXFxcIiBoZWFkaW5nPVxcXCJTZXR0aW5nc1xcXCI+PHNldHRpbmc+PC9zZXR0aW5nPjwvdGFiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJzZXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICAvLyBZb3UgbmVlZCB0aGlzIHNtYWxsIGhhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggYXBwbGljYXRpb24gcm9vdCB2aWV3IGNvbnRhaW5lciByZWZcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYgPSB2aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTEyJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0xMiBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGZvb3Rlci1pdGVtPjwvZm9vdGVyLWl0ZW0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBcclxuQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXJjaGl2ZS1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbQXJ0aWNsZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcmNoaXZlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBhcnRpY2xlcyA9IFtdO1xyXG4gICAgcHVibGljIGRhdGU6IERhdGU7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGljbGVTZXJ2aWNlOiBBcnRpY2xlU2VydmljZSwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFydGljbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocGFyYW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gcGFyYW1bJ2RhdGUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBwYXJhbVsndGl0bGUnXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UuZ2V0QXJjaGl2ZXNCeU1vbnRoKHRoaXMuZGF0ZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYXJ0aWNsZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBhcnRpY2xlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVjb250YWluZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldEFydGljbGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL0FydGljbGUvR2V0QXJ0aWNsZXMnKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBcnRpY2xlKGFydGljbGVJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL0FydGljbGUvRGVsZXRlQXJ0aWNsZT9hcnRpY2xlSWQ9JHthcnRpY2xlSWR9YCkubWFwKHJlcyA9PiByZXMuanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJ0aWNsZXNMaXN0KGFjdGl2ZU9ubHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL2FwaS9BcnRpY2xlL0dldEFydGljbGVzTGlzdD9hY3RpdmVPbmx5PSR7YWN0aXZlT25seX1gKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcnRpY2xlKGFydGljbGVJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL0FydGljbGUvR2V0QXJ0aWNsZT9hcnRpY2xlSWQ9JHthcnRpY2xlSWR9YClcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJjaGl2ZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9hcGkvQXJ0aWNsZS9HZXRBcmNoaXZlTGlzdGApXHJcbiAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFyY2hpdmVzQnlNb250aChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL0FydGljbGUvR2V0QXJjaGl2ZXNCeU1vbnRoP3N0YXJ0PSR7aWR9YClcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFydGljbGUoYXJ0aWNsZSkge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL0FydGljbGUvVXBkYXRlQXJ0aWNsZScsXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhcnRpY2xlKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kTm90aWZpY2F0aW9uKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9BcnRpY2xlL1NlbmROb3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhcnRpY2xlKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kU3VibWl0dGVkTm90aWZpY2F0aW9uKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9BcnRpY2xlL1NlbmRTdWJtaXR0ZWROb3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhcnRpY2xlKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJhcnRpY2xlcy5sZW5ndGggPCAxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgYXJ0aWNsZSBvZiBhcnRpY2xlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZS1pdGVtIFthcnRpY2xlXT1cXFwiYXJ0aWNsZVxcXCI+PC9hcnRpY2xlLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFyY2hpdmUtbGlzdD48L2FyY2hpdmUtbGlzdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FyY2hpdmUtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcmNoaXZlbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbQXJ0aWNsZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcmNoaXZlTGlzdENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgYXJjaGl2ZXMgPSBbXTtcclxuICAgIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UuZ2V0QXJjaGl2ZUxpc3QoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGFyY2hpdmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJjaGl2ZXMgPSBhcmNoaXZlcztcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5BcmNoaXZlczwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImFyY2hpdmVzLmxlbmd0aCA8IDEgJiYgIWxvYWRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcImxvYWRlZCAmJiBhcmNoaXZlcy5sZW5ndGggPCAxXFxcIj5cXHJcXG4gICAgICAgICAgICBUaGVyZSBhcmUgbm8gYXJjaGl2ZXNcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJjaGl2ZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDEwcHhcXFwiICpuZ0Zvcj1cXFwibGV0IGFyY2hpdmUgb2YgYXJjaGl2ZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2FyY2hpdmVzJywgeyBkYXRlOiBhcmNoaXZlLm1vbnRoU3RhcnQsIHRpdGxlOiBhcmNoaXZlLmFyY2hpdmVOYW1lIH0gXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7e2FyY2hpdmUuYXJjaGl2ZU5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVsaXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcmNoaXZlcmVkaXJlY3QnLFxyXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBBcmNoaXZlUmVkaXJlY3RDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBkYXRlOiBEYXRlO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocGFyYW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gcGFyYW1bJ2RhdGUnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBwYXJhbVsndGl0bGUnXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hcmNoaXZlXCIsIHsgZGF0ZTogdGhpcy5kYXRlLCB0aXRsZTogdGhpcy50aXRsZSB9XSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVyZWRpcmVjdC5jb21wb25lbnQudHMiLCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXJ0aWNsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcnRpY2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnXHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ltYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgaGVsbG86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcnRpY2xlLWFkbWluLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlQWRtaW5MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2RlbGV0ZU1vZGFsJykgcHVibGljIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBwdWJsaWMgYXJ0aWNsZXMgPSBbXTtcclxuICAgIEBJbnB1dCgpIGFjdGl2ZU9ubHkgPSBmYWxzZTtcclxuXHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ0RlbGV0ZSBBcnRpY2xlJztcclxuICAgIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFydGljbGU/JztcclxuICAgIGNvbmZpcm1UZXh0OiBzdHJpbmcgPSAnPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS10aHVtYnMtby11cFwiPjwvaT4mbmJzcDtZZXMnO1xyXG4gICAgY2FuY2VsVGV4dDogc3RyaW5nID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blwiPjwvaT4mbmJzcDtObyc7XHJcblxyXG4gICAgaGlkZGVuVGl0bGU6IHN0cmluZyA9ICdTaG93IEFydGljbGUnO1xyXG4gICAgaGlkZGVuTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFrZSB0aGlzIGFydGljbGUgdmlzaWJsZT8nO1xyXG5cclxuICAgIG5ld1RpdGxlOiBzdHJpbmcgPSAnTWFyayBhcyBSZWFkJztcclxuICAgIG5ld01lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1hcmsgdGhpcyBpdGVtIGFzIHJlYWQ/JztcclxuXHJcbiAgICByZWFkVGl0bGU6IHN0cmluZyA9ICdNYXJrIGFzIFVucmVhZCc7XHJcbiAgICByZWFkTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGl0ZW0gYXMgdW5yZWFkPyc7XHJcblxyXG4gICAgdmlzaWJsZVRpdGxlOiBzdHJpbmcgPSAnSGlkZSBBcnRpY2xlJztcclxuICAgIHZpc2libGVNZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBoaWRlIHRoaXMgYXJ0aWNsZT8nO1xyXG5cclxuICAgIGltYWdlc1RvRGVsZXRlOiBJbWFnZVtdID0gW107XHJcblxyXG4gICAgbG9hZGVkID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGZiVCA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFydGljbGVzTGlzdCh0aGlzLmFjdGl2ZU9ubHkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoYXJ0aWNsZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlcyA9IGFydGljbGVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZiVCA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybUNsaWNrZWQoYXJ0aWNsZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmRlbGV0ZUltYWdlcyhhcnRpY2xlLmFydGljbGVJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNUb0RlbGV0ZSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZXNUb0RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNUb0RlbGV0ZS5mb3JFYWNoKHggPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHguZXh0ZXJuYWxJZCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShgLyR7eC5leHRlcm5hbElkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LmV4dGVybmFsQWxidW1JZCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShgLyR7eC5leHRlcm5hbEFsYnVtSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UuZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmFydGljbGVJZCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuYXJ0aWNsZXMuaW5kZXhPZihhcnRpY2xlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBcnRpY2xlKGFydGljbGUpIHtcclxuICAgICAgICBhcnRpY2xlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGFydGljbGUuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnNhdmVBcnRpY2xlKGFydGljbGUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGFydGljbGUuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5zZW5kTm90aWZpY2F0aW9uKGFydGljbGUpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUFydGljbGUoYXJ0aWNsZSkge1xyXG4gICAgICAgIGFydGljbGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2F2ZUFydGljbGUoYXJ0aWNsZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrUmVhZChhcnRpY2xlKSB7XHJcbiAgICAgICAgYXJ0aWNsZS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2F2ZUFydGljbGUoYXJ0aWNsZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrVW5SZWFkKGFydGljbGUpIHtcclxuICAgICAgICBhcnRpY2xlLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnNhdmVBcnRpY2xlKGFydGljbGUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWFkbWlubGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlLm1vZGVsJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBoZWxsbzogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcclxuXHJcbiAgICBpbWFnZXM6IEltYWdlW10gPSBbXTtcclxuICAgIGZpbGVzID0gW107XHJcbiAgICBoZWFkZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1zZ3M6IE1lc3NhZ2VbXTtcclxuICAgIGhlYWRlck1zZ3M6IE1lc3NhZ2VbXTtcclxuICAgIGltYWdlVXJsID0gJyc7XHJcbiAgICBpbWFnZXNUb0RlbGV0ZTogSW1hZ2VbXSA9IFtdO1xyXG5cclxuICAgIGltYWdlQ2hhbmdlID0gbmV3IFN1YmplY3Q8SW1hZ2VbXT4oKTtcclxuICAgIGZiQSA9ICcnO1xyXG4gICAgZmJTID0gJyc7XHJcbiAgICBmYlAgPSAnJztcclxuICAgIGZiVCA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmJBID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAyKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmJTID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZiUCA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaGVsbG8oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbml0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2s6IHRoaXMuZmJBXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgeyBzY29wZTogJ3B1Ymxpc2hfcGFnZXMsbWFuYWdlX3BhZ2VzLHVzZXJfcGhvdG9zJyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZUltYWdlcyhhcnRpY2xlSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL2FwaS9JbWFnZS9HZXRJbWFnZXNCeUFydGljbGVJZD9hcnRpY2xlSWQ9JHthcnRpY2xlSWR9YClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VzQnlBcnRpY2xlSWQoYXJ0aWNsZUlkKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDA0KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYlQgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9hcGkvSW1hZ2UvR2V0SW1hZ2VzQnlBcnRpY2xlSWQ/YXJ0aWNsZUlkPSR7YXJ0aWNsZUlkfWApXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKHggPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXN0RGF0ZSA9IG5ldyBEYXRlKHgudXJsUmV0cmlldmFsRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXN0RGF0ZS5zZXREYXRlKHBhc3REYXRlLmdldERhdGUoKSArIDcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzdERhdGUgPCBub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LmV4dGVybmFsSWQgIT09IG51bGwgJiYgeC5pc1ZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShgLyR7eC5leHRlcm5hbElkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiAnc291cmNlLHRodW1ibmFpbHN7dXJpfScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZmJUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguaW1hZ2VVcmwgPSByZXMuc291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50aHVtYm5haWxVcmwgPSByZXMudGh1bWJuYWlscy5kYXRhWzBdLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudXJsUmV0cmlldmFsRGF0ZSA9IG5vdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmltYWdlcy5pbmRleE9mKHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaW5kZXgsIDEsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHguZXh0ZXJuYWxJZCAhPT0gbnVsbCAmJiAheC5pc1ZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKGAvJHt4LmV4dGVybmFsSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogJ3NvdXJjZSxhbGJ1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5pbWFnZVVybCA9IHJlcy5zb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5leHRlcm5hbEFsYnVtSWQgPSByZXMuYWxidW0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC51cmxSZXRyaWV2YWxEYXRlID0gbm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2UoeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW1hZ2VzLmluZGV4T2YoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaW5kZXgsIDEsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzYW5pdGl6ZSh1cmwpIHtcclxuICAgICAgICBsZXQgc2FuaXRpemVkVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpO1xyXG4gICAgICAgIHJldHVybiBzYW5pdGl6ZWRVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGxvYWQoZXZlbnQsIGFydGljbGVJZCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZXZlbnQuZmlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlcy5wdXNoKGZpbGUpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5hcnRpY2xlSWQgPSBhcnRpY2xlSWQ7XHJcbiAgICAgICAgICAgIGltZy5jYXB0aW9uVGV4dCA9IGZpbGUuY2FwdGlvblRleHQ7XHJcbiAgICAgICAgICAgIGltZy5pbWFnZVVybCA9IGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XHJcbiAgICAgICAgICAgIGltZy50aHVtYm5haWxVcmwgPSBmaWxlLm9iamVjdFVSTC5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5pbmNsdWRlcygndmlkZW8nKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nLmlzVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nLmlzVmlkZW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRJbWFnZShpbWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBzdW1tYXJ5OiAnRmlsZSBVcGxvYWRlZCcsIGRldGFpbDogJycgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZWFkZXJVcGxvYWQoZXZlbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGV2ZW50LmZpbGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhlYWRlck1zZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLmhlYWRlck1zZ3MucHVzaCh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdGaWxlIFVwbG9hZGVkJywgZGV0YWlsOiAnJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJbWFnZShpbWFnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChgL2FwaS9JbWFnZS9EZWxldGVJbWFnZT9pbWFnZUlkPSR7aW1hZ2VJZH1gKS5tYXAocmVzID0+IHJlcy5qc29uKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5pbWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvSW1hZ2UvU2F2ZUltYWdlJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoaW1hZ2UpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvSW1hZ2UvVXBkYXRlSW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoaW1hZ2UpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmltYWdlQ2hhbmdlLm5leHQodGhpcy5pbWFnZXMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xyXG4gICAgaW1hZ2VJZDogbnVtYmVyO1xyXG4gICAgaW1hZ2VVcmw6IHN0cmluZztcclxuICAgIGFydGljbGVJZDogbnVtYmVyO1xyXG4gICAgY2FwdGlvblRleHQ6IHN0cmluZztcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgZXh0ZXJuYWxJZDogc3RyaW5nO1xyXG4gICAgZXh0ZXJuYWxBbGJ1bUlkOiBzdHJpbmc7XHJcbiAgICBpc1ZpZGVvOiBib29sZWFuO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgdGh1bWJuYWlsVXJsOiBzdHJpbmc7XHJcbiAgICB1cmxSZXRyaWV2YWxEYXRlOiBEYXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvaW1hZ2UubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJhcnRpY2xlcy5sZW5ndGggPCAxICYmICFsb2FkZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJhcnRpY2xlcy5sZW5ndGggPCAxICYmIGxvYWRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBUaGVyZSBhcmUgbm8gYXJ0aWNsZXMgaGVyZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZml4ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Vbi1SZWFkPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtNCBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRpdGxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlBvc3RlZCBCeTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Qb3N0ZWQgRGF0ZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5WaXNpYmxlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVkaXQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5EZWxldGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGFydGljbGUgb2YgYXJ0aWNsZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3thcnRpY2xlLmlzTmV3IHwgeWVzTm86ICdyZWFkVW5yZWFkJ319XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIWFydGljbGUuaXNOZXdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInJlYWRUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwicmVhZE1lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcIm1hcmtVblJlYWQoYXJ0aWNsZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtY2lyY2xlLW9cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJhcnRpY2xlLmlzTmV3XFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJuZXdUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwibmV3TWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwibWFya1JlYWQoYXJ0aWNsZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtY2hlY2stY2lyY2xlLW9cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtNCBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7YXJ0aWNsZS50aXRsZX19XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93OiBoaWRkZW47IHdoaXRlLXNwYWNlOm5vd3JhcDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3thcnRpY2xlLnRpdGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7YXJ0aWNsZS5hdXRob3JOYW1lfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YXJ0aWNsZS5hdXRob3JOYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7YXJ0aWNsZS5wb3N0ZWREVCB8IGZvcm1hdERhdGU6ICdNTS9ERC9ZWVlZJ319XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2FydGljbGUucG9zdGVkRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3thcnRpY2xlLnZpc2libGUgfCB5ZXNObzogJ3Zpc2libGUnfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJhcnRpY2xlLnZpc2libGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInZpc2libGVUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwidmlzaWJsZU1lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcImhpZGVBcnRpY2xlKGFydGljbGUpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIWFydGljbGUudmlzaWJsZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiaGlkZGVuVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcImhpZGRlbk1lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcInNob3dBcnRpY2xlKGFydGljbGUpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXRodW1icy1vLWRvd25cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9lZGl0LycgKyBhcnRpY2xlLmFydGljbGVJZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwibWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiY29uZmlybUNsaWNrZWQoYXJ0aWNsZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmFuXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNkZWxldGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImRlbGV0ZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkFydGljbGUgRGVsZXRlZDwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIEFydGljbGUgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVhZG1pbmxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBBcnRpY2xlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZSdcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcnRpY2xlLWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJ0aWNsZS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGFydGljbGU7XHJcbiAgICBASW5wdXQoKSBpZCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpY2xlU2VydmljZTogQXJ0aWNsZVNlcnZpY2UsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHBhcmFtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFydGljbGUodGhpcy5pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48YSBbcm91dGVyTGlua109XFxcIlsnL3ZpZXcvJyArIGFydGljbGUuYXJ0aWNsZUlkXVxcXCI+XFxyXFxuICAgIDxoMT57eyBhcnRpY2xlLnRpdGxlIH19PC9oMT5cXHJcXG48L2E+XFxyXFxuPGg2IGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPlxcclxcbiAgICAtIFBvc3RlZCBCeToge3sgYXJ0aWNsZS5hdXRob3JOYW1lIH19IG9uIHt7IGFydGljbGUucG9zdGVkRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWScgfX1cXHJcXG48L2g2PlxcclxcbjxkaXYgW2lubmVySFRNTF09XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnRcXFwiPjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPG5nLWNhcm91c2VsIFtpZF09XFxcImFydGljbGUuYXJ0aWNsZUlkXFxcIj48L25nLWNhcm91c2VsPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGNvbW1lbnQtbGlzdCBbaWRdPVxcXCJhcnRpY2xlLmFydGljbGVJZFxcXCIgPjwvY29tbWVudC1saXN0PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlJztcclxuXHJcbkBcclxuQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXJ0aWNsZS1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpZCA9IDA7XHJcbiAgICBhcnRpY2xlID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpY2xlU2VydmljZTogQXJ0aWNsZVNlcnZpY2UsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChwYXJhbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1bJ2lkJ107XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5nZXRBcnRpY2xlKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFydGljbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJ0aWNsZS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuICAgIDxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZS1pdGVtIFthcnRpY2xlXT1cXFwiYXJ0aWNsZVxcXCI+PC9hcnRpY2xlLWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcmNoaXZlLWxpc3Q+PC9hcmNoaXZlLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVjb250YWluZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcnRpY2xlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FydGljbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbWFnZS5tb2RlbCc7XHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFydGljbGVEZXRhaWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXJ0aWNsZWRldGFpbC5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUsIEdyb3dsTW9kdWxlLCBNZXNzYWdlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRmFjZWJvb2tTZXJ2aWNlLCBGYWNlYm9va0luaXRQYXJhbXMgfSBmcm9tICduZzItZmFjZWJvb2stc2RrJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5kZWNsYXJlIHZhciBoZWxsbzogYW55O1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FydGljbGUtZWRpdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZWRpdC5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgnYXJ0aWNsZU1vZGFsJykgcHVibGljIGFydGljbGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdzYXZpbmdNb2RhbCcpIHB1YmxpYyBzYXZpbmdNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdsb2dpbk1vZGFsJykgcHVibGljIGxvZ2luTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIEBJbnB1dCgpIGlkID0gMDtcclxuICAgIGFydGljbGUgPSBuZXcgQXJ0aWNsZURldGFpbCgpO1xyXG4gICAgLy9hY2Nlc3NUb2tlbiA9ICcnO1xyXG4gICAgYWxidW1JZCA9ICcnO1xyXG4gICAgLy9pbWFnZUlkID0gJyc7XHJcbiAgICBjdXJyZW50SW1hZ2U6IEltYWdlO1xyXG4gICAgaW1hZ2VDb3VudCA9IDA7XHJcbiAgICBmYkEgPSAnJztcclxuICAgIGZiUyA9ICcnO1xyXG4gICAgZmJQID0gJyc7XHJcbiAgICBmYlQgPSAnJztcclxuXHJcbiAgICBjdXJyZW50U3RhdGUgPSAnRWRpdCc7XHJcbiAgICBpc05ldyA9IGZhbHNlO1xyXG5cclxuICAgIHVzZXI6IEFwcFVzZXI7XHJcbiAgICBpc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICBpbWFnZXM6IEltYWdlW10gPSBbXTtcclxuICAgIG15SW1hZ2VzOiBJbWFnZVtdID0gW107XHJcbiAgICBpbWFnZURldGFpbHM6IEltYWdlW10gPSBbXTtcclxuICAgIGltYWdlc3RvRGVsZXRlID0gW107XHJcbiAgICBub3RpZnlVc2VyczogQXBwVXNlcltdID0gW107XHJcbiAgICBtYXhEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICB1c2VyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBpbWFnZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBmYjogRmFjZWJvb2tTZXJ2aWNlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UpIHsgfVxyXG4gICAgXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmltYWdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2hlY2tMb2dpbih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYkEgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZiUGFyYW1zOiBGYWNlYm9va0luaXRQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogdGhpcy5mYkEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ZmJtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICd2Mi44J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiLmluaXQoZmJQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNlYm9vazogdGhpcy5mYkFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NvcGU6ICdwdWJsaXNoX3BhZ2VzLG1hbmFnZV9wYWdlcyx1c2VyX3Bob3RvcycgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiUyA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiUCA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiVCA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJPYmplY3RDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChwYXJhbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLmdldEFydGljbGUodGhpcy5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmdldEltYWdlc0J5QXJ0aWNsZUlkKHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5pbWFnZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9ICdOZXcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5hdXRob3JOYW1lID0gdGhpcy51c2VyLmZpcnN0TmFtZSArICcgJyArIHRoaXMudXNlci5sYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUucG9zdGVkRFQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5hcHBsaWNhdGlvblVzZXJJZCA9IHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUuaXNOZXcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUudGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUuYXJ0aWNsZUNvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcyA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3Vic2NyaXB0aW9uID0gdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZS5leHRlcm5hbEFsYnVtSWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYnVtSWQgPSBpbWFnZS5leHRlcm5hbEFsYnVtSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vICAgIGlmICghdGhpcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHRoaXMubG9naW5Nb2RhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgLy8gICAgICAgICAgICB0aGlzLmxvZ2luTW9kYWwuc2hvdygpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99XHJcblxyXG4gICAgZGlzbWlzc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2VkaXQvJHt0aGlzLmFydGljbGUuYXJ0aWNsZUlkfWBdKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzTG9naW5Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLnZpc2libGUgPSAhdGhpcy5hcnRpY2xlLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQXJjaGl2ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLmFyY2hpdmVkID0gIXRoaXMuYXJ0aWNsZS5hcmNoaXZlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kTm90aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmIudWkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdmZWVkJyxcclxuICAgICAgICAgICAgbGluazogYGh0dHA6Ly93d3cubXllZ2dldHRmYW1pbHkuY29tL3ZpZXcvJHt0aGlzLmFydGljbGUuYXJ0aWNsZUlkfWAsXHJcbiAgICAgICAgICAgIHF1b3RlOiBgTXkgRWdnZXR0IEZhbWlseSBoYXMgdXBkYXRlZCB0aGUgYXJ0aWNsZSBjYWxsZWQ6ICR7dGhpcy5hcnRpY2xlLnRpdGxlfWAsXHJcbiAgICAgICAgICAgIGZyb206IHRoaXMuZmJQXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2VuZE5vdGlmaWNhdGlvbih0aGlzLmFydGljbGUpLnN1YnNjcmliZSh4ID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmltYWdlc3RvRGVsZXRlLnB1c2goaW1hZ2UpOyBcclxuXHJcbiAgICAgICAgdmFyIGluZGV4MiA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlcy5pbmRleE9mKGltYWdlKTtcclxuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5pbWFnZXMuc3BsaWNlKGluZGV4MiwgMSk7ICBcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5teUltYWdlcy5pbmRleE9mKGltYWdlKTtcclxuICAgICAgICB0aGlzLm15SW1hZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleDEgPSB0aGlzLmltYWdlU2VydmljZS5maWxlcy5pbmRleE9mKGltYWdlKTtcclxuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5maWxlcy5zcGxpY2UoaW5kZXgxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlUHJvZmlsZShmb3JtOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNhdmluZ01vZGFsLnNob3coKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWxsbygpXHJcbiAgICAgICAgICAgIC5pbml0KHtcclxuICAgICAgICAgICAgICAgIGZhY2Vib29rOiB0aGlzLmZiQVxyXG4gICAgICAgICAgICB9LCB7IHNjb3BlOiAncHVibGlzaF9wYWdlcyxtYW5hZ2VfcGFnZXMsdXNlcl9waG90b3MnIH0pO1xyXG5cclxuICAgICAgICBpZiAoZm9ybS5pbWFnZXNUb0RlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvcm0uaW1hZ2VzVG9EZWxldGUuZm9yRWFjaCh4ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pbWFnZUlkID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBpKGAvJHt4LmV4dGVybmFsSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZGVsZXRlSW1hZ2UoeC5pbWFnZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmFydGljbGUudGl0bGUgPSBmb3JtLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS5hcmNoaXZlZCA9IGZvcm0uYXJjaGl2ZWQ7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLmFydGljbGVDb250ZW50ID0gZm9ybS5hcnRpY2xlQ29udGVudDtcclxuICAgICAgICB0aGlzLmFydGljbGUudmlzaWJsZSA9IGZvcm0udmlzaWJsZTtcclxuICAgICAgICB0aGlzLm15SW1hZ2VzID0gZm9ybS5pbWFnZXM7XHJcbiAgICAgICAgdGhpcy5hbGJ1bUlkID0gZm9ybS5hbGJ1bUlkO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VEZXRhaWxzID0gZm9ybS5pbWFnZURldGFpbHM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXN0b0RlbGV0ZSA9IGZvcm0uaW1hZ2VzdG9EZWxldGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hcnRpY2xlU2VydmljZS5zYXZlQXJ0aWNsZSh0aGlzLmFydGljbGUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VEZXRhaWxzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHguaW1hZ2VJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnVwZGF0ZUltYWdlKHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IE9ic2VydmFibGUuY3JlYXRlKG9icyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtLmltYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5hbGJ1bUlkID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcGkoYC8ke3RoaXMuZmJQfS9hbGJ1bXNgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxidW1JZCA9IHJlc3VsdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icy5uZXh0KHRoaXMuYWxidW1JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYnVtSWQgPSBmb3JtLmFsYnVtSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzLm5leHQodGhpcy5hbGJ1bUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9icy5uZXh0KHRoaXMuYWxidW1JZCk7XHJcbiAgICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcy5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm15SW1hZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5teUltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHRoaXMubXlJbWFnZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UudHlwZS5pbmNsdWRlcygndmlkZW8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKGAvJHt0aGlzLmZiUH0vdmlkZW9zYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB0aGlzLmN1cnJlbnRJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShgLyR7cmVzdWx0LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiAnc291cmNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZmJUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmFydGljbGVJZCA9IHRoaXMuYXJ0aWNsZS5hcnRpY2xlSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNhcHRpb25UZXh0ID0gdGhpcy5jdXJyZW50SW1hZ2UuY2FwdGlvblRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmV4dGVybmFsQWxidW1JZCA9IHRoaXMuYWxidW1JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuaW1hZ2VVcmwgPSByZXMuc291cmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5leHRlcm5hbElkID0gcmVzLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5pc1ZpZGVvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2Uuc2F2ZUltYWdlKGltZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRoaXMubXlJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaShgLyR7dGhpcy5hbGJ1bUlkfS9waG90b3NgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHRoaXMuY3VycmVudEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZmJUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKGAvJHtyZXN1bHQuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6ICdzb3VyY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuYXJ0aWNsZUlkID0gdGhpcy5hcnRpY2xlLmFydGljbGVJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2FwdGlvblRleHQgPSB0aGlzLmN1cnJlbnRJbWFnZS5jYXB0aW9uVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuZXh0ZXJuYWxBbGJ1bUlkID0gdGhpcy5hbGJ1bUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5leHRlcm5hbElkID0gcmVzLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5pbWFnZVVybCA9IHJlcy5zb3VyY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmlzVmlkZW8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2Uuc2F2ZUltYWdlKGltZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRoaXMubXlJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlcyA9IHRoaXMuaW1hZ2VEZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmZpbGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXN0b0RlbGV0ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZ01vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVNb2RhbC5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFydGljbGUuaXNOZXcgJiYgdGhpcy5hcnRpY2xlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZiLnVpKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGxpbms6IGBodHRwOi8vd3d3Lm15ZWdnZXR0ZmFtaWx5LmNvbS92aWV3LyR7dGhpcy5hcnRpY2xlLmFydGljbGVJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBxdW90ZTogYE15IEVnZ2V0dCBGYW1pbHkgaGFzIGFkZGVkIHRoZSBhcnRpY2xlIGNhbGxlZDogJHt0aGlzLmFydGljbGUudGl0bGV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgZnJvbTogdGhpcy5mYlBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2VuZE5vdGlmaWNhdGlvbih0aGlzLmFydGljbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBibGFoID0geDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJ0aWNsZS5pc05ldyAmJiAhdGhpcy51c2VyU2VydmljZS51c2VyLmlzQWRtaW4pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnNlbmRTdWJtaXR0ZWROb3RpZmljYXRpb24odGhpcy5hcnRpY2xlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxhaCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuaW1hZ2VzID0gdGhpcy5pbWFnZURldGFpbHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5maWxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXN0b0RlbGV0ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJ0aWNsZS5pc05ldyAmJiB0aGlzLmFydGljbGUudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5mYi51aSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgbWV0aG9kOiAnZmVlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgbGluazogYGh0dHA6Ly93d3cubXllZ2dldHRmYW1pbHkuY29tL3ZpZXcvJHt0aGlzLmFydGljbGUuYXJ0aWNsZUlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgcXVvdGU6IGBNeSBFZ2dldHQgRmFtaWx5IGhhcyBhZGRlZCB0aGUgYXJ0aWNsZSBjYWxsZWQ6ICR7dGhpcy5hcnRpY2xlLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgZnJvbTogdGhpcy5mYlBcclxuICAgICAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGVTZXJ2aWNlLnNlbmROb3RpZmljYXRpb24odGhpcy5hcnRpY2xlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsYWggPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnRpY2xlLmlzTmV3ICYmICF0aGlzLnVzZXJTZXJ2aWNlLnVzZXIuaXNBZG1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2Uuc2VuZFN1Ym1pdHRlZE5vdGlmaWNhdGlvbih0aGlzLmFydGljbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxhaCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC50cyIsIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi9pbWFnZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsIHtcclxuICAgIGFydGljbGVJZDogbnVtYmVyO1xyXG4gICAgYXJ0aWNsZUNvbnRlbnQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwb3N0ZWREVDogRGF0ZTtcclxuICAgIGFwcGxpY2F0aW9uVXNlcklkOiBudW1iZXI7XHJcbiAgICBhdXRob3JOYW1lOiBzdHJpbmc7XHJcbiAgICBhcmNoaXZlZDogYm9vbGVhbjtcclxuICAgIHZpc2libGU6IGJvb2xlYW47XHJcbiAgICBpc05ldzogYm9vbGVhbjtcclxuICAgIGltYWdlczogSW1hZ2VbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL2FydGljbGVkZXRhaWwubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItZmFjZWJvb2stc2RrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWZhY2Vib29rLXNka1wiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMj57e2N1cnJlbnRTdGF0ZX19IEFydGljbGU8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0aXRsZU1vZGFsLnNob3coKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO0VkaXQgVGl0bGU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiY29udGVudE1vZGFsLnNob3coKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO0VkaXQgQ29udGVudDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJpbWFnZU1vZGFsLnNob3coKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiZuYnNwO0FkZCBJbWFnZXMvVmlkZW9zPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcImltYWdlU2VydmljZS5pbWFnZXMgIT09IG51bGwgJiYgaW1hZ2VTZXJ2aWNlLmltYWdlcy5sZW5ndGggPCAxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJjYXB0aW9uTW9kYWwuc2hvdygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7RWRpdCBJbWFnZXMvVmlkZW9zPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCIodXNlciAmJiB1c2VyLmlzQWRtaW4pXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJkYXRlTW9kYWwuc2hvdygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7Q2hhbmdlIERhdGU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIiFhcnRpY2xlLnZpc2libGUgJiYgKHVzZXIgJiYgdXNlci5pc0FkbWluKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVmlzaWJpbGl0eSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7TWFrZSBWaXNpYmxlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJhcnRpY2xlLnZpc2libGUgJiYgKHVzZXIgJiYgdXNlci5pc0FkbWluKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVmlzaWJpbGl0eSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXFxcIj48L2k+Jm5ic3A7TWFrZSBIaWRkZW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIiFhcnRpY2xlLmFyY2hpdmVkICYmICh1c2VyICYmIHVzZXIuaXNBZG1pbilcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRvZ2dsZUFyY2hpdmVkKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT4mbmJzcDtBcmNoaXZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJhcnRpY2xlLmFyY2hpdmVkICYmICh1c2VyICYmIHVzZXIuaXNBZG1pbilcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRvZ2dsZUFyY2hpdmVkKClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT4mbmJzcDtVbi1BcmNoaXZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiFmb3JtLmZvcm0udmFsaWRcXFwiIChjbGljayk9XFxcImZvcm0ubmdTdWJtaXQuZW1pdCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXFxcIj48L3NwYW4+IFNhdmUgQ2hhbmdlczwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiYXJ0aWNsZS52aXNpYmxlICYmICFhcnRpY2xlLmlzTmV3ICYmICh1c2VyICYmIHVzZXIuaXNBZG1pbilcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNlbmROb3RpZmljYXRpb24oKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWJ1bGxob3JuXFxcIj48L2k+Jm5ic3A7Tm90aWZ5IFVzZXJzIG9mIENoYW5nZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlUHJvZmlsZShmb3JtLnZhbHVlKTsgZm9ybS5yZXNldCgpXFxcIiBlbmN0eXBlPVxcXCJtdWx0aXBhcnQvZm9ybS1kYXRhXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgWyhuZ01vZGVsKV09XFxcImFydGljbGUudGl0bGVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXJ0aWNsZUNvbnRlbnRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFydGljbGVDb250ZW50XFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcInZpc2libGVcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLnZpc2libGVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXJjaGl2ZWRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFyY2hpdmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImltYWdlc1xcXCIgWyhuZ01vZGVsKV09XFxcImltYWdlU2VydmljZS5maWxlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJpbWFnZURldGFpbHNcXFwiIFsobmdNb2RlbCldPVxcXCJpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImFsYnVtSWRcXFwiIFsobmdNb2RlbCldPVxcXCJhbGJ1bUlkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImltYWdlc1RvRGVsZXRlXFxcIiBbKG5nTW9kZWwpXT1cXFwiaW1hZ2VzdG9EZWxldGVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiYXBwbGljYXRpb25Vc2VySWRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFwcGxpY2F0aW9uVXNlcklkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImlzTmV3XFxcIiBbKG5nTW9kZWwpXT1cXFwiYXJ0aWNsZS5pc05ld1xcXCIgLz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJhcnRpY2xlLnRpdGxlID09PSB1bmRlZmluZWQgfHwgYXJ0aWNsZS50aXRsZSA9PT0gJydcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlRpdGxlIFJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGFydGljbGUudGl0bGUgfX08L2gxPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBQb3N0ZWQgQnk6IHt7IGFydGljbGUuYXV0aG9yTmFtZSB9fSBvbiB7eyBhcnRpY2xlLnBvc3RlZERUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVknOiAhaXNOZXcgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBhcnRpY2xlLmFydGljbGVDb250ZW50ID09PSAnJ1xcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+Q29udGVudCBSZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XFxcImFydGljbGUuYXJ0aWNsZUNvbnRlbnRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlcyAhPT0gbnVsbCAmJiBpbWFnZVNlcnZpY2UuaW1hZ2VzLmxlbmd0aCA+IDBcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2Fyb3VzZWwgW2ludGVydmFsXT1cXFwiNTAwMFxcXCIgW25vV3JhcF09XFxcImZhbHNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbGlkZSAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiBbYWN0aXZlXT1cXFwiaW1hZ2UuaXNBY3RpdmVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiFpbWFnZS5pc1ZpZGVvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlLmltYWdlVXJsKVxcXCIgY2xhc3M9XFxcImZsdWlkIGNlbnRlci1ibG9ja1xcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8tcGxheWVyIFtpbWFnZV09XFxcImltYWdlXFxcIj48L3ZpZGVvLXBsYXllcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1jYXB0aW9uIGFsZXJ0XFxcIiBzdHlsZT1cXFwiYm90dG9tOiAtNjBweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7aW1hZ2UuY2FwdGlvblRleHR9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xpZGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2Fyb3VzZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj4mbmJzcDs8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNsb2dpbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiAob25IaWRlKT1cXFwiZGlzbWlzc0xvZ2luTW9kYWwoKVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImxvZ2luTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3UgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIGJlIGFuIGFkbWluaXN0cmF0b3IgdG8gYWNjZXNzIHRoaXMgcGFnZS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2FydGljbGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NNb2RhbCgpXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiYXJ0aWNsZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZXMgU2F2ZWQgU3VjY2Vzc2Z1bGx5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQ2hhbmdlcyB0byBhcnRpY2xlIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkuIFZpZGVvIHVwbG9hZHMgbWF5IHRha2Ugc2V2ZXJhbCBtaW51dGVzIHRvIHByb2Nlc3Mgb24gZmFjZWJvb2ssIGFuZCBiZWNvbWUgYWN0aXZlIG9uIHRoZSBhcnRpY2xlLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjc2F2aW5nTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgW2NvbmZpZ109XFxcIntiYWNrZHJvcDogJ3N0YXRpYyd9XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+U2F2aW5nIENoYW5nZXM8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBDaGFuZ2VzIGFyZSBiZWluZyBzYXZlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBzYXZlIHByb2Nlc3MgdG8gY29tcGxldGUuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICN0aXRsZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwidGl0bGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IFRpdGxlPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLnRpdGxlXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjZGF0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZGF0ZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZSBQb3N0ZWQgRGF0ZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCIgc3R5bGU9XFxcIm1hcmdpbjogMHB4IC02cHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgWyhuZ01vZGVsKV09XFxcImFydGljbGUucG9zdGVkRFRcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgW3Nob3dXZWVrc109XFxcImZhbHNlXFxcIj48L2RhdGVwaWNrZXI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb250ZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJjb250ZW50TW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBDb250ZW50PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZWRpdG9yIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLmFydGljbGVDb250ZW50XFxcIiBbc3R5bGVdPVxcXCJ7J2hlaWdodCc6JzMyMHB4J31cXFwiPjwvcC1lZGl0b3I+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNpbWFnZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaW1hZ2VNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5BZGQgSW1hZ2VzPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZ3Jvd2wgW3ZhbHVlXT1cXFwiaW1hZ2VTZXJ2aWNlLm1zZ3NcXFwiPjwvcC1ncm93bD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPHAtZmlsZVVwbG9hZCBuYW1lPVxcXCJkZW1vW11cXFwiIHVybD1cXFwiL2ltYWdlL29uVXBsb2FkXFxcIiAob25VcGxvYWQpPVxcXCJpbWFnZVNlcnZpY2Uub25VcGxvYWQoJGV2ZW50LCBhcnRpY2xlLmFydGljbGVJZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIiBhY2NlcHQ9XFxcImltYWdlLyosdmlkZW8vKlxcXCIgbWF4RmlsZVNpemU9XFxcIjEwMDAwMDAwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgbGV0LWZpbGUgcFRlbXBsYXRlPVxcXCJmaWxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCIgKm5nSWY9XFxcIiFmaWxlLnR5cGUuaW5jbHVkZXMoJ3ZpZGVvJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGZpbGUub2JqZWN0VVJMLmNoYW5naW5nVGhpc0JyZWFrc0FwcGxpY2F0aW9uU2VjdXJpdHkpXFxcIiBoZWlnaHQ9XFxcIjc1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiZmlsZS50eXBlLmluY2x1ZGVzKCd2aWRlbycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvY3NzL3ZpZGVvLXBsYXllci5qcGdcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWxlLnNpemV9fSBieXRlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbjo8YnIgLz4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWxlLmNhcHRpb25UZXh0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IFxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHBUZW1wbGF0ZSB0eXBlPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmZpbGVzICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VTZXJ2aWNlLmZpbGVzLmxlbmd0aFxcXCI+VXBsb2FkZWQgYW5kIFJlYWR5IHRvIFN1Ym1pdDo8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmZpbGVzICE9PSB1bmRlZmluZWQgJiYgaW1hZ2VTZXJ2aWNlLmZpbGVzLmxlbmd0aFxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdy15OiBhdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBmaWxlIG9mIGltYWdlU2VydmljZS5maWxlc1xcXCIgc3R5bGU9XFxcIndpZHRoOiA5OCVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCIgKm5nSWY9XFxcIiFmaWxlLnR5cGUuaW5jbHVkZXMoJ3ZpZGVvJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoZmlsZS5vYmplY3RVUkwuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eSlcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiZmlsZS50eXBlLmluY2x1ZGVzKCd2aWRlbycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9jc3MvdmlkZW8tcGxheWVyLmpwZ1xcXCIgaGVpZ2h0PVxcXCI3NVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpbGUuc2l6ZX19IGJ5dGVzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXB0aW9uOjxici8+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsZS5jYXB0aW9uVGV4dFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvcC1maWxlVXBsb2FkPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjY2FwdGlvbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiY2FwdGlvbk1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgSW1hZ2VzPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaW1hZ2VTZXJ2aWNlLmltYWdlcyAhPT0gdW5kZWZpbmVkICYmIGltYWdlU2VydmljZS5pbWFnZXMubGVuZ3RoXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogNDAwcHg7IG92ZXJmbG93LXk6IGF1dG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZVNlcnZpY2UuaW1hZ2VzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDk4JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiICpuZ0lmPVxcXCIhaW1hZ2UuaXNWaWRlb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoaW1hZ2UuaW1hZ2VVcmwpXFxcIiBoZWlnaHQ9XFxcIjc1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAqbmdJZj1cXFwiaW1hZ2UuaXNWaWRlbyAmJiBpbWFnZS50aHVtYm5haWxVcmwgIT09IHVuZGVmaW5lZCAmJiAhaW1hZ2UudGh1bWJuYWlsVXJsLmluY2x1ZGVzKCdibG9iJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlLnRodW1ibmFpbFVybClcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiICpuZ0lmPVxcXCJpbWFnZS5pc1ZpZGVvICYmIGltYWdlLnRodW1ibmFpbFVybCAhPT0gdW5kZWZpbmVkICYmIGltYWdlLnRodW1ibmFpbFVybC5pbmNsdWRlcygnYmxvYicpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvY3NzL3ZpZGVvLXBsYXllci5qcGdcXFwiIGhlaWdodD1cXFwiNzVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FwdGlvbjogPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJpbWFnZS5jYXB0aW9uVGV4dFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVJbWFnZShpbWFnZSlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYW5cXFwiPjwvaT4gRGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9lZGl0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXJ0aWNsZWVkaXRyZWRpcmVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVFZGl0UmVkaXJlY3RDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHBhcmFtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9hcnRpY2xlL2VkaXQvJHt0aGlzLmlkfWBdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVlZGl0cmVkaXJlY3QuY29tcG9uZW50LnRzIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFydGljbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZS5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXJ0aWNsZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FydGljbGVsaXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtBcnRpY2xlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVMaXN0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBhcnRpY2xlcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWNsZVNlcnZpY2U6IEFydGljbGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXJ0aWNsZVNlcnZpY2UuZ2V0QXJ0aWNsZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGFydGljbGVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZXMgPSBhcnRpY2xlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVsaXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCIgICAgXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiYXJ0aWNsZXMubGVuZ3RoIDwgMVxcXCI+XFxyXFxuICAgICAgICA8bG9hZGluZy1pbmRpY2F0b3I+PC9sb2FkaW5nLWluZGljYXRvcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImFydGljbGVzLmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdGb3I9XFxcImxldCBhcnRpY2xlIG9mIGFydGljbGVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YXJ0aWNsZS1pdGVtIFthcnRpY2xlXT1cXFwiYXJ0aWNsZVxcXCI+PC9hcnRpY2xlLWl0ZW0+XFxyXFxuICAgICAgICAgICAgPGhyIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGVsaXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBcclxuICAgIENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FydGljbGVyZWRpcmVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVSZWRpcmVjdENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FydGljbGUvbmV3J10pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZXJlZGlyZWN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXJ0aWNsZXZpZXdyZWRpcmVjdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2PidcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlld1JlZGlyZWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHBhcmFtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbVsnaWQnXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvYXJ0aWNsZS92aWV3LyR7dGhpcy5pZH1gXSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xldmlld3JlZGlyZWN0LmNvbXBvbmVudC50cyIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb21tZW50LWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY29tbWVudGxpc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0NvbW1lbnRTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1lbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2NvbW1lbnROb0FkbWluTW9kYWwnKSBjb21tZW50Tm9BZG1pbk1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2NvbW1lbnRNb2RhbCcpIGNvbW1lbnRNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBjb21tZW50cyA9IFtdO1xyXG4gICAgQElucHV0KCkgaWQgPSAwO1xyXG4gICAgaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG5cclxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgdXNlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbW1lbnQgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBjb21tZW50JyxcclxuICAgICAgICBhcnRpY2xlSWQ6IDAsXHJcbiAgICAgICAgYXBwbGljYXRpb25Vc2VySWQ6IDAsXHJcbiAgICAgICAgaXNBZG1pbjogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1lbnRTZXJ2aWNlOiBDb21tZW50U2VydmljZSwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBzYXZlQ29tbWVudChmb3JtOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnQubWVzc2FnZSA9IGZvcm0ubWVzc2FnZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLnNhdmVDb21tZW50KHRoaXMuY29tbWVudCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmFwcHJvdmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnROb0FkbWluTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLmdldENvbW1lbnRzKHJlc3VsdC5hcnRpY2xlSWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudC5tZXNzYWdlID0gJ0VudGVyIENvbW1lbnQnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gMCB8fCB0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHBhcmFtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1bJ2lkJ107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbjtcclxuICAgICAgICB0aGlzLmNvbW1lbnQuYXJ0aWNsZUlkID0gdGhpcy5pZDtcclxuICAgICAgICBpZiAodGhpcy51c2VyU2VydmljZS51c2VyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50LmFwcGxpY2F0aW9uVXNlcklkID0gdGhpcy51c2VyU2VydmljZS51c2VyLmFwcGxpY2F0aW9uVXNlcklkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQuaXNBZG1pbiA9IHRoaXMudXNlclNlcnZpY2UudXNlci5pc0FkbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50Lm1lc3NhZ2UgPSAnRW50ZXIgQ29tbWVudCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2Uuc3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50Lm1lc3NhZ2UgPSAnRW50ZXIgQ29tbWVudCc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2UudXNlck9iamVjdENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQuYXBwbGljYXRpb25Vc2VySWQgPSB2YWx1ZS5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudC5pc0FkbWluID0gdmFsdWUuaXNBZG1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRsaXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tbWVudFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuICAgIFxyXG4gICAgZ2V0Q29tbWVudHMoYXJ0aWNsZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9hcGkvQ29tbWVudC9HZXRDb21tZW50cz9hcnRpY2xlSWQ9JHthcnRpY2xlSWR9YClcclxuICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tbWVudHNBZG1pbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9Db21tZW50L0dldENvbW1lbnRzQWRtaW4nKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWdnZXN0aW9uVmlld3ModXNlcklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYC9hcGkvQ29tbWVudC9HZXRTdWdnZXN0aW9uVmlld3M/dXNlcklkPSR7dXNlcklkfWAgKVxyXG4gICAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29tbWVudChjb21tZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL0NvbW1lbnQvU2F2ZUNvbW1lbnQnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjb21tZW50KSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb21tZW50KGNvbW1lbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvQ29tbWVudC9VcGRhdGVDb21tZW50JyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY29tbWVudCksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL2FwaS9Db21tZW50L0RlbGV0ZUNvbW1lbnQ/Y29tbWVudElkPSR7Y29tbWVudElkfWApLm1hcChyZXMgPT4gcmVzLmpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN1Z2dlc3Rpb24oZmVlZGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvQ29tbWVudC9VcGRhdGVTdWdnZXN0aW9uJyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZmVlZGJhY2spLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN1Z2dlc3Rpb24oZmVlZGJhY2tJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL0NvbW1lbnQvRGVsZXRlU3VnZ2VzdGlvbj9zdWdnZXN0aW9uSWQ9JHtmZWVkYmFja0lkfWApLm1hcChyZXMgPT4gcmVzLmpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1Z2dlc3Rpb25UeXBlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9Db21tZW50L0dldFN1Z2dlc3Rpb25UeXBlcycpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0RmVlZGJhY2soZmVlZGJhY2spIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9Db21tZW50L0luc2VydFN1Z2dlc3Rpb24nLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmZWVkYmFjayksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIENvbW1lbnRzOlxcclxcbiAgICAgICAgPC9oNT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoIDwgMVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAxMHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgIDxoNj5cXHJcXG4gICAgICAgICAgICBObyBDb21tZW50cyBoYXZlIGJlZW4gcG9zdGVkIHlldFxcclxcbiAgICAgICAgPC9oNj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoID4gMFxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDMwMHB4OyBvdmVyZmxvdzogYXV0bzsgYm9yZGVyOiAxcHggc29saWQgIzEyMTQxNlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBjb21tZW50c1xcXCI+XFxyXFxuICAgICAgICA8aDY+XFxyXFxuICAgICAgICAgICAgUG9zdGVkIEJ5OiB7eyBjb21tZW50LmFwcGxpY2F0aW9uVXNlci5maXJzdE5hbWUgfX0ge3tjb21tZW50LmFwcGxpY2F0aW9uVXNlci5sYXN0TmFtZX19IG9uIHt7IGNvbW1lbnQuY29tbWVudER0IHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQScgfX1cXHJcXG4gICAgICAgIDwvaDY+XFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTBweFxcXCI+XFxyXFxuICAgICAgICAgICAge3tjb21tZW50LmNvbW1lbnRUZXh0fX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGhyIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgTGVhdmUgYSBDb21tZW50OlxcclxcbjwvZGl2Plxcclxcblxcclxcbjxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmVDb21tZW50KGZvcm0udmFsdWUpOyBmb3JtLnJlc2V0KClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgW2Rpc2FibGVkXT1cXFwiIWlzTG9nZ2VkSW5cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2NvbW1lbnQubWVzc2FnZX19XFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBuZ01vZGVsIHJlcXVpcmVkIGNvbHM9XFxcIjUwXFxcIiByb3dzPVxcXCIzXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCIhaXNMb2dnZWRJblxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2F2ZVxcXCI+PC9zcGFuPiBTdWJtaXRcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Zvcm0+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb21tZW50Tm9BZG1pbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiY29tbWVudE5vQWRtaW5Nb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db21tZW50IFN1Ym1pdHRlZDwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFlvdXIgQ29tbWVudCBoYXMgYmVlbiBzdWJtaXR0ZWQuIEFmdGVyIGl0IGhhcyBiZWVuIGFwcHJvdmVkIGl0IHdpbGwgc2hvdyB1cCBvbiB0aGlzIHBvc3QuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNjb21tZW50TW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJjb21tZW50TW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29tbWVudCBTdWJtaXR0ZWQ8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBZb3VyIENvbW1lbnQgaGFzIGJlZW4gc3VibWl0dGVkLiBJdCBzaG91bGQgc2hvdyBvbiB0aGUgYXJ0aWNsZSBub3cuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRsaXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tZW50LnNlcnZpY2UnXHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbW1lbnQtYWRtaW4tbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb21tZW50YWRtaW5saXN0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRBZG1pbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBjb21tZW50cyA9IFtdO1xyXG4gICAgY29tbWVudHNMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdkZWxldGVNb2RhbCcpIHB1YmxpYyBkZWxldGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdEZWxldGUgQ29tbWVudCc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21tZW50Pyc7XHJcbiAgICBjb25maXJtVGV4dDogc3RyaW5nID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tdXBcIj48L2k+Jm5ic3A7WWVzJztcclxuICAgIGNhbmNlbFRleHQ6IHN0cmluZyA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLWRvd25cIj48L2k+Jm5ic3A7Tm8nO1xyXG5cclxuICAgIG5ld1RpdGxlOiBzdHJpbmcgPSAnTWFyayBhcyBSZWFkJztcclxuICAgIG5ld01lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1hcmsgdGhpcyBpdGVtIGFzIHJlYWQ/JztcclxuXHJcbiAgICByZWFkVGl0bGU6IHN0cmluZyA9ICdNYXJrIGFzIFVucmVhZCc7XHJcbiAgICByZWFkTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGl0ZW0gYXMgdW5yZWFkPyc7XHJcblxyXG4gICAgdW5BcHByb3ZlVGl0bGU6IHN0cmluZyA9ICdBcHByb3ZlIENvbW1lbnQnO1xyXG4gICAgdW5BcHByb3ZlTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gYXBwcm92ZSB0aGlzIGNvbW1lbnQ/JztcclxuXHJcbiAgICBhcHByb3ZlVGl0bGU6IHN0cmluZyA9ICdVbi1BcHByb3ZlIENvbW1lbnQnO1xyXG4gICAgYXBwcm92ZU1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIHVuLWFwcHJvdmUgdGhpcyBjb21tZW50Pyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tZW50U2VydmljZTogQ29tbWVudFNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS5nZXRDb21tZW50c0FkbWluKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybUNsaWNrZWQoY29tbWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQoY29tbWVudC5jb21tZW50SWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb21tZW50cy5pbmRleE9mKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZU1vZGFsLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHByb3ZlQ29tbWVudChjb21tZW50KSB7XHJcbiAgICAgICAgY29tbWVudC5hcHByb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgY29tbWVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudChjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuQXBwcm92ZUNvbW1lbnQoY29tbWVudCkge1xyXG4gICAgICAgIGNvbW1lbnQuYXBwcm92ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLnVwZGF0ZUNvbW1lbnQoY29tbWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrUmVhZChjb21tZW50KSB7XHJcbiAgICAgICAgY29tbWVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudChjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtVblJlYWQoY29tbWVudCkge1xyXG4gICAgICAgIGNvbW1lbnQuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlQ29tbWVudChjb21tZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnRhZG1pbmxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiY29tbWVudHMubGVuZ3RoIDwgMSAmJiAhY29tbWVudHNMb2FkZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJjb21tZW50cy5sZW5ndGggPCAxICYmIGNvbW1lbnRzTG9hZGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIG5vIGNvbW1lbnRzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlICpuZ0lmPVxcXCJjb21tZW50cy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1maXhlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlVuLVJlYWQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QXJ0aWNsZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21tZW50PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvbW1lbnQgQnk8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q29tbWVudCBEYXRlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkFwcHJvdmVkPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRlbGV0ZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY29tbWVudCBvZiBjb21tZW50c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiB0b29sdGlwPVxcXCJ7e2NvbW1lbnQuaXNOZXcgfCB5ZXNObzogJ3JlYWRVbnJlYWQnfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCIhY29tbWVudC5pc05ld1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwicmVhZFRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJyZWFkTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwibWFya1VuUmVhZChjb21tZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1jaXJjbGUtb1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcImNvbW1lbnQuaXNOZXdcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcIm5ld1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJuZXdNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJtYXJrUmVhZChjb21tZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1jaGVjay1jaXJjbGUtb1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3tjb21tZW50LmFydGljbGUudGl0bGV9fVxcXCIgcGxhY2VtZW50PVxcXCJ0b3BcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzogaGlkZGVuOyB3aGl0ZS1zcGFjZTpub3dyYXA7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29tbWVudC5hcnRpY2xlLnRpdGxlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7Y29tbWVudC5jb21tZW50VGV4dH19XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93OiBoaWRkZW47IHdoaXRlLXNwYWNlOiBub3dyYXA7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29tbWVudC5jb21tZW50VGV4dH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiB0b29sdGlwPVxcXCJ7e2NvbW1lbnQuYXBwbGljYXRpb25Vc2VyLmZpcnN0TmFtZX19IHt7Y29tbWVudC5hcHBsaWNhdGlvblVzZXIubGFzdE5hbWV9fVxcXCIgcGxhY2VtZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjb21tZW50LmFwcGxpY2F0aW9uVXNlci5maXJzdE5hbWV9fSB7e2NvbW1lbnQuYXBwbGljYXRpb25Vc2VyLmxhc3ROYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7Y29tbWVudC5jb21tZW50RHQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSBoaDptbSBBJ319XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbW1lbnQuY29tbWVudER0IHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3tjb21tZW50LmFwcHJvdmVkIHwgeWVzTm86ICdhcHByb3ZlZCcgfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJjb21tZW50LmFwcHJvdmVkXFxcIiByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJhcHByb3ZlVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcImFwcHJvdmVNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJ1bkFwcHJvdmVDb21tZW50KGNvbW1lbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIWNvbW1lbnQuYXBwcm92ZWRcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInVuQXBwcm92ZVRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJ1bkFwcHJvdmVNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJhcHByb3ZlQ29tbWVudChjb21tZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS10aHVtYnMtby1kb3duXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgdGl0bGU9XFxcIkRlbGV0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJtZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJjb25maXJtQ2xpY2tlZChjb21tZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYW5cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2RlbGV0ZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29tbWVudCBEZWxldGVkPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQ29tbWVudCBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudGFkbWlubGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBDb21tZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZSdcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9hcHBVc2VyLm1vZGVsJztcclxuaW1wb3J0IHsgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9zdWdnZXN0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnZmVlZGJhY2snLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRiYWNrLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0NvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdmZWVkYmFja01vZGFsJykgcHVibGljIGZlZWRiYWNrTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIHVzZXI6IEFwcFVzZXI7XHJcbiAgICBpc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB0eXBlczogU2VsZWN0SXRlbVtdO1xyXG4gICAgc3VnZ2VzdGlvbiA9IG5ldyBTdWdnZXN0aW9uKCk7XHJcblxyXG4gICAgdXNlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvbW1lbnRTZXJ2aWNlOiBDb21tZW50U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlclN1YnNjcmlwdGlvbiAhPT0gbnVsbCAmJiB0aGlzLnVzZXJTdWJzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5jaGVja0xvZ2luKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlclNlcnZpY2UudXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZW50U2VydmljZS5nZXRTdWdnZXN0aW9uVHlwZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHsgbGFiZWw6IHJlc3VsdC52YWx1ZSwgdmFsdWU6IHJlc3VsdC5saXN0RW51bUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uLnR5cGVJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2F2ZUZlZWRiYWNrKGZvcm06IGFueSkge1xyXG5cclxuICAgICAgICB0aGlzLnN1Z2dlc3Rpb24uYXBwbGljYXRpb25Vc2VySWQgPSB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VySWQ7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uLnR5cGVJZCA9IGZvcm0udHlwZUlkO1xyXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbi52YWx1ZSA9IGZvcm0uZmVlZGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuaW5zZXJ0RmVlZGJhY2sodGhpcy5zdWdnZXN0aW9uKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGFsLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9mZWVkYmFja3JlZGlyZWN0J10pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1Z2dlc3Rpb24ge1xyXG4gICAgc3VnZ2VzdGlvbklkOiBudW1iZXI7XHJcbiAgICBhcHBsaWNhdGlvblVzZXJJZDogbnVtYmVyO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHR5cGVJZDogbnVtYmVyO1xyXG4gICAgY3JlYXRlZER0OiBEYXRlO1xyXG4gICAgc3RhdHVzSWQ6IG51bWJlcjtcclxuICAgIHJlc29sdXRpb25EdDogRGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL3N1Z2dlc3Rpb24ubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMj5GZWVkYmFjazwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAqbmdJZj1cXFwidXNlclNlcnZpY2UuaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlRmVlZGJhY2soZm9ybS52YWx1ZSk7IGZvcm0ucmVzZXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLnVzZXIgIT09IHVuZGVmaW5lZFxcXCIgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3VzZXJTZXJ2aWNlLnVzZXIuZmlyc3ROYW1lfX0ge3t1c2VyU2VydmljZS51c2VyLmxhc3ROYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VHlwZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cXFwic3VnZ2VzdGlvbi50eXBlSWRcXFwiIG5hbWU9XFxcInR5cGVJZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCB0eXBlIG9mIHR5cGVzXFxcIiB2YWx1ZT1cXFwie3t0eXBlLnZhbHVlfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3R5cGUubGFiZWx9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5GZWVkYmFjazo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJmZWVkYmFja1xcXCIgWyhuZ01vZGVsKV09XFxcInN1Z2dlc3Rpb24udmFsdWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkIC8+PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtc2F2ZVxcXCI+PC9zcGFuPiBTdWJtaXQgRmVlZGJhY2tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgIDxmZWVkYmFjay1saXN0IFthZG1pbl09XFxcImZhbHNlXFxcIj48L2ZlZWRiYWNrLWxpc3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNmZWVkYmFja01vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiAob25IaWRlKT1cXFwiZGlzbWlzc01vZGFsKClcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJmZWVkYmFja01vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkZlZWRiYWNrIFN1Ym1pdHRlZDwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFlvdXIgZmVlZGJhY2sgaGFzIGJlZW4gc3VibWl0dGVkLiBUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2suXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9hcHBVc2VyLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmZWVkYmFjay1saXN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZlZWRiYWNrbGlzdC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkQmFja0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGFkbWluOiBib29sZWFuO1xyXG4gICAgc3VnZ2VzdGlvbnMgPSBbXTtcclxuICAgIHN1Z2dlc3Rpb25Mb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2RlbGV0ZU1vZGFsJykgcHVibGljIGRlbGV0ZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ0RlbGV0ZSBGZWVkYmFjayc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmZWVkYmFjaz8nO1xyXG4gICAgY29uZmlybVRleHQ6IHN0cmluZyA9ICc8aSBjbGFzcz1cImZhIGZhLWxnIGZhLXRodW1icy1vLXVwXCI+PC9pPiZuYnNwO1llcyc7XHJcbiAgICBjYW5jZWxUZXh0OiBzdHJpbmcgPSAnPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS10aHVtYnMtby1kb3duXCI+PC9pPiZuYnNwO05vJztcclxuXHJcbiAgICBwcm9ncmVzc1RpdGxlOiBzdHJpbmcgPSAnTWFyayBJbiBwcm9ncmVzcyc7XHJcbiAgICBwcm9ncmVzc01lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1hcmsgdGhpcyBhcyBJbiBQcm9ncmVzcz8nO1xyXG5cclxuICAgIGNvbXBsZXRlVGl0bGU6IHN0cmluZyA9ICdNYXJrIEFzIENvbXBsZXRlJztcclxuICAgIGNvbXBsZXRlTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gbWFyayB0aGlzIGFzIENvbXBsZXRlPyc7XHJcbiAgICBpc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB1c2VyOiBBcHBVc2VyO1xyXG4gICAgdXNlcklkID0gMDtcclxuXHJcbiAgICB1c2VyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tZW50U2VydmljZTogQ29tbWVudFNlcnZpY2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlclNlcnZpY2UudXNlcjtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyT2JqZWN0Q2hhbmdlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hZG1pbikge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1DbGlja2VkKGZlZWRiYWNrKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZGVsZXRlU3VnZ2VzdGlvbihmZWVkYmFjay5zdWdnZXN0aW9uSWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdWdnZXN0aW9ucy5pbmRleE9mKGZlZWRiYWNrKTtcclxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uTG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kYWwuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtJblByb2dyZXNzKGZlZWRiYWNrKSB7XHJcbiAgICAgICAgZmVlZGJhY2suc3RhdHVzSWQgPSA2O1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UudXBkYXRlU3VnZ2VzdGlvbihmZWVkYmFjaylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdWdnZXN0aW9ucy5pbmRleE9mKGZlZWRiYWNrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc3BsaWNlKGluZGV4LCAxLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtDb21wbGV0ZShmZWVkYmFjaykge1xyXG4gICAgICAgIGZlZWRiYWNrLnN0YXR1c0lkID0gODtcclxuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlLnVwZGF0ZVN1Z2dlc3Rpb24oZmVlZGJhY2spXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3VnZ2VzdGlvbnMuaW5kZXhPZihmZWVkYmFjayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zLnNwbGljZShpbmRleCwgMSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudFNlcnZpY2UuZ2V0U3VnZ2VzdGlvblZpZXdzKHRoaXMudXNlcklkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZlZWRiYWNrID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBmZWVkYmFjaztcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwic3VnZ2VzdGlvbnMubGVuZ3RoIDwgMSAmJiAhc3VnZ2VzdGlvbkxvYWRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bG9hZGluZy1pbmRpY2F0b3I+PC9sb2FkaW5nLWluZGljYXRvcj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInN1Z2dlc3Rpb25zLmxlbmd0aCA8IDEgJiYgc3VnZ2VzdGlvbkxvYWRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGlzIG5vIGZlZWRiYWNrXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlICpuZ0lmPVxcXCJzdWdnZXN0aW9ucy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1maXhlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlN0YXR1czwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiICpuZ0lmPVxcXCJhZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlZWRiYWNrPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy00IGJvcmRlci1yaWdodFxcXCIgKm5nSWY9XFxcIiFhZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlZWRiYWNrPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlZWRiYWNrIEJ5PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZlZWRiYWNrIERhdGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVzb2x1dGlvbiBEYXRlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlR5cGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5EZWxldGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHN1Z2dlc3Rpb24gb2Ygc3VnZ2VzdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMSB0ZXh0LWNlbnRlciBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi5zdGF0dXNOYW1lfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwic3VnZ2VzdGlvbi5zdGF0dXNJZCA9PT0gNSAmJiBhZG1pblxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJwcm9ncmVzc1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwicHJvZ3Jlc3NNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwibWFya0luUHJvZ3Jlc3Moc3VnZ2VzdGlvbilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWJhdHRlcnktZW1wdHlcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInN1Z2dlc3Rpb24uc3RhdHVzSWQgPT09IDUgJiYgIWFkbWluXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1lbXB0eVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic3VnZ2VzdGlvbi5zdGF0dXNJZCA9PT0gNiAmJiAhYWRtaW5cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYXR0ZXJ5LWhhbGZcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInN1Z2dlc3Rpb24uc3RhdHVzSWQgPT09IDYgJiYgYWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiY29tcGxldGVUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcImNvbXBsZXRlTWVzc2FnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlybVRleHRdPVxcXCJjb25maXJtVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FuY2VsVGV4dF09XFxcImNhbmNlbFRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlbWVudF09XFxcInBsYWNlbWVudFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcIm1hcmtDb21wbGV0ZShzdWdnZXN0aW9uKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1oYWxmXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzdWdnZXN0aW9uLnN0YXR1c0lkID09PSA4XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtYmF0dGVyeS1mdWxsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYWRtaW5cXFwiIHRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi52YWx1ZX19XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93OiBoaWRkZW47IHdoaXRlLXNwYWNlOm5vd3JhcDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3VnZ2VzdGlvbi52YWx1ZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtNCBib3JkZXItcmlnaHRcXFwiICpuZ0lmPVxcXCIhYWRtaW5cXFwiIHRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi52YWx1ZX19XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCIgc3R5bGU9XFxcIm92ZXJmbG93OiBoaWRkZW47IHdoaXRlLXNwYWNlOm5vd3JhcDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3VnZ2VzdGlvbi52YWx1ZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi5hdXRob3JOYW1lfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6IGhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWdnZXN0aW9uLmF1dGhvck5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIiB0b29sdGlwPVxcXCJ7e3N1Z2dlc3Rpb24uY3JlYXRlZERUIHwgZm9ybWF0RGF0ZTogJ01NL0REL1lZWVkgaGg6bW0gQSd9fVxcXCIgcGxhY2VtZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3VnZ2VzdGlvbi5jcmVhdGVkRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSBoaDptbSBBJ319XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVxcXCJzdWdnZXN0aW9uLnJlc29sdXRpb25EVCA9PT0gdW5kZWZpbmVkXFxcIiBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XFxcInN1Z2dlc3Rpb24ucmVzb2x1dGlvbkRUICE9PSB1bmRlZmluZWRcXFwiIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiIHRvb2x0aXA9XFxcInt7c3VnZ2VzdGlvbi5yZXNvbHV0aW9uRFQgfCBmb3JtYXREYXRlOiAnTU0vREQvWVlZWSBoaDptbSBBJ319XFxcIiBwbGFjZW1lbnQ9XFxcInRvcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWdnZXN0aW9uLnJlc29sdXRpb25EVCB8IGZvcm1hdERhdGU6ICdNTS9ERC9ZWVlZIGhoOm1tIEEnfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3tzdWdnZXN0aW9uLnR5cGVOYW1lfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N1Z2dlc3Rpb24udHlwZU5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XFxcImJ1dHRvblxcXCIgdGl0bGU9XFxcIkRlbGV0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJtZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiY29uZmlybUNsaWNrZWQoc3VnZ2VzdGlvbilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWJhblxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjZGVsZXRlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJkZWxldGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5GZWVkYmFjayBEZWxldGVkPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgRmVlZGJhY2sgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFja2xpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmVlZGJhY2tyZWRpcmVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrUmVkaXJlY3RDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2ZlZWRiYWNrJ10pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrcmVkaXJlY3QuY29tcG9uZW50LnRzIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnZm9vdGVyLWl0ZW0nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcpXHJcbiAgICB9KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICB5ZWFyID0gJyc7XHJcbiAgICBidWlsZCA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZCA9ICcyMDE3LjA4LjAxLjAxJztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGhyIC8+XFxyXFxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcHJpdmFjeSddXFxcIj5Qcml2YWN5IFBvbGljeTwvYT4gLSA8aSBjbGFzcz1cXFwiZmEgZmEtY29weXJpZ2h0XFxcIj48L2k+IHt7eWVhcn19IERyYWdvbm1pciBEZXZlbG9wbWVudCAtIHt7YnVpbGR9fVxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICZuYnNwO1xcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGltYWdlVXJsID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHguc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5jaGVja0xvZ2luKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG4gICAgPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGVIZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7aW1hZ2VVcmx9fVxcXCIgaGVpZ2h0PVxcXCIzNzVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlLWxpc3Q+PC9hcnRpY2xlLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcmNoaXZlLWxpc3Q+PC9hcmNoaXZlLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvYWRpbmctaW5kaWNhdG9yJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sb2FkaW5nLWluZGljYXRvci5odG1sJyksXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdJbmRpY2F0b3IgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2lyY2xlXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjaXJjbGUxXFxcIj48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy1pbmRpY2F0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFwcFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luLm1vZGVsJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdzdWNjZXNzTW9kYWwnKSBwdWJsaWMgc3VjY2Vzc01vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2ZhaWx1cmVNb2RhbCcpIHB1YmxpYyBmYWlsdXJlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgXHJcbiAgICBsb2dpbkluZm8gPSBuZXcgTG9naW4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcbiAgICBcclxuICAgIGxvZ2luKGZvcm06IGFueSkge1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luSW5mby51c2VybmFtZSA9IGZvcm0udXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5sb2dpbkluZm8ucGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMubG9naW5JbmZvKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwgJiYgcmVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsdXJlTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzTW9kYWwoKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMucm91dGVyLnVybC5yZXBsYWNlKCcvbG9naW4nLCAnJyk7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlTG9naW5UaW1lKGZhbHNlKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSB4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL2xvZ2luLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDI+TG9naW48L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJsb2dpbihmb3JtLnZhbHVlKTsgZm9ybS5yZXNldCgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Vc2VybmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luSW5mby51c2VybmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQgLz48L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGFzc3dvcmQ6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS01XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwibG9naW5JbmZvLnBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZCAvPjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbGcgZmEta2V5XFxcIj48L3NwYW4+IExvZ2luXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZm9yZ290J11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1xdWVzdGlvbi1jaXJjbGVcXFwiPjwvc3Bhbj4gSSBGb3Jnb3QgTXkgUGFzc3dvcmRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbmV3YWNjb3VudCddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtcGx1cy1jaXJjbGVcXFwiPjwvc3Bhbj4gQ3JlYXRlIEFjY291bnRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjc3VjY2Vzc01vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiAob25IaWRlKT1cXFwiZGlzbWlzc01vZGFsKClcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJzdWNjZXNzTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+U3VjY2VzczwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFlvdSBoYXZlIGJlZW4gbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2ZhaWx1cmVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImZhaWx1cmVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FcnJvcjwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIFVzZXJuYW1lL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGRvZXMgbm90IG1hdGNoIG91ciByZWNvcmRzLiBQbGVhc2UgdHJ5IGFnYWluLlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBwQ2hpbGQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwY2hpbGQubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Vc2VyRGV0YWlsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcGxpY2F0aW9uVXNlckRldGFpbC5tb2RlbCc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlLm1vZGVsJztcclxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVscy9jb3VudHJ5Lm1vZGVsJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBoZWxsbzogYW55O1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ25ld2FjY291bnQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25ld2FjY291bnQuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIE5ld0FjY291bnRDb21wb25lbnQge1xyXG4gICAgQFZpZXdDaGlsZCgncHJvZmlsZU1vZGFsJykgcHVibGljIHByb2ZpbGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdsb2dpbk1vZGFsJykgcHVibGljIGxvZ2luTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgnZmFpbE1vZGFsJykgcHVibGljIGZhaWxNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCd1c2VybmFtZU1vZGFsJykgcHVibGljIHVzZXJuYW1lTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgXHJcbiAgICB1c2VyID0gbmV3IEFwcFVzZXIoKTtcclxuICAgIG1heERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgc3RhdGVzID0gW107XHJcbiAgICBjb3VudHJpZXMgPSBbXTtcclxuICAgIGNvZGUgPSAnJztcclxuXHJcbiAgICBmYlQgPSAnJztcclxuICAgIGltYWdlSWQgPSAwO1xyXG4gICAgZmJBID0gJyc7XHJcbiAgICBmYlMgPSAnJztcclxuICAgIGZiUCA9ICcnO1xyXG4gICAgaW1hZ2VVcmwgPSAnJztcclxuICAgIGltYWdlOiB7fTtcclxuICAgIHN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsID0gbmV3IEFwcGxpY2F0aW9uVXNlckRldGFpbCgpO1xyXG4gICAgICAgIHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnN0YXRlLmNvdW50cnkgPSBuZXcgQ291bnRyeSgpO1xyXG4gICAgICAgIHRoaXMudXNlci5hcHBDaGlsZCA9IG5ldyBBcnJheTxBcHBDaGlsZD4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRDb3VudHJpZXMoKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRyaWVzID0geDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTdGF0ZXMoKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzID0geDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZiQSA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAyKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYlMgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGVsbG8oKVxyXG4gICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBmYWNlYm9vazogdGhpcy5mYkFcclxuICAgICAgICAgICAgfSwgeyBzY29wZTogJ3B1Ymxpc2hfcGFnZXMsbWFuYWdlX3BhZ2VzLHVzZXJfcGhvdG9zJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VzZXJuYW1lKG5hbWUsIGlkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2hlY2tVc2VybmFtZShuYW1lLCBpZCkuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0geDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXIudXNlcm5hbWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZCgpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgQXBwQ2hpbGQoKTtcclxuICAgICAgICB0aGlzLnVzZXIuYXBwQ2hpbGQucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlybUNsaWNrZWQoY2hpbGQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLnVzZXIuYXBwQ2hpbGQuaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIuYXBwQ2hpbGQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25IZWFkZXJVcGxvYWQoZXZlbnQpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGV2ZW50LmZpbGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlVXJsID0gZmlsZS5vYmplY3RVUkwuY2hhbmdpbmdUaGlzQnJlYWtzQXBwbGljYXRpb25TZWN1cml0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVByb2ZpbGUoZm9ybTogYW55KSB7XHJcbiAgICAgICAgdmFyIHVybDtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVVybCAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmVQcm9maWxlKCcnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmJUID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwaSgnLzE1OTI2NzAxNzk1MjI0NC9waG90b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VJZCA9IHJlc3VsdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaSgnbXllZ2dldHRmYW1pbHlwYWdlL2FsYnVtcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiAncGhvdG9ze3NvdXJjZX0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5pZCA9PT0gJzE1OTI2NzAxNzk1MjI0NCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnBob3Rvcy5kYXRhLmZvckVhY2goeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5LmlkID09PSB0aGlzLmltYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuaW1hZ2VTZXJ2aWNlLnNhbml0aXplKHkuc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlUHJvZmlsZSh1cmwpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnMubmV4dCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icy5jb21wbGV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlUHJvZmlsZSgnJykuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZU1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvU2F2ZVByb2ZpbGUodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwgIT09ICcnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5pbWFnZVVybCA9IHVybC5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9ic2VydmFibGUuY3JlYXRlKG9icyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodGhpcy51c2VyLCB0aGlzLmNvZGUpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VySWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5iaXJ0aGRheSAhPT0gbnVsbCAmJiB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5ID0gbmV3IERhdGUodGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5iaXJ0aGRheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlQmlydGhkYXkgIT09IG51bGwgJiYgdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VCaXJ0aGRheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VCaXJ0aGRheSA9IG5ldyBEYXRlKHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlQmlydGhkYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hcHBDaGlsZC5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmJpcnRoZGF5ICE9PSB1bmRlZmluZWQgJiYgeC5iaXJ0aGRheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmJpcnRoZGF5ID0gbmV3IERhdGUoeC5iaXJ0aGRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JzLm5leHQodGhpcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIG9icy5jb21wbGV0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbmV3YWNjb3VudC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBDaGlsZCB9IGZyb20gJy4vYXBwY2hpbGQubW9kZWwnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Vc2VyRGV0YWlsIH0gZnJvbSAnLi9hcHBsaWNhdGlvblVzZXJEZXRhaWwubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVXNlciB7XG4gICAgYXBwbGljYXRpb25Vc2VySWQ6IG51bWJlcjtcbiAgICBlbWFpbEFkZHJlc3M6IHN0cmluZztcbiAgICBpc0FkbWluOiBib29sZWFuO1xuICAgIGxhc3RMb2dnZWRJbkR0OiBEYXRlO1xuICAgIGlzU3lzdGVtQWRtaW46IGJvb2xlYW47XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBleHRlcm5hbElkOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHNlY3JldFF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgc2VjcmV0QW5zd2VyOiBzdHJpbmc7XG4gICAgZXh0ZXJuYWxUeXBlSWQ6IG51bWJlcjtcbiAgICByZWNlaXZlTm90aWZpY2F0aW9uczogYm9vbGVhbjtcbiAgICBhcHBsaWNhdGlvblVzZXJEZXRhaWw6IEFwcGxpY2F0aW9uVXNlckRldGFpbDtcbiAgICBhcHBDaGlsZDogQXBwQ2hpbGRbXTtcbiAgICBleHRlcm5hbExvZ2luVHlwZU5hbWU6IHN0cmluZztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL21vZGVscy9hcHBVc2VyLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gJy4vYXBwVXNlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDaGlsZCB7XG4gICAgYXBwQ2hpbGRJZDogbnVtYmVyO1xuICAgIGFwcGxpY2F0aW9uVXNlcklkOiBudW1iZXI7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw6IHN0cmluZztcbiAgICBiaXJ0aGRheTogRGF0ZTtcbiAgICBhcHBsaWNhdGlvblVzZXI6IEFwcFVzZXI7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvYXBwY2hpbGQubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi9hcHB1c2VyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9zdGF0ZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblVzZXJEZXRhaWwge1xuICAgIGFwcGxpY2F0aW9uVXNlckRldGFpbElkOiBudW1iZXI7XG4gICAgYXBwbGljYXRpb25Vc2VySWQ6IG51bWJlcjtcbiAgICBtaWRkbGVOYW1lOiBzdHJpbmc7XG4gICAgaG9tZVBob25lOiBudW1iZXI7XG4gICAgY2VsbFBob25lOiBudW1iZXI7XG4gICAgYmlydGhkYXk6IERhdGU7XG4gICAgc3RyZWV0QWRkcmVzczogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBzdGF0ZUlkOiBudW1iZXI7XG4gICAgemlwQ29kZTogbnVtYmVyO1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgc3BvdXNlRmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgc3BvdXNlTWlkZGxlTmFtZTogc3RyaW5nO1xuICAgIHNwb3VzZUxhc3ROYW1lOiBzdHJpbmc7XG4gICAgc3Bvc2VDZWxsUGhvbmU6IG51bWJlcjtcbiAgICBzcG91c2VCaXJ0aGRheTogRGF0ZTtcbiAgICBhcHBsaWNhdGlvblVzZXI6IEFwcFVzZXI7XG4gICAgc3RhdGU6IFN0YXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL2FwcGxpY2F0aW9uVXNlckRldGFpbC5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Vc2VyRGV0YWlsIH0gZnJvbSAnLi9hcHBsaWNhdGlvblVzZXJEZXRhaWwubW9kZWwnO1xyXG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi9jb3VudHJ5Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcclxuICAgIHN0YXRlSWQ6IG51bWJlcjtcclxuICAgIHN0YXRlTmFtZTogc3RyaW5nO1xyXG4gICAgc3RhdGVBYmJyOiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5SWQ6IG51bWJlcjtcclxuICAgIGNvdW50cnk6IENvdW50cnk7XHJcbiAgICBhcHBsaWNhdGlvblVzZXJEZXRhaWw6IEFwcGxpY2F0aW9uVXNlckRldGFpbDtcclxuICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc3RhdGUubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9zdGF0ZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJ5IHtcclxuICAgIGNvdW50cnlJZDogbnVtYmVyO1xyXG4gICAgY291bnRyeU5hbWU6IHN0cmluZztcclxuICAgIGNvdW50cnlBYmJyOiBzdHJpbmc7XHJcbiAgICBzdGF0ZTogU3RhdGU7XHJcbiAgICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbW9kZWxzL2NvdW50cnkubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMj5OZXcgQWNjb3VudDwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmVQcm9maWxlKGZvcm0udmFsdWUpOyBmb3JtLnJlc2V0KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2w9c20tMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+IENhbmNlbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFN1Ym1pdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q29kZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvZGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJjb2RlXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Rmlyc3QgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZmlyc3ROYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TWlkZGxlIE5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibWlkZGxlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLm1pZGRsZU5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MYXN0IE5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhc3ROYW1lXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QmlydGhkYXk6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNhbGVuZGFyICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93SWNvbl09XFxcInRydWVcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiYmlydGhkYXlcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXJSYW5nZT1cXFwiMTkwMDoyMjAwXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJGb3JtYXQ9XFxcIjEyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNhbGVuZGFyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q2VsbCBQaG9uZSAjOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNlbGxQaG9uZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuY2VsbFBob25lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SG9tZSBQaG9uZSAjOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImhvbWVQaG9uZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuaG9tZVBob25lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RW1haWw6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxBZGRyZXNzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbEFkZHJlc3NcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TdHJlZXQgQWRkcmVzczo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzdHJlZXRBZGRyZXNzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3RyZWV0QWRkcmVzc1xcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNpdHk6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmNpdHlcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TdGF0ZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnN0YXRlSWRcXFwiIG5hbWU9XFxcInN0YXRlSWRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgc3RhdGUgb2Ygc3RhdGVzXFxcIiB2YWx1ZT1cXFwie3tzdGF0ZS5zdGF0ZUlkfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N0YXRlLnN0YXRlTmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlppcCBDb2RlOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInppcENvZGVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnppcENvZGVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgRmlyc3QgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzcG91c2VGaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VGaXJzdE5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgTWlkZGxlIE5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic3BvdXNlTWlkZGxlTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZU1pZGRsZU5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgTGFzdCBOYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNwb3VzZUxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlTGFzdE5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgQmlydGhkYXk6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNhbGVuZGFyIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dJY29uXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInNwb3VzZUJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhclJhbmdlPVxcXCIxOTAwOjIyMDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyRm9ybWF0PVxcXCIxMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgQ2VsbCBQaG9uZSAjOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNwb3VzZUNlbGxQaG9uZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlQ2VsbFBob25lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlVzZXJuYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci51c2VybmFtZVxcXCIgKGJsdXIpPVxcXCJjaGVja1VzZXJuYW1lKHVzZXIudXNlcm5hbWUsIHVzZXIuYXBwbGljYXRpb25Vc2VySWQpXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QYXNzd29yZDo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNlY3JldCBRdWVzdGlvbjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzZWNyZXRRdWVzdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuc2VjcmV0UXVlc3Rpb25cXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNlY3JldCBBbnN3ZXI6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic2VjcmV0QW5zd2VyXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5zZWNyZXRBbnN3ZXJcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJlY2VpdmUgTm90aWZpY2F0aW9uczo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJyZWNlaXZlTm90aWZpY2F0aW9uc1xcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnJlY2VpdmVOb3RpZmljYXRpb25zXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ib3VzZWhvbGQgUGljdHVyZTo8L2g0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWZpbGVVcGxvYWQgIG5hbWU9XFxcImRlbW9bXVxcXCIgdXJsPVxcXCJ+L3VwbG9hZFxcXCIgKG9uVXBsb2FkKT1cXFwib25IZWFkZXJVcGxvYWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCIgYXV0bz1cXFwiYXV0b1xcXCIgbWF4RmlsZVNpemU9XFxcIjQwMDAwMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1maWxlVXBsb2FkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDUwNXB4OyBtYXgtd2lkdGg6IDUwNXB4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlVXJsKVxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6NTAwcHg7IG1heC13aWR0aDogNTAwcHhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DaGlsZHJlbjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJhZGRDaGlsZCgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkIENoaWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj48YnIgLz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZml4ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZpcnN0IE5hbWU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TWlkZGxlIE5hbWU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TGFzdCBOYW1lPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJpcnRoZGF5PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSBib3JkZXItcmlnaHQgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1ID5EZWxldGU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIiAqbmdGb3I9XFxcImxldCBjaGlsZCBvZiB1c2VyLmFwcENoaWxkOyBsZXQgaWR4ID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNoaWxkRmlyc3ROYW1le3tpZHh9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoaWxkLmZpcnN0TmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjaGlsZE1pZGRsZU5hbWV7e2lkeH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hpbGQubWlkZGxlTmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjaGlsZExhc3ROYW1le3tpZHh9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoaWxkLmxhc3ROYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1jYWxlbmRhciAgW3Nob3dJY29uXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImNoaWxkQmlydGhkYXl7e2lkeH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImNoaWxkLmJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhclJhbmdlPVxcXCIxOTAwOjIyMDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyRm9ybWF0PVxcXCIxMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgYm9yZGVyLXJpZ2h0IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICByb2xlPVxcXCJidXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiRGVsZXRlIENoaWxkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT1cXFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNoaWxkIGZyb20gdGhlIGxpc3Q/XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9XFxcIlllc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XFxcIk5vXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVxcXCJ0b3BcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlybSk9XFxcImNvbmZpcm1DbGlja2VkKGNoaWxkKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1iYW5cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAmbmJzcDtcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI3Byb2ZpbGVNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NNb2RhbCgpXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwicHJvZmlsZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZXMgU2F2ZWQgU3VjY2Vzc2Z1bGx5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQWNjb3VudCBDcmVhdGVkIFN1Y2Nlc3NmdWxseS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2ZhaWxNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJteVNtYWxsTW9kYWxMYWJlbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcImZhaWxNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FcnJvcjwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIENvZGUgZG9lcyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICN1c2VybmFtZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwidXNlcm5hbWVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Vc2VybmFtZSBBbHJlYWR5IFRha2VuPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuIGJ5IGFub3RoZXIgdXNlci4gUGxlYXNlIHVzZSBhIGRpZmZlcmVudCBvbmUuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9uZXdhY2NvdW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7ICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2hlY2tMb2dpbih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcXFwiIHN0eWxlPVxcXCJib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+RWdnZXR0IEZhbWlseSBCbG9nPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlIG5hdmJhci1yaWdodCc+XFxyXFxuICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtaG9tZSc+PC9zcGFuPiBIb21lXFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2NyZWF0ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1maWxlLXRleHQtbyc+PC9zcGFuPiBTdWJtaXRcXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIiAqbmdJZj1cXFwidXNlclNlcnZpY2UuaXNMb2dnZWRJblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvZmVlZGJhY2snXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtY29tbWVudGluZyc+PC9zcGFuPiBGZWVkYmFja1xcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS5pc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9kaXJlY3RvcnknXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtYWRkcmVzcy1ib29rLW8nPjwvc3Bhbj4gRGlyZWN0b3J5XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4gJiYgdXNlclNlcnZpY2UudXNlciAhPSBudWxsICYmIHVzZXJTZXJ2aWNlLnVzZXIuaXNBZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYWRtaW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtZW1waXJlJz48L3NwYW4+IEFkbWluXFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3Byb2ZpbGVyZWRpcmVjdC8nICsgdXNlclNlcnZpY2UudXNlci5hcHBsaWNhdGlvblVzZXJJZF1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXVzZXItbyc+PC9zcGFuPiBQcm9maWxlIC0ge3t1c2VyU2VydmljZS51c2VyLmZpcnN0TmFtZX19XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCIgKm5nSWY9XFxcInVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJ1c2VyU2VydmljZS5sb2dvdXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtbGcgZmEtdW5sb2NrLWFsdCc+PC9zcGFuPiBMb2dvdXRcXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIiAqbmdJZj1cXFwiIXVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW5cXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWxnIGZhLWxvY2snPjwvc3Bhbj4gTG9naW5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnXHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCdcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWNhcm91c2VsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25nY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ltYWdlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5HQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGltYWdlcyA9IFtdO1xyXG4gICAgQElucHV0KCkgaWQgPSAwO1xyXG4gICAgcHVibGljIGltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGltYWdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5pZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHBhcmFtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1bJ2lkJ107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5nZXRJbWFnZXNCeUFydGljbGVJZCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlU2VydmljZS5pbWFnZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZVN1YnNjcmlwdGlvbiA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmltYWdlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uZ2Nhcm91c2VsL25nY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImltYWdlc0xvYWRlZCA9PSBmYWxzZVxcXCI+XFxyXFxuICAgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcImltYWdlU2VydmljZS5pbWFnZXMubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgIDxjYXJvdXNlbCBbaW50ZXJ2YWxdPVxcXCI1MDAwXFxcIiBbbm9XcmFwXT1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgPHNsaWRlICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlU2VydmljZS5pbWFnZXNcXFwiIFthY3RpdmVdPVxcXCJpbWFnZS5pc0FjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIWltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUoaW1hZ2UuaW1hZ2VVcmwpXFxcIiBjbGFzcz1cXFwiZmx1aWQgY2VudGVyLWJsb2NrXFxcIiBoZWlnaHQ9XFxcIjQwMFxcXCI+ICAgIFxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlLmlzVmlkZW9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dmlkZW8tcGxheWVyIFtpbWFnZV09XFxcImltYWdlXFxcIj48L3ZpZGVvLXBsYXllcj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJvdXNlbC1jYXB0aW9uIGFsZXJ0XFxcIiBzdHlsZT1cXFwiYm90dG9tOiAtNjBweFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPnt7aW1hZ2UuY2FwdGlvblRleHR9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc2xpZGU+XFxyXFxuICAgIDwvY2Fyb3VzZWw+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uZ2Nhcm91c2VsL25nY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBcclxuQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJpdmFjeScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wcml2YWN5LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIFByaXZhY3lDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJxbC1hbGlnbi1jZW50ZXJcXFwiPjxzdHJvbmc+UHJpdmFjeSBQb2xpY3k8L3N0cm9uZz48L3A+PHA+PGJyPjwvcD48cD5Qcm90ZWN0aW5nIHlvdXIgcHJpdmF0ZSBpbmZvcm1hdGlvbiBpcyBvdXIgcHJpb3JpdHkuIFRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kgYXBwbGllcyB0byB0aGUgaHR0cDovL3d3dy5NeUVnZ2V0dEZhbWlseS5jb20gYW5kIERyYWdvbm1pciBEZXZlbG9wbWVudCBhbmQgZ292ZXJucyBkYXRhIGNvbGxlY3Rpb24gYW5kIHVzYWdlLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgUHJpdmFjeSBQb2xpY3ksIHVubGVzcyBvdGhlcndpc2Ugbm90ZWQsIGFsbCByZWZlcmVuY2VzIHRvIERyYWdvbm1pciBEZXZlbG9wbWVudCBpbmNsdWRlIGh0dHA6Ly93d3cuTXlFZ2dldHRGYW1pbHkuY29tLCBhbmQgTXkgRWdnZXR0IEZhbWlseS4gVGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlIGlzIGEgbmV3cyBhbmQgaW5mb3JtYXRpb24gc2l0ZS4gQnkgdXNpbmcgdGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlLCB5b3UgY29uc2VudCB0byB0aGUgZGF0YSBwcmFjdGljZXMgZGVzY3JpYmVkIGluIHRoaXMgc3RhdGVtZW50LjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+Q29sbGVjdGlvbiBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBtYXkgY29sbGVjdCBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiwgc3VjaCBhcyB5b3VyIG5hbWUuIFdlIG1heSBnYXRoZXIgYWRkaXRpb25hbCBwZXJzb25hbCBvciBub24tcGVyc29uYWwgaW5mb3JtYXRpb24gaW4gdGhlIGZ1dHVyZS48L3A+PHA+PGJyPjwvcD48cD5JbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbXB1dGVyIGhhcmR3YXJlIGFuZCBzb2Z0d2FyZSBtYXkgYmUgYXV0b21hdGljYWxseSBjb2xsZWN0ZWQgYnkgRHJhZ29ubWlyIERldmVsb3BtZW50LiBUaGlzIGluZm9ybWF0aW9uIGNhbiBpbmNsdWRlOiB5b3VyIElQIGFkZHJlc3MsIGJyb3dzZXIgdHlwZSwgZG9tYWluIG5hbWVzLCBhY2Nlc3MgdGltZXMgYW5kIHJlZmVycmluZyB3ZWJzaXRlIGFkZHJlc3Nlcy4gVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGZvciB0aGUgb3BlcmF0aW9uIG9mIHRoZSBzZXJ2aWNlLCB0byBtYWludGFpbiBxdWFsaXR5IG9mIHRoZSBzZXJ2aWNlLCBhbmQgdG8gcHJvdmlkZSBnZW5lcmFsIHN0YXRpc3RpY3MgcmVnYXJkaW5nIHVzZSBvZiB0aGUgRHJhZ29ubWlyIERldmVsb3BtZW50IHdlYnNpdGUuPC9wPjxwPjxicj48L3A+PHA+UGxlYXNlIGtlZXAgaW4gbWluZCB0aGF0IGlmIHlvdSBkaXJlY3RseSBkaXNjbG9zZSBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBvciBwZXJzb25hbGx5IHNlbnNpdGl2ZSBkYXRhIHRocm91Z2ggRHJhZ29ubWlyIERldmVsb3BtZW50J3MgcHVibGljIG1lc3NhZ2UgYm9hcmRzLCB0aGlzIGluZm9ybWF0aW9uIG1heSBiZSBjb2xsZWN0ZWQgYW5kIHVzZWQgYnkgb3RoZXJzLjwvcD48cD48YnI+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBlbmNvdXJhZ2VzIHlvdSB0byByZXZpZXcgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvZiB3ZWJzaXRlcyB5b3UgY2hvb3NlIHRvIGxpbmsgdG8gZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgc28gdGhhdCB5b3UgY2FuIHVuZGVyc3RhbmQgaG93IHRob3NlIHdlYnNpdGVzIGNvbGxlY3QsIHVzZSBhbmQgc2hhcmUgeW91ciBpbmZvcm1hdGlvbi4gRHJhZ29ubWlyIERldmVsb3BtZW50IGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvciBvdGhlciBjb250ZW50IG9uIHdlYnNpdGVzIG91dHNpZGUgb2YgdGhlIERyYWdvbm1pciBEZXZlbG9wbWVudCB3ZWJzaXRlLjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+VXNlIG9mIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb24gPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBjb2xsZWN0cyBhbmQgdXNlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIG9wZXJhdGUgaXRzIHdlYnNpdGUocykgYW5kIGRlbGl2ZXIgdGhlIHNlcnZpY2VzIHlvdSBoYXZlIHJlcXVlc3RlZC48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgbWF5IGFsc28gdXNlIHlvdXIgcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gdG8gaW5mb3JtIHlvdSBvZiBvdGhlciBwcm9kdWN0cyBvciBzZXJ2aWNlcyBhdmFpbGFibGUgZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYW5kIGl0cyBhZmZpbGlhdGVzLiBEcmFnb25taXIgRGV2ZWxvcG1lbnQgbWF5IGFsc28gY29udGFjdCB5b3UgdmlhIHN1cnZleXMgdG8gY29uZHVjdCByZXNlYXJjaCBhYm91dCB5b3VyIG9waW5pb24gb2YgY3VycmVudCBzZXJ2aWNlcyBvciBvZiBwb3RlbnRpYWwgbmV3IHNlcnZpY2VzIHRoYXQgbWF5IGJlIG9mZmVyZWQuPC9wPjxwPjxicj48L3A+PHA+RHJhZ29ubWlyIERldmVsb3BtZW50IGRvZXMgbm90IHNlbGwsIHJlbnQgb3IgbGVhc2UgaXRzIGN1c3RvbWVyIGxpc3RzIHRvIHRoaXJkIHBhcnRpZXMuPC9wPjxwPjxicj48L3A+PHA+RHJhZ29ubWlyIERldmVsb3BtZW50IG1heSBzaGFyZSBkYXRhIHdpdGggdHJ1c3RlZCBwYXJ0bmVycyB0byBoZWxwIHBlcmZvcm0gc3RhdGlzdGljYWwgYW5hbHlzaXMsIHNlbmQgeW91IGVtYWlsIG9yIHBvc3RhbCBtYWlsLCBwcm92aWRlIGN1c3RvbWVyIHN1cHBvcnQsIG9yIGFycmFuZ2UgZm9yIGRlbGl2ZXJpZXMuIEFsbCBzdWNoIHRoaXJkIHBhcnRpZXMgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGV4Y2VwdCB0byBwcm92aWRlIHRoZXNlIHNlcnZpY2VzIHRvIERyYWdvbm1pciBEZXZlbG9wbWVudCwgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIHRvIG1haW50YWluIHRoZSBjb25maWRlbnRpYWxpdHkgb2YgeW91ciBpbmZvcm1hdGlvbi48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgd2lsbCBkaXNjbG9zZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB3aXRob3V0IG5vdGljZSwgb25seSBpZiByZXF1aXJlZCB0byBkbyBzbyBieSBsYXcgb3IgaW4gdGhlIGdvb2QgZmFpdGggYmVsaWVmIHRoYXQgc3VjaCBhY3Rpb24gaXMgbmVjZXNzYXJ5IHRvOiAoYSkgY29uZm9ybSB0byB0aGUgZWRpY3RzIG9mIHRoZSBsYXcgb3IgY29tcGx5IHdpdGggbGVnYWwgcHJvY2VzcyBzZXJ2ZWQgb24gRHJhZ29ubWlyIERldmVsb3BtZW50IG9yIHRoZSBzaXRlOyAoYikgcHJvdGVjdCBhbmQgZGVmZW5kIHRoZSByaWdodHMgb3IgcHJvcGVydHkgb2YgRHJhZ29ubWlyIERldmVsb3BtZW50OyBhbmQsIChjKSBhY3QgdW5kZXIgZXhpZ2VudCBjaXJjdW1zdGFuY2VzIHRvIHByb3RlY3QgdGhlIHBlcnNvbmFsIHNhZmV0eSBvZiB1c2VycyBvZiBEcmFnb25taXIgRGV2ZWxvcG1lbnQsIG9yIHRoZSBwdWJsaWMuPC9wPjxwPjxicj48L3A+PHA+PHN0cm9uZz5TZWN1cml0eSBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9wPjxwPjxicj48L3A+PHA+PGJyPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgc2VjdXJlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gdW5hdXRob3JpemVkIGFjY2VzcywgdXNlIG9yIGRpc2Nsb3N1cmUuPC9wPjxwPjxicj48L3A+PHA+PGJyPjwvcD48cD48c3Ryb25nPkNoaWxkcmVuIFVuZGVyIFRoaXJ0ZWVuPC9zdHJvbmc+PC9wPjxwPkRyYWdvbm1pciBEZXZlbG9wbWVudCBkb2VzIG5vdCBrbm93aW5nbHkgY29sbGVjdCBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgdGhpcnRlZW4uIElmIHlvdSBhcmUgdW5kZXIgdGhlIGFnZSBvZiB0aGlydGVlbiwgeW91IG11c3QgYXNrIHlvdXIgcGFyZW50IG9yIGd1YXJkaWFuIGZvciBwZXJtaXNzaW9uIHRvIHVzZSB0aGlzIHdlYnNpdGUuPC9wPjxwPjxicj48L3A+PHA+PHN0cm9uZz5EaXNjb25uZWN0aW5nIHlvdXIgRHJhZ29ubWlyIERldmVsb3BtZW50IEFjY291bnQgZnJvbSBUaGlyZCBQYXJ0eSBXZWJzaXRlczwvc3Ryb25nPjwvcD48cD5Zb3Ugd2lsbCBiZSBhYmxlIHRvIGNvbm5lY3QgeW91ciBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYWNjb3VudCB0byB0aGlyZCBwYXJ0eSBhY2NvdW50cy4gQlkgQ09OTkVDVElORyBZT1VSIERSQUdPTk1JUiBERVZFTE9QTUVOVCBBQ0NPVU5UIFRPIFlPVVIgVEhJUkQgUEFSVFkgQUNDT1VOVCwgWU9VIEFDS05PV0xFREdFIEFORCBBR1JFRSBUSEFUIFlPVSBBUkUgQ09OU0VOVElORyBUTyBUSEUgQ09OVElOVU9VUyBSRUxFQVNFIE9GIElORk9STUFUSU9OIEFCT1VUIFlPVSBUTyBPVEhFUlMgKElOIEFDQ09SREFOQ0UgV0lUSCBZT1VSIFBSSVZBQ1kgU0VUVElOR1MgT04gVEhPU0UgVEhJUkQgUEFSVFkgU0lURVMpLiBJRiBZT1UgRE8gTk9UIFdBTlQgSU5GT1JNQVRJT04gQUJPVVQgWU9VLCBJTkNMVURJTkcgUEVSU09OQUxMWSBJREVOVElGWUlORyBJTkZPUk1BVElPTiwgVE8gQkUgU0hBUkVEIElOVEhJUyBNQU5ORVIsIERPIE5PVCBVU0UgVEhFIFRISVMgRkVBVFVSRS4gWW91IG1heSBkaXNjb25uZWN0IHlvdXIgYWNjb3VudCBmcm9tIGEgdGhpcmQgcGFydHkgYWNjb3VudCBhdCBhbnkgdGltZS4gVXNlcnMgY2FuIGRlbnkgYWNjZXNzIHRvIG15IHNpdGUgZnJvbSB0aGVpciBGYWNlYm9vayBhY2NvdW50Li48L3A+PHA+PGJyPjwvcD48cD48c3Ryb25nPk9wdC1PdXQgJmFtcDsgVW5zdWJzY3JpYmU8L3N0cm9uZz48L3A+PHA+V2UgcmVzcGVjdCB5b3VyIHByaXZhY3kgYW5kIGdpdmUgeW91IGFuIG9wcG9ydHVuaXR5IHRvIG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFubm91bmNlbWVudHMgb2YgY2VydGFpbiBpbmZvcm1hdGlvbi4gVXNlcnMgbWF5IG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFueSBvciBhbGwgY29tbXVuaWNhdGlvbnMgZnJvbSBEcmFnb25taXIgRGV2ZWxvcG1lbnQgYnkgY2hhbmdpbmcgeW91ciBwcmVmZXJlbmNlIGZvcm0geW91ciBwcm9maWxlLjwvcD48cD48YnI+PC9wPjxwPjxzdHJvbmc+Q2hhbmdlcyB0byB0aGlzIFN0YXRlbWVudDwvc3Ryb25nPjwvcD48cD5EcmFnb25taXIgRGV2ZWxvcG1lbnQgd2lsbCBvY2Nhc2lvbmFsbHkgdXBkYXRlIHRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kgdG8gcmVmbGVjdCBjb21wYW55IGFuZCBjdXN0b21lciBmZWVkYmFjay4gRHJhZ29ubWlyIERldmVsb3BtZW50IGVuY291cmFnZXMgeW91IHRvIHBlcmlvZGljYWxseSByZXZpZXcgdGhpcyBTdGF0ZW1lbnQgdG8gYmUgaW5mb3JtZWQgb2YgaG93IERyYWdvbm1pciBEZXZlbG9wbWVudCBpcyBwcm90ZWN0aW5nIHlvdXIgaW5mb3JtYXRpb24uPC9wPjxwPjxicj48L3A+PHA+RWZmZWN0aXZlIGFzIG9mIERlY2VtYmVyIDE0LCAyMDE2PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBwQ2hpbGQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwY2hpbGQubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBoZWxsbzogYW55O1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xyXG4gICAgQFZpZXdDaGlsZCgncHJvZmlsZU1vZGFsJykgcHVibGljIHByb2ZpbGVNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdsb2dpbk1vZGFsJykgcHVibGljIGxvZ2luTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgndXNlcm5hbWVNb2RhbCcpIHB1YmxpYyB1c2VybmFtZU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcbiAgICBASW5wdXQoKSBpZCA9IDA7XHJcbiAgICB1c2VyID0gbmV3IEFwcFVzZXIoKTtcclxuICAgIGVkaXRNb2RlOiBmYWxzZTtcclxuICAgIG1heERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgc3RhdGVzID0gW107XHJcbiAgICBjb3VudHJpZXMgPSBbXTtcclxuICAgIG9yaWdpbmFsVXNlciA9IG5ldyBBcHBVc2VyKCk7XHJcblxyXG4gICAgZmJUID0gJyc7XHJcbiAgICBpbWFnZUlkID0gMDtcclxuICAgIGZiQSA9ICcnO1xyXG4gICAgZmJTID0gJyc7XHJcbiAgICBmYlAgPSAnJztcclxuICAgIGltYWdlVXJsID0gJyc7XHJcbiAgICBpbWFnZToge307XHJcbiAgICBzdWNjZXNzID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5jaGVja0xvZ2luKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LmRhdGFbJ3Byb2ZpbGUnXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuYmlydGhkYXkgIT09IG51bGwgJiYgdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5iaXJ0aGRheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuYmlydGhkYXkgPSBuZXcgRGF0ZSh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5ICE9PSBudWxsICYmIHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlQmlydGhkYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5ID0gbmV3IERhdGUodGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VCaXJ0aGRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXBwQ2hpbGQuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHguYmlydGhkYXkgIT09IHVuZGVmaW5lZCAmJiB4LmJpcnRoZGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmJpcnRoZGF5ID0gbmV3IERhdGUoeC5iaXJ0aGRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRDb3VudHJpZXMoKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzID0geDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTdGF0ZXMoKS5zdWJzY3JpYmUoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzID0geDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDEpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZiQSA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAyKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYlMgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmJQID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGVsbG8oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNlYm9vazogdGhpcy5mYkFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBzY29wZTogJ3B1Ymxpc2hfcGFnZXMsbWFuYWdlX3BhZ2VzLHVzZXJfcGhvdG9zJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVc2VybmFtZShuYW1lLCBpZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNoZWNrVXNlcm5hbWUobmFtZSwgaWQpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHg7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJuYW1lTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS51c2VyLnVzZXJuYW1lID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IEFwcENoaWxkKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmFwcENoaWxkLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpcm1DbGlja2VkKGNoaWxkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy51c2VyLmFwcENoaWxkLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmFwcENoaWxkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRWRpdChlZGl0TW9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gZWRpdE1vZGU7XHJcblxyXG4gICAgICAgIGlmIChlZGl0TW9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcmlnaW5hbFVzZXIsIHRoaXMudXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB0aGlzLm9yaWdpbmFsVXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhlYWRlclVwbG9hZChldmVudCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZXZlbnQuZmlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBmaWxlLm9iamVjdFVSTC5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlUHJvZmlsZShmb3JtOiBhbnkpIHtcclxuICAgICAgICB2YXIgdXJsO1xyXG4gICAgICAgIGlmICh0aGlzLmltYWdlVXJsICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZVByb2ZpbGUoJycpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IE9ic2VydmFibGUuY3JlYXRlKG9icyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwNCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYlQgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBpKCcvMTU5MjY3MDE3OTUyMjQ0L3Bob3RvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUlkID0gcmVzdWx0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKCdteWVnZ2V0dGZhbWlseXBhZ2UvYWxidW1zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6ICdwaG90b3N7c291cmNlfScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4LmlkID09PSAnMTU5MjY3MDE3OTUyMjQ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucGhvdG9zLmRhdGEuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkuaWQgPT09IHRoaXMuaW1hZ2VJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5pbWFnZVNlcnZpY2Uuc2FuaXRpemUoeS5zb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmVQcm9maWxlKHVybCkuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icy5uZXh0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9lbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZmFpbE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZVByb2ZpbGUoJycpLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9lbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuZmFpbE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NhdmVQcm9maWxlKGZvcm06IGFueSkge1xyXG4gICAgLy8gICAgdmFyIHVybDtcclxuICAgIC8vICAgIGlmICh0aGlzLmltYWdlVXJsICE9PSAnJykge1xyXG4gICAgLy8gICAgICAgIHRoaXMuZG9TYXZlUHJvZmlsZSgnJyk7XHJcblxyXG4gICAgLy8gICAgICAgIHZhciByZXN1bHQgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnMgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwNCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmZiVCA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgaGVsbG8oJ2ZhY2Vib29rJylcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAuYXBpKCcvMTU5MjY3MDE3OTUyMjQ0L3Bob3RvcycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgJ3Bvc3QnLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5pbWFnZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRoaXMuZmJUXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlSWQgPSByZXN1bHQuaWQ7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBpKCdteWVnZ2V0dGZhbWlseXBhZ2UvYWxidW1zJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiAncGhvdG9ze3NvdXJjZX0nLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5mb3JFYWNoKHggPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5pZCA9PT0gJzE1OTI2NzAxNzk1MjI0NCcpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucGhvdG9zLmRhdGEuZm9yRWFjaCh5ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeS5pZCA9PT0gdGhpcy5pbWFnZUlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuaW1hZ2VTZXJ2aWNlLnNhbml0aXplKHkuc291cmNlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmVQcm9maWxlKHVybCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icy5uZXh0KHVybCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icy5jb21wbGV0ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICByZXN1bHQuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgLy8gICAgICAgICAgICB0aGlzLnByb2ZpbGVNb2RhbC5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICBcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIGVsc2VcclxuICAgIC8vICAgIHtcclxuICAgIC8vICAgICAgICB0aGlzLmRvU2F2ZVByb2ZpbGUoJycpO1xyXG4gICAgLy8gICAgfVxyXG5cclxuICAgIC8vICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vfVxyXG5cclxuICAgIGRvU2F2ZVByb2ZpbGUodXJsKSB7XHJcbiAgICAgICAgaWYgKHVybCAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5pbWFnZVVybCA9IHVybC5jaGFuZ2luZ1RoaXNCcmVha3NBcHBsaWNhdGlvblNlY3VyaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9ic2VydmFibGUuY3JlYXRlKG9icyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodGhpcy51c2VyLCAnJykuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5ICE9PSBudWxsICYmIHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuYmlydGhkYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuYmlydGhkYXkgPSBuZXcgRGF0ZSh0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmJpcnRoZGF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VCaXJ0aGRheSAhPT0gbnVsbCAmJiB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5ID0gbmV3IERhdGUodGhpcy51c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VCaXJ0aGRheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLmFwcENoaWxkLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHguYmlydGhkYXkgIT09IHVuZGVmaW5lZCAmJiB4LmJpcnRoZGF5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYmlydGhkYXkgPSBuZXcgRGF0ZSh4LmJpcnRoZGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYnMubmV4dCh0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZmlsZTwvaDI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmVQcm9maWxlKGZvcm0udmFsdWUpOyBmb3JtLnJlc2V0KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2w9c20tMTIgdGV4dC1yaWdodFxcXCIgKm5nSWY9XFxcInVzZXIuYXBwbGljYXRpb25Vc2VySWQgPT09IHVzZXJTZXJ2aWNlLnVzZXIuYXBwbGljYXRpb25Vc2VySWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVFZGl0KHRydWUpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCI+PC9zcGFuPiBFZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVFZGl0KGZhbHNlKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj4gQ2FuY2VsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmUgQ2hhbmdlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZpcnN0IE5hbWU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e3VzZXIuZmlyc3ROYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5maXJzdE5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5NaWRkbGUgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVxcXCIhZWRpdE1vZGVcXFwiPnt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/Lm1pZGRsZU5hbWV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJtaWRkbGVOYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwubWlkZGxlTmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pkxhc3QgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVxcXCIhZWRpdE1vZGVcXFwiPnt7dXNlci5sYXN0TmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sYXN0TmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkJpcnRoZGF5OjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uYmlydGhkYXkgfCBmb3JtYXREYXRlOiAnTU1NTSBERCd9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1jYWxlbmRhciAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dJY29uXT1cXFwidHJ1ZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJiaXJ0aGRheVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuYmlydGhkYXlcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhclJhbmdlPVxcXCIxOTAwOjIyMDBcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVxcXCJtYXhEYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ckZvcm1hdD1cXFwiMTJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DZWxsIFBob25lICM6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e3VzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsPy5jZWxsUGhvbmUgfCBwaG9uZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNlbGxQaG9uZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuY2VsbFBob25lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SG9tZSBQaG9uZSAjOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uaG9tZVBob25lIHwgcGhvbmV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJob21lUGhvbmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLmhvbWVQaG9uZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmVtYWlsQWRkcmVzc319PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsQWRkcmVzc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxBZGRyZXNzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3RyZWV0IEFkZHJlc3M6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e3VzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsPy5zdHJlZXRBZGRyZXNzfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic3RyZWV0QWRkcmVzc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnN0cmVldEFkZHJlc3NcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DaXR5OjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uY2l0eX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNpdHlcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5jaXR5XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3RhdGU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e3VzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsPy5zdGF0ZT8uc3RhdGVOYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zdGF0ZUlkXFxcIiBuYW1lPVxcXCJzdGF0ZUlkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IHN0YXRlIG9mIHN0YXRlc1xcXCIgdmFsdWU9XFxcInt7c3RhdGUuc3RhdGVJZH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdGF0ZS5zdGF0ZU5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5aaXAgQ29kZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVxcXCIhZWRpdE1vZGVcXFwiPnt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/LnppcENvZGV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ6aXBDb2RlXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC56aXBDb2RlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q291bnRyeTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/LnN0YXRlPy5jb3VudHJ5Py5jb3VudHJ5TmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNwb3VzZSBGaXJzdCBOYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uc3BvdXNlRmlyc3ROYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic3BvdXNlRmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWwuc3BvdXNlRmlyc3ROYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3BvdXNlIE1pZGRsZSBOYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uc3BvdXNlTWlkZGxlTmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNwb3VzZU1pZGRsZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VNaWRkbGVOYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3BvdXNlIExhc3QgTmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVxcXCIhZWRpdE1vZGVcXFwiPnt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/LnNwb3VzZUxhc3ROYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic3BvdXNlTGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbC5zcG91c2VMYXN0TmFtZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNwb3VzZSBCaXJ0aGRheTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVxcXCIhZWRpdE1vZGVcXFwiPnt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/LnNwb3VzZUJpcnRoZGF5IHwgZm9ybWF0RGF0ZTogJ01NTU0gREQnfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtY2FsZW5kYXIgKm5nSWY9XFxcImVkaXRNb2RlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dJY29uXT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInNwb3VzZUJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUJpcnRoZGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhclJhbmdlPVxcXCIxOTAwOjIyMDBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyRm9ybWF0PVxcXCIxMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TcG91c2UgQ2VsbCBQaG9uZSAjOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uc3BvdXNlQ2VsbFBob25lIHwgcGhvbmV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzcG91c2VDZWxsUGhvbmVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsLnNwb3VzZUNlbGxQaG9uZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlcklkID09PSB1c2VyU2VydmljZS51c2VyLmFwcGxpY2F0aW9uVXNlcklkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGFzdCBMb2dnZWQgSW46PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3VzZXIubGFzdExvZ2dlZEluRHQgfCBkYXRlOiAnTU0vZGQveXl5eSBoaDptbSBhJyB9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlVzZXJuYW1lOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLnVzZXJuYW1lIH19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIudXNlcm5hbWVcXFwiIChibHVyKT1cXFwiY2hlY2tVc2VybmFtZSh1c2VyLnVzZXJuYW1lLCB1c2VyLmFwcGxpY2F0aW9uVXNlcklkKVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U2VjcmV0IFF1ZXN0aW9uOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLnNlY3JldFF1ZXN0aW9uIH19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzZWNyZXRRdWVzdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuc2VjcmV0UXVlc3Rpb25cXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNlY3JldCBBbnN3ZXI6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e3VzZXIuc2VjcmV0QW5zd2VyIH19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzZWNyZXRBbnN3ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnNlY3JldEFuc3dlclxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVjZWl2ZSBOb3RpZmljYXRpb25zOjwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XFxcIiFlZGl0TW9kZVxcXCI+e3t1c2VyLnJlY2VpdmVOb3RpZmljYXRpb25zIHwgeWVzTm86ICd5ZXNObyd9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicmVjZWl2ZU5vdGlmaWNhdGlvbnNcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5yZWNlaXZlTm90aWZpY2F0aW9uc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SG91c2Vob2xkIFBpY3R1cmU6PC9oND5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1maWxlVXBsb2FkICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgbmFtZT1cXFwiZGVtb1tdXFxcIiB1cmw9XFxcIn4vdXBsb2FkXFxcIiAob25VcGxvYWQpPVxcXCJvbkhlYWRlclVwbG9hZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIiBhdXRvPVxcXCJhdXRvXFxcIiBtYXhGaWxlU2l6ZT1cXFwiNDAwMDAwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWZpbGVVcGxvYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwibWF4LWhlaWdodDogNTA1cHg7IG1heC13aWR0aDogNTA1cHhcXFwiICpuZ0lmPVxcXCJpbWFnZVVybCA9PT0gJydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJ1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uaW1hZ2VVcmxcXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OjUwMHB4OyBtYXgtd2lkdGg6IDUwMHB4XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDUwNXB4OyBtYXgtd2lkdGg6IDUwNXB4XFxcIiAqbmdJZj1cXFwiaW1hZ2VVcmwgIT09ICcnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlVXJsKVxcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6NTAwcHg7IG1heC13aWR0aDogNTAwcHhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5DaGlsZHJlbjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiYWRkQ2hpbGQoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+IEFkZCBDaGlsZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMlxcXCI+PGJyIC8+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlICpuZ0lmPVxcXCJ1c2VyLmFwcENoaWxkICE9PSB1bmRlZmluZWQgJiYgdXNlci5hcHBDaGlsZCAhPT0gbnVsbFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZml4ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZpcnN0IE5hbWU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TWlkZGxlIE5hbWU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TGFzdCBOYW1lPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJpcnRoZGF5PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMSBib3JkZXItcmlnaHQgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCI+RGVsZXRlPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj4mbmJzcDs8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIiAqbmdGb3I9XFxcImxldCBjaGlsZCBvZiB1c2VyLmFwcENoaWxkOyBsZXQgaWR4ID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e2NoaWxkLmZpcnN0TmFtZX19Jm5ic3A7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJlZGl0TW9kZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY2hpbGRGaXJzdE5hbWV7e2lkeH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hpbGQuZmlyc3ROYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e2NoaWxkLm1pZGRsZU5hbWV9fSZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNoaWxkTWlkZGxlTmFtZXt7aWR4fX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJjaGlsZC5taWRkbGVOYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e2NoaWxkLmxhc3ROYW1lfX0mbmJzcDs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XFxcImVkaXRNb2RlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjaGlsZExhc3ROYW1le3tpZHh9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoaWxkLmxhc3ROYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWVkaXRNb2RlXFxcIj57e2NoaWxkLmJpcnRoZGF5IHwgZm9ybWF0RGF0ZTogJ01NTU0gREQnfX0mbmJzcDs8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1jYWxlbmRhciAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIFtzaG93SWNvbl09XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJjaGlsZEJpcnRoZGF5e3tpZHh9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJjaGlsZC5iaXJ0aGRheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXJSYW5nZT1cXFwiMTkwMDoyMjAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVxcXCJtYXhEYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ckZvcm1hdD1cXFwiMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNhbGVuZGFyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIGJvcmRlci1yaWdodCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiZWRpdE1vZGVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJEZWxldGUgQ2hpbGRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPVxcXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2hpbGQgZnJvbSB0aGUgbGlzdD9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dD1cXFwiWWVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cXFwiTm9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XFxcInRvcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiY29uZmlybUNsaWNrZWQoY2hpbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWJhblxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICZuYnNwO1xcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgYnNNb2RhbCAjcHJvZmlsZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwicHJvZmlsZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNoYW5nZXMgU2F2ZWQgU3VjY2Vzc2Z1bGx5PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQ2hhbmdlcyB0byB5b3VyIHByb2ZpbGUgaGF2ZSBiZWVuIHNhdmVkIHN1Y2Nlc3NmdWxseS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI3VzZXJuYW1lTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJ1c2VybmFtZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlVzZXJuYW1lIEFscmVhZHkgVGFrZW48L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4gYnkgYW5vdGhlciB1c2VyLiBQbGVhc2UgdXNlIGEgZGlmZmVyZW50IG9uZS5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvZmlsZXJlZGlyZWN0JyxcclxuICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXHJcbiAgICB9KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVJlZGlyZWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBpZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocGFyYW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHBhcmFtWydpZCddO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wcm9maWxlLyR7dGhpcy5pZH1gXSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlcmVkaXJlY3QuY29tcG9uZW50LnRzIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnXHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBTZXR0aW5nIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NldHRpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbWFnZS5tb2RlbCc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgaGVsbG86IGFueTtcclxuXHJcbkBcclxuICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdzZXR0aW5nJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZXR0aW5nLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoJ3Byb2ZpbGVNb2RhbCcpIHB1YmxpYyBwcm9maWxlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG5cclxuICAgIGhlYWRlclNldHRpbmcgPSB7fTtcclxuICAgIGNvZGVTZXR0aW5nID0ge307XHJcbiAgICBzZXR0aW5nID0gbmV3IFNldHRpbmcoKTtcclxuICAgIGltYWdlSWQgPSAwO1xyXG4gICAgZmJBID0gJyc7XHJcbiAgICBmYlMgPSAnJztcclxuICAgIGZiUCA9ICcnO1xyXG4gICAgZmJUID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmcoMTAwMSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmJBID0gcmVzdWx0LnNldHRpbmdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRTZXR0aW5nKDEwMDIpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZiUyA9IHJlc3VsdC5zZXR0aW5nVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDAzKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYlAgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldFNldHRpbmdzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIFt0aGlzLmhlYWRlclNldHRpbmcsIHRoaXMuY29kZVNldHRpbmddID0geDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVByb2ZpbGUoZm9ybTogYW55KSB7XHJcblxyXG4gICAgICAgIGhlbGxvKClcclxuICAgICAgICAgICAgLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgZmFjZWJvb2s6IHRoaXMuZmJBXHJcbiAgICAgICAgICAgIH0sIHsgc2NvcGU6ICdwdWJsaXNoX3BhZ2VzLG1hbmFnZV9wYWdlcyx1c2VyX3Bob3RvcycgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2UuZ2V0U2V0dGluZygxMDA0KS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mYlQgPSByZXN1bHQuc2V0dGluZ1ZhbHVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nLmhlYWRlcklkID0gZm9ybS5oZWFkZXJJZDtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nLmNvZGVJZCA9IGZvcm0uY29kZUlkO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmcuY29kZSA9IGZvcm0uY29kZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlU2VydmljZS5pbWFnZVVybCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGhlbGxvKCdmYWNlYm9vaycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwaSgnLzE1OTI2NzAxNzk1MjI0NC9waG90b3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZvcm0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLmZiVFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUlkID0gcmVzdWx0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxsbygnZmFjZWJvb2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwaSgnbXllZ2dldHRmYW1pbHlwYWdlL2FsYnVtcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogJ3Bob3Rvc3tzb3VyY2V9JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdGhpcy5mYlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHguaWQgPT09ICcxNTkyNjcwMTc5NTIyNDQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnBob3Rvcy5kYXRhLmZvckVhY2goeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkuaWQgPT09IHRoaXMuaW1hZ2VJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcuaW1hZ2UgPSB5LnNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2Uuc2F2ZVNldHRpbmdzKHRoaXMuc2V0dGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcuaW1hZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1NlcnZpY2Uuc2F2ZVNldHRpbmdzKHRoaXMuc2V0dGluZylcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZU1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZyB7XHJcbiAgICBoZWFkZXJJZDogbnVtYmVyO1xyXG4gICAgY29kZUlkOiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvc2V0dGluZy5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInNhdmVQcm9maWxlKGZvcm0udmFsdWUpO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkhlYWRlciBJbWFnZTo8L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiaW1hZ2VNb2RhbC5zaG93KClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cXFwiPjwvaT4mbmJzcDtVcGRhdGUgSW1hZ2U8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJpbWFnZVxcXCIgWyhuZ01vZGVsKV09XFxcImltYWdlU2VydmljZS5oZWFkZXJcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBuYW1lPVxcXCJoZWFkZXJJZFxcXCIgWyhuZ01vZGVsKV09XFxcImhlYWRlclNldHRpbmcuc2V0dGluZ0lkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImNvZGVJZFxcXCIgWyhuZ01vZGVsKV09XFxcImNvZGVTZXR0aW5nLnNldHRpbmdJZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImltYWdlU2VydmljZS5pbWFnZVVybCA9PT0gJydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3toZWFkZXJTZXR0aW5nLnNldHRpbmdWYWx1ZX19XFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJpbWFnZVNlcnZpY2UuaW1hZ2VVcmwgIT09ICcnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiaW1hZ2VTZXJ2aWNlLnNhbml0aXplKGltYWdlU2VydmljZS5pbWFnZVVybClcXFwiIGhlaWdodD1cXFwiMjAwXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+Jm5ic3A7PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvZGU6PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjb2RlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29kZVNldHRpbmcuc2V0dGluZ1ZhbHVlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXFxcIj48L3NwYW4+IFNhdmUgQ2hhbmdlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgYnNNb2RhbCAjcHJvZmlsZU1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIChjbGljayk9XFxcInByb2ZpbGVNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5DaGFuZ2VzIFNhdmVkIFN1Y2Nlc3NmdWxseTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIENoYW5nZXMgdG8gdGhlIHNldHRpbmdzIGhhdmUgYmVlbiBzYXZlZCBzdWNjZXNzZnVsbHkuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGJzTW9kYWwgI2ltYWdlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiaW1hZ2VNb2RhbC5oaWRlKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5VcGRhdGUgSW1hZ2U8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cC1ncm93bCBbdmFsdWVdPVxcXCJpbWFnZVNlcnZpY2UuaGVhZGVyTXNnc1xcXCI+PC9wLWdyb3dsPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAtZmlsZVVwbG9hZCBuYW1lPVxcXCJkZW1vW11cXFwiIHVybD1cXFwifi91cGxvYWRcXFwiIChvblVwbG9hZCk9XFxcImltYWdlU2VydmljZS5vbkhlYWRlclVwbG9hZCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIiBhdXRvPVxcXCJhdXRvXFxcIiBtYXhGaWxlU2l6ZT1cXFwiNDAwMDAwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3AtZmlsZVVwbG9hZD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7IEFwcFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwVXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VzZXItZGlyZWN0b3J5JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VzZXJkaXJlY3RvcnkuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckRpcmVjdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdXNlcnM6IEFwcFVzZXJbXSA9IFtdO1xyXG4gICAgdXNlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy51c2VyU2VydmljZS51c2VyTGlzdDtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyTGlzdE9iamVjdENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRBcHBsaWNhdGlvblVzZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJMaXN0ID0gdXNlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNoYW5nZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlcmRpcmVjdG9yeS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMj5EaXJlY3Rvcnk8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJ1c2VyU2VydmljZS51c2VyTGlzdD8ubGVuZ3RoIDwgMVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwidXNlclNlcnZpY2UudXNlckxpc3Q/Lmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWZpeGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TmFtZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5FbWFpbCBBZGRyZXNzPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNlbGwgUGhvbmU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SG9tZSBQaG9uZTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DaXR5PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRldGFpbHM8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgdXNlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dXNlci5maXJzdE5hbWV9fSB7e3VzZXIubGFzdE5hbWV9fSZuYnNwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTMgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXIuZW1haWxBZGRyZXNzfX0mbmJzcDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t1c2VyLmFwcGxpY2F0aW9uVXNlckRldGFpbD8uY2VsbFBob25lIHwgcGhvbmV9fSZuYnNwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXIuYXBwbGljYXRpb25Vc2VyRGV0YWlsPy5ob21lUGhvbmUgfCBwaG9uZX19Jm5ic3A7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dXNlci5hcHBsaWNhdGlvblVzZXJEZXRhaWw/LmNpdHl9fSZuYnNwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3Byb2ZpbGUvJyArIHVzZXIuYXBwbGljYXRpb25Vc2VySWRdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXRoLWxpc3QnPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlcmRpcmVjdG9yeS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9hcHBVc2VyLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlci1saXN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VzZXJsaXN0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB1c2VyczogQXBwVXNlcltdID0gW107XHJcbiAgICBpc1N5c3RlbUFkbWluID0gZmFsc2U7XHJcbiAgICBteVVzZXI6IEFwcFVzZXI7XHJcbiAgICBcclxuICAgIGNvbmZpcm1UZXh0OiBzdHJpbmcgPSAnPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS10aHVtYnMtby11cFwiPjwvaT4mbmJzcDtZZXMnO1xyXG4gICAgY2FuY2VsVGV4dDogc3RyaW5nID0gJzxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtdGh1bWJzLW8tZG93blwiPjwvaT4mbmJzcDtObyc7XHJcbiAgICBcclxuICAgIHVuQXBwcm92ZVRpdGxlOiBzdHJpbmcgPSAnTWFrZSBBZG1pbic7XHJcbiAgICB1bkFwcHJvdmVNZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSA8Yj5zdXJlPC9iPiB5b3Ugd2FudCB0byBtYWtlIHRoaXMgdXNlciBhbiBBZG1pbj8nO1xyXG5cclxuICAgIGFwcHJvdmVUaXRsZTogc3RyaW5nID0gJ1JlbW92ZSBBZG1pbic7XHJcbiAgICBhcHByb3ZlTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgdXNlcnMgYWRtaW4gcGVybWlzc2lvbnM/JztcclxuXHJcbiAgICB1bkFwcHJvdmVTeXNUaXRsZTogc3RyaW5nID0gJ01ha2UgU3lzdGVtIEFkbWluJztcclxuICAgIHVuQXBwcm92ZVN5c01lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IDxiPnN1cmU8L2I+IHlvdSB3YW50IHRvIG1ha2UgdGhpcyB1c2VyIGEgU3lzdGVtIEFkbWluPyc7XHJcblxyXG4gICAgYXBwcm92ZVN5c1RpdGxlOiBzdHJpbmcgPSAnUmVtb3ZlIFN5c3RlbSBBZG1pbic7XHJcbiAgICBhcHByb3ZlU3lzTWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3UgPGI+c3VyZTwvYj4geW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgdXNlcnMgc3lzdGVtIGFkbWluIHBlcm1pc3Npb25zPyc7XHJcbiAgICBcclxuICAgIHVzZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEFwcGxpY2F0aW9uVXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubXlVc2VyID0gdGhpcy51c2VyU2VydmljZS51c2VyO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJPYmplY3RDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm15VXNlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3lzdGVtQWRtaW4gPSB2YWx1ZS5pc1N5c3RlbUFkbWluO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcHJvdmVVc2VyKHVzZXIpIHtcclxuICAgICAgICB1c2VyLmlzQWRtaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodXNlciwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuQXBwcm92ZVVzZXIodXNlcikge1xyXG4gICAgICAgIHVzZXIuaXNBZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodXNlciwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcHJvdmVTeXNVc2VyKHVzZXIpIHtcclxuICAgICAgICB1c2VyLmlzU3lzdGVtQWRtaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodXNlciwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuQXBwcm92ZVN5c1VzZXIodXNlcikge1xyXG4gICAgICAgIHVzZXIuaXNTeXN0ZW1BZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2F2ZVByb2ZpbGUodXNlciwgJycpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyL3VzZXJsaXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiZuYnNwOzwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcInVzZXJzLmxlbmd0aCA8IDFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwidXNlcnMubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZml4ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wteHMtMiBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5OYW1lPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0zIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkVtYWlsIEFkZHJlc3M8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+VXNlcm5hbWU8L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+TGFzdCBMb2dnZWQgSW48L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QWRtaW48L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3lzIEFkbWluPC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Tm90aWZ5PzwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdXNlciBvZiB1c2Vyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0yIGJvcmRlci1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t1c2VyLmZpcnN0TmFtZX19IHt7dXNlci5sYXN0TmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wteHMtMyBib3JkZXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dXNlci5lbWFpbEFkZHJlc3N9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXIudXNlcm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTIgYm9yZGVyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3VzZXIubGFzdExvZ2dlZEluRHQgfCBkYXRlOiAnTU0vZGQveXl5eSBoaDptbSBhJyB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXIgYm9yZGVyLXJpZ2h0XFxcIiB0b29sdGlwPVxcXCJ7e3VzZXIgIT09IHVuZGVmaW5lZCAmJiB1c2VyLmlzQWRtaW4gfCB5ZXNObzogJ2FkbWluJyB9fVxcXCIgcGxhY2VtZW50PVxcXCJ0b3BcXFwiICpuZ0lmPVxcXCJteVVzZXIuaXNTeXN0ZW1BZG1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XFxcInVzZXIgIT09IHVuZGVmaW5lZCAmJiB1c2VyLmlzQWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiYXBwcm92ZVRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwiYXBwcm92ZU1lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJ1bkFwcHJvdmVVc2VyKHVzZXIpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1yZWJlbFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwidXNlciAhPT0gdW5kZWZpbmVkICYmICF1c2VyLmlzQWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwidW5BcHByb3ZlVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21lc3NhZ2VdPVxcXCJ1bkFwcHJvdmVNZXNzYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maXJtVGV4dF09XFxcImNvbmZpcm1UZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYW5jZWxUZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cXFwicGxhY2VtZW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25maXJtKT1cXFwiYXBwcm92ZVVzZXIodXNlcilcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblR5cGU9XFxcImRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UeXBlPVxcXCJkZWZhdWx0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRUb0JvZHldPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWVtcGlyZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgKm5nSWY9XFxcIiFteVVzZXIuaXNTeXN0ZW1BZG1pblxcXCIgdG9vbHRpcD1cXFwie3t1c2VyICE9PSB1bmRlZmluZWQgJiYgdXNlci5pc0FkbWluIHwgeWVzTm86ICdhZG1pbicgfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwidXNlciAhPT0gdW5kZWZpbmVkICYmIHVzZXIuaXNBZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXJlYmVsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJ1c2VyICE9PSB1bmRlZmluZWQgJiYgIXVzZXIuaXNBZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWVtcGlyZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgKm5nSWY9XFxcIiFteVVzZXIuaXNTeXN0ZW1BZG1pblxcXCIgdG9vbHRpcD1cXFwie3t1c2VyICE9PSB1bmRlZmluZWQgJiYgdXNlci5pc1N5c3RlbUFkbWluIHwgeWVzTm86ICdzeXNBZG1pbicgfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwidXNlciAhPT0gdW5kZWZpbmVkICYmIHVzZXIuaXNTeXN0ZW1BZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLXJlYmVsXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJ1c2VyICE9PSB1bmRlZmluZWQgJiYgIXVzZXIuaXNTeXN0ZW1BZG1pblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxnIGZhLWVtcGlyZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbC14cy0xIHRleHQtY2VudGVyIGJvcmRlci1yaWdodFxcXCIgdG9vbHRpcD1cXFwie3t1c2VyICE9PSB1bmRlZmluZWQgJiYgdXNlci5pc1N5c3RlbUFkbWluIHwgeWVzTm86ICdzeXNBZG1pbicgfX1cXFwiIHBsYWNlbWVudD1cXFwidG9wXFxcIiAqbmdJZj1cXFwibXlVc2VyLmlzU3lzdGVtQWRtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVxcXCJ1c2VyLmlzU3lzdGVtQWRtaW5cXFwiIHJvbGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cXFwiYXBwcm92ZVN5c1RpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZXNzYWdlXT1cXFwiYXBwcm92ZVN5c01lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJ1bkFwcHJvdmVTeXNVc2VyKHVzZXIpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UeXBlPVxcXCJkYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVHlwZT1cXFwiZGVmYXVsdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1yZWJlbFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cXFwiIXVzZXIuaXNTeXN0ZW1BZG1pblxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVxcXCJ1bkFwcHJvdmVTeXNUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XFxcInVuQXBwcm92ZVN5c01lc3NhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpcm1UZXh0XT1cXFwiY29uZmlybVRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbmNlbFRleHRdPVxcXCJjYW5jZWxUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVxcXCJwbGFjZW1lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpcm0pPVxcXCJhcHByb3ZlU3lzVXNlcih1c2VyKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVHlwZT1cXFwiZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblR5cGU9XFxcImRlZmF1bHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZFRvQm9keV09XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtZW1waXJlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLXhzLTEgdGV4dC1jZW50ZXJcXFwiIHRvb2x0aXA9XFxcInt7dXNlci5yZWNlaXZlTm90aWZpY2F0aW9ucyB8IHllc05vOiAnbm90aWZpY2F0aW9uJyB9fVxcXCIgcGxhY2VtZW50PVxcXCJ0b3BcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJ1c2VyLnJlY2VpdmVOb3RpZmljYXRpb25zXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtcmViZWxcXFwiPjwvaT48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIiF1c2VyLnJlY2VpdmVOb3RpZmljYXRpb25zXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGcgZmEtZW1waXJlXFxcIj48L2k+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2VyL3VzZXJsaXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbWFnZS5tb2RlbCc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZpZGVvLXBsYXllcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWRlb3BsYXllci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzb3VyY2VzOiBBcnJheTxJbWFnZT4gPSBbXTtcclxuXHJcbiAgICBASW5wdXQoKSBpbWFnZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLnB1c2godGhpcy5pbWFnZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW9wbGF5ZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx2Zy1wbGF5ZXIgc3R5bGU9XFxcIndpZHRoOiA1MCU7IGhlaWdodDogNDAwcHhcXFwiIGNsYXNzPVxcXCJmbHVpZCBjZW50ZXItYmxvY2tcXFwiPlxcclxcbiAgICA8dmctb3ZlcmxheS1wbGF5Pjwvdmctb3ZlcmxheS1wbGF5PlxcclxcbiAgICA8dmctYnVmZmVyaW5nPjwvdmctYnVmZmVyaW5nPlxcclxcblxcclxcbiAgICA8dmctc2NydWItYmFyPlxcclxcbiAgICAgICAgPHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWU+PC92Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lPlxcclxcbiAgICAgICAgPHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZT48L3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZT5cXHJcXG4gICAgPC92Zy1zY3J1Yi1iYXI+XFxyXFxuXFxyXFxuICAgIDx2Zy1jb250cm9scz5cXHJcXG4gICAgICAgIDx2Zy1wbGF5LXBhdXNlPjwvdmctcGxheS1wYXVzZT5cXHJcXG4gICAgICAgIDx2Zy1wbGF5YmFjay1idXR0b24+PC92Zy1wbGF5YmFjay1idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8dmctdGltZS1kaXNwbGF5IHZnUHJvcGVydHk9XFxcImN1cnJlbnRcXFwiIHZnRm9ybWF0PVxcXCJtbTpzc1xcXCI+PC92Zy10aW1lLWRpc3BsYXk+XFxyXFxuXFxyXFxuICAgICAgICA8dmctc2NydWItYmFyIHN0eWxlPVxcXCJwb2ludGVyLWV2ZW50czogbm9uZTtcXFwiPjwvdmctc2NydWItYmFyPlxcclxcblxcclxcbiAgICAgICAgPHZnLXRpbWUtZGlzcGxheSB2Z1Byb3BlcnR5PVxcXCJsZWZ0XFxcIiB2Z0Zvcm1hdD1cXFwibW06c3NcXFwiPjwvdmctdGltZS1kaXNwbGF5PlxcclxcbiAgICAgICAgPHZnLXRpbWUtZGlzcGxheSB2Z1Byb3BlcnR5PVxcXCJ0b3RhbFxcXCIgdmdGb3JtYXQ9XFxcIm1tOnNzXFxcIj48L3ZnLXRpbWUtZGlzcGxheT5cXHJcXG5cXHJcXG4gICAgICAgIDx2Zy1tdXRlPjwvdmctbXV0ZT5cXHJcXG4gICAgPC92Zy1jb250cm9scz5cXHJcXG5cXHJcXG4gICAgPHZpZGVvIHZnTWVkaWEgI21lZGlhIGlkPVxcXCJzaW5nbGVWaWRlb1xcXCIgcHJlbG9hZD1cXFwiYXV0b1xcXCIgY3Jvc3NvcmlnaW4gY2xhc3M9XFxcImZsdWlkIGNlbnRlci1ibG9ja1xcXCI+XFxyXFxuICAgICAgICA8c291cmNlICpuZ0Zvcj1cXFwibGV0IHZpZGVvIG9mIHNvdXJjZXNcXFwiIFtzcmNdPVxcXCJpbWFnZVNlcnZpY2Uuc2FuaXRpemUodmlkZW8uaW1hZ2VVcmwpXFxcIiB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiPlxcclxcbiAgICA8L3ZpZGVvPlxcclxcbjwvdmctcGxheWVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW9wbGF5ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBGb3Jnb3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9yZ290Lm1vZGVsJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5AXHJcbiAgICBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnZm9yZ290JyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mb3Jnb3QuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgfSlcclxuZXhwb3J0IGNsYXNzIEZvcmdvdENvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdzdWNjZXNzTW9kYWwnKSBwdWJsaWMgc3VjY2Vzc01vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGQoJ2ZhaWx1cmVNb2RhbCcpIHB1YmxpYyBmYWlsdXJlTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgnZmFpbHVyZVF1ZXN0aW9uTW9kYWwnKSBwdWJsaWMgZmFpbHVyZVF1ZXN0aW9uTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xyXG4gICAgXHJcbiAgICBsb2dpbkluZm8gPSBuZXcgRm9yZ290KCk7XHJcbiAgICBnb3RVc2VyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG4gICAgXHJcbiAgICBsb2dpbihmb3JtOiBhbnkpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkluZm8udXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFF1ZXN0aW9uKHRoaXMubG9naW5JbmZvLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucXVlc3Rpb24gIT09IG51bGwgJiYgcmVzLnF1ZXN0aW9uICE9PSB1bmRlZmluZWQgJiYgcmVzLnF1ZXN0aW9uICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb3RVc2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5JbmZvID0gcmVzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb3RVc2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaWx1cmVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KHF1ZXN0aW9uRm9ybTogYW55KSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5JbmZvLmFuc3dlciA9IHF1ZXN0aW9uRm9ybS5hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5sb2dpbkluZm8ubmV3UGFzc3dvcmQgPSBxdWVzdGlvbkZvcm0ubmV3UGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5sb2dpbkluZm8uYXBwbGljYXRpb25Vc2VySWQgPSBxdWVzdGlvbkZvcm0uYXBwbGljYXRpb25Vc2VySWQ7XHJcblxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLmxvZ2luSW5mbylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzTW9kYWwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWx1cmVRdWVzdGlvbk1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9mb3Jnb3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9yZ290IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG4gICAgcXVlc3Rpb246IHN0cmluZztcbiAgICBhbnN3ZXI6IHN0cmluZztcbiAgICBhcHBsaWNhdGlvblVzZXJJZDogbnVtYmVyO1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9tb2RlbHMvZm9yZ290Lm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxkaXYgaWQ9XFxcIndyYXBwZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDI+Rm9yZ290IFBhc3N3b3JkPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKm5nSWY9XFxcIiFnb3RVc2VyXFxcIiAjZm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJsb2dpbihmb3JtLnZhbHVlKTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Vc2VybmFtZTo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luSW5mby51c2VybmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQgLz48L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWxnIGZhLXNoYXJlXFxcIj48L3NwYW4+IFN1Ym1pdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSAqbmdJZj1cXFwiZ290VXNlclxcXCIgI3F1ZXN0aW9uRm9ybT1cXFwibmdGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJyZXNldChxdWVzdGlvbkZvcm0udmFsdWUpO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNlY3JldCBRdWVzdGlvbjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7bG9naW5JbmZvLnF1ZXN0aW9ufX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U2VjcmV0IEFuc3dlcjo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhbnN3ZXJcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkluZm8uYW5zd2VyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIG5hbWU9XFxcImFwcGxpY2F0aW9uVXNlcklkXFxcIiBbKG5nTW9kZWwpXT1cXFwibG9naW5JbmZvLmFwcGxpY2F0aW9uVXNlcklkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5ldyBQYXNzd29yZDo8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwibmV3UGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkluZm8ubmV3UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkIC8+PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1sZyBmYS1zaGFyZVxcXCI+PC9zcGFuPiBTdWJtaXRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI3N1Y2Nlc3NNb2RhbD1cXFwiYnMtbW9kYWxcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCIgKG9uSGlkZSk9XFxcImRpc21pc3NNb2RhbCgpXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwic3VjY2Vzc01vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlN1Y2Nlc3M8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYXNzd29yZCBoYXMgYmVlbiByZXNldCBzdWNjZXNzZnVsbHkuIFlvdSBtYXkgbm93IGxvZ2luIHVzaW5nIHRoZSBuZXcgcGFzc3dvcmQuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBic01vZGFsICNmYWlsdXJlTW9kYWw9XFxcImJzLW1vZGFsXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwibXlTbWFsbE1vZGFsTGFiZWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiAoY2xpY2spPVxcXCJmYWlsdXJlTW9kYWwuaGlkZSgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBVbmFibGUgdG8gZmluZCB0aGF0IHVzZXJuYW1lIGluIHN5c3RlbS4gUGxlYXNlIHRyeSBhZ2Fpbi5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGJzTW9kYWwgI2ZhaWx1cmVRdWVzdGlvbk1vZGFsPVxcXCJicy1tb2RhbFxcXCIgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcIm15U21hbGxNb2RhbExhYmVsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgKGNsaWNrKT1cXFwiZmFpbHVyZU1vZGFsLmhpZGUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVycm9yPC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgVW5hYmxlIHRvIHZlcmlmeSBhbnN3ZXIgdG8gcXVlc3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9mb3Jnb3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICd5ZXNObydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oYm9vbGVhbjogYm9vbGVhbiwgdHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAneWVzTm8nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnWWVzJyA6ICdObyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnYXBwcm92ZWQnKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGJvb2xlYW4gPyAnQXBwcm92ZWQnIDogJ1VuLUFwcHJvdmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZWFkVW5yZWFkJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBib29sZWFuID8gJ1VucmVhZCcgOiAnUmVhZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAndmlzaWJsZScpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYm9vbGVhbiA/ICdWaXNpYmxlJyA6ICdIaWRkZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBib29sZWFuID8gJ0FkbWluJyA6ICdOb24tQWRtaW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5c0FkbWluJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBib29sZWFuID8gJ1N5c3RlbSBBZG1pbicgOiAnTm9uLVN5c3RlbSBBZG1pbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBib29sZWFuID8gJ0dldHMgTm90aWZpZWQnIDogJ0RvZXMgbm90IGdldCBOb3RpZmllZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL3llc05vLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmb3JtYXREYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnksIHRyYW5zZm9ybSA9IHRydWUpOiBhbnkge1xyXG4gICAgICAgIGlmIChkYXRlICE9PSBudWxsICYmIGRhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBkLnNldE1pbnV0ZXMoZC5nZXRNaW51dGVzKCkgKyBkLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkKS5mb3JtYXQoYXJncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KGQpLmZvcm1hdChhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3BpcGVzL2Zvcm1hdERhdGUucGlwZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3Bob25lJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lUGlwZSB7XHJcbiAgICB0cmFuc2Zvcm0odGVsLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRlbCAhPT0gdW5kZWZpbmVkICYmIHRlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0ZWwudG9TdHJpbmcoKS50cmltKCkucmVwbGFjZSgvXlxcKy8sICcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvW14wLTldLykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjb3VudHJ5LCBjaXR5LCBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMDogLy8gKzFQUFAjIyMjIyMjIC0+IEMgKFBQUCkgIyMjLSMjIyNcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5ID0gdmFsdWUuc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gdmFsdWUuc2xpY2UoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTogLy8gK0NQUFAjIyMjIyMjIC0+IENDQyAoUFApICMjIy0jIyMjXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHkgPSB2YWx1ZS5zbGljZSgxLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSB2YWx1ZS5zbGljZSg0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOiAvLyArQ0NDUFAjIyMjIyMjIC0+IENDQyAoUFApICMjIy0jIyMjXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IHZhbHVlLnNsaWNlKDAsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHkgPSB2YWx1ZS5zbGljZSgzLCA1KTtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSB2YWx1ZS5zbGljZSg1KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudHJ5ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnkgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIuc2xpY2UoMCwgMykgKyAnLScgKyBudW1iZXIuc2xpY2UoMyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGNvdW50cnkgKyBcIiAoXCIgKyBjaXR5ICsgXCIpIFwiICsgbnVtYmVyKS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2FwcFVzZXIubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVJlc29sdmUgaW1wbGVtZW50cyBSZXNvbHZlPEFwcFVzZXI+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIocm91dGUucGFyYW1zWydpZCddKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvcmVzb2x2ZXJzL3Byb2ZpbGUucmVzb2x2ZS50cyJdLCJzb3VyY2VSb290IjoiIn0=