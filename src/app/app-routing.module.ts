import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarComponent } from './components/agregar-editar-comentar/agregar-editar-comentar.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  { path: '', component: ListComentariosComponent },
  { path: 'agregar', component: AgregarEditarComentarComponent },
  {path: 'editar/:id', component: AgregarEditarComentarComponent },
  {path: 'ver/:id', component: VerComentariosComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: "tarjetaCredito", component: TarjetaCreditoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
