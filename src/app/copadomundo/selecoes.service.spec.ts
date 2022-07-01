import { TestBed } from '@angular/core/testing';

import { SelecoesService } from './selecoes.service';

describe('SelecoesService', () => {
  let service: SelecoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelecoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
