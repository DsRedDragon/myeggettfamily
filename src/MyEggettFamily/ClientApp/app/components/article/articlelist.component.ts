
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { CarouselModule } from 'ng2-bootstrap'

@Component({
    selector: 'article-list',
    template: require('./articlelist.component.html'),
    providers: [ArticleService]
})
export class ArticleListComponent {
    public articles = [];

    constructor(private articleService: ArticleService) {

        this.articleService.getArticles()
            .subscribe(articles => {
                this.articles = articles;
            });
    } 
}
