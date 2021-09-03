import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComentarComponent } from './components/agregar-editar-comentar/agregar-editar-comentar.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarComponent,
    ListComentariosComponent,
    ComentarioComponent,
    VerComentariosComponent,
    TarjetaCreditoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
