import { TestBed } from '@angular/core/testing';

import { InsideService } from './inside.service';

describe('InsideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsideService = TestBed.get(InsideService);
    expect(service).toBeTruthy();
  });
});
