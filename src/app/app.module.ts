import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ResourceService } from './resource.service';
import { AppRoutingModule } from './app-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { PlotSummaryComponent } from './plot-summary/plot-summary.component';
import { PeoplefilterPipe } from './people-list/peoplefilter.pipe';
import { PlanetfilterPipe } from './planets-list/planetfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetsListComponent,
    TitleComponent,
    DescriptionComponent,
    PlotSummaryComponent,
    PeoplefilterPipe,
    PlanetfilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
