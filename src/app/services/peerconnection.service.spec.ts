import { TestBed } from '@angular/core/testing';

import { PeerconnectionService } from './peerconnection.service';

describe('PeerconnectionService', () => {
  let service: PeerconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeerconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
