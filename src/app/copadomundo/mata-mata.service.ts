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

  campeao:Selecoes = new Selecoes();

  constructor() { }

  classificaEquipeQuartas( posicao:number,selecao:Selecoes){
      switch (posicao) {
        case 1:
          this.quartas1 = selecao;
          break;
        
        case 2:
          this.quartas2 = selecao;
          break;

        case 3:
          this.quartas3 = selecao;
          break;

        case 4:
          this.quartas4 = selecao;
          break;

        case 5:
          this.quartas5 = selecao;
          break;

        case 6:
          this.quartas6 = selecao;
          break;
        
        case 7:
          this.quartas7 = selecao;
          break;

        case 8:
          this.quartas8 = selecao;
          break;

        default:
          break;
      }  
  }

  classificaEquipeSemi(posicao:number,selecao:Selecoes){
    switch (posicao) {
      case 1:
        this.semi1 = selecao;
        break;
      
      case 2:
        this.semi2 = selecao;
        break;

      case 3:
        this.semi3 = selecao;
        break;

      case 4:
        this.semi4 = selecao;
        break;

      default:
        break;
    }
  }

  classificaEquipeFinal(posicao:number,selecao:Selecoes){
    switch (posicao) {
      case 1:
        this.finalista1 = selecao;
        break;
      
      case 2:
        this.finalista2 = selecao;
        break;

      default:
        break;
    }
  }

  defineCampeao(selecao:Selecoes){
    this.campeao = selecao
  }

  carregaFlagBorderQuartas (selecao: Selecoes) {
    return `p-4 flag-icon flag-icon-${selecao.flag} flag-icon-squared`;
  }

}
