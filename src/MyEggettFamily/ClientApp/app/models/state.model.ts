import { Injectable } from '@angular/core';
import { ApplicationUserDetail } from './applicationUserDetail.model';
import { Country } from './country.model';

@Injectable()
export class State {
    stateId: number;
    stateName: string;
    stateAbbr: string;
    countryId: number;
    country: Country;
    applicationUserDetail: ApplicationUserDetail;
    
}