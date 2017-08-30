import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashplayComponent } from './cashplay.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MdMenuModule, MdToolbarModule } from '@angular/material';

describe('CashplayComponent', () => {
  let component: CashplayComponent;
  let fixture: ComponentFixture<CashplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CashplayComponent],
      imports: [
        RouterTestingModule,
        MdToolbarModule,
        MdMenuModule,
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
