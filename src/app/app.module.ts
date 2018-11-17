import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { TableModule } from 'primeng/table';
import { DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { FormsModule } from '@angular/forms';
import { InsightComponent } from './insight/insight.component';
import { BarsComponent } from './bars/bars.component';
import { ManfDetailsComponent } from './manf-details/manf-details.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { BartenderComponent } from './bartender/bartender.component';
import { SqlComponent } from './sql/sql.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    BarsComponent,
    BeersComponent,
    InsightComponent,
    BarsComponent,
    ManfDetailsComponent,
    DrinkerDetailsComponent,
    DrinkerComponent,
    ManufacturerComponent,
    BartenderComponent,
    SqlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
