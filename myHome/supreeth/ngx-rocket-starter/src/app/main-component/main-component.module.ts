import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponentRoutingModule } from './main-component-routing.module';
import { ComponentsComponent } from './components/components.component';
import { DisplayCardsComponent } from './components/cards/cards-list/display-cards/display-cards.component';
import { CardsListComponent } from './components/cards/cards-list/cards-list.component';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    MainComponentRoutingModule,
    CardsListComponent,
    DisplayCardsComponent,

  ],
  exports: [CardsListComponent,
    DisplayCardsComponent,]
})
export class MainComponentModule { }
