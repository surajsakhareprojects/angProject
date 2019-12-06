import { TestBed } from '@angular/core/testing';

import { CeoApiService } from './ceo-api.service';

describe('CeoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeoApiService = TestBed.get(CeoApiService);
    expect(service).toBeTruthy();
  });
});
