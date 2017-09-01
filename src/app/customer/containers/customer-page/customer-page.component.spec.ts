import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPageComponent } from './customer-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomerSearchComponent } from '../../components/customer-search/customer-search.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from '../../components/customer-list/customer-list.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

describe('CustomerPageComponent', () => {
  let component: CustomerPageComponent;
  let fixture: ComponentFixture<CustomerPageComponent>;
  const storeStub: Store<any> = new Store(null, null, null);

  beforeEach(async(() => {
    spyOn(storeStub, 'select').and.callThrough().and.returnValue(of({}));
    spyOn(storeStub, 'dispatch').and.callThrough().and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [CustomerPageComponent, CustomerSearchComponent, CustomerListComponent],
      imports: [
        SharedModule,
        FormsModule,
        MdInputModule,
      ],
      providers: [
        {provide: Store, useValue: storeStub}
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
