import { Component } from '@angular/core';
import { Router } from '@angular/router';

@
    Component({
    selector: 'feedbackredirect',
    template: '<div></div>'
    })
export class FeedbackRedirectComponent {
    constructor(private router: Router) {
        
        this.router.navigate(['/feedback']);
    }
}