import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/copadomundo/grupos.service';
import { RodadaService } from 'src/app/copadomundo/rodada.service';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { Selecoes } from 'src/app/selecoes/selecoes';

@Component({
  selector: 'app-rodada1',
  templateUrl: './rodada1.component.html',
  styleUrls: ['./rodada1.component.css']
})
export class Rodada1Component implements OnInit {
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

  constructor(private selecoesService : SelecoesService,
              private rodadaService : RodadaService) {
        this.rodada1 = this.rodadaService.rodada1;
        this.rodada2 = this.rodadaService.rodada2;
        this.rodada3 = this.rodadaService.rodada3;
        this.carregaRodadas();
  }

  ngOnInit(): void {
    setInterval (() => this.carregaRodadas(),500)
  }

  carregaFlag(selecao:Selecoes){
    return this.selecoesService.carregaFlag(selecao);
  }

  mudaResultado(mandante:Selecoes,visitante:Selecoes, rodada: number, grupo?:any){
    if(this.rodadaService.ehRodada1(rodada)){

        mandante.g1 = Number(mandante.g1);
        visitante.g1 = Number(visitante.g1);

        if(mandante.g1 > visitante.g1){
          this.rodadaService.vitoriaMandanteR1(mandante,visitante);
        }
        if(mandante.g1 < visitante.g1){
          this.rodadaService.vitoriaVisitanteR1(mandante,visitante);
        }
        if(mandante.g1 === visitante.g1){
          this.rodadaService.EmpateR1(mandante,visitante);
        }      
        
        this.selecoesService.ordena(grupo);
    }
    
  }

  carregaRodadas(){
    this.grupoA = this.selecoesService.grupoA;
    this.grupoB = this.selecoesService.grupoB;
    this.grupoC = this.selecoesService.grupoC;
    this.grupoD = this.selecoesService.grupoD;
    this.grupoE = this.selecoesService.grupoE;
    this.grupoF = this.selecoesService.grupoF;
    this.grupoG = this.selecoesService.grupoG;
    this.grupoH = this.selecoesService.grupoH;
  }

}
