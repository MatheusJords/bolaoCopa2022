import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MataMataService } from './copadomundo/mata-mata.service';
import { SelecoesService } from './copadomundo/selecoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bolaoCopa2022';

  faseAtual ?: string;
  faseAtualTitulo ?: string;

  constructor(private selecoesService: SelecoesService,
              private mataMataService: MataMataService){
  }

  ngOnInit(){
    this.faseAtualTitulo = "Fase de grupos";
    setInterval(() => this.atualizaFaseAtualTitulo(), 500)
  }

  faseAnterior(){
    this.selecoesService.faseAnterior();
    this.faseAtualTitulo = this.selecoesService.faseAtualTitulo;
  }

  proximaFase(){
    this.selecoesService.proximaFase();
    this.faseAtualTitulo = this.selecoesService.faseAtualTitulo;
  }

  atualizaFaseAtualTitulo(){
    this.selecoesService.atualizaFaseAtualTitulo();
    this.faseAtualTitulo = this.selecoesService.faseAtualTitulo;
  }


}


