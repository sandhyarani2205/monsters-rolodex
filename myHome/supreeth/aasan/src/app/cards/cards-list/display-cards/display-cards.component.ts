import { Component, OnInit, Input, EventEmitter, ElementRef, Output, OnDestroy, HostListener } from '@angular/core';
import * as gifshot from 'gifshot';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { imageObject } from '../../../shared/image-json';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CardListService } from '../card-list.service';


@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {
  imageindex: number;

  cardlist = [];

  displayImage = imageObject;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef,
    private cardlistservice: CardListService) {
  }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    this.getimage();
  };

  getimage() {
    this.cardlist = this.cardlistservice.getImage();
  }

  @HostListener('scroll', ['$event'])
  scrollHandler(event) {
    console.log(event);
    // this.getPhotos();
  }

  onscroll() {
    console.log('onscroll');
  }


  mousehoverEvent(event: any) {
    this.imageindex = event;
    // console.log(this.imageindex);
  }

  mouseLeaveEvent() {
    this.imageindex = null;
  }


}

