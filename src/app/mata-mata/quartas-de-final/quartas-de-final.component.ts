import { Component, OnInit } from '@angular/core';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';

@Component({
  selector: 'app-quartas-de-final',
  templateUrl: './quartas-de-final.component.html',
  styleUrls: ['./quartas-de-final.component.css']
})
export class QuartasDeFinalComponent implements OnInit {

  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "quartas-de-final";
  }

}
