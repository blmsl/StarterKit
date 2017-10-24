import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusketComponent } from './my-busket.component';

describe('MyBasketComponent', () => {
  let component: MyBusketComponent;
  let fixture: ComponentFixture<MyBusketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
