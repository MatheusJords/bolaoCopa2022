import { Injectable } from '@angular/core';
import { Selecoes } from '../selecoes/selecoes';

@Injectable({
  providedIn: 'root'
})
export class SelecoesService {
  selecao : Selecoes = new Selecoes();
  selecoes: Array<Selecoes> = [];
  grupoA: Array<Selecoes> = [];
  grupoB: Array<Selecoes> = [];
  grupoC: Array<Selecoes> = [];
  grupoD: Array<Selecoes> = [];
  grupoE: Array<Selecoes> = [];
  grupoF: Array<Selecoes> = [];
  grupoG: Array<Selecoes> = [];
  grupoH: Array<Selecoes> = [];
  selecoesDoGrupo: Array<Selecoes> = [];

  constructor() { }

  criaSelecoesDaCopa(){
    //Grupo A
    this.criaSelecao("Catar","A",1);
    this.criaSelecao("Equador","A",2);
    this.criaSelecao("Senegal","A",3);
    this.criaSelecao("Holanda","A",4);

    this.criaSelecao("Inglaterra","B",1);
    this.criaSelecao("Irã","B",2);
    this.criaSelecao("EUA","B",3);
    this.criaSelecao("Gales","B",4);

    this.criaSelecao("Argentina","C",1);
    this.criaSelecao("Arábia Saudita","C",2);
    this.criaSelecao("México","C",3);
    this.criaSelecao("Polônia","C",4);

    this.criaSelecao("França","D",1);
    this.criaSelecao("Austrália","D",2);
    this.criaSelecao("Dinamarca","D",3);
    this.criaSelecao("Tunísia","D",4);

    this.criaSelecao("Espanha","E",1);
    this.criaSelecao("Costa Rica","E",2);
    this.criaSelecao("Alemanha","E",3);
    this.criaSelecao("Japão","E",4);

    this.criaSelecao("Bélgica","F",1);
    this.criaSelecao("Canadá","F",2);
    this.criaSelecao("Marrocos","F",3);
    this.criaSelecao("Croácia","F",4);

    this.criaSelecao("Brasil","G",1);
    this.criaSelecao("Sérvia","G",2);
    this.criaSelecao("Suíça","G",3);
    this.criaSelecao("Camarões","G",4);

    this.criaSelecao("Portugal","H",1);
    this.criaSelecao("Gana","H",2);
    this.criaSelecao("Uruguai","H",3);
    this.criaSelecao("Coreia do Sul","H",4);
    this.preencheGrupo();
  }

  criaSelecao(nome:string,grupo:string,posicao:number){
    this.selecao = new Selecoes();
    this.selecao.nome = nome;
    this.selecao.grupo = grupo;
    this.selecao.posicao = posicao;
    this.selecoes.push(this.selecao);
  }

  preencheGrupo(){
    this.selecoes.forEach((selecao) => {
      if(selecao.grupo.includes("A")){
        this.grupoA.push(selecao);
      }
      if(selecao.grupo.includes("B")){
        this.grupoB.push(selecao);
      }
      if(selecao.grupo.includes("C")){
        this.grupoC.push(selecao);
      }
      if(selecao.grupo.includes("D")){
        this.grupoD.push(selecao);
      }
      if(selecao.grupo.includes("E")){
        this.grupoE.push(selecao);
      }
      if(selecao.grupo.includes("F")){
        this.grupoF.push(selecao);
      }
      if(selecao.grupo.includes("G")){
        this.grupoG.push(selecao);
      }
      if(selecao.grupo.includes("H")){
        this.grupoH.push(selecao);
      }
    })
  }

  retornaSelecoes(grupo:String){
    this.selecoesDoGrupo = [];
    if(grupo.includes("A")){
      this.selecoesDoGrupo = [...this.grupoA];
      return true;
    }
    if(grupo.includes("B")){
      this.selecoesDoGrupo = [...this.grupoB];
      return true;
    }
    if(grupo.includes("C")){
      this.selecoesDoGrupo = [...this.grupoC];
      return true;
    }
    if(grupo.includes("D")){
      this.selecoesDoGrupo = [...this.grupoD];
      return true;
    }
    if(grupo.includes("E")){
      this.selecoesDoGrupo = [...this.grupoE];
      return true;
    }
    if(grupo.includes("F")){
      this.selecoesDoGrupo = [...this.grupoF];
      return true;
    }
    if(grupo.includes("G")){
      this.selecoesDoGrupo = [...this.grupoG];
      return true;
    }
    if(grupo.includes("H")){
      this.selecoesDoGrupo = [...this.grupoH];
      return true;
    }
    return false;
  }

  atualizaVitorias(grupo:Array<Selecoes>,selecao:string){
    grupo.forEach((selecaoFiltrada) => {
      if(selecaoFiltrada.nome === selecao){
        selecaoFiltrada.partidas = selecaoFiltrada.partida1 + selecaoFiltrada.partida2 + selecaoFiltrada.partida3
      }
    })
  }

}
