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
  selecoesPorGrupo : Array<Selecoes> = [];
  grupoA: Array<Selecoes> = [];
  grupoB: Array<Selecoes> = [];
  grupoC: Array<Selecoes> = [];
  grupoD: Array<Selecoes> = [];
  grupoE: Array<Selecoes> = [];
  grupoF: Array<Selecoes> = [];
  grupoG: Array<Selecoes> = [];
  grupoH: Array<Selecoes> = [];
  selecoesDoGrupo: Array<Selecoes> = [];
  

  constructor(private gruposService : GruposService) { }

  ngOnInit(): void {
    this.grupos = this.gruposService.criaGrupos();
    this.criaSelecoesDaCopa();
  }

  criaSelecoesDaCopa(){
    //Grupo A
    this.criaSelecao("Catar","A");
    this.criaSelecao("Equador","A");
    this.criaSelecao("Senegal","A");
    this.criaSelecao("Holanda","A");

    this.criaSelecao("Inglaterra","B");
    this.criaSelecao("Irã","B");
    this.criaSelecao("EUA","B");
    this.criaSelecao("Gales","B");

    this.criaSelecao("Argentina","C");
    this.criaSelecao("Arábia Saudita","C");
    this.criaSelecao("México","C");
    this.criaSelecao("Polônia","C");

    this.criaSelecao("França","D");
    this.criaSelecao("Austrália","D");
    this.criaSelecao("Dinamarca","D");
    this.criaSelecao("Tunísia","D");

    this.criaSelecao("Espanha","E");
    this.criaSelecao("Costa Rica","E");
    this.criaSelecao("Alemanha","E");
    this.criaSelecao("Japão","E");

    this.criaSelecao("Bélgica","F");
    this.criaSelecao("Canadá","F");
    this.criaSelecao("Marrocos","F");
    this.criaSelecao("Croácia","F");

    this.criaSelecao("Brasil","G");
    this.criaSelecao("Sérvia","G");
    this.criaSelecao("Suíça","G");
    this.criaSelecao("Camarões","G");

    this.criaSelecao("Portugal","H");
    this.criaSelecao("Gana","H");
    this.criaSelecao("Uruguai","H");
    this.criaSelecao("Coreia do Sul","H");
    this.preencheGrupo();


  }

  criaSelecao(nome:string,grupo:string){
    this.selecao = new Selecoes();
    this.selecao.nome = nome;
    this.selecao.grupo = grupo;
    this.selecoes.push(this.selecao);
  }

  preencheGrupo(){
    this.selecoes.forEach((selecao) => {
      if(selecao.grupo.includes("A")){
        this.grupoA.push(selecao);
      }
      if(selecao.grupo.includes("B")){
        this.grupoB.push(selecao);
      }
      if(selecao.grupo.includes("C")){
        this.grupoC.push(selecao);
      }
      if(selecao.grupo.includes("D")){
        this.grupoD.push(selecao);
      }
      if(selecao.grupo.includes("E")){
        this.grupoE.push(selecao);
      }
      if(selecao.grupo.includes("F")){
        this.grupoF.push(selecao);
      }
      if(selecao.grupo.includes("G")){
        this.grupoG.push(selecao);
      }
      if(selecao.grupo.includes("H")){
        this.grupoH.push(selecao);
      }
    })
  }

  retornaSelecoes(grupo:String){
    this.selecoesDoGrupo = [];
    if(grupo.includes("A")){
      this.selecoesDoGrupo = [...this.grupoA];
      return true;
    }
    if(grupo.includes("B")){
      this.selecoesDoGrupo = [...this.grupoB];
      return true;
    }
    if(grupo.includes("C")){
      this.selecoesDoGrupo = [...this.grupoC];
      return true;
    }
    if(grupo.includes("D")){
      this.selecoesDoGrupo = [...this.grupoD];
      return true;
    }
    if(grupo.includes("E")){
      this.selecoesDoGrupo = [...this.grupoE];
      return true;
    }
    if(grupo.includes("F")){
      this.selecoesDoGrupo = [...this.grupoF];
      return true;
    }
    if(grupo.includes("G")){
      this.selecoesDoGrupo = [...this.grupoG];
      return true;
    }
    if(grupo.includes("H")){
      this.selecoesDoGrupo = [...this.grupoH];
      return true;
    }
    return false;
  }
}
