import { TestBed } from '@angular/core/testing';

import { ContactDetailListServiceService } from './contact-detail-list-service.service';

describe('ContactDetailListServiceService', () => {
  let service: ContactDetailListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactDetailListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
