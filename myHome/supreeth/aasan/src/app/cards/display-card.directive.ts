import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';
import { imageObject } from '../shared/image-json';
//import { Event } from '@angular/router';


@Directive({
    selector: '[appDisplayCard]'
})
export class DisplayCard implements OnInit {

    defaultImage; string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    newImage: string = "https://unsplash.it/200/300/?";
    @HostBinding('attr.src') src: string;
    // @HostBinding('style.color') color: string = this.defaultcolor;

    constructor(private elm: ElementRef, private render: Renderer2) { }
    ngOnInit() { }
    @HostListener('mouseenter') mouseover(event: Event) {
        this.src = this.newImage;
    }
    @HostListener('mouseleave') mouseleave(event: Event) {
        this.src = this.defaultImage;
    }
}