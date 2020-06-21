import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './details/card-details/card-details.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { DisplayCardsComponent } from './cards/cards-list/display-cards/display-cards.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Details', component: DisplayCardsComponent },
  { path: 'Home', component: CardsListComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
