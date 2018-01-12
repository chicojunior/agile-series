import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getTvShow(): Observable<any> {
    const url = 'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json';

    return this.http.get(url)
      .map(res => res.json())
      .catch(err => Observable.throw(console.log(err)));
  }

}
