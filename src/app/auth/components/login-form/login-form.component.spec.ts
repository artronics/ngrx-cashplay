import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [
        FormsModule,
        SharedModule,
        NoopAnimationsModule,
        MdInputModule,
        MdProgressSpinnerModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
