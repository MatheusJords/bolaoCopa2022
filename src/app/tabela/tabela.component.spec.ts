import { RodadaService } from './../copadomundo/rodada.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SelecoesService } from '../copadomundo/selecoes.service';

import { TabelaComponent } from './tabela.component';
import { GruposService } from '../copadomundo/grupos.service';

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaComponent ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente da tabela -> Fase Atual Inicial', () => {
    const comp = new TabelaComponent(new RodadaService(),new GruposService(),new SelecoesService());
    expect(comp.faseAtualTitulo).toBe("Fase de grupos");
  });
});
