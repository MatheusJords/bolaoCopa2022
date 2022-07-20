import { Component, OnInit } from '@angular/core';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "final";
  }

}
