import { TestBed } from '@angular/core/testing';

import { InstructordetailService } from './instructordetail.service';

describe('InstructordetailService', () => {
  let service: InstructordetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructordetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
