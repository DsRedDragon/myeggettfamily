import { Component, Input, OnInit } from "@angular/core";
import { Image } from '../../models/image.model';
import { ImageService } from '../../services/image.service';

@Component({
    selector: 'video-player',
    template: require('./videoplayer.component.html')
})
export class VideoPlayerComponent implements OnInit {
    sources: Array<Image> = [];

    @Input() image;

    constructor(private imageService: ImageService) {
    }

    ngOnInit(): void {
        this.sources.push(this.image);
    }
}