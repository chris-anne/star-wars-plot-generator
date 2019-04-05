import { Planet } from './../planet';
import { People } from './../people';
import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-summary',
  templateUrl: './plot-summary.component.html',
  styleUrls: ['./plot-summary.component.css']
})
export class PlotSummaryComponent implements OnInit {
  title: string;
  description: string;
  people: People[];
  planets: Planet[];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.currentTitle.subscribe(title => this.title = title);
    this.resourceService.currentDescription.subscribe(description => this.description = description);
    this.resourceService.currentPeople.subscribe(people => this.people = people);
    this.resourceService.currentPlanets.subscribe(planets => this.planets = planets);
    console.log('Title: ' + this.title + ', Description: ' + this.description
                + ', People: ' + this.people + ', Planets: ' + this.planets);
  }

}
