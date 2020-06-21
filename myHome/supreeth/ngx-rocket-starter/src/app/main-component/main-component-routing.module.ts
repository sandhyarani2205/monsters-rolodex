import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { CardsListComponent } from './components/cards/cards-list/cards-list.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    { path: 'cards', component: CardsListComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainComponentRoutingModule { }
