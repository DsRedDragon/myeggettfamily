import { Injectable } from '@angular/core';

@Injectable()
export class Suggestion {
    suggestionId: number;
    applicationUserId: number;
    value: string;
    typeId: number;
    createdDt: Date;
    statusId: number;
    resolutionDt: Date;
}