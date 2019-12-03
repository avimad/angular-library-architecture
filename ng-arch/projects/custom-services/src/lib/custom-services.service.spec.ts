import { TestBed } from '@angular/core/testing';

import { CustomServicesService } from './custom-services.service';

describe('CustomServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomServicesService = TestBed.get(CustomServicesService);
    expect(service).toBeTruthy();
  });
});
