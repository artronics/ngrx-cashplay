import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdPaginatorModule, MdSortModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { Table } from '../models/table';
import { TestDataSource, TestResource } from '../../test-helper';
import { Page } from '../models/page';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/of';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<TestResource>>;
  let table: Table<TestResource>;
  let dataSource;
  const page: Page = {pageSize: 1, length: 2, pageIndex: 0};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        NoopAnimationsModule,
        MdTableModule,
        CdkTableModule,
        MdSortModule,
        MdPaginatorModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    dataSource = new TestDataSource();
    table = {
      displayedColumns: ['id', 'name'],
      columns: [{id: 'id', text: 'ID'},
        {
          id: 'name',
          text: 'Name',
          cellValue: (res: TestResource) => `${res.id} ${res.name}`,
          extraClasses: 'art-class'
        }],
      page,
      pageSizeOptions: [1]
    };
    component.table = table;
    component.dataSource = dataSource;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display data', () => {
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([{id: 0, name: 'foo'}]));
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('md-cell'));
    expect(cells.length).toBe(2);
  });
});
