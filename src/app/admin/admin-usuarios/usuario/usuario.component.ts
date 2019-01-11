import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenActual;

  constructor(public _usuarioService: UsuarioService) {
    // this.usuario = _usuarioService.usuario;
    console.log(this.usuario);
  }

  ngOnInit() {}

  guardar(usuario: Usuario) {
    // this.usuario.nombre = usuario.nombre;
    // this.usuario.email = usuario.email;
   

    // this._usuarioService.actualizarUsuario(this.usuario).subscribe(resp => {
    //   console.log(resp);
    // });
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      // swal('Solo imagenes', 'El archivo debe ser una imagen', 'error');
      this.imagenSubir = null;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL (archivo);

    reader.onloadend = () => this.imagenActual = reader.result;
  }

  cambiarImagen() {
    // this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id);
  }
}
