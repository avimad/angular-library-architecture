import { TestBed } from '@angular/core/testing';

import { OeServicesService } from './oe-services.service';

describe('OeServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OeServicesService = TestBed.get(OeServicesService);
    expect(service).toBeTruthy();
  });
});
