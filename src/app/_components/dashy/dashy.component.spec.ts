import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashyComponent } from './dashy.component';

describe('DashyComponent', () => {
  let component: DashyComponent;
  let fixture: ComponentFixture<DashyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
