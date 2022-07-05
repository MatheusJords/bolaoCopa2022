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

  constructor(private gruposService : GruposService,
              private selecoesService : SelecoesService,
              private rodadaService : RodadaService) {

        this.rodada1 = this.rodadaService.rodada1;
        this.rodada2 = this.rodadaService.rodada2;
        this.rodada3 = this.rodadaService.rodada3;
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

  atualizaPlacar(golsCasa:number, golsFora ?: number, mandante ?: Selecoes,visitante ?: Selecoes){
    console.log(golsCasa)
    console.log(golsFora)
    console.log(mandante)
    console.log(visitante)
    
    if(visitante !== undefined && mandante !== undefined && golsFora !== undefined && golsCasa !== undefined){
      mandante.golspro = mandante.g1 + mandante.g2 + mandante.g3;
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
