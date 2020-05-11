import { TestBed } from '@angular/core/testing';

import { TravelService } from './travel.service';

describe('TravelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelService = TestBed.get(TravelService);
    expect(service).toBeTruthy();
  });
});
