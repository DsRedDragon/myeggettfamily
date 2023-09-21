
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@
Component({
    selector: 'article-container',
    template: require('./articlecontainer.component.html')
})
export class ArticleContainerComponent implements OnInit {

    id = 0;
    article = {};

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });

        if (this.id > 0) {
            this.articleService.getArticle(this.id)
                .subscribe(article => {
                    if (!article.visible) {
                        this.router.navigate(['/home']);
                    }
                    this.article = article;
                });
        }
    }
}
