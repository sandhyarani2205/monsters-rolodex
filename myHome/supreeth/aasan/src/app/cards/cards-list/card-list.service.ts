import { Injectable } from '@angular/core';

import { imageObject } from 'src/app/shared/image-json';


@Injectable({
    providedIn: 'root',
})

export class CardListService {
    constructor() {

    }

    getImage() {
        return imageObject;
    }
}