import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { CardsListComponent } from '@app/main-component/components/cards/cards-list/cards-list.component';

// const routes: Routes = [
//   Shell.childRoutes([
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home', component: CardsListComponent }
//   ])
// ];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
