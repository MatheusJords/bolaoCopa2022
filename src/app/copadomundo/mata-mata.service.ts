import { Injectable } from '@angular/core';
import { Selecoes } from '../selecoes/selecoes';

@Injectable({
  providedIn: 'root'
})
export class MataMataService {
  oitavas1:Selecoes = new Selecoes();
  oitavas2:Selecoes = new Selecoes();
  oitavas3:Selecoes = new Selecoes();
  oitavas4:Selecoes = new Selecoes();
  oitavas5:Selecoes = new Selecoes();
  oitavas6:Selecoes = new Selecoes();
  oitavas7:Selecoes = new Selecoes();
  oitavas8:Selecoes = new Selecoes();
  oitavas9:Selecoes = new Selecoes();
  oitavas10:Selecoes = new Selecoes();
  oitavas11:Selecoes = new Selecoes();
  oitavas12:Selecoes = new Selecoes();
  oitavas13:Selecoes = new Selecoes();
  oitavas14:Selecoes = new Selecoes();
  oitavas15:Selecoes = new Selecoes();
  oitavas16:Selecoes = new Selecoes();

  quartas1:Selecoes = new Selecoes();
  quartas2:Selecoes = new Selecoes();
  quartas3:Selecoes = new Selecoes();
  quartas4:Selecoes = new Selecoes();
  quartas5:Selecoes = new Selecoes();
  quartas6:Selecoes = new Selecoes();
  quartas7:Selecoes = new Selecoes();
  quartas8:Selecoes = new Selecoes();

  semi1:Selecoes = new Selecoes();
  semi2:Selecoes = new Selecoes();
  semi3:Selecoes = new Selecoes();
  semi4:Selecoes = new Selecoes();

  finalista1:Selecoes = new Selecoes();
  finalista2:Selecoes = new Selecoes();
  
  disputa3lugar1:Selecoes = new Selecoes();
  disputa3lugar2:Selecoes = new Selecoes();

  constructor() { }

  classificaEquipeQuartas(fase:string, posicao:number,selecao:Selecoes){
      switch (posicao) {
        case 1:
          this.quartas1 = selecao;
          console.log(this.quartas1);
          break;
        
        case 2:
          this.quartas2 = selecao;
          console.log(this.quartas2);
          break;

        case 3:
          this.quartas3 = selecao;
          console.log(this.quartas3);
          break;

        case 4:
          this.quartas4 = selecao;
          console.log(this.quartas4);
          break;

        case 5:
          this.quartas5 = selecao;
          console.log(this.quartas5);
          break;

        case 6:
          this.quartas6 = selecao;
          console.log(this.quartas6);
          break;
        
        case 7:
          this.quartas7 = selecao;
          console.log(this.quartas7);
          break;

        case 8:
          this.quartas8 = selecao;
          console.log(this.quartas8);
          break;

        default:
          break;
      }
    
  }

}
