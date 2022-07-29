import { MataMataService } from './../copadomundo/mata-mata.service';
import { Component, OnInit } from '@angular/core';
import { SelecoesService } from '../copadomundo/selecoes.service';
import { Selecoes } from '../selecoes/selecoes';

@Component({
  selector: 'app-mata-mata',
  templateUrl: './mata-mata.component.html',
  styleUrls: ['./mata-mata.component.css']
})
export class MataMataComponent implements OnInit {
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

  constructor(private selecoesService:SelecoesService,
              private mataMataService:MataMataService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "mata-mata";
    this.mataMataService.reiniciaMataMata();
    this.atualizaFinalistas();

    this.defineConfrontos();
  }

  defineConfrontos(){
    //Confronto 1
    this.oitavas1 = this.selecoesService.grupoACopia[0];
    this.oitavas2 = this.selecoesService.grupoBCopia[1];

    //Confronto 2
    this.oitavas3 = this.selecoesService.grupoCCopia[0];
    this.oitavas4 = this.selecoesService.grupoDCopia[1];

    //Confronto 3
    this.oitavas5 = this.selecoesService.grupoECopia[0];
    this.oitavas6 = this.selecoesService.grupoFCopia[1];

    //Confronto 4
    this.oitavas7 = this.selecoesService.grupoGCopia[0];
    this.oitavas8 = this.selecoesService.grupoHCopia[1];

    //Confronto 5
    this.oitavas9 = this.selecoesService.grupoACopia[1];
    this.oitavas10 = this.selecoesService.grupoBCopia[0];

    //Confronto 6
    this.oitavas11 = this.selecoesService.grupoCCopia[1];
    this.oitavas12 = this.selecoesService.grupoDCopia[0];

    //Confronto 7
    this.oitavas13 = this.selecoesService.grupoECopia[1];
    this.oitavas14 = this.selecoesService.grupoFCopia[0];

    //Confronto 8
    this.oitavas15 = this.selecoesService.grupoGCopia[1];
    this.oitavas16 = this.selecoesService.grupoHCopia[0];
  }

  classificaEquipeQuartas(chave:number,selecao:Selecoes){
    this.mataMataService.classificaEquipeQuartas( chave,selecao);
    this.atualizaFinalistas();
  }

  classificaEquipeSemi(chave:number,selecao:Selecoes){
    this.mataMataService.classificaEquipeSemi( chave,selecao);
    this.atualizaFinalistas();
  }

  defineFinalistas(chave:number,selecao:Selecoes){
    this.mataMataService.classificaEquipeFinal( chave,selecao);
    this.atualizaFinalistas();
  }

  defineCampeao(selecao:Selecoes){
    this.mataMataService.defineCampeao(selecao);
    this.atualizaFinalistas();
  }

  carregaFlagBorder(selecao:Selecoes){
    return this.selecoesService.carregaFlagBorder(selecao);
  }

  carregaFlagBorderQuartas(selecao:Selecoes){
    return this.mataMataService.carregaFlagBorderQuartas(selecao);
  }

  atualizaFinalistas(){
    this.quartas1 = this.mataMataService.quartas1;
    this.quartas2 = this.mataMataService.quartas2;
    this.quartas3 = this.mataMataService.quartas3;
    this.quartas4 = this.mataMataService.quartas4;
    this.quartas5 = this.mataMataService.quartas5;
    this.quartas6 = this.mataMataService.quartas6;
    this.quartas7 = this.mataMataService.quartas7;
    this.quartas8 = this.mataMataService.quartas8;

    this.semi1 = this.mataMataService.semi1;
    this.semi2 = this.mataMataService.semi2;
    this.semi3 = this.mataMataService.semi3;
    this.semi4 = this.mataMataService.semi4;

    this.finalista1 = this.mataMataService.finalista1;
    this.finalista2 = this.mataMataService.finalista2;

    this.campeao = this.mataMataService.campeao;
  }
}
