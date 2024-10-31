import { TestBed } from '@angular/core/testing';

import { MaquinaHttpRepositoryService } from './maquina-http-repository.service';

describe('MaquinaHttpRepositoryService', () => {
  let service: MaquinaHttpRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinaHttpRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
