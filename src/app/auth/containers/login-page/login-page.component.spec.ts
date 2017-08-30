import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../reducers';
import { of } from 'rxjs/observable/of';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const storeStub: Store<fromAuth.State> = new Store(null, null, null);

  beforeEach(async(() => {
    spyOn(storeStub, 'select').and.callThrough().and.returnValue(of({}));
    spyOn(storeStub, 'dispatch').and.callThrough().and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent, LoginFormComponent],
      imports: [
        SharedModule,
        FormsModule,
        MdInputModule,
        MdProgressSpinnerModule,
      ],
      providers: [
        {provide: Store, useValue: storeStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
