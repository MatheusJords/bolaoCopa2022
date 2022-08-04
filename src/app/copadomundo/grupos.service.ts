import { Constants } from './constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor() { }

  criaGrupos(){
    return ["A","B","C","D","E","F","G","H"];
  }
}
