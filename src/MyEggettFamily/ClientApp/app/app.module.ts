//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { CarouselModule, ModalModule, TabsModule, DatepickerModule, TooltipModule } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, SharedModule, FileUploadModule, GrowlModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

//Components
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './components/app/app.component'
import { ArchiveContainerComponent } from './components/archive/archivecontainer.component';
import { ArchiveListComponent } from './components/archive/archivelist.component';
import { ArchiveRedirectComponent } from './components/archive/archiveredirect.component';
import { ArticleAdminListComponent } from './components/article/articleadminlist.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleContainerComponent } from './components/article/articlecontainer.component';
import { ArticleEditComponent } from './components/article/edit.component';
import { ArticleEditRedirectComponent } from './components/article/articleeditredirect.component';
import { ArticleListComponent } from './components/article/articlelist.component';
import { ArticleRedirectComponent } from './components/article/articleredirect.component';
import { ArticleViewRedirectComponent } from './components/article/articleviewredirect.component';
import { CommentListComponent } from './components/comment/commentlist.component';
import { CommentAdminListComponent } from './components/comment/commentadminlist.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedBackListComponent } from './components/feedback/feedbacklist.component';
import { FeedbackRedirectComponent } from './components/feedback/feedbackredirect.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingIndicator } from './components/loading/loading-indicator';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/login/newaccount.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NGCarouselComponent } from './components/ngcarousel/ngcarousel.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRedirectComponent } from './components/profile/profileredirect.component';
import { SettingComponent } from './components/setting/setting.component';
import { UserDirectoryComponent } from './components/user/userdirectory.component';
import { UserListComponent } from './components/user/userlist.component';
import { VideoPlayerComponent } from './components/video/videoplayer.component';
import { ForgotComponent } from './components/login/forgot.component';

//Services
import { FacebookService, FacebookUiParams, FacebookInitParams } from 'ng2-facebook-sdk';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { ArticleService } from './services/article.service';
import { ImageService } from './services/image.service';
import { SettingService } from './services/setting.service';

//Pipes
import { BooleanPipe } from './pipes/yesNo.pipe';
import { DatePipe } from './pipes/formatDate.pipe';
import { PhonePipe } from './pipes/phone.pipe';


//Resolvers
import { ProfileResolve } from './resolvers/profile.resolve';

@
NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AdminComponent,
        AppComponent,
        ArchiveContainerComponent,
        ArchiveListComponent,
        ArchiveRedirectComponent,
        ArticleAdminListComponent,
        ArticleComponent,
        ArticleContainerComponent,
        ArticleEditComponent,
        ArticleEditRedirectComponent,
        ArticleListComponent,
        ArticleRedirectComponent,
        ArticleViewRedirectComponent,
        BooleanPipe,
        CommentListComponent,
        CommentAdminListComponent,
        DatePipe,
        FeedbackComponent,
        FeedBackListComponent,
        FeedbackRedirectComponent,
        FooterComponent,
        ForgotComponent,
        HomeComponent,
        NavMenuComponent,
        NGCarouselComponent,
        LoadingIndicator,
        LoginComponent,
        NewAccountComponent,
        PrivacyComponent,
        ProfileComponent,
        ProfileRedirectComponent,
        SettingComponent,
        UserDirectoryComponent,
        UserListComponent,
        VideoPlayerComponent,
        PhonePipe
        ],
        imports: [
            UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
            RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: HomeComponent },
                {
                    path: 'article',
                    children: [
                        { path: 'view/:id', component: ArticleContainerComponent },
                        { path: 'edit/:id', component: ArticleEditComponent },
                        { path: 'new', component: ArticleEditComponent }
                    ]
                },
                { path: 'view/:id', component: ArticleViewRedirectComponent },
                { path: 'archive', component: ArchiveContainerComponent },
                { path: 'archives', component: ArchiveRedirectComponent },
                { path: 'create', component: ArticleRedirectComponent },
                { path: 'edit/:id', component: ArticleEditRedirectComponent },
                { path: 'admin', component: AdminComponent },
                { path: 'feedback', component: FeedbackComponent },
                { path: 'login', component: LoginComponent },
                { path: 'login/:id', component: LoginComponent },
                { path: 'feedbackredirect', component: FeedbackRedirectComponent },
                {
                    path: 'profile/:id', component: ProfileComponent,
                    resolve: {
                        profile: ProfileResolve
                    }
                },
                { path: 'profileredirect/:id', component: ProfileRedirectComponent },
                { path: 'privacy', component: PrivacyComponent },
                { path: 'forgot', component: ForgotComponent },
                { path: 'newaccount', component: NewAccountComponent },
                { path: 'directory', component: UserDirectoryComponent },
                { path: '**', redirectTo: 'home' }
            ]),
            CalendarModule,
            CarouselModule.forRoot(),
            ConfirmationPopoverModule.forRoot({
                focusButton: 'confirm'
            }),
            DatepickerModule.forRoot(),
            DropdownModule,
            EditorModule,
            FileUploadModule,
            FormsModule,
            GrowlModule,
            ModalModule.forRoot(),
            SharedModule,
            TabsModule.forRoot(),
            TooltipModule.forRoot(),
            VgCoreModule,
            VgControlsModule,
            VgOverlayPlayModule,
            VgBufferingModule


        ],
        providers: [ArticleService,
            CommentService,
            FacebookService,
            ImageService,
            SettingService,
            UserService,
            ProfileResolve
        ]
    })
export class AppModule {
}
