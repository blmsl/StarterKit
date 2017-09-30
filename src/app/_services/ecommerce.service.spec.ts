import { TestBed, inject } from '@angular/core/testing';

import { EcommerceService } from './ecommerce.service';

describe('EcommerceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcommerceService]
    });
  });

  it('should be created', inject([EcommerceService], (service: EcommerceService) => {
    expect(service).toBeTruthy();
  }));
});
