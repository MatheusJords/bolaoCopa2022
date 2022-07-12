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

  vitoriaMandanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 3;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.partidas = 1 + mandante.partida2 + mandante.partida3;
    mandante.vitorias = 1 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 0 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 0 + mandante.derrota2 + mandante.derrota3;
    mandante.golscontra = visitante.g1 + visitante.g2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 0;
    visitante.golscontra = mandante.g1 + mandante.g2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.partidas = 1 + visitante.partida2 + visitante.partida3;
    visitante.vitorias = 0 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 0 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 1 + visitante.derrota2 + visitante.derrota3;
  }

  vitoriaVisitanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 0;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = visitante.g1 + visitante.g2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra;
    mandante.partidas = 1 + mandante.partida2 + mandante.partida3;
    mandante.vitorias = 0 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 0 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 1 + mandante.derrota2 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 3;
    visitante.golscontra = mandante.g1 + mandante.g2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.partidas = 1 + visitante.partida2 + visitante.partida3;
    visitante.vitorias = 1 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 0 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 0 + visitante.derrota2 + visitante.derrota3;
  }

  EmpateR1(mandante:Selecoes,visitante:Selecoes){
    mandante.golspro = mandante.g2 + mandante.g1 + 
    mandante.g3;
    mandante.pontosrodada1 = 1;
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    mandante.golscontra = visitante.g1 + visitante.g2 + visitante.g3;
    mandante.saldogols = mandante.golspro - mandante.golscontra
    mandante.partidas = 1 + mandante.partida2 + mandante.partida3;
    mandante.vitorias = 0 + mandante.vitoria2 + mandante.vitoria3;
    mandante.empates = 1 + mandante.empate2 + mandante.empate3;
    mandante.derrotas = 0 + mandante.derrota2 + mandante.derrota3;

    visitante.golspro = visitante.g2 + visitante.g1 + 
    visitante.g3;
    visitante.pontosrodada1 = 1;
    visitante.golscontra = mandante.g1 + mandante.g2 + mandante.g3;
    visitante.saldogols = visitante.golspro - visitante.golscontra
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;
    visitante.partidas = 1 + visitante.partida2 + visitante.partida3;
    visitante.vitorias = 0 + visitante.vitoria2 + visitante.vitoria3;
    visitante.empates = 1 + visitante.empate2 + visitante.empate3;
    visitante.derrotas = 0 + visitante.derrota2 + visitante.derrota3;
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
