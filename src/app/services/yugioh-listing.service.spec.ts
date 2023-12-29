import { TestBed } from '@angular/core/testing';

import { YugiohListingService } from './yugioh-listing.service';

describe('YugiohListingService', () => {
  let service: YugiohListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YugiohListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
