import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarProgressComponent } from './snackbar-progress.component';

describe('SnackbarProgressComponent', () => {
  let component: SnackbarProgressComponent;
  let fixture: ComponentFixture<SnackbarProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
