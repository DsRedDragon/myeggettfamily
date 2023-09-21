import { Injectable } from '@angular/core';
import { State } from './state.model';

@Injectable()
export class Country {
    countryId: number;
    countryName: string;
    countryAbbr: string;
    state: State;
    
}