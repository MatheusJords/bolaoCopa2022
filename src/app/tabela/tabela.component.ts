import { SelecoesService } from './../copadomundo/selecoes.service';
import { Selecoes } from './../selecoes/selecoes';
import { Component, OnInit } from '@angular/core';
import { GruposService } from '../copadomundo/grupos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  grupos: Array<String> = [""];
  selecoes: Array<Selecoes> = [];
  selecao : Selecoes = new Selecoes();
  selecoesDoGrupo: Array<Selecoes> = [];
  

  constructor(
    private gruposService : GruposService,
    private selecoesService : SelecoesService) {
      
    }

  ngOnInit(): void {
    this.grupos = this.gruposService.criaGrupos();
    this.selecoesService.criaSelecoesDaCopa();
  }

  retornaSelecoes(grupo:String){
    this.selecoesService.retornaSelecoes(grupo);
    this.selecoesDoGrupo = this.selecoesService.selecoesDoGrupo;
    return true
  }
}
