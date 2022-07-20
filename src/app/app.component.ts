import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SelecoesService } from './copadomundo/selecoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bolaoCopa2022';

  faseAtual ?: string;
  constructor(private router: Router,
              private selecoesService: SelecoesService){

  }

  ngOnInit(){

  }

  proximaFase(){
    this.faseAtual = this.selecoesService.faseAtual;

    if(this.faseAtual?.includes("fase-de-grupo"))
      this.router.navigate(['/oitavas'])
    if(this.faseAtual?.includes("oitavas-de-final"))
      this.router.navigate(['/quartas'])
    if(this.faseAtual?.includes("quartas-de-final"))
      this.router.navigate(['/semi'])
    if(this.faseAtual?.includes("semi-final"))
      this.router.navigate(['/final'])
  }


}


