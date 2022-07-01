import { Component, OnInit } from '@angular/core';
import { GruposService } from '../copadomundo/grupos.service';
import { SelecoesService } from '../copadomundo/selecoes.service';
import { Selecoes } from '../selecoes/selecoes';

@Component({
  selector: 'app-rodada',
  templateUrl: './rodada.component.html',
  styleUrls: ['./rodada.component.css']
})
export class RodadaComponent implements OnInit {
  grupos: Array<String> = [""];
  selecoesDoGrupo: Array<Selecoes> = [];

  constructor(private gruposService : GruposService,
              private selecoesService : SelecoesService) { }

  ngOnInit(): void {
    this.grupos = this.gruposService.criaGrupos();
  }

  retornaSelecoes(grupo:String){
    this.selecoesService.retornaSelecoes(grupo);
    this.selecoesDoGrupo = this.selecoesService.selecoesDoGrupo;
    return true
  }

}
