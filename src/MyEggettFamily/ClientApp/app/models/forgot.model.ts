import { Injectable } from '@angular/core';

@Injectable()
export class Forgot {
    username: string;
    newPassword: string;
    question: string;
    answer: string;
    applicationUserId: number;
    success: boolean;
}