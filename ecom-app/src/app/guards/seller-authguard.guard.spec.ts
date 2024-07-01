import { TestBed } from '@angular/core/testing';

import { SellerAuthguardGuard } from './seller-authguard.guard';

describe('SellerAuthguardGuard', () => {
  let guard: SellerAuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerAuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
