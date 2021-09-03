import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentar',
  templateUrl: './agregar-editar-comentar.component.html',
  styleUrls: ['./agregar-editar-comentar.component.css']
})
export class AgregarEditarComentarComponent implements OnInit {
agregarComentario: FormGroup;
accion = 'Agregar';
id = 0;
comentario: Comentario | undefined;

  constructor(private  fb: FormBuilder, 
    private _comentarioService: ComentarioService, 
    private router: Router, 
    private aRoute: ActivatedRoute) { 
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar(){
    if(this.id !== 0){
      this.accion = 'Editar';
      this._comentarioService.getComentario(this.id).subscribe(data => {
        this.comentario = data;
        this.agregarComentario.patchValue({
          titulo: data.titulo,
          texto: data.texto,
          creador: data.creador
        })
      }, error => {
          console.error(error);
          
      })
    }
  }

  agregarEditarComentario(){

    if(this.comentario == undefined){
      // console.log("agregar", this.agregarComentario);
      const comentario: Comentario = {
        titulo: this.agregarComentario.get('titulo')?.value,
        creador: this.agregarComentario.get('creador')?.value,
        texto: this.agregarComentario.get('texto')?.value,
        fechaCreacion: new Date
      }
  
      this._comentarioService.saveComentario(comentario).subscribe(data => {
          this.router.navigate(['/']);
        }, error => {
          console.error(error);
        }
        );
    }else{
      //para editar un comentario
        const comentario: Comentario = {
          id: this.id,
          titulo: this.agregarComentario.get('titulo')?.value,
          creador: this.agregarComentario.get('creador')?.value,
          texto: this.agregarComentario.get('texto')?.value,
          fechaCreacion: this.comentario.fechaCreacion
      }

      this._comentarioService.updateComentario(this.id, comentario).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.error(error);
      })
    }

  }
}
