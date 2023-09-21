import { Component } from '@angular/core';
import { Router } from '@angular/router';

@
    Component({
    selector: 'articleredirect',
    template: '<div></div>'
    })
export class ArticleRedirectComponent {
    constructor(private router: Router) {
        
            this.router.navigate(['/article/new']);
    }
}