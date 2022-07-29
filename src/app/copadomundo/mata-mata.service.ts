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

  reiniciaMataMata(){
    this.oitavas1 = new Selecoes();
    this.oitavas2 = new Selecoes();
    this.oitavas3 = new Selecoes();
    this.oitavas4 = new Selecoes();
    this.oitavas5 = new Selecoes();
    this.oitavas6 = new Selecoes();
    this.oitavas7 = new Selecoes();
    this.oitavas8 = new Selecoes();
    this.oitavas9 = new Selecoes();
    this.oitavas10 = new Selecoes();
    this.oitavas11 = new Selecoes();
    this.oitavas12 = new Selecoes();
    this.oitavas13 = new Selecoes();
    this.oitavas14 = new Selecoes();
    this.oitavas15 = new Selecoes();
    this.oitavas16 = new Selecoes();

    this.quartas1 = new Selecoes();
    this.quartas2 = new Selecoes();
    this.quartas3 = new Selecoes();
    this.quartas4 = new Selecoes();
    this.quartas5 = new Selecoes();
    this.quartas6 = new Selecoes();
    this.quartas7 = new Selecoes();
    this.quartas8 = new Selecoes();

    this.semi1 = new Selecoes();
    this.semi2 = new Selecoes();
    this.semi3 = new Selecoes();
    this.semi4 = new Selecoes();

    this.finalista1 = new Selecoes();
    this.finalista2 = new Selecoes();
  }

}
