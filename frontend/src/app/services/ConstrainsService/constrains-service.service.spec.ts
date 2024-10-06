import { TestBed } from '@angular/core/testing';

import { ConstrainsServiceService } from './constrains-service.service';

describe('ConstrainsServiceService', () => {
  let service: ConstrainsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstrainsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
