import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@
    Component({
        selector: 'articleviewredirect',
        template: '<div></div>'
    })
export class ArticleViewRedirectComponent {

    id: number;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });
        this.router.navigate([`/article/view/${this.id}`]);
    }
}