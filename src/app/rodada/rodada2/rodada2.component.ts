import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/copadomundo/grupos.service';
import { RodadaService } from 'src/app/copadomundo/rodada.service';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { Selecoes } from 'src/app/selecoes/selecoes';

@Component({
  selector: 'app-rodada2',
  templateUrl: './rodada2.component.html',
  styleUrls: ['./rodada2.component.css']
})
export class Rodada2Component implements OnInit {
  rodada1: boolean = true;
  rodada2: boolean = false;
  rodada3: boolean = false;
  grupoA: Array<Selecoes> = [];
  grupoB: Array<Selecoes> = [];
  grupoC: Array<Selecoes> = [];
  grupoD: Array<Selecoes> = [];
  grupoE: Array<Selecoes> = [];
  grupoF: Array<Selecoes> = [];
  grupoG: Array<Selecoes> = [];
  grupoH: Array<Selecoes> = [];

  constructor(private gruposService: GruposService,
    private selecoesService: SelecoesService,
    private rodadaService: RodadaService) {
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

  mudaResultadoR2(mandante: Selecoes, visitante: Selecoes, rodada: number) {
    mandante.g2 = Number(mandante.g2);
    visitante.g2 = Number(visitante.g2);

    if (mandante.g2 > visitante.g2) {
      this.rodadaService.vitoriaMandanteR2(mandante, visitante);
    }
    if (mandante.g2 < visitante.g2) {
      this.rodadaService.vitoriaVisitanteR2(mandante, visitante);
    }
    if (mandante.g2 === visitante.g2) {
      this.rodadaService.EmpateR2(mandante, visitante);
    }
  }

}
