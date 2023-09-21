
import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { ActivatedRoute } from '@angular/router'

@
Component({
    selector: 'archive-container',
    template: require('./archivecontainer.component.html'),
    providers: [ArticleService]
})
export class ArchiveContainerComponent {
    public articles = [];
    public date: Date;
    public title: string;

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.articles = [];
        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.date = param['date'];
                this.title = param['title'];
            });

        if (this.date != undefined) {
            this.articleService.getArchivesByMonth(this.date)
                .subscribe(articles => {
                    this.articles = articles;
                });
        }
    }

}

