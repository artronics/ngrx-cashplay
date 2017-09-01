import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromList from '../../reducers/list';
import * as List from '../../actions/list';

@Component({
  selector: 'art-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  constructor(private store: Store<fromList.State>) {
    store.dispatch(new List.CustomerList());
  }

  ngOnInit() {
  }

}
