import { Injectable } from '@angular/core';
import { AppUser } from './appuser.model';
import { State } from './state.model';

@Injectable()
export class ApplicationUserDetail {
    applicationUserDetailId: number;
    applicationUserId: number;
    middleName: string;
    homePhone: number;
    cellPhone: number;
    birthday: Date;
    streetAddress: string;
    city: string;
    stateId: number;
    zipCode: number;
    imageUrl: string;
    spouseFirstName: string;
    spouseMiddleName: string;
    spouseLastName: string;
    sposeCellPhone: number;
    spouseBirthday: Date;
    applicationUser: AppUser;
    state: State;
}