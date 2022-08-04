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
  grupoACopia: Array<Selecoes> = [];
  grupoBCopia: Array<Selecoes> = [];
  grupoCCopia: Array<Selecoes> = [];
  grupoDCopia: Array<Selecoes> = [];
  grupoECopia: Array<Selecoes> = [];
  grupoFCopia: Array<Selecoes> = [];
  grupoGCopia: Array<Selecoes> = [];
  grupoHCopia: Array<Selecoes> = [];
  faseAtualTitulo ?: string = "Fase de grupos";


  constructor(
    private rodadaService: RodadaService,
    private gruposService: GruposService,
    private selecoesService: SelecoesService) {

    this.grupos = this.gruposService.criaGrupos();
    this.selecoesService.criaSelecoesDaCopa();

    this.grupoA = this.selecoesService.grupoA;
    this.grupoB = this.selecoesService.grupoB;
    this.grupoC = this.selecoesService.grupoC;
    this.grupoD = this.selecoesService.grupoD;
    this.grupoE = this.selecoesService.grupoE;
    this.grupoF = this.selecoesService.grupoF;
    this.grupoG = this.selecoesService.grupoG;
    this.grupoH = this.selecoesService.grupoH;

    setInterval(() => {this.atualizaValores()},500);
  }

  ngOnInit(): void {
    this.faseAtualTitulo = "Fase de grupos";
    this.selecoesService.faseAtual = "fase-de-grupo";
  }

  atualizaPartidas(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaPartidas(grupo,selecao.nome);
  }

  atualizaVitorias(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaVitorias(grupo,selecao.nome);
  }

  atualizaEmpate(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaEmpate(grupo,selecao.nome);
  }

  atualizaDerrota(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaDerrota(grupo,selecao.nome);
  }

  atualizaGolsPro(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaGolsPro(grupo,selecao.nome);
  }

  atualizaGolsContra(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaGolsContra(grupo,selecao.nome);
  }

  atualizaSaldoGols(selecao:Selecoes,grupo: Array<Selecoes>){
    return this.selecoesService.atualizaSaldoGols(grupo,selecao.nome);
  }

  atualizaValores(){
    //console.log(this.grupoACopia)

    this.grupoACopia = this.selecoesService.grupoACopia;
    this.grupoBCopia = this.selecoesService.grupoBCopia;
    this.grupoCCopia = this.selecoesService.grupoCCopia;
    this.grupoDCopia = this.selecoesService.grupoDCopia;
    this.grupoECopia = this.selecoesService.grupoECopia;
    this.grupoFCopia = this.selecoesService.grupoFCopia;
    this.grupoGCopia = this.selecoesService.grupoGCopia;
    this.grupoHCopia = this.selecoesService.grupoHCopia;

    this.selecoesService.atualizaOrdenacao();
  }
  
  carregaFlag(selecao:Selecoes){
    return this.selecoesService.carregaFlag(selecao);
  }

  classificadosPraProximaFase(index:number){
    if(index === 0 || index === 1){
      return `tabela-selecao table-success`;
    }else{
      return `tabela-selecao table-danger`;
    }
  }

  retornaSelecoes(grupo: String):Array<Selecoes> {
    return this.selecoesService.retornaSelecoes(grupo);
  }

  limpaSelecoes(){
    this.selecoesService.limpaTabela();
    
    this.grupos = this.gruposService.criaGrupos();
    this.selecoesService.criaSelecoesDaCopa();

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
