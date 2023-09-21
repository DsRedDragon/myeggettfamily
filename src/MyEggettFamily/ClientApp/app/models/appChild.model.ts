import { Injectable } from '@angular/core';
import { AppUser } from './appUser.model';

@Injectable()
export class AppChild {
    appChildId: number;
    applicationUserId: number;
    firstName: string;
    lastName: string;
    middleName: string;
    imageUrl: string;
    birthday: Date;
    applicationUser: AppUser;
}