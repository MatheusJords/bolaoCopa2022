import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Selecoes } from '../selecoes/selecoes';
import { Constants } from './constants';

const FASEDEGRUPO : string = "fase-de-grupo";
const FASEDEGRUPOLABEL : string = "Fase de grupos";
const MATAMATA : string = "mata-mata";
const MATAMATALABEL : string = "Playoffs";

@Injectable({
  providedIn: 'root'
})
export class SelecoesService {
  selecao: Selecoes = new Selecoes();
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

  faseAtual?: string;
  faseAtualTitulo ?: string;


  constructor(private router ?: Router) { }

  atualizaFaseAtualTitulo():void{
    switch (this.faseAtual) {
      case FASEDEGRUPO:
        this.faseAtualTitulo = FASEDEGRUPOLABEL;
        break;
      
      case MATAMATA:
        this.faseAtualTitulo = MATAMATALABEL;
        break;

      default:
        break;
    }
  }

  faseAnterior() {
    if (this.faseAtual?.includes("mata-mata")) {
      this.router?.navigate(['/'])
      this.atualizaFaseAtualTitulo();
      return
    }
  }

  proximaFase() {
    if (this.faseAtual?.includes("fase-de-grupo")) {
      this.router?.navigate(['/mata-mata'])
      return
    }
  }

  criaSelecoesDaCopa() {
    //Grupo A
    if (this.grupoA.length === 0) {
      this.criaSelecao(Constants.Catar, "A", 1, "qa","CAT");
      this.criaSelecao(Constants.Equador, "A", 2, "ec","EQU");
      this.criaSelecao(Constants.Senegal, "A", 3, "sn","SEN");
      this.criaSelecao(Constants.Holanda, "A", 4, "nl","HOL");
    }

    if (this.grupoB.length === 0) {
      this.criaSelecao(Constants.Inglaterra, "B", 1, "gb","ING");
      this.criaSelecao(Constants.Ira, "B", 2, "ir","IRÃ");
      this.criaSelecao(Constants.EUA, "B", 3, "us","EUA");
      this.criaSelecao(Constants.Gales, "B", 4, "gb-wls","GAL");
    }
    if (this.grupoC.length === 0) {
      this.criaSelecao(Constants.Argentina, "C", 1, "ar","ARG");
      this.criaSelecao(Constants.Arabia_Saudita, "C", 2, "sa","ARA");
      this.criaSelecao(Constants.Mexico, "C", 3, "mx","MEX");
      this.criaSelecao(Constants.Polonia, "C", 4, "pl","POL");
    }
    if (this.grupoD.length === 0) {
      this.criaSelecao(Constants.Franca, "D", 1, "fr","FRA");
      this.criaSelecao(Constants.Australia, "D", 2, "au","AUS");
      this.criaSelecao(Constants.Dinamarca, "D", 3, "dk","DIN");
      this.criaSelecao(Constants.Tunisia, "D", 4, "tn","TUN");
    }
    if (this.grupoE.length === 0) {
      this.criaSelecao(Constants.Espanha, "E", 1, "es","ESP");
      this.criaSelecao(Constants.Costa_Rica, "E", 2, "cr","CRC");
      this.criaSelecao(Constants.Alemanha, "E", 3, "de","ALE");
      this.criaSelecao(Constants.Japao, "E", 4, "jp","JAP");
    }
    if (this.grupoF.length === 0) {
      this.criaSelecao(Constants.Belgica, "F", 1, "be","BEL");
      this.criaSelecao(Constants.Canada, "F", 2, "ca","CAN");
      this.criaSelecao(Constants.Marrocos, "F", 3, "ma","MAR");
      this.criaSelecao(Constants.Croacia, "F", 4, "hr","CRO");
    }
    if (this.grupoG.length === 0) {
      this.criaSelecao(Constants.Brasil, "G", 1, "br","BRA");
      this.criaSelecao(Constants.Servia, "G", 2, "rs","SER");
      this.criaSelecao(Constants.Suica, "G", 3, "ch","SUI");
      this.criaSelecao(Constants.Camaroes, "G", 4, "cm","CMR");
    }

    if (this.grupoH.length === 0) {
      this.criaSelecao(Constants.Portugal, "H", 1, "pt","POR");
      this.criaSelecao(Constants.Gana, "H", 2, "gh","GAN");
      this.criaSelecao(Constants.Uruguai, "H", 3, "uy","URU");
      this.criaSelecao(Constants.Coreia_do_Sul, "H", 4, "kr","COR");
    }

    if (this.grupoA.length === 0)
      this.preencheGrupo();
  }

  criaSelecao(nome: string, grupo: string, posicao: number, flag?: string,sigla?:string) {
    this.selecao = new Selecoes();
    this.selecao.nome = nome;
    this.selecao.grupo = grupo;
    this.selecao.posicao = posicao;
    if (flag !== undefined) {
      this.selecao.flag = flag;
    }
    if(sigla !== undefined) this.selecao.sigla = sigla;
    this.selecoes.push(this.selecao);
  }

  carregaFlag(selecao: Selecoes) {
    if (selecao.flag !== undefined && selecao.flag !== "")
      return `flag-icon flag-icon-${selecao.flag}`;
    else return ``;
  }

  carregaFlagBorder(selecao: Selecoes) {
    if (selecao.flag !== undefined && selecao.flag !== "")
      return `p-4 flag-icon flag-icon-${selecao.flag}`;
    return `p-4 flag-icon flag-icon-${selecao.flag} flag-icon-squared`;
  }

  preencheGrupo() {
    this.selecoes.forEach((selecao) => {
      if (selecao.grupo.includes("A")) {
        this.grupoA.push(selecao);
        this.grupoACopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("B")) {
        this.grupoB.push(selecao);
        this.grupoBCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("C")) {
        this.grupoC.push(selecao);
        this.grupoCCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("D")) {
        this.grupoD.push(selecao);
        this.grupoDCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("E")) {
        this.grupoE.push(selecao);
        this.grupoECopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("F")) {
        this.grupoF.push(selecao);
        this.grupoFCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("G")) {
        this.grupoG.push(selecao);
        this.grupoGCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
      if (selecao.grupo.includes("H")) {
        this.grupoH.push(selecao);
        this.grupoHCopia.push(JSON.parse(JSON.stringify(selecao)));
      }
    })
  }



  retornaSelecoes(grupo: String): Array<Selecoes> {
    this.selecoesDoGrupo = [];
    if (grupo.includes("A")) {
      this.selecoesDoGrupo = [...this.grupoA];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("B")) {
      this.selecoesDoGrupo = [...this.grupoB];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("C")) {
      this.selecoesDoGrupo = [...this.grupoC];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("D")) {
      this.selecoesDoGrupo = [...this.grupoD];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("E")) {
      this.selecoesDoGrupo = [...this.grupoE];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("F")) {
      this.selecoesDoGrupo = [...this.grupoF];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("G")) {
      this.selecoesDoGrupo = [...this.grupoG];
      return this.selecoesDoGrupo;
    }
    if (grupo.includes("H")) {
      this.selecoesDoGrupo = [...this.grupoH];
      return this.selecoesDoGrupo;
    }
    return this.selecoesDoGrupo;
  }

  atualizaPartidas(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();
    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.partidas = selecaoGrupo.partida1 + selecaoGrupo.partida2 + selecaoGrupo.partida3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.partidas
  }

  atualizaVitorias(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.vitorias = selecaoGrupo.vitoria1 + selecaoGrupo.vitoria2 + selecaoGrupo.vitoria3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.vitorias
  }

  atualizaEmpate(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.empates = selecaoGrupo.empate1 + selecaoGrupo.empate2 + selecaoGrupo.empate3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.empates
  }

  atualizaDerrota(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.derrotas = selecaoGrupo.derrota1 + selecaoGrupo.derrota2 + selecaoGrupo.derrota3

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.derrotas
  }

  atualizaGolsPro(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.golspro = Number(selecaoGrupo.g1) + Number(selecaoGrupo.g2) + Number(selecaoGrupo.g3)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.golspro
  }

  atualizaGolsContra(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.golscontra = Number(selecaoGrupo.gs1) + Number(selecaoGrupo.gs2) + Number(selecaoGrupo.gs3)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.golscontra
  }

  atualizaSaldoGols(grupo: Array<Selecoes>, selecao: string) {
    let selecaoSelecionada: Selecoes = new Selecoes();

    grupo.forEach((selecaoGrupo) => {
      if (selecaoGrupo.nome === selecao) {
        selecaoGrupo.saldogols = Number(selecaoGrupo.golspro) - Number(selecaoGrupo.golscontra)

        selecaoSelecionada = selecaoGrupo
      }
    })

    return selecaoSelecionada.saldogols
  }


  ordena(grupo: String) {

    if (grupo === "A") {
      this.grupoACopia = JSON.parse(JSON.stringify(this.grupoA))
      this.ordenaPorGrupo(this.grupoACopia)
    }
    if (grupo === "B") {
      this.grupoBCopia = JSON.parse(JSON.stringify(this.grupoB))
      this.ordenaPorGrupo(this.grupoBCopia)
    }
    if (grupo === "C") {
      this.grupoCCopia = JSON.parse(JSON.stringify(this.grupoC))
      this.ordenaPorGrupo(this.grupoCCopia)
    }
    if (grupo === "D") {
      this.grupoDCopia = JSON.parse(JSON.stringify(this.grupoD))
      this.ordenaPorGrupo(this.grupoDCopia)
    }
    if (grupo === "E") {
      this.grupoECopia = JSON.parse(JSON.stringify(this.grupoE))
      this.ordenaPorGrupo(this.grupoECopia)
    }
    if (grupo === "F") {
      this.grupoFCopia = JSON.parse(JSON.stringify(this.grupoF))
      this.ordenaPorGrupo(this.grupoFCopia)
    }
    if (grupo === "G") {
      this.grupoGCopia = JSON.parse(JSON.stringify(this.grupoG))
      this.ordenaPorGrupo(this.grupoGCopia)
    }
    if (grupo === "H") {
      this.grupoHCopia = JSON.parse(JSON.stringify(this.grupoH))
      this.ordenaPorGrupo(this.grupoHCopia)
    }
  }

  limpaTabela(){
    this.grupoA = [];
    this.grupoB = [];
    this.grupoC = [];
    this.grupoD = [];
    this.grupoE = [];
    this.grupoF = [];
    this.grupoG = [];
    this.grupoH = [];

    this.grupoACopia = [];
    this.grupoBCopia = [];
    this.grupoCCopia = [];
    this.grupoDCopia = [];
    this.grupoECopia = [];
    this.grupoFCopia = [];
    this.grupoGCopia = [];
    this.grupoHCopia = [];

    this.selecoes = [];
  }

  atualizaOrdenacao(){
    this.ordena("A");
    this.ordena("B");
    this.ordena("C");
    this.ordena("D");
    this.ordena("E");
    this.ordena("F");
    this.ordena("G");
    this.ordena("H");
  }

  ordenaPorGrupo(grupo: Array<Selecoes>) {
    grupo.sort(function (a, b) {
      //Ordenando por pontos
      if (a.pontos > b.pontos) {
        return -1
      }

      //Ordenando por vitórias
      if (a.pontos === b.pontos) {
        if (a.vitorias > b.vitorias) return -1
      }

      //Ordenando por saldo de gols
      if (a.pontos === b.pontos
        && a.vitorias === b.vitorias) {
        if (a.saldogols > b.saldogols) return -1
      }

      //Ordenando por gols pro
      if (a.pontos === b.pontos
        && a.vitorias === b.vitorias
        && a.saldogols === b.saldogols) {
        if (a.golspro > b.golspro) {
          return -1
        }
      }


      return 1
    })
  }


}
