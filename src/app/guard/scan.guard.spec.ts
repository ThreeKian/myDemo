import { TestBed, async, inject } from '@angular/core/testing';

import { ScanPageGuard } from './scan.guard';

describe('ScanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScanPageGuard]
    });
  });

  it('should ...', inject([ScanPageGuard], (guard: ScanPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
