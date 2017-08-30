import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG } from '../models/app-config';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private reqOpts: RequestOptions = new RequestOptions();
  private token: string;

  constructor(@Inject(APP_CONFIG) private config, private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    headers.append('Authorization', this.token);

    this.reqOpts = new RequestOptions({headers: headers});
  }

  get<T>(url: string): Observable<any> {
    return this.http.get(`${this.config.baseUrl + url}`, this.reqOpts)
      .map(response => {
        const data = response.json() as T;
        return data;
      });
  }
}
