import { TestBed } from '@angular/core/testing';

import { SwatchService } from './swatch.service';

describe('SwatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwatchService = TestBed.get(SwatchService);
    expect(service).toBeTruthy();
  });
});
