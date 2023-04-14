import { TestBed } from '@angular/core/testing';

import { LabtvService } from './labtv.service';

describe('LabtvService', () => {
  let service: LabtvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
