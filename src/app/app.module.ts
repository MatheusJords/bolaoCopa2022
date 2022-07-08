import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { RodadaComponent } from './rodada/rodada.component';
import { SelecoesService } from './copadomundo/selecoes.service';
import { GruposService } from './copadomundo/grupos.service';
import { RodadaService } from './copadomundo/rodada.service';
import { FormsModule } from '@angular/forms';
import { Rodada1Component } from './rodada/rodada1/rodada1.component';
import { Rodada2Component } from './rodada/rodada2/rodada2.component';
import { Rodada3Component } from './rodada/rodada3/rodada3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    RodadaComponent,
    Rodada1Component,
    Rodada2Component,
    Rodada3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SelecoesService,GruposService,RodadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
