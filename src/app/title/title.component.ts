import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
  title: string;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  // send title to Service
  addTitle() {
    console.log('Title is being stored...');
    this.resourceService.storeTitle(this.title);
  }
}
