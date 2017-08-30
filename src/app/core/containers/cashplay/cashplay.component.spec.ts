import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashplayComponent } from './cashplay.component';

describe('CashplayComponent', () => {
  let component: CashplayComponent;
  let fixture: ComponentFixture<CashplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashplayComponent ]
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