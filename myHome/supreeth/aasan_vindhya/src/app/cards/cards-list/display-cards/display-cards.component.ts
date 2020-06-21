import { Component, OnInit, Input, EventEmitter, ElementRef, Output, OnDestroy } from '@angular/core';
import * as gifshot from 'gifshot';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { imageObject } from '../../../shared/image-json';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {
  imageindex: number;

  @Input() options = {};
  @Output() scrolled = new EventEmitter();

  displayImage = imageObject;
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);


  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  playOnMouseenter = false;


  private base64Gif: string;


  private observer: IntersectionObserver;

  constructor(private host: ElementRef) { }
  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {

  };


  onScroll() {
    console.log('scrolled!!');
  }


  mousehoverEvent(event: any) {
    this.imageindex = event;
    // console.log(this.imageindex);
  }

  mouseLeaveEvent() {
    this.imageindex = null;
  }

}



  // ngOnInit() {
  //   gifshot.createGIF({ 'images': this.images, 'interval': .8 }, (obj) => {
  //     if (obj.error) return;
  //     this.base64Gif = obj.image;
  //   });
  //   console.log(this.displayImage);
  // }

  // mouse hover event to change the images
  // mouseHoverEvent() {
  //   this.defaultImage = 'https://unsplash.it/200/300/?';
  // }

  // mouseLeaveEvent() {
  //   this.defaultImage = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  // }


  //  mouseHoverEvent() {
  //     this.defaultImage = 'https://unsplash.it/200/300/?';
  //   }

  //   mouseLeaveEvent() {
  //     this.defaultImage = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  //   }










  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //     this.playOnMouseenter = true;
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
    //defaultImage: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  // private images = [
  //   { image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
  //   { image: 'https://unsplash.it/200/300/?' },
  //   { image: 'https://unsplash.it/300/200/?' }
  // ];
