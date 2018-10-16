import { TestBed } from '@angular/core/testing';

import { CollectDataService } from './collect-data.service';

describe('CollectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectDataService = TestBed.get(CollectDataService);
    expect(service).toBeTruthy();
  });
});
