import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashplayComponent } from './cashplay.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MdMenuModule, MdToolbarModule } from '@angular/material';
import { NavComponent } from '../../components/nav/nav.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Account } from '../../../auth/models/account';

describe('CashplayComponent', () => {
  let component: CashplayComponent;
  let fixture: ComponentFixture<CashplayComponent>;
  const storeStub: Store<any> = new Store(null, null, null);
  const select = function (account) {
    return of({loggedInUser: {name: 'foo'}} as Account);
  };

  beforeEach(async(() => {
    spyOn(storeStub, 'select').and.callFake(select);
    spyOn(storeStub, 'dispatch').and.callThrough().and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [CashplayComponent, NavComponent],
      imports: [
        RouterTestingModule,
        MdToolbarModule,
        MdMenuModule,
      ],
      providers: [
        {provide: Store, useValue: storeStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
