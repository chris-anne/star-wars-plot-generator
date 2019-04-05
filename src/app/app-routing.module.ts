import { PlotSummaryComponent } from './plot-summary/plot-summary.component';
import { DescriptionComponent } from './description/description.component';
import { TitleComponent } from './title/title.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/title', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'title', component: TitleComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'plotsummary', component: PlotSummaryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
