import { TestBed } from '@angular/core/testing';

import { AngulartestService } from './angulartest.service';

describe('AngulartestService', () => {
  let service: AngulartestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngulartestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
