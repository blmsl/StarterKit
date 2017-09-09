import { TestBed, inject } from '@angular/core/testing';

import { SnackBarService } from './snack-bar-service.service';

describe('SnackBarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarService]
    });
  });

  it('should be created', inject([SnackBarService], (service: SnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
