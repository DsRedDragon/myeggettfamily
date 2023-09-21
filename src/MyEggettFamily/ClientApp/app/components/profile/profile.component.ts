
import { Component, ViewChild, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SettingService } from '../../services/setting.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap';
import { AppUser } from '../../models/appUser.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppChild } from '../../models/appchild.model';
import { ImageService } from '../../services/image.service';


declare var hello: any;

@
    Component({
        selector: 'profile',
        template: require('./profile.component.html')
    })
export class ProfileComponent {
    @ViewChild('profileModal') public profileModal: ModalDirective;
    @ViewChild('loginModal') public loginModal: ModalDirective;
    @ViewChild('usernameModal') public usernameModal: ModalDirective;

    @Input() id = 0;
    user = new AppUser();
    editMode: false;
    maxDate = new Date();
    states = [];
    countries = [];
    originalUser = new AppUser();

    fbT = '';
    imageId = 0;
    fbA = '';
    fbS = '';
    fbP = '';
    imageUrl = '';
    image: {};
    success = false;

    constructor(private userService: UserService, private router: Router, private settingService: SettingService, private imageService: ImageService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.userService.checkLogin(window.location.pathname)
            .subscribe(res => {
                if (this.userService.isLoggedIn) {

                    this.user = this.activatedRoute.snapshot.data['profile'];

                    if (this.user.applicationUserDetail.birthday !== null && this.user.applicationUserDetail.birthday !== undefined) {
                        this.user.applicationUserDetail.birthday = new Date(this.user.applicationUserDetail.birthday);
                    }

                    if (this.user.applicationUserDetail.spouseBirthday !== null && this.user.applicationUserDetail.spouseBirthday !== undefined) {
                        this.user.applicationUserDetail.spouseBirthday = new Date(this.user.applicationUserDetail.spouseBirthday);
                    }

                    this.user.appChild.forEach(x => {
                        if (x.birthday !== undefined && x.birthday !== null) {
                            x.birthday = new Date(x.birthday);
                        }
                    });

                    this.settingService.getCountries().subscribe(x => {
                        this.countries = x;
                    });

                    this.settingService.getStates().subscribe(x => {
                        this.states = x;
                    });

                    this.settingService.getSetting(1001).subscribe(result => {
                        this.fbA = result.settingValue;
                    });

                    this.settingService.getSetting(1002).subscribe(result => {
                        this.fbS = result.settingValue;
                    });

                    this.settingService.getSetting(1003).subscribe(result => {
                        this.fbP = result.settingValue;
                    });

                    hello()
                        .init({
                            facebook: this.fbA
                        }, { scope: 'publish_pages,manage_pages,user_photos' });
                }
            });
    }

    checkUsername(name, id)
    {
        this.userService.checkUsername(name, id).subscribe(x => {
            var result = x;

            if (result) {
                this.usernameModal.show();
                this.userService.user.username = '';
            }

            return result;
        });
    }

    addChild() {
        var child = new AppChild();
        this.user.appChild.push(child);
    }

    confirmClicked(child)
    {
        let index: number = this.user.appChild.indexOf(child);
        if (index !== -1) {
            this.user.appChild.splice(index, 1);
        }        
    }

    toggleEdit(editMode)
    {
        this.editMode = editMode;

        if (editMode)
        {
            Object.assign(this.originalUser, this.user);
        }
        else
        {
            Object.assign(this.user, this.originalUser);
            this.image = {};
            this.imageUrl = '';
        }
    }

    onHeaderUpload(event) {
        for (let file of event.files) {
            this.image = file;
            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
        }
    }

    saveProfile(form: any) {
        var url;
        if (this.imageUrl !== '') {
            this.doSaveProfile('');

            var result = Observable.create(obs => {
                this.settingService.getSetting(1004).subscribe(result => {
                    this.fbT = result.settingValue;

                    hello('facebook')
                        .api('/159267017952244/photos',
                        'post',
                        {
                            file: this.image,
                            token: this.fbT
                        })
                        .then(result => {
                            this.imageId = result.id;
                            hello('facebook')
                                .api('myeggettfamilypage/albums',
                                {
                                    "fields": 'photos{source}',
                                    token: this.fbT
                                }
                                )
                                .then(res => {
                                    res.data.forEach(x => {
                                        if (x.id === '159267017952244') {
                                            x.photos.data.forEach(y => {
                                                if (y.id === this.imageId) {
                                                    url = this.imageService.sanitize(y.source);
                                                    this.doSaveProfile(url).subscribe(x => {
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

            result.subscribe(x => {
                if (this.success) {
                    this.profileModal.show();
                    this.editMode = false;
                }
                //else {
                //    this.failModal.show();
                //}
            });

        }
        else {
            this.doSaveProfile('').subscribe(x => {
                if (this.success) {
                    this.profileModal.show();
                    this.editMode = false;
                }
                //else {
                //    this.failModal.show();
                //}
            });
        }

        return false;
    }

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

    doSaveProfile(url) {
        if (url !== '') {
            this.user.applicationUserDetail.imageUrl = url.changingThisBreaksApplicationSecurity;
        }

        var result = Observable.create(obs => {
            this.userService.saveProfile(this.user, '').subscribe(res => {
                this.user = res;

                if (this.user.applicationUserId > 0) {
                    this.success = true;
                }

                if (this.user.applicationUserDetail.birthday !== null && this.user.applicationUserDetail.birthday !== undefined) {
                    this.user.applicationUserDetail.birthday = new Date(this.user.applicationUserDetail.birthday);
                }

                if (this.user.applicationUserDetail.spouseBirthday !== null && this.user.applicationUserDetail.spouseBirthday !== undefined) {
                    this.user.applicationUserDetail.spouseBirthday = new Date(this.user.applicationUserDetail.spouseBirthday);
                }

                this.user.appChild.forEach(x => {
                    if (x.birthday !== undefined && x.birthday !== null) {
                        x.birthday = new Date(x.birthday);
                    }
                });

                obs.next(this.user);
                obs.complete;
            });
        });

        return result;
    }
}