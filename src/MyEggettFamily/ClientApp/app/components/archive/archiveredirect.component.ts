import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@
    Component({
    selector: 'archiveredirect',
    template: '<div></div>'
    })
export class ArchiveRedirectComponent {

    public date: Date;
    public title: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.date = param['date'];
                this.title = param['title'];
            });

        this.router.navigate(["/archive", { date: this.date, title: this.title }])
    }
}