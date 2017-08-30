import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';
import { Authenticate } from '../../models/authenticate';

@Component({
  selector: 'art-login-page',
  template: `
    <art-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </art-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.select(fromAuth.getLoginPagePending);
  error$ = this.store.select(fromAuth.getLoginPageError);

  constructor(private store: Store<fromAuth.State>) {}
  ngOnInit() {
  }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
