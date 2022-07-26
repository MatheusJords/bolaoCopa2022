import { MataMataComponent } from './mata-mata/mata-mata.component';
import { FinalComponent } from './mata-mata/final/final.component';
import { SemiFinalComponent } from './mata-mata/semi-final/semi-final.component';
import { QuartasDeFinalComponent } from './mata-mata/quartas-de-final/quartas-de-final.component';
import { FaseDeGruposComponent } from './fase-de-grupos/fase-de-grupos.component';
import { OitavasDeFinalComponent } from './mata-mata/oitavas-de-final/oitavas-de-final.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:FaseDeGruposComponent},
  {path: 'mata-mata',component:MataMataComponent}
  /*
  {path: 'oitavas', component: OitavasDeFinalComponent},
  {path: 'quartas', component: QuartasDeFinalComponent},
  {path: 'semi', component: SemiFinalComponent},
  {path: 'final', component: FinalComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
