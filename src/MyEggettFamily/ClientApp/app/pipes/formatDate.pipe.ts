import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
    name: 'formatDate'
})
export class DatePipe implements PipeTransform {
    transform(date: any, args?: any, transform = true): any {
        if (date !== null && date !== undefined) {
            let d = new Date(date);
            if (transform) {
                d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
                return moment(d).format(args);
            } else {
                return moment(d).format(args);
            }
        }
        else
        {
            return null;
        }
    }
}