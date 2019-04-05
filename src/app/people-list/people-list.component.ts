import { ResourceService } from '../resource.service';
import { People } from './../people';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {

  people: People[]; // from API
  selectedPeople: People[] = []; // to add in plot

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.loadDataPeople();
  }

  loadDataPeople() {
    this.resourceService.getPeople()
      .subscribe(
          people => this.people = people,
          err => {
            console.log(err);
          }
      );
  }

  // add selected people to array
  addPeople(person: People) {
    if (this.selectedPeople.includes(person) === false) {
      this.selectedPeople.push(person);
    }
    console.log(this.selectedPeople);
  }

  // when user is finished, send the array to service
  savePeople() {
    this.resourceService.storePeople(this.selectedPeople);
  }

}
