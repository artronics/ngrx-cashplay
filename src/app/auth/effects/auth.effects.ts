import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .login(auth)
        .map(account => {
          account.loggedInUser = account.users.filter(u => u.email === auth.email)[0];
          return new Auth.LoginSuccess({account});
        })
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS)
    .do((action: Auth.LoginSuccess) => {
      window.localStorage.setItem('account', JSON.stringify(action.payload.account));
      this.router.navigate(['/app']);
    });

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      this.router.navigate(['/login']);
    });

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }
}
