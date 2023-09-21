
import { Component, ViewChild } from '@angular/core';
import { ImageService } from '../../services/image.service'
import { SettingService } from '../../services/setting.service'
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap'
import { AppUser } from '../../models/appUser.model';
import { Setting } from '../../models/setting.model';
import { Image } from '../../models/image.model';


declare var hello: any;

@
    Component({
        selector: 'setting',
        template: require('./setting.component.html')
    })
export class SettingComponent {
    @ViewChild('profileModal') public profileModal: ModalDirective;

    headerSetting = {};
    codeSetting = {};
    setting = new Setting();
    imageId = 0;
    fbA = '';
    fbS = '';
    fbP = '';
    fbT = '';

    constructor(private settingService: SettingService, private imageService: ImageService, private router: Router) { }

    ngOnInit(): void {

        this.settingService.getSetting(1001).subscribe(result => {
            this.fbA = result.settingValue;
        });

        this.settingService.getSetting(1002).subscribe(result => {
            this.fbS = result.settingValue;
        });

        this.settingService.getSetting(1003).subscribe(result => {
            this.fbP = result.settingValue;
        });

        this.settingService.getSettings()
            .subscribe(x => {
                [this.headerSetting, this.codeSetting] = x;
            });
    }

    saveProfile(form: any) {

        hello()
            .init({
                facebook: this.fbA
            }, { scope: 'publish_pages,manage_pages,user_photos' });

        this.settingService.getSetting(1004).subscribe(result => {
            this.fbT = result.settingValue;
            
            this.setting.headerId = form.headerId;
            this.setting.codeId = form.codeId;
            this.setting.code = form.code;

            if (this.imageService.imageUrl !== '') {
                hello('facebook')
                    .api('/159267017952244/photos',
                    'post',
                    {
                        file: form.image,
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
                                                this.setting.image = y.source;

                                                this.settingService.saveSettings(this.setting)
                                                    .subscribe(res => {
                                                        this.profileModal.show();
                                                    });
                                            }
                                        });
                                    }
                                });
                            });
                    });
            }
            else
            {
                this.setting.image = '';
                this.settingService.saveSettings(this.setting)
                    .subscribe(res => {
                        this.profileModal.show();
                    });
            }

        });

        return false;
    }
}
