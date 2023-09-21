import { Injectable } from '@angular/core';

@Injectable()
export class CommentResult {
    articleId: number;
    approved : boolean
}