import { TestBed } from '@angular/core/testing';

import { CryptoPriceServiceService } from './crypto-price-service.service';

describe('CryptoPriceServiceService', () => {
  let service: CryptoPriceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoPriceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
