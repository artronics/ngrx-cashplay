import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const storeStub: Store<any> = new Store(null, null, null);

  beforeEach(async(() => {
    spyOn(storeStub, 'select').and.callThrough().and.returnValue(of({}));
    spyOn(storeStub, 'dispatch').and.callThrough().and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {provide: Store, useValue: storeStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
