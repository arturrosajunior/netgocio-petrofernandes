import { TestBed } from '@angular/core/testing';

import { TagsManagerService } from './tags-manager.service';

describe('TagsManagerService', () => {
  let service: TagsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
