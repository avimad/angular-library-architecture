import { TestBed } from '@angular/core/testing';

import { OeCoreService } from './oe-core.service';

describe('OeCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OeCoreService = TestBed.get(OeCoreService);
    expect(service).toBeTruthy();
  });
});
