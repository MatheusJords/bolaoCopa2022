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

  atualizaPartidas(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();
    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.partidas = selecaoGrupo.partida1 + selecaoGrupo.partida2 + selecaoGrupo.partida3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.partidas
  }

  atualizaVitorias(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.vitorias = selecaoGrupo.vitoria1 + selecaoGrupo.vitoria2 + selecaoGrupo.vitoria3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.vitorias
  }

  atualizaEmpate(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.empates = selecaoGrupo.empate1 + selecaoGrupo.empate2 + selecaoGrupo.empate3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.empates
  }

  atualizaDerrota(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.derrotas = selecaoGrupo.derrota1 + selecaoGrupo.derrota2 + selecaoGrupo.derrota3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.derrotas
  }

  atualizaGolsPro(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.golspro = Number(selecaoGrupo.g1) + Number(selecaoGrupo.g2) + Number(selecaoGrupo.g3)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.golspro
  }

  atualizaGolsContra(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.golscontra = Number(selecaoGrupo.gs1) + Number(selecaoGrupo.gs2) + Number(selecaoGrupo.gs3)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.golscontra
  }

  atualizaSaldoGols(grupo:Array<Selecoes>,selecao:string){
    let selecaoSelecionada:Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if(selecaoGrupo.nome === selecao){
        selecaoGrupo.saldogols = Number(selecaoGrupo.golspro) - Number(selecaoGrupo.golscontra)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.saldogols
  }

  

}
