import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/copadomundo/grupos.service';
import { RodadaService } from 'src/app/copadomundo/rodada.service';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { Selecoes } from 'src/app/selecoes/selecoes';

@Component({
  selector: 'app-rodada3',
  templateUrl: './rodada3.component.html',
  styleUrls: ['./rodada3.component.css']
})
export class Rodada3Component implements OnInit {
  rodada1 : boolean = true;
  rodada2 : boolean = false;
  rodada3 : boolean = false;
  grupoA: Array<Selecoes> = [];
  grupoB: Array<Selecoes> = [];
  grupoC: Array<Selecoes> = [];
  grupoD: Array<Selecoes> = [];
  grupoE: Array<Selecoes> = [];
  grupoF: Array<Selecoes> = [];
  grupoG: Array<Selecoes> = [];
  grupoH: Array<Selecoes> = [];
  
  constructor(private gruposService : GruposService,
              private selecoesService : SelecoesService,
              private rodadaService : RodadaService) {
    this.rodada1 = this.rodadaService.rodada1;
    this.rodada2 = this.rodadaService.rodada2;
    this.rodada3 = this.rodadaService.rodada3;
    this.grupoA = this.selecoesService.grupoA;
    this.grupoB = this.selecoesService.grupoB;
    this.grupoC = this.selecoesService.grupoC;
    this.grupoD = this.selecoesService.grupoD;
    this.grupoE = this.selecoesService.grupoE;
    this.grupoF = this.selecoesService.grupoF;
    this.grupoG = this.selecoesService.grupoG;
    this.grupoH = this.selecoesService.grupoH;
  }

  ngOnInit(): void {
  }

  mudaResultadoR3(mandante: Selecoes, visitante: Selecoes, rodada: number) {
    mandante.g3 = Number(mandante.g3);
    visitante.g3 = Number(visitante.g3);

    if (mandante.g3 > visitante.g3) {
      this.rodadaService.vitoriaMandanteR3(mandante, visitante);
    }
    if (mandante.g3 < visitante.g3) {
      this.rodadaService.vitoriaVisitanteR3(mandante, visitante);
    }
    if (mandante.g3 === visitante.g3) {
      this.rodadaService.EmpateR3(mandante, visitante);
    }
  }

}
