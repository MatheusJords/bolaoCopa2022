import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Selecoes } from '../selecoes/selecoes';

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

  constructor(private router: Router) { }

  atualizaFaseAtualTitulo():void{
    if (this.faseAtual?.includes("fase-de-grupo")) {
      this.faseAtualTitulo = "Fase de grupos";
      return
    }
    /*
    if (this.faseAtual?.includes("oitavas-de-final")) {
      this.faseAtualTitulo = "Oitavas-de-final";
      return
    }
    
    if (this.faseAtual?.includes("quartas-de-final")) {
      this.faseAtualTitulo = "Quartas-de-final"
      return
    }

    if (this.faseAtual?.includes("semi-final")) {
      this.faseAtualTitulo = "Semi-final"
      return
    }

    if (this.faseAtual?.includes("final")) {
      this.faseAtualTitulo = "Final"
      return
    }
    */

  }

  faseAnterior() {
    if (this.faseAtual?.includes("mata-mata")) {
      this.router.navigate(['/'])
      this.atualizaFaseAtualTitulo();
      return
    }
    /*
    if (this.faseAtual?.includes("quartas-de-final")) {
      this.router.navigate(['/oitavas'])
      this.atualizaFaseAtualTitulo();
      return
    }
    if (this.faseAtual?.includes("semi-final")) {
      this.router.navigate(['/quartas'])
      this.atualizaFaseAtualTitulo();
      return
    }

    if (this.faseAtual?.includes("final")) {
      this.router.navigate(['/semi'])
      this.atualizaFaseAtualTitulo();
      return
    }
    */
  }

  proximaFase() {
    if (this.faseAtual?.includes("fase-de-grupo")) {
      this.router.navigate(['/mata-mata'])
      return
    }
    /*
    if (this.faseAtual?.includes("oitavas-de-final")) {
      this.router.navigate(['/quartas'])
      return
    }
    if (this.faseAtual?.includes("quartas-de-final")) {
      this.router.navigate(['/semi'])
      return
    }
    if (this.faseAtual?.includes("semi-final")) {
      this.router.navigate(['/final'])
      return
    }
    */
  }

  criaSelecoesDaCopa() {
    //Grupo A
    if (this.grupoA.length === 0) {
      this.criaSelecao("Catar", "A", 1, "qa","CAT");
      this.criaSelecao("Equador", "A", 2, "ec","EQU");
      this.criaSelecao("Senegal", "A", 3, "sn","SEN");
      this.criaSelecao("Holanda", "A", 4, "nl","HOL");
    }

    if (this.grupoB.length === 0) {
      this.criaSelecao("Inglaterra", "B", 1, "gb","ING");
      this.criaSelecao("Irã", "B", 2, "ir","IRÃ");
      this.criaSelecao("EUA", "B", 3, "us","EUA");
      this.criaSelecao("Gales", "B", 4, "gb-wls","GAL");
    }
    if (this.grupoC.length === 0) {
      this.criaSelecao("Argentina", "C", 1, "ar","ARG");
      this.criaSelecao("Arábia Saudita", "C", 2, "sa","ARA");
      this.criaSelecao("México", "C", 3, "mx","MEX");
      this.criaSelecao("Polônia", "C", 4, "pl","POL");
    }
    if (this.grupoD.length === 0) {
      this.criaSelecao("França", "D", 1, "fr","FRA");
      this.criaSelecao("Austrália", "D", 2, "au","AUS");
      this.criaSelecao("Dinamarca", "D", 3, "dk","DIN");
      this.criaSelecao("Tunísia", "D", 4, "tn","TUN");
    }
    if (this.grupoE.length === 0) {
      this.criaSelecao("Espanha", "E", 1, "es","ESP");
      this.criaSelecao("Costa Rica", "E", 2, "cr","CRC");
      this.criaSelecao("Alemanha", "E", 3, "de","ALE");
      this.criaSelecao("Japão", "E", 4, "jp","JAP");
    }
    if (this.grupoF.length === 0) {
      this.criaSelecao("Bélgica", "F", 1, "be","BEL");
      this.criaSelecao("Canadá", "F", 2, "ca","CAN");
      this.criaSelecao("Marrocos", "F", 3, "ma","MAR");
      this.criaSelecao("Croácia", "F", 4, "hr","CRO");
    }
    if (this.grupoG.length === 0) {
      this.criaSelecao("Brasil", "G", 1, "br","BRA");
      this.criaSelecao("Sérvia", "G", 2, "rs","SER");
      this.criaSelecao("Suíça", "G", 3, "ch","SUI");
      this.criaSelecao("Camarões", "G", 4, "cm","CMR");
    }

    if (this.grupoH.length === 0) {
      this.criaSelecao("Portugal", "H", 1, "pt","POR");
      this.criaSelecao("Gana", "H", 2, "gh","GAN");
      this.criaSelecao("Uruguai", "H", 3, "uy","URU");
      this.criaSelecao("Coreia do Sul", "H", 4, "kr","COR");
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
    return `flag-icon flag-icon-${selecao.flag}`;
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
