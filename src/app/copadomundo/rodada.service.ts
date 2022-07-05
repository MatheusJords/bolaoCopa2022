import { Injectable } from '@angular/core';

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
