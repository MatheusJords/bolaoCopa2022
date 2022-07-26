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
  
  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
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

}
