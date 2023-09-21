
import { Injectable } from '@angular/core';
import { Image } from './image.model';

@Injectable()
export class ArticleDetail {
    articleId: number;
    articleContent: string;
    title: string;
    postedDT: Date;
    applicationUserId: number;
    authorName: string;
    archived: boolean;
    visible: boolean;
    isNew: boolean;
    images: Image[];
}