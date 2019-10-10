import { TestBed } from '@angular/core/testing';

import { OeDirectivesService } from './oe-directives.service';

describe('OeDirectivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OeDirectivesService = TestBed.get(OeDirectivesService);
    expect(service).toBeTruthy();
  });
});
