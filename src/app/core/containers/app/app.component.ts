import { Component, OnInit } from '@angular/core';
import * as Auth from '../../../auth/actions/auth';
import * as fromAuth from '../../../auth/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'art-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) {
    this.store.dispatch(new Auth.CheckAccountInStorage());
  }

  ngOnInit() {
  }

}
