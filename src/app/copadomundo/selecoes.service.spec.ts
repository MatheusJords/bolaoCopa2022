import { Rodada2Component } from './../rodada/rodada2/rodada2.component';
import { TestBed } from '@angular/core/testing';
import { SelecoesService } from './selecoes.service';
import { Router } from '@angular/router';

describe('SelecoesService', () => {
  let service: SelecoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    });
    service = TestBed.inject(SelecoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
