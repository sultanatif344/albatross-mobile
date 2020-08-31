import { TestBed } from '@angular/core/testing';

import { ScheduledlessonsService } from './scheduledlessons.service';

describe('ScheduledlessonsService', () => {
  let service: ScheduledlessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledlessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
