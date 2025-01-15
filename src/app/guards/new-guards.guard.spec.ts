import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { newGuardsGuard } from './new-guards.guard';

describe('newGuardsGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => newGuardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
