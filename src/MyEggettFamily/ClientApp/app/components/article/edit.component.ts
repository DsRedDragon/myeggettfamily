
import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { ImageService } from '../../services/image.service';
import { SettingService } from '../../services/setting.service';
import { Subscription, Observable, ReplaySubject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';
import { AppUser } from '../../models/appUser.model';
import { Image } from '../../models/image.model';
import { CarouselModule } from 'ng2-bootstrap';
import { ArticleDetail } from '../../models/articledetail.model';
import { FileUploadModule, GrowlModule, Message } from 'primeng/primeng';
import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk';
import * as moment from 'moment';

declare var hello: any;

@
    Component({
        selector: 'article-edit',
        template: require('./edit.component.html')
    })
export class ArticleEditComponent implements OnInit {
    @ViewChild('articleModal') public articleModal: ModalDirective;
    @ViewChild('savingModal') public savingModal: ModalDirective;
    @ViewChild('loginModal') public loginModal: ModalDirective;

    @Input() id = 0;
    article = new ArticleDetail();
    //accessToken = '';
    albumId = '';
    //imageId = '';
    currentImage: Image;
    imageCount = 0;
    fbA = '';
    fbS = '';
    fbP = '';
    fbT = '';

    currentState = 'Edit';
    isNew = false;

    user: AppUser;
    isLoggedIn = false;
    images: Image[] = [];
    myImages: Image[] = [];
    imageDetails: Image[] = [];
    imagestoDelete = [];
    notifyUsers: AppUser[] = [];
    maxDate = new Date();

    userSubscription: Subscription;
    imageSubscription: Subscription;

    constructor(private articleService: ArticleService, private router: Router, private userService: UserService, private fb: FacebookService, private activatedRoute: ActivatedRoute, private imageService: ImageService, private settingService: SettingService) { }
    
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
        this.imageSubscription.unsubscribe();
    }
    
    ngOnInit(): void {
        this.userService.checkLogin(window.location.pathname)
            .subscribe(res => {
                this.settingService.getSetting(1001)
                    .subscribe(result => {
                        this.fbA = result.settingValue;

                        let fbParams: FacebookInitParams = {
                            appId: this.fbA,
                            xfbml: true,
                            version: 'v2.8'
                        };
                        this.fb.init(fbParams);

                        hello()
                            .init({
                                    facebook: this.fbA
                                },
                                { scope: 'publish_pages,manage_pages,user_photos' });

                        this.settingService.getSetting(1002)
                            .subscribe(result => {
                                this.fbS = result.settingValue;

                                this.settingService.getSetting(1003)
                                    .subscribe(result => {
                                        this.fbP = result.settingValue;

                                        this.settingService.getSetting(1004)
                                            .subscribe(result => {
                                                this.fbT = result.settingValue;
                                            });
                                    });
                            });
                    });

                this.user = this.userService.user;
                this.isLoggedIn = true;

                this.userSubscription = this.userService.userObjectChange.subscribe((value) => {
                    this.user = value;
                });

                this.activatedRoute.params.subscribe(
                    (param: any) => {
                        this.id = param['id'];
                    });

                if (this.id > 0) {
                    this.articleService.getArticle(this.id)
                        .subscribe(article => {
                            this.article = article;
                        });
                    this.imageService.getImagesByArticleId(this.id);
                } else {
                    this.imageService.images = [];
                    this.currentState = 'New';
                    this.isNew = true;
                    this.article.authorName = this.user.firstName + ' ' + this.user.lastName;
                    this.article.postedDT = new Date();
                    this.article.applicationUserId = this.user.applicationUserId;
                    this.article.isNew = true;

                    this.article.title = '';
                    this.article.articleContent = '';
                }

                this.images = this.imageService.images;

                this.imageSubscription = this.imageService.imageChange.subscribe((value) => {
                    this.images = value;

                    if (this.images !== null) {
                        this.images.forEach(image => {
                            if (image.externalAlbumId !== null) {
                                this.albumId = image.externalAlbumId;
                            }
                        });
                    }
                });
            });
    }

    //ngAfterViewInit() {
    //    if (!this.isLoggedIn) {
    //        if (this.loginModal !== undefined)
    //            this.loginModal.show();
    //    }
    //}

    dismissModal() {
        this.router.navigate([`/edit/${this.article.articleId}`]);
    }

    dismissLoginModal() {
        this.router.navigate(['/home']);
    }

    toggleVisibility() {
        this.article.visible = !this.article.visible;
    }

    toggleArchived() {
        this.article.archived = !this.article.archived;
    }

    sendNotification() {
        this.fb.ui({
            method: 'feed',
            link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
            quote: `My Eggett Family has updated the article called: ${this.article.title}`,
            from: this.fbP
        });

        this.articleService.sendNotification(this.article).subscribe(x => {

        });
    }

    deleteImage(image) {
        this.imagestoDelete.push(image); 

        var index2 = this.imageService.images.indexOf(image);
        this.imageService.images.splice(index2, 1);  

        var index = this.myImages.indexOf(image);
        this.myImages.splice(index, 1);

        var index1 = this.imageService.files.indexOf(image);
        this.imageService.files.splice(index1, 1);
    }

    saveProfile(form: any) {
        this.savingModal.show();
        
        hello()
            .init({
                facebook: this.fbA
            }, { scope: 'publish_pages,manage_pages,user_photos' });

        if (form.imagesToDelete !== undefined) {
            form.imagesToDelete.forEach(x => {

                if (x.imageId > 0) {

                    hello('facebook')
                        .api(`/${x.externalId}`,
                        'delete',
                        {
                            token: this.fbT
                        })
                        .then(result => {
                        });

                    this.imageService.deleteImage(x.imageId);
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
            .subscribe(res => {
                this.article = res;
                this.imageDetails.forEach(x => {
                    if (x.imageId !== undefined) {
                        this.imageService.updateImage(x)
                            .subscribe(r => {

                            });
                    }
                });
            });

        var res = Observable.create(obs => {
            if (form.images.length > 0) {
                if (form.albumId === '') {
                    hello('facebook')
                        .api(`/${this.fbP}/albums`,
                        'post',
                        {
                            name: form.title,
                            token: this.fbT
                        })
                        .then(result => {
                            this.albumId = result.id;
                            obs.next(this.albumId);
                            obs.complete();
                        });
                } else {

                    this.albumId = form.albumId;
                    obs.next(this.albumId);
                    obs.complete();
                }
            } else {
                obs.next(this.albumId);
                obs.complete();
            }
        });
        
        res.subscribe(x => {
            var count = 0;
            if (this.myImages.length > 0) {
                var r = Observable.create(observer => {
                    for (var i = 0; i < this.myImages.length; i++) {
                        this.currentImage = this.myImages[i];

                        if (this.currentImage.type.includes('video')) {
                            hello('facebook')
                                .api(`/${this.fbP}/videos`,
                                    'post',
                                    {
                                        file: this.currentImage,
                                        token: this.fbT
                                    })
                                .then(result => {

                                    hello('facebook')
                                        .api(`/${result.id}`,
                                            {
                                                "fields": 'source',
                                                token: this.fbT
                                            }
                                        )
                                        .then(res => {
                                            var img = new Image();
                                            img.articleId = this.article.articleId;
                                            img.captionText = this.currentImage.captionText;
                                            img.externalAlbumId = this.albumId;
                                            img.imageUrl = res.source;
                                            img.externalId = res.id;
                                            img.isVideo = true;

                                            this.imageService.saveImage(img)
                                                .subscribe(resu => {
                                                    count++;

                                                    if (count >= this.myImages.length) {
                                                        observer.next(count);
                                                        observer.complete();
                                                    }
                                                });
                                        });
                                });
                        } else {
                            hello('facebook')
                                .api(`/${this.albumId}/photos`,
                                    'post',
                                    {
                                        file: this.currentImage,
                                        token: this.fbT
                                    })
                                .then(result => {

                                    hello('facebook')
                                        .api(`/${result.id}`,
                                            {
                                                "fields": 'source',
                                                token: this.fbT
                                            }
                                        )
                                        .then(res => {
                                            var img = new Image();
                                            img.articleId = this.article.articleId;
                                            img.captionText = this.currentImage.captionText;
                                            img.externalAlbumId = this.albumId;
                                            img.externalId = res.id;
                                            img.imageUrl = res.source;
                                            img.isVideo = false;

                                            this.imageService.saveImage(img)
                                                .subscribe(resu => {
                                                    count++;

                                                    if (count >= this.myImages.length) {
                                                        observer.next(count);
                                                        observer.complete();
                                                    }
                                                });
                                        });
                                });
                        }

                    }
                });

                r.subscribe(result => {
                    this.imageService.images = this.imageDetails;
                    this.imageService.files = [];
                    this.imagestoDelete = [];

                    this.savingModal.hide();
                    this.articleModal.show();

                    if (this.article.isNew && this.article.visible) {
                        //this.fb.ui({
                        //    method: 'feed',
                        //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
                        //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
                        //    from: this.fbP
                        //});

                        this.articleService.sendNotification(this.article)
                            .subscribe(x => {
                                var blah = x;
                            });
                    }

                    if (this.article.isNew && !this.userService.user.isAdmin)
                    {
                        this.articleService.sendSubmittedNotification(this.article)
                            .subscribe(x => {
                                var blah = x;
                            });
                    }

                });

            } else {
                this.imageService.images = this.imageDetails;
                this.imageService.files = [];
                this.imagestoDelete = [];

                this.savingModal.hide();
                this.articleModal.show();
                if (this.article.isNew && this.article.visible) {
                    //this.fb.ui({
                    //    method: 'feed',
                    //    link: `http://www.myeggettfamily.com/view/${this.article.articleId}`,
                    //    quote: `My Eggett Family has added the article called: ${this.article.title}`,
                    //    from: this.fbP
                    //});

                    this.articleService.sendNotification(this.article)
                        .subscribe(x => {
                            var blah = x;
                        });
                }

                if (this.article.isNew && !this.userService.user.isAdmin) {
                    this.articleService.sendSubmittedNotification(this.article)
                        .subscribe(x => {
                            var blah = x;
                        });
                }
            }

        });

        return false;
    }
}