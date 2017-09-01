import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../../shared/models/table';
import { Customer } from '../../models/customer';

@Component({
  selector: 'art-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Input() table: Table<Customer>;
  @Input() dataSource;

  constructor() {
  }

  ngOnInit() {
  }

}
