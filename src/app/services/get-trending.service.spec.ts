import { TestBed } from '@angular/core/testing';

import { GetTrendingService } from './get-trending.service';

describe('GetTrendingService', () => {
  let service: GetTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
