import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers';
import * as Auth from '../../../auth/actions/auth';

@Component({
  selector: 'art-cashplay',
  templateUrl: './cashplay.component.html',
  styleUrls: ['./cashplay.component.scss']
})
export class CashplayComponent implements OnInit {

  constructor(private store: Store<fromAuth.State>) {
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Auth.Logout());
  }

}
