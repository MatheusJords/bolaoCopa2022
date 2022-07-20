import { SelecoesService } from 'src/app/copadomundo/selecoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fase-de-grupos',
  templateUrl: './fase-de-grupos.component.html',
  styleUrls: ['./fase-de-grupos.component.css']
})
export class FaseDeGruposComponent implements OnInit {

  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "fase-de-grupo";
  }

}
