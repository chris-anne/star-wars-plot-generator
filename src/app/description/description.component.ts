import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  description: string;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  // send description to service
  addDescription() {
    console.log('Description is being stored...');
    this.resourceService.storeDescription(this.description);
  }

}
