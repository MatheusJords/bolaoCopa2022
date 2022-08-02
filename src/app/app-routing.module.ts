import { MataMataComponent } from './mata-mata/mata-mata.component';
import { FaseDeGruposComponent } from './fase-de-grupos/fase-de-grupos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component:FaseDeGruposComponent},
  {path: 'mata-mata',component:MataMataComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
