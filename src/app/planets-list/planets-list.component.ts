import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets: Planet[];
  selectedPlanets: Planet[] = []; // array to store the user's selected planets

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.loadDataPlanets();
  }

  loadDataPlanets() {
    this.resourceService.getPlanets()
      .subscribe(
        planets => this.planets = planets,
        err => {
          console.log(err);
        }
      );
  }

  // adds the selection to the array
  addPlanet(planet: Planet) {
    if (this.selectedPlanets.includes(planet) === false) {
      this.selectedPlanets.push(planet);
    }
    console.log(this.selectedPlanets);
  }

  // when user is finished the array will be sent to service
  savePlanets() {
    this.resourceService.storePlanets(this.selectedPlanets);
  }
}
