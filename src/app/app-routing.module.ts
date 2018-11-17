import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { BarsComponent } from './bars/bars.component';
import { ManfDetailsComponent } from './manf-details/manf-details.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { BartenderComponent } from './bartender/bartender.component';
import { SqlComponent } from './sql/sql.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: BarsComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  },
  {
    path: 'manf/:manf',
    pathMatch: 'full',
    component: ManfDetailsComponent
  },
  {
    path: 'drinker/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkerComponent
  },
  {
    path: 'manufacturers',
    pathMatch: 'full',
    component: ManufacturerComponent
  },
  {
    path: 'bartenders',
    pathMatch: 'full',
    component: BartenderComponent
  },
  {
    path: 'sql',
    pathMatch: 'full',
    component: SqlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
