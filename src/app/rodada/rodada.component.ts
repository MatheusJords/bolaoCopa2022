import { Component, OnInit } from '@angular/core';
import { GruposService } from '../copadomundo/grupos.service';
import { RodadaService } from '../copadomundo/rodada.service';
import { SelecoesService } from '../copadomundo/selecoes.service';
import { Selecoes } from '../selecoes/selecoes';

@Component({
  selector: 'app-rodada',
  templateUrl: './rodada.component.html',
  styleUrls: ['./rodada.component.css']
})
export class RodadaComponent implements OnInit {
  grupos: Array<String> = [""];
  selecoesDoGrupo: Array<Selecoes> = [];
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
    this.grupos = this.gruposService.criaGrupos();
  }

  mostraRodada() : String{
    return this.rodadaService.mostraRodada();
  }

  visualizarProximaRodada(){
    this.rodadaService.visualizarProximaRodada();
    this.atualizaRodada()
  }

  visualizarRodadaAnterior(){
    this.rodadaService.visualizarRodadaAnterior();
    this.atualizaRodada()
  }

  retornaSelecoes(grupo:String){
    this.selecoesService.retornaSelecoes(grupo);
    this.selecoesDoGrupo = this.selecoesService.selecoesDoGrupo;
    return true
  }

  atualizaPlacar(golsCasa:any, golsFora ?: any,grupo?:any, posicaoMandante ?: any, posicaoVisitante?: any){

    let selecaoMandante;
    let selecaoVisitante
    
    switch (grupo) {
      case "A":
        selecaoMandante = this.grupoA.filter((selecao) => selecao.posicao === posicaoMandante);
        selecaoVisitante = this.grupoA.filter((selecao) => selecao.posicao === posicaoVisitante)

        
        break;
    
      default:
        break;
    }

    if( golsFora !== undefined && golsCasa !== undefined){
      
      if(golsCasa > golsFora){
        
      }

      if(golsFora > golsCasa){

      }

      if(golsCasa === golsFora){

      }

      
      
    }
    
  }

  atualizaRodada(){
    this.rodada1 = this.rodadaService.rodada1;
    this.rodada2 = this.rodadaService.rodada2;
    this.rodada3 = this.rodadaService.rodada3;
  }

}
