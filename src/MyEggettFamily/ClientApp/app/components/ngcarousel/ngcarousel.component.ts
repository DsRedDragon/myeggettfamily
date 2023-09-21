
import { Component, Input, OnInit } from '@angular/core'
import { ImageService } from '../../services/image.service'
import { CarouselModule } from 'ng2-bootstrap'
import { ActivatedRoute } from '@angular/router'
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'ng-carousel',
    template: require('./ngcarousel.component.html'),
    providers: [ImageService]
})
export class NGCarouselComponent implements OnInit {
    public images = [];
    @Input() id = 0;
    public imagesLoaded = false;

    imageSubscription: Subscription;

    constructor(private imageService: ImageService, private activatedRoute: ActivatedRoute) { }

    ngOnDestroy() {
        this.imageSubscription.unsubscribe();
    }

    ngOnInit(): void {
        
        if (this.id == undefined) {
            this.activatedRoute.params.subscribe(
                (param: any) => {
                    this.id = param['id'];
                });
        }

        if (this.id > 0) {
            this.imageService.getImagesByArticleId(this.id);
            this.imagesLoaded = true;
        }

        this.images = this.imageService.images;
        this.imageSubscription = this.imageService.imageChange.subscribe((value) => {
            this.images = value;
            this.imagesLoaded = true;
        });
    }
}
