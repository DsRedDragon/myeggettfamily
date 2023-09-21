"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var angular_confirmation_popover_1 = require("angular-confirmation-popover");
var core_2 = require("videogular2/core");
var controls_1 = require("videogular2/controls");
var overlay_play_1 = require("videogular2/overlay-play");
var buffering_1 = require("videogular2/buffering");
//Components
var admin_component_1 = require("./components/admin/admin.component");
var app_component_1 = require("./components/app/app.component");
var archivecontainer_component_1 = require("./components/archive/archivecontainer.component");
var archivelist_component_1 = require("./components/archive/archivelist.component");
var archiveredirect_component_1 = require("./components/archive/archiveredirect.component");
var articleadminlist_component_1 = require("./components/article/articleadminlist.component");
var article_component_1 = require("./components/article/article.component");
var articlecontainer_component_1 = require("./components/article/articlecontainer.component");
var edit_component_1 = require("./components/article/edit.component");
var articleeditredirect_component_1 = require("./components/article/articleeditredirect.component");
var articlelist_component_1 = require("./components/article/articlelist.component");
var articleredirect_component_1 = require("./components/article/articleredirect.component");
var articleviewredirect_component_1 = require("./components/article/articleviewredirect.component");
var commentlist_component_1 = require("./components/comment/commentlist.component");
var commentadminlist_component_1 = require("./components/comment/commentadminlist.component");
var feedback_component_1 = require("./components/feedback/feedback.component");
var feedbacklist_component_1 = require("./components/feedback/feedbacklist.component");
var feedbackredirect_component_1 = require("./components/feedback/feedbackredirect.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/home/home.component");
var loading_indicator_1 = require("./components/loading/loading-indicator");
var login_component_1 = require("./components/login/login.component");
var newaccount_component_1 = require("./components/login/newaccount.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var ngcarousel_component_1 = require("./components/ngcarousel/ngcarousel.component");
var privacy_component_1 = require("./components/privacy/privacy.component");
var profile_component_1 = require("./components/profile/profile.component");
var profileredirect_component_1 = require("./components/profile/profileredirect.component");
var setting_component_1 = require("./components/setting/setting.component");
var userdirectory_component_1 = require("./components/user/userdirectory.component");
var userlist_component_1 = require("./components/user/userlist.component");
var videoplayer_component_1 = require("./components/video/videoplayer.component");
var forgot_component_1 = require("./components/login/forgot.component");
//Services
var ng2_facebook_sdk_1 = require("ng2-facebook-sdk");
var user_service_1 = require("./services/user.service");
var comment_service_1 = require("./services/comment.service");
var article_service_1 = require("./services/article.service");
var image_service_1 = require("./services/image.service");
var setting_service_1 = require("./services/setting.service");
//Pipes
var yesNo_pipe_1 = require("./pipes/yesNo.pipe");
var formatDate_pipe_1 = require("./pipes/formatDate.pipe");
var phone_pipe_1 = require("./pipes/phone.pipe");
//Resolvers
var profile_resolve_1 = require("./resolvers/profile.resolve");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map