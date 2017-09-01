import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCustomer from '../../reducers';

@Component({
  selector: 'art-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {
  customers$ = this.store.select(fromCustomer.getRecentlyAdded);

  constructor(private store: Store<fromCustomer.State>) {



  }

  ngOnInit() {
  }

}
