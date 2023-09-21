
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ImageService } from '../../services/image.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalDirective } from 'ng2-bootstrap'
import { Image } from '../../models/image.model';
import { SettingService } from '../../services/setting.service';

declare var hello: any;

@Component({
    selector: 'article-admin-list',
    template: require('./articleadminlist.component.html')
})
export class ArticleAdminListComponent implements OnInit {
    @ViewChild('deleteModal') public deleteModal: ModalDirective;

    public articles = [];
    @Input() activeOnly = false;

    title: string = 'Delete Article';
    message: string = 'Are you <b>sure</b> you want to delete this article?';
    confirmText: string = '<i class="fa fa-lg fa-thumbs-o-up"></i>&nbsp;Yes';
    cancelText: string = '<i class="fa fa-lg fa-thumbs-o-down"></i>&nbsp;No';

    hiddenTitle: string = 'Show Article';
    hiddenMessage: string = 'Are you <b>sure</b> you want to make this article visible?';

    newTitle: string = 'Mark as Read';
    newMessage: string = 'Are you <b>sure</b> you want to mark this item as read?';

    readTitle: string = 'Mark as Unread';
    readMessage: string = 'Are you <b>sure</b> you want to mark this item as unread?';

    visibleTitle: string = 'Hide Article';
    visibleMessage: string = 'Are you <b>sure</b> you want to hide this article?';

    imagesToDelete: Image[] = [];

    loaded = false;
    
    fbT = '';

    constructor(private articleService: ArticleService, private imageService: ImageService, private settingService: SettingService) {}

    ngOnInit(): void {
        this.articleService.getArticlesList(this.activeOnly)
            .subscribe(articles => {
                this.articles = articles;
                this.loaded = true;
            });

        this.settingService.getSetting(1004).subscribe(result => {
            this.fbT = result.settingValue;
        });
    }

    confirmClicked(article) {
        this.imageService.deleteImages(article.articleId)
            .subscribe(result => {
                this.imagesToDelete = result;

                if (this.imagesToDelete !== undefined) {
                    this.imagesToDelete.forEach(x => {

                        if (x.externalId !== null) {

                            hello('facebook')
                                .api(`/${x.externalId}`,
                                'delete',
                                {
                                    token: this.fbT
                                })
                                .then(result => {
                                });
                        }

                        if (x.externalAlbumId !== null) {

                            hello('facebook')
                                .api(`/${x.externalAlbumId}`,
                                'delete',
                                {
                                    token: this.fbT
                                })
                                .then(result => {
                                });
                        }
                    });
                }

                this.articleService.deleteArticle(article.articleId).subscribe(result => {

                    var index = this.articles.indexOf(article);
                    this.articles.splice(index, 1);

                    this.deleteModal.show();
                });
            });
    }

    showArticle(article) {
        article.visible = true;
        article.isNew = false;
        this.articleService.saveArticle(article)
            .subscribe(result => {
                article.isNew = true;
                this.articleService.sendNotification(article).subscribe(x => {
                    article.isNew = false;
                });
            });
    }

    hideArticle(article) {
        article.visible = false;
        this.articleService.saveArticle(article)
            .subscribe(result => {
            });
    }

    markRead(article) {
        article.isNew = false;
        this.articleService.saveArticle(article)
            .subscribe(result => {
            });
    }

    markUnRead(article) {
        article.isNew = true;
        this.articleService.saveArticle(article)
            .subscribe(result => {
            });
    }
}
