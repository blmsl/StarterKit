import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMyPhotoComponent } from './upload-my-photo.component';

describe('UploadMyPhotoComponent', () => {
  let component: UploadMyPhotoComponent;
  let fixture: ComponentFixture<UploadMyPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMyPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMyPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
