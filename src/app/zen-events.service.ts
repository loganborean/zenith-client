import { Injectable } from '@angular/core';
import { DUMMY_DATA } from './data/dummy-data';
import { ZenEvents }  from './zen-events';
//import { Activity }   from './zen-events';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ZenEventsService {

  //private BASE_URL = "http://localhost:5000/api/EventsApi";
  private BASE_URL = "http://zenithwebsite20170329023214.azurewebsites.net/api/EventsApi";
  

  //constructor() { }
  constructor(private http: Http) { }

  getZenEvents() : Promise<ZenEvents[]> {
    return this.http.get(this.BASE_URL)
      .toPromise()
      .then(response => response.json() as ZenEvents[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // getZenEvents(): Promise<ZenEvents[]> { 
  //   return Promise.resolve(DUMMY_DATA);
  // }

}
