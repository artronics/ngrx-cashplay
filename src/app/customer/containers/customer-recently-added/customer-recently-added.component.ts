import { Component, OnInit } from '@angular/core';
import { columns, Customer, displayedColumns } from '../../models/customer';
import { Table } from '../../../shared/models/table';
import { Page } from '../../../shared/models/page';
import { Store } from '@ngrx/store';
import * as fromCustomer from '../../reducers';
import * as List from '../../actions/list';
import { CustomerRecentlyAddedDataSource } from './customer-recently-added-data-source';


@Component({
  selector: 'art-customer-recently-added',
  templateUrl: './customer-recently-added.component.html',
  styleUrls: ['./customer-recently-added.component.scss']
})
export class CustomerRecentlyAddedComponent implements OnInit {
  table: Table<Customer>;
  page: Page;
  pageSizeOptions: number[];

  constructor(private store: Store<fromCustomer.State>, public dataSource: CustomerRecentlyAddedDataSource) {
    store.select(fromCustomer.getRecentlyAddedCustomersCurrentPage).subscribe(p => this.page = p);
    store.select(fromCustomer.getRecentlyAddedCustomersPageSizeOptions).subscribe(p => this.pageSizeOptions = p);
    this.store.dispatch(new List.CustomerList({page: this.page}));

    this.table = {
      displayedColumns,
      columns,
      page: this.page,
      pageSizeOptions: this.pageSizeOptions,
    };

  }

  ngOnInit() {
  }
}
