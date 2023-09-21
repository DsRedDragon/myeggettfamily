import { Injectable } from '@angular/core';

@Injectable()
export class Image {
    imageId: number;
    imageUrl: string;
    articleId: number;
    captionText: string;
    isActive: boolean;
    externalId: string;
    externalAlbumId: string;
    isVideo: boolean;
    type: string;
    thumbnailUrl: string;
    urlRetrievalDate: Date;
}