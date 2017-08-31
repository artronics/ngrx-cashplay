import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPageComponent } from './customer-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomerSearchComponent } from '../../components/customer-search/customer-search.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from '../../components/customer-list/customer-list.component';

describe('CustomerPageComponent', () => {
  let component: CustomerPageComponent;
  let fixture: ComponentFixture<CustomerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPageComponent, CustomerSearchComponent, CustomerListComponent],
      imports: [
        SharedModule,
        FormsModule,
        MdInputModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
