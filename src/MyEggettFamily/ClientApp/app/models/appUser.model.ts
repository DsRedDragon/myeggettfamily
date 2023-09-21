import { Injectable } from '@angular/core';
import { AppChild } from './appchild.model';
import { ApplicationUserDetail } from './applicationUserDetail.model';

@Injectable()
export class AppUser {
    applicationUserId: number;
    emailAddress: string;
    isAdmin: boolean;
    lastLoggedInDt: Date;
    isSystemAdmin: boolean;
    firstName: string;
    lastName: string;
    externalId: string;
    username: string;
    password: string;
    secretQuestion: string;
    secretAnswer: string;
    externalTypeId: number;
    receiveNotifications: boolean;
    applicationUserDetail: ApplicationUserDetail;
    appChild: AppChild[];
    externalLoginTypeName: string;
}