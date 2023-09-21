import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@
    Component({
    selector: 'profileredirect',
    template: '<div></div>'
    })
export class ProfileRedirectComponent {

    id: number;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        
        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.id = param['id'];
            });
        this.router.navigate([`/profile/${this.id}`]);
    }
}