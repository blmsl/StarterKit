import { TestBed, inject } from '@angular/core/testing';

import { DashyService } from './dashy.service';

describe('DashyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashyService]
    });
  });

  it('should be created', inject([DashyService], (service: DashyService) => {
    expect(service).toBeTruthy();
  }));
});
