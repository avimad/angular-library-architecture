import { TestBed } from '@angular/core/testing';

import { OePipesService } from './oe-pipes.service';

describe('OePipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OePipesService = TestBed.get(OePipesService);
    expect(service).toBeTruthy();
  });
});
