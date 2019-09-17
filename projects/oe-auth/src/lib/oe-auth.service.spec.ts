import { TestBed } from '@angular/core/testing';

import { OeAuthService } from './oe-auth.service';

describe('OeAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OeAuthService = TestBed.get(OeAuthService);
    expect(service).toBeTruthy();
  });
});
