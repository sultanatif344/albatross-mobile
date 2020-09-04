import { TestBed } from '@angular/core/testing';

import { InstructorloadService } from './instructorload.service';

describe('InstructorloadService', () => {
  let service: InstructorloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
