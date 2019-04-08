import { TestBed } from '@angular/core/testing';

import { CrickBackService } from './crick-back.service';

describe('CrickBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrickBackService = TestBed.get(CrickBackService);
    expect(service).toBeTruthy();
  });
});
