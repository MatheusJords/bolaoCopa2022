import { Component, OnInit } from '@angular/core';
import { SelecoesService } from 'src/app/copadomundo/selecoes.service';

@Component({
  selector: 'app-semi-final',
  templateUrl: './semi-final.component.html',
  styleUrls: ['./semi-final.component.css']
})
export class SemiFinalComponent implements OnInit {

  constructor(private selecoesService:SelecoesService) { }

  ngOnInit(): void {
    this.selecoesService.faseAtual = "semi-final";
  }

}
