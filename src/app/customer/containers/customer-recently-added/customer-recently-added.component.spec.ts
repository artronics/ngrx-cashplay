import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRecentlyAddedComponent } from './customer-recently-added.component';
import { CustomerListComponent } from '../../components/customer-list/customer-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

describe('CustomerRecentlyAddedComponent', () => {
  let component: CustomerRecentlyAddedComponent;
  let fixture: ComponentFixture<CustomerRecentlyAddedComponent>;
  const storeStub: Store<any> = new Store(null, null, null);

  beforeEach(async(() => {
    spyOn(storeStub, 'select').and.callThrough().and.returnValue(of({}));
    spyOn(storeStub, 'dispatch').and.callThrough().and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [CustomerRecentlyAddedComponent, CustomerListComponent],
      imports: [
        SharedModule,
      ],
      providers: [
        {provide: Store, useValue: storeStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
