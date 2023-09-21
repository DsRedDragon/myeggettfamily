import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'yesNo'
})
export class BooleanPipe implements PipeTransform {
    transform(boolean: boolean, type: string): any {
        var result = '';

        if (type === 'yesNo') {
            result = boolean ? 'Yes' : 'No';
        }
        if (type === 'approved') {
            result = boolean ? 'Approved' : 'Un-Approved';
        }
        if (type === 'readUnread') {
            result = boolean ? 'Unread' : 'Read';
        }
        if (type === 'visible') {
            result = boolean ? 'Visible' : 'Hidden';
        }
        if (type === 'admin') {
            result = boolean ? 'Admin' : 'Non-Admin';
        }
        if (type === 'sysAdmin') {
            result = boolean ? 'System Admin' : 'Non-System Admin';
        }
        if (type === 'notification') {
            result = boolean ? 'Gets Notified' : 'Does not get Notified';
        }
        return result;
    }
}