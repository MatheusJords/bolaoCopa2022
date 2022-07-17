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
  
  grupoACopia: Array<Selecoes> = [];
  grupoBCopia: Array<Selecoes> = [];
  grupoCCopia: Array<Selecoes> = [];
  grupoDCopia: Array<Selecoes> = [];
  grupoECopia: Array<Selecoes> = [];
  grupoFCopia: Array<Selecoes> = [];
  grupoGCopia: Array<Selecoes> = [];
  grupoHCopia: Array<Selecoes> = [];
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
        this.grupoACopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("B")){
        this.grupoB.push(selecao);
        this.grupoBCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("C")){
        this.grupoC.push(selecao);
        this.grupoCCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("D")){
        this.grupoD.push(selecao);
        this.grupoDCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("E")){
        this.grupoE.push(selecao);
        this.grupoECopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("F")){
        this.grupoF.push(selecao);
        this.grupoFCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("G")){
        this.grupoG.push(selecao);
        this.grupoGCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if(selecao.grupo.includes("H")){
        this.grupoH.push(selecao);
        this.grupoHCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
    })
  }



  retornaSelecoes(grupo:String):Array<Selecoes>{
    this.selecoesDoGrupo = [];
    if(grupo.includes("A")){
      this.selecoesDoGrupo = [...this.grupoA];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("B")){
      this.selecoesDoGrupo = [...this.grupoB];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("C")){
      this.selecoesDoGrupo = [...this.grupoC];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("D")){
      this.selecoesDoGrupo = [...this.grupoD];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("E")){
      this.selecoesDoGrupo = [...this.grupoE];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("F")){
      this.selecoesDoGrupo = [...this.grupoF];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("G")){
      this.selecoesDoGrupo = [...this.grupoG];
      return this.selecoesDoGrupo;
    }
    if(grupo.includes("H")){
      this.selecoesDoGrupo = [...this.grupoH];
      return this.selecoesDoGrupo;
    }
    return this.selecoesDoGrupo;
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

  
  ordena(grupo: String){
    
    if(grupo === "A") {
      this.grupoACopia = JSON.parse(JSON.stringify(this.grupoA))
      this.ordenaPorGrupo(this.grupoACopia)
    }
    if(grupo === "B") {
      this.grupoBCopia = JSON.parse(JSON.stringify(this.grupoB))
      this.ordenaPorGrupo(this.grupoBCopia)
    }
    if(grupo === "C") {
      this.grupoCCopia = JSON.parse(JSON.stringify(this.grupoC))
      this.ordenaPorGrupo(this.grupoCCopia)
    }
    if(grupo === "D") {
      this.grupoDCopia = JSON.parse(JSON.stringify(this.grupoD))
      this.ordenaPorGrupo(this.grupoDCopia)
    }
    if(grupo === "E") {
      this.grupoECopia = JSON.parse(JSON.stringify(this.grupoE))
      this.ordenaPorGrupo(this.grupoECopia)
    }
    if(grupo === "F") {
      this.grupoFCopia = JSON.parse(JSON.stringify(this.grupoF))
      this.ordenaPorGrupo(this.grupoFCopia)
    }
    if(grupo === "G") {
      this.grupoGCopia = JSON.parse(JSON.stringify(this.grupoG))
      this.ordenaPorGrupo(this.grupoGCopia)
    }
    if(grupo === "H") {
      this.grupoHCopia = JSON.parse(JSON.stringify(this.grupoH))
      this.ordenaPorGrupo(this.grupoHCopia)
    }
  }

  ordenaPorGrupo(grupo:Array<Selecoes>){
    grupo.sort(function(a,b){
      if(a.pontos > b.pontos){
        return -1
      }
      return 1
    })
  }
  
  
}
