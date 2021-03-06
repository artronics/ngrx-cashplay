import { Inject, Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';
import { Authenticate } from '../models/authenticate';
import { Http, Response } from '@angular/http';
import { APP_CONFIG } from '../../shared/models/app-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  constructor(@Inject(APP_CONFIG) private appConfig,
              private http: Http) {
  }

  login(auth: Authenticate): Observable<Response> {
    return this.http.post(`${this.appConfig.baseUrl}/login`, JSON.stringify(auth))
    // .map(res => res.json() as Account)
      .map(res => res)
      .catch(err => _throw('Invalid email or password'));
  }

  logout() {
    return Observable.of<boolean>(true);
  }
}
