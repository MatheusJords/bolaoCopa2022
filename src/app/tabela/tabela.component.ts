import { SelecoesService } from './../copadomundo/selecoes.service';
import { Selecoes } from './../selecoes/selecoes';
import { Component, OnInit } from '@angular/core';
import { GruposService } from '../copadomundo/grupos.service';
import { RodadaService } from '../copadomundo/rodada.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  grupos: Array<String> = [""];
  selecoes: Array<Selecoes> = [];
  selecao: Selecoes = new Selecoes();
  selecoesDoGrupo: Array<Selecoes> = [];
  grupoA: Array<Selecoes> = [];
  grupoB: Array<Selecoes> = [];
  grupoC: Array<Selecoes> = [];
  grupoD: Array<Selecoes> = [];
  grupoE: Array<Selecoes> = [];
  grupoF: Array<Selecoes> = [];
  grupoG: Array<Selecoes> = [];
  grupoH: Array<Selecoes> = [];


  constructor(
    private rodadaService: RodadaService,
    private gruposService: GruposService,
    private selecoesService: SelecoesService) {

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
    this.selecoesService.criaSelecoesDaCopa();
  }

  atualizaPartidas(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaPartidas(grupo,selecao.nome);
  }

  /*
  retornaSelecoes(grupo: String) {
    this.selecoesService.retornaSelecoes(grupo);
    this.selecoesDoGrupo = this.selecoesService.selecoesDoGrupo;
    return true
  }
  */
}
