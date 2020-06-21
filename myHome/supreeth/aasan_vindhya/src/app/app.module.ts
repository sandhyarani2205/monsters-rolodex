import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../app/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CardDetailsComponent } from './details/card-details/card-details.component';
import { SimilarItemsComponent } from './details/card-details/similar-items/similar-items.component';
import { SingleCardComponent } from './details/card-details/single-card/single-card.component';
import { RecentlyVisitedComponent } from './details/card-details/recently-visited/recently-visited.component';
import { DisplayCardsComponent } from './cards/cards-list/display-cards/display-cards.component';
import { MenuBarComponent } from './core/menu-bar/menu-bar.component';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { DisplayCard } from './cards/display-card.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardDetailsComponent,
    SimilarItemsComponent,
    SingleCardComponent,
    RecentlyVisitedComponent,
    DisplayCardsComponent,
    MenuBarComponent,
    FbLoginComponent,
    DisplayCard,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    CommonModule,
    ScrollingModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
