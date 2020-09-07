import { TestBed } from '@angular/core/testing';

import { BooklessonService } from './booklesson.service';

describe('BooklessonService', () => {
  let service: BooklessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
