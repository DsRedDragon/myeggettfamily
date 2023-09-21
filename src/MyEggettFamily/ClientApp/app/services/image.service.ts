import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Image } from '../models/image.model';
import { Message } from 'primeng/primeng';
import { DomSanitizer } from '@angular/platform-browser';
import { SettingService } from '../services/setting.service';

declare var hello: any;

@Injectable()
export class ImageService {

    images: Image[] = [];
    files = [];
    header = new Image();
    msgs: Message[];
    headerMsgs: Message[];
    imageUrl = '';
    imagesToDelete: Image[] = [];

    imageChange = new Subject<Image[]>();
    fbA = '';
    fbS = '';
    fbP = '';
    fbT = '';

    constructor(private http: Http, private sanitizer: DomSanitizer, private settingService: SettingService) {
        this.settingService.getSetting(1001).subscribe(result => {
            this.fbA = result.settingValue;

            this.settingService.getSetting(1002).subscribe(result => {
                this.fbS = result.settingValue;
            });
            
            this.settingService.getSetting(1003).subscribe(result => {
                this.fbP = result.settingValue;

                hello()
                    .init({
                        facebook: this.fbA
                    }, { scope: 'publish_pages,manage_pages,user_photos' });
            });
        });
    }
    
    deleteImages(articleId) {
        return this.http.get(`/api/Image/GetImagesByArticleId?articleId=${articleId}`)
            .map(res => res.json());
    }

    getImagesByArticleId(articleId) {

        this.settingService.getSetting(1004).subscribe(result => {
            this.fbT = result.settingValue;

            return this.http.get(`/api/Image/GetImagesByArticleId?articleId=${articleId}`)
                .map(res => res.json()).subscribe(result => {
                    this.images = result;
                    this.change();

                    this.images.forEach(x => {

                        var now = new Date();
                        var pastDate = new Date();
                        
                        if (x !== undefined) {
                            pastDate = new Date(x.urlRetrievalDate);
                            pastDate.setDate(pastDate.getDate() + 7);
                        }

                        if (pastDate < now) {
                            if (x.externalId !== null && x.isVideo) {
                                hello('facebook')
                                    .api(`/${x.externalId}`,
                                        {
                                            fields: 'source,thumbnails{uri}',
                                            token: this.fbT
                                        }
                                    )
                                    .then(res => {
                                        x.imageUrl = res.source;
                                        x.thumbnailUrl = res.thumbnails.data[0].uri;
                                        x.urlRetrievalDate = now;
                                        this.updateImage(x)
                                            .subscribe(r => {
                                                var index = this.images.indexOf(x);
                                                this.images.splice(index, 1, x);
                                                this.change();
                                            });
                                    });
                            } else {
                                if (x.externalId !== null && !x.isVideo) {
                                    hello('facebook')
                                        .api(`/${x.externalId}`,
                                            {
                                                fields: 'source,album',
                                                token: this.fbT
                                            }
                                        )
                                        .then(res => {
                                            x.imageUrl = res.source;
                                            x.externalAlbumId = res.album.id;
                                            x.urlRetrievalDate = now;
                                            this.updateImage(x)
                                                .subscribe(r => {
                                                    var index = this.images.indexOf(x);
                                                    this.images.splice(index, 1, x);
                                                    this.change();
                                                });
                                        });
                                }
                            }
                        }
                    });

                });
        });
    }

    sanitize(url) {
        let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url);
        return sanitizedUrl;
    }

    onUpload(event, articleId) {
        for (let file of event.files) {
            this.files.push(file);
            var img = new Image();
            img.articleId = articleId;
            img.captionText = file.captionText;
            img.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
            img.thumbnailUrl = file.objectURL.changingThisBreaksApplicationSecurity;

            if (file.type.includes('video')) {
                img.isVideo = true;
            } else {
                img.isVideo = false;
            }

            this.insertImage(img);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
    }

    onHeaderUpload(event) {
        for (let file of event.files) {
            this.header = file;
            this.imageUrl = file.objectURL.changingThisBreaksApplicationSecurity;
        }

        this.headerMsgs = [];
        this.headerMsgs.push({ severity: 'success', summary: 'File Uploaded', detail: '' });
    }

    deleteImage(imageId) {
        this.http.get(`/api/Image/DeleteImage?imageId=${imageId}`).map(res => res.json).subscribe(result => {
        });
    }

    insertImage(image) {
        this.images.push(image);
        this.images = this.images;
    }

    saveImage(image) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Image/SaveImage',
            JSON.stringify(image),
            {
                headers: headers
            })
            .map(res => res.json());
    }

    updateImage(image) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/Image/UpdateImage',
                JSON.stringify(image),
                {
                    headers: headers
                })
            .map(res => res.json());
    }

    change() {
        this.imageChange.next(this.images);
    }
}