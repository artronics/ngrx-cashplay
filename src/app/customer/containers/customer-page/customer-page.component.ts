import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCustomer from '../../reducers';
import * as List from '../../actions/list';
import { columns, Customer, displayedColumns } from '../../models/customer';
import { Table } from '../../../shared/models/table';
import { APP_CONFIG } from '../../../shared/models/app-config';
import { Page } from '../../../shared/models/page';

@Component({
  selector: 'art-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {
  recentlyAddedTable: Table<Customer>;
  customers$ = this.store.select(fromCustomer.getRecentlyAdded);

  constructor(private store: Store<fromCustomer.State>,
              @Inject(APP_CONFIG) private config) {

    const page: Page = {pageIndex: 0, pageSize: 3};
    store.dispatch(new List.CustomerList({page}));


    this.recentlyAddedTable = {
      displayedColumns,
      columns,
      page,
      pageSizeOption: config.pageSizeOptions,
    };
  }

  ngOnInit() {
  }

}
