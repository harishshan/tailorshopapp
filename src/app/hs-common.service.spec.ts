import { TestBed } from '@angular/core/testing';

import { HsCommonService } from './hs-common.service';

describe('HsCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsCommonService = TestBed.get(HsCommonService);
    expect(service).toBeTruthy();
  });
});
