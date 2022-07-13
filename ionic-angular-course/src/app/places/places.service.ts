/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
    'Manhattan Mansion',
    'Maybe in heart of NYC',
    'https://yyccalgarybusiness.ca/wp-content/uploads/sites/14/2018/03/front_of_house_044.jpg',
    150.00),
    new Place('p2',
    'Random Mansion #2',
    'Not in heart of NYC',
    'https://yyccalgarybusiness.ca/wp-content/uploads/sites/14/2018/03/front_of_house_044.jpg',
    151.00),
    new Place('p3',
    'Random Mansion #3',
    'Also not in heart of NYC',
    'https://stacyknows.com/wp-content/uploads/2019/12/1295-southocean-blvd.jpg',
    151.00)
  ];

  get places(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
  constructor() { }
}
