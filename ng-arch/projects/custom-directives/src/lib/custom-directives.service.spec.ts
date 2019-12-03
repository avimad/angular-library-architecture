import { TestBed } from '@angular/core/testing';

import { CustomDirectivesService } from './custom-directives.service';

describe('CustomDirectivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDirectivesService = TestBed.get(CustomDirectivesService);
    expect(service).toBeTruthy();
  });
});
