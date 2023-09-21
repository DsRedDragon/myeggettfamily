
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'

@Component({
    selector: 'archive-list',
    template: require('./archivelist.component.html'),
    providers: [ArticleService]
})
export class ArchiveListComponent {
    public archives = [];
    loaded = false;

    constructor(private articleService: ArticleService) {

        this.articleService.getArchiveList()
            .subscribe(archives => {
                this.archives = archives;
                this.loaded = true;
            });
    }
}
