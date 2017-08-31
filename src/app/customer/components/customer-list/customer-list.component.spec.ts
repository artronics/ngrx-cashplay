import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { SharedModule } from '../../../shared/shared.module';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      imports: [
        SharedModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
