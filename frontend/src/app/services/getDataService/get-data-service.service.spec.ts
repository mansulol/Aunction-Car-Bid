import { TestBed } from '@angular/core/testing';

import { GetDataServiceService } from './get-data-service.service';

describe('GetDataServiceService', () => {
  let service: GetDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
