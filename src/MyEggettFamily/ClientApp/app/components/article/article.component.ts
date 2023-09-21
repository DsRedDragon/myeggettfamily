
import { Component, OnInit, Input } from '@angular/core'
import { ArticleService } from '../../services/article.service'
import { ActivatedRoute } from '@angular/router'
import { CarouselModule } from 'ng2-bootstrap'

@Component({
    selector: 'article-item',
    template: require('./article.component.html')
})
export class ArticleComponent implements OnInit {
    @Input() article;
    @Input() id = 0;

    constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });

        if (this.id > 0) {
            this.articleService.getArticle(this.id)
                .subscribe(article => {
                    this.article = article;
                });
        }
    }
}
