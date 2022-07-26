import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { Component, OnInit } from '@angular/core';
import { Selecoes } from 'src/app/selecoes/selecoes';

@Component({
  selector: 'app-oitavas-de-final',
  templateUrl: './oitavas-de-final.component.html',
  styleUrls: ['./oitavas-de-final.component.css']
})
export class OitavasDeFinalComponent implements OnInit {
  
  
  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "oitavas-de-final";
  }

  classificaEquipe(){

  }

  

}
