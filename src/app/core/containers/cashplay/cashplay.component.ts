import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers';
import * as Auth from '../../../auth/actions/auth';
import { Account } from '../../../auth/models/account';

@Component({
  selector: 'art-cashplay',
  templateUrl: './cashplay.component.html',
  styleUrls: ['./cashplay.component.scss']
})
export class CashplayComponent implements OnInit {
  account: Account;
  name: string;

  constructor(private store: Store<fromAuth.State>) {
    this.store.select(fromAuth.getAccount).subscribe((a: Account) => this.account = a);
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Auth.Logout());
  }

}
