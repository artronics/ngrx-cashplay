import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG } from '../models/app-config';
import 'rxjs/add/operator/map';
import { Page } from '../models/page';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../auth/reducers';
import * as Auth from '../../auth/actions/auth';
import { Account } from '../../auth/models/account';

export interface Sort {
  propertyName: string;
  direction: 'asc' | 'desc';
}

@Injectable()
export class ApiService {
  private reqOpts: RequestOptions = new RequestOptions();
  private token: string;

  constructor(@Inject(APP_CONFIG) private config,
              private http: Http,
              private store: Store<fromAuth.State>) {

    // Check auth and then get the token
    this.store.dispatch(new Auth.CheckAccountInStorage());
    store.select(fromAuth.getAccount).subscribe((a: Account) => this.token = a.token);

    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    headers.append('Authorization', this.token);

    this.reqOpts = new RequestOptions({headers: headers});
  }

  get<T>(url: string, page?: Page, sort?: Sort, q?: string): Observable<any> {
    if (page) {
      url = this.addPagination(url, page);
    }
    if (q) {
      url = this.addQuery(url, q);
    }
    if (sort) {
      url = this.addSort(url, sort);
    }

    return this.http.get(`${this.config.baseUrl + url}`, this.reqOpts)
      .map(response => {
        const data = response.json() as T;
        return data;
      });
  }

  private addPagination(url: string, page: Page): string {
    return `${url}?page=${page.pageIndex}&size=${page.pageSize}`;

  }

  private addQuery(url: string, q: string): string {
    return `${url}&q=${q}`;
  }

  private addSort(url: string, sort: Sort): string {
    return `${url}&sort=${sort.propertyName},${sort.direction}`;
  }
}
