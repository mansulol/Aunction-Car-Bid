import { TestBed } from '@angular/core/testing';

import { PutDataServiceService } from './put-data-service.service';

describe('PutDataServiceService', () => {
  let service: PutDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
