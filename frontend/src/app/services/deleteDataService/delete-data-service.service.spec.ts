import { TestBed } from '@angular/core/testing';

import { DeleteDataServiceService } from './delete-data-service.service';

describe('DeleteDataServiceService', () => {
  let service: DeleteDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
