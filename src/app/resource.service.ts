import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { People } from './people';
import { Planet } from './planet';

const ROOT_URL = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  // interaction between components plot-summary and rest to access properties
  private title = new BehaviorSubject('');
  currentTitle = this.title.asObservable();

  private description = new BehaviorSubject('');
  currentDescription = this.description.asObservable();

  private people = new BehaviorSubject([]);
  currentPeople = this.people.asObservable();

  private planets = new BehaviorSubject([]);
  currentPlanets = this.planets.asObservable();

  constructor(private httpClient: HttpClient) { }

  // load data from swapi
  getPeople(): Observable<People[]> {
    return this.httpClient.get<People[]>(ROOT_URL + '/people')
                .pipe(map(data => {
                  return data ['results'];
                }));
  }

  getPlanets(): Observable<Planet[]> {
    return this.httpClient.get<Planet[]>(ROOT_URL + '/planets')
                .pipe(map(data => {
                  return data ['results'];
                }));
  }

  // receive data from other components and save
  storeTitle(title: string) {
    this.title.next(title);
  }

  storeDescription(description: string) {
    this.description.next(description);
  }

  storePeople(people: People[]) {
    this.people.next(people);
  }

  storePlanets(planets: Planet[]) {
    this.planets.next(planets);
  }
}
