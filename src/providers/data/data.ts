import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  data = [];
  place: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  addData(value): void {
    this.data.push(value);
  }

  addPlace(place): void{
    this.place = place;
  }

}
