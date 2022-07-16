import { Injectable } from '@angular/core';
import { Selecoes } from '../selecoes/selecoes';

@Injectable({
  providedIn: 'root'
})
export class RodadaService {

  rodada1 : boolean = true;
  rodada2 : boolean = false;
  rodada3 : boolean = false;

  constructor() { }

  mostraRodada() : String{
    if(this.rodada1){
      return "Rodada 1"
    }
    if(this.rodada2){
      return "Rodada 2"
    }
    else{
      return "Rodada 3"
    }
  }

  visualizarProximaRodada(){
    if(this.rodada2){
      this.rodada2 = !this.rodada2
      this.rodada3 = true
      return
    }

    if(this.rodada1){
      this.rodada1 = !this.rodada1;
      this.rodada2 = true;
      return 
    }
  }

  ehRodada1(rodada1:number):boolean{
    return (rodada1 === 1);
  }

  vitoriaMandanteR3(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada3 = 3;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.vitorias = mandante.vitoria1 + mandante.vitoria2 + 1;
    mandante.empates = mandante.empate1 + mandante.empate2 + 0;
    mandante.derrotas = mandante.derrota1 + mandante.derrota2 + 0;
    mandante.golscontra = mandante.gs1 + mandante.gs2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada3 = 0;
    visitante.golscontra = visitante.gs1 + visitante.gs2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + visitante.vitoria2 + 0;
    visitante.empates = visitante.empate1 + visitante.empate2 + 0;
    visitante.derrotas = visitante.derrota1 + visitante.derrota2 + 1;

    mandante.partida3 = 1;
    visitante.partida3 = 1;
  }

  vitoriaVisitanteR3(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada3 = 0;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = mandante.gs1 + mandante.gs2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;
    mandante.vitorias = mandante.vitoria1 + mandante.vitoria2 + 0;
    mandante.empates = mandante.empate1 + mandante.empate2 + 0;
    mandante.derrotas = mandante.derrota1 + mandante.derrota2 + 1;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada3 = 3;
    visitante.golscontra = visitante.gs1 + visitante.gs2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + visitante.vitoria2 + 1;
    visitante.empates = visitante.empate1 + visitante.empate2 + 0;
    visitante.derrotas = visitante.derrota1 + visitante.derrota2 + 0;

    mandante.partida3 = 1;
    visitante.partida3 = 1;
  }

  EmpateR3(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada3 = 1;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = mandante.gs1 + mandante.gs2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra
    mandante.vitorias = mandante.vitoria1 + mandante.vitoria2 + 0;
    mandante.empates = mandante.empate1 + mandante.empate2 + 1;
    mandante.derrotas = mandante.derrota1 + mandante.derrota2 + 0;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada3 = 1;
    visitante.golscontra = visitante.gs1 + visitante.gs2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + visitante.vitoria2 + 0;
    visitante.empates = visitante.empate1 + visitante.empate2 + 1;
    visitante.derrotas = visitante.derrota1 + visitante.derrota2 + 0;

    mandante.partida3 = 1;
    visitante.partida3 = 1;
  }

  vitoriaMandanteR2(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada2 = 3;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.vitorias = mandante.vitoria1 + 1 + mandante.vitoria3;
    mandante.empates = mandante.empate1 + 0 + mandante.empate3;
    mandante.derrotas = mandante.derrota1 + 0 + mandante.derrota3;
    mandante.golscontra = mandante.gs1 + visitante.g2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada2 = 0;
    visitante.golscontra = visitante.gs1 + mandante.g2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + 0 + visitante.vitoria3;
    visitante.empates = visitante.empate1 + 0 + visitante.empate3;
    visitante.derrotas = visitante.derrota1 + 1 + visitante.derrota3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;
  }

  vitoriaVisitanteR2(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada2 = 0;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = mandante.gs1 + visitante.g2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;
    mandante.vitorias = mandante.vitoria1 + 0 + mandante.vitoria3;
    mandante.empates = mandante.empate1 + 0 + mandante.empate3;
    mandante.derrotas = mandante.derrota1 + 1 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada2 = 3;
    visitante.golscontra = visitante.gs1 + mandante.g2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + 1 + visitante.vitoria3;
    visitante.empates = visitante.empate1 + 0 + visitante.empate3;
    visitante.derrotas = visitante.derrota1 + 0 + visitante.derrota3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;
  }

  EmpateR2(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada2 = 1;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = mandante.gs1 + visitante.g2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra
    mandante.vitorias = mandante.vitoria1 + 0 + mandante.vitoria3;
    mandante.empates = mandante.empate1 + 1 + mandante.empate3;
    mandante.derrotas = mandante.derrota1 + 0 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada2 = 1;
    visitante.golscontra = visitante.gs1 + mandante.g2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = visitante.vitoria1 + 0 + visitante.vitoria3;
    visitante.empates = visitante.empate1 + 1 + visitante.empate3;
    visitante.derrotas = visitante.derrota1 + 0 + visitante.derrota3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;
  }

  vitoriaMandanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 3;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.vitorias = 1 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 0 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 0 + mandante.derrota2 + mandante.derrota3;
    mandante.golscontra = visitante.g1 + mandante.gs2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 0;
    visitante.golscontra = mandante.g1 + visitante.gs2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = 0 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 0 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 1 + visitante.derrota2 + visitante.derrota3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;
  }

  vitoriaVisitanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 0;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = visitante.g1 + mandante.gs2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;
    mandante.vitorias = 0 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 0 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 1 + mandante.derrota2 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 3;
    visitante.golscontra = mandante.g1 + visitante.gs2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = 1 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 0 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 0 + visitante.derrota2 + visitante.derrota3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;
  }

  EmpateR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 1;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = visitante.g1 + mandante.gs2 + mandante.gs3;
    mandante.saldogols = mandante.golspro - mandante.golscontra
    mandante.vitorias = 0 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 1 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 0 + mandante.derrota2 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 1;
    visitante.golscontra = mandante.g1 + visitante.gs2 + visitante.gs3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.vitorias = 0 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 1 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 0 + visitante.derrota2 + visitante.derrota3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;
  }

  visualizarRodadaAnterior(){
    if(this.rodada3){
      this.rodada3 = !this.rodada3
      this.rodada2 = true;
      return
    }

    if(this.rodada2){
      this.rodada2 = !this.rodada2
      this.rodada1 = true;
      return
    }
  }
}
