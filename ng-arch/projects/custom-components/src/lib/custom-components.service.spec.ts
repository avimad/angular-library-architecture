import { TestBed } from '@angular/core/testing';

import { CustomComponentsService } from './custom-components.service';

describe('CustomComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomComponentsService = TestBed.get(CustomComponentsService);
    expect(service).toBeTruthy();
  });
});
