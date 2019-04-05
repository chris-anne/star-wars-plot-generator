import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peoplefilter'
})
export class PeoplefilterPipe implements PipeTransform {

  transform(activities: any, term?: any): any {
    if ( term === undefined) {
      return activities;
    }
    return activities.filter(function(activity) {
      return activity.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
