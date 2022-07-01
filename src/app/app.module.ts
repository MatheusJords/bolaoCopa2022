import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { RodadaComponent } from './rodada/rodada.component';
import { SelecoesService } from './copadomundo/selecoes.service';
import { GruposService } from './copadomundo/grupos.service';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    RodadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelecoesService,GruposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
