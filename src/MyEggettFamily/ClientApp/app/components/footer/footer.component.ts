
import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@
    Component({
        selector: 'footer-item',
        template: require('./footer.component.html')
    })
export class FooterComponent {

    year = '';
    build = '';

    constructor() {

        var today = new Date();
        this.year = today.getFullYear().toString();

        this.build = '2017.08.01.01';
    }
}

