import { TestBed } from '@angular/core/testing';

import { AshokService } from './ashok.service';

describe('AshokService', () => {
  let service: AshokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AshokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
