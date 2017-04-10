import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:9999/api/v1/netFlixCategories';

@Injectable()
export class NetFlixService {
  constructor(private http: Http) { }

  loadItems() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }
}
