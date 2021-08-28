import { TestBed } from '@angular/core/testing';

import { NewlettersService } from './newletters.service';

describe('NewlettersService', () => {
  let service: NewlettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewlettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
