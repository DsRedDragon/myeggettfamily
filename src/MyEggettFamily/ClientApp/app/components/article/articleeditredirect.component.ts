import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@
    Component({
    selector: 'articleeditredirect',
    template: '<div></div>'
    })
export class ArticleEditRedirectComponent {
    
    id: number;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });

            this.router.navigate([`/article/edit/${this.id}`]);
    }
}