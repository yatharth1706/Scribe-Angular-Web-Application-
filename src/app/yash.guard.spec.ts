import { TestBed, async, inject } from '@angular/core/testing';

import { YashGuard } from './yash.guard';

describe('YashGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YashGuard]
    });
  });

  it('should ...', inject([YashGuard], (guard: YashGuard) => {
    expect(guard).toBeTruthy();
  }));
});
