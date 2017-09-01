import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MdPaginator, MdSort, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Table } from '../models/table';

@Component({
  selector: 'art-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() dataSource: DataSource<T>;
  @Output() selectRow: EventEmitter<T> = new EventEmitter<T>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  selectedRow: T;

  @ViewChild(MdSort)
  sort: MdSort;
  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  constructor() {
  }

  ngOnInit() {
  }

  select(row: T) {
    this.selectedRow = row;
    this.selectRow.emit(row);
  }

  onPaginationChange(page: PageEvent) {
    this.page.emit(page);
  }

}
