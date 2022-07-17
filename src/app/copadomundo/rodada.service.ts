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
    mandante.pontosrodada3 = 3;
    visitante.pontosrodada3 = 0;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida3 = 1;
    visitante.partida3 = 1;

    mandante.vitoria3 = 1;
    visitante.vitoria3 = 0;

    mandante.empate3 = 0;
    visitante.empate3 = 0;

    mandante.derrota3 = 0;
    visitante.derrota3 = 1;

    mandante.gs3 = visitante.g3;
    visitante.gs3 = mandante.g3;
  }

  vitoriaVisitanteR3(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada3 = 0;
    visitante.pontosrodada3 = 3;

    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida3 = 1;
    visitante.partida3 = 1;

    mandante.vitoria3 = 0;
    visitante.vitoria3 = 1;

    mandante.empate3 = 0;
    visitante.empate3 = 0;

    mandante.derrota3 = 1;
    visitante.derrota3 = 0;

    mandante.gs3 = visitante.g3;
    visitante.gs3 = mandante.g3;
  }

  EmpateR3(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada3 = 1;
    visitante.pontosrodada3 = 1;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida3 = 1;
    visitante.partida3 = 1;

    mandante.vitoria3 = 0;
    visitante.vitoria3 = 0;

    mandante.empate3 = 1;
    visitante.empate3 = 1;

    mandante.derrota3 = 0;
    visitante.derrota3 = 0;

    mandante.gs3 = visitante.g3;
    visitante.gs3 = mandante.g3;
  }

  vitoriaMandanteR2(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada2 = 3;
    visitante.pontosrodada2 = 0;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;

    mandante.vitoria2 = 1;
    visitante.vitoria2 = 0;

    mandante.empate2 = 0;
    visitante.empate2 = 0;

    mandante.derrota2 = 0;
    visitante.derrota2 = 1;

    mandante.gs2 = visitante.g2;
    visitante.gs2 = mandante.g2;
  }

  vitoriaVisitanteR2(mandante:Selecoes,visitante:Selecoes){    
    mandante.pontosrodada2 = 0;
    visitante.pontosrodada2 = 3;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;

    mandante.vitoria2 = 0;
    visitante.vitoria2 = 1;

    mandante.empate2 = 0;
    visitante.empate2 = 0;

    mandante.derrota2 = 1;
    visitante.derrota2 = 0;

    mandante.gs2 = visitante.g2;
    visitante.gs2 = mandante.g2;
  }

  EmpateR2(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada2 = 1;
    visitante.pontosrodada2 = 1;

    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
    
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida2 = 1;
    visitante.partida2 = 1;

    mandante.vitoria2 = 0;
    visitante.vitoria2 = 0;

    mandante.empate2 = 1;
    visitante.empate2 = 1;

    mandante.derrota2 = 0;
    visitante.derrota2 = 0;

    mandante.gs2 = visitante.g2;
    visitante.gs2 = mandante.g2;
    
  }

  vitoriaMandanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada1 = 3;
    visitante.pontosrodada1 = 0;

    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;

    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;

    mandante.vitoria1 = 1;
    visitante.vitoria1 = 0;

    mandante.empate1 = 0;
    visitante.empate1 = 0;

    mandante.derrota1 = 0;
    visitante.derrota1 = 1;

    mandante.gs1 = visitante.g1;
    visitante.gs1 = mandante.g1;

  }

  vitoriaVisitanteR1(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada1 = 0;
    visitante.pontosrodada1 = 3;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
   
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;

    mandante.vitoria1 = 0;
    visitante.vitoria1 = 1;

    mandante.empate1 = 0;
    visitante.empate1 = 0;

    mandante.derrota1 = 1;
    visitante.derrota1 = 0;

    mandante.gs1 = visitante.g1;
    visitante.gs1 = mandante.g1;
  }

  EmpateR1(mandante:Selecoes,visitante:Selecoes){
    mandante.pontosrodada1 = 1;
    visitante.pontosrodada1 = 1;
    
    mandante.pontos = mandante.pontosrodada1 + mandante.pontosrodada2 + mandante.pontosrodada3;
  
    visitante.pontos = visitante.pontosrodada1 + visitante.pontosrodada2 + visitante.pontosrodada3;

    mandante.partida1 = 1;
    visitante.partida1 = 1;

    mandante.vitoria1 = 0;
    visitante.vitoria1 = 0;

    mandante.empate1 = 1;
    visitante.empate1 = 1;

    mandante.derrota1 = 0;
    visitante.derrota1 = 0;

    mandante.gs1 = visitante.g1;
    visitante.gs1 = mandante.g1;
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
