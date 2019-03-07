import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../../config/config';
import swal from 'sweetalert2';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SubirArchivoService } from '../subir-archivo.service';

@Injectable()
export class UsuarioService {
  public identity;
  public token = null;

  constructor(public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService) {
    this.carcarStorage();

  }
  actualizarUsuario(usuario: Usuario, id) {
    const url = `${URL_LANDING_DEV}usuario/${id}/?token=${this.identity.token}`;
    return this.http.put(url, usuario).pipe(
      map((resp: any) => {
        const usuarioDB: Usuario = resp.usuario;
        // this.guardarStorage(usuarioDB._id, this.token, usuarioDB);
        swal('Usuario actualizado', `${usuario.nombre} ${usuario.apellido}`, 'success');
        return true;
      })
    );
  }

  createUsuario(usuario: Usuario) {
    const url = `${URL_LANDING_DEV}usuario?token=${this.token}`;
    return this.http.post(url, usuario);
  }

  getUsuarios() {
    const url = URL_LANDING_DEV;
    return this.http.get(`${url}usuario`);
    }
  getUsuario(id: String) {
    const url = URL_LANDING_DEV;
    return this.http.get(`${url}usuario/${id}`);
    }


    deleteUsuario(id: String) {
      const url = URL_LANDING_DEV;
      return this.http.delete(`${url}usuario/${id}`);
    }

  estaLogueado() {
    return this.token !== null ? true : false;
  }



  logout() {
    this.identity = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('identity');

    // this.router.navigate(['/login']);

  }

  login(usuario: Usuario, gettoken = null, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('correo', usuario.correo);
    } else {
      localStorage.removeItem('correo');
    }
    if (gettoken != null) {
      usuario.gettoken = 'true';
    }
    const url = URL_LANDING_DEV + 'login';

    return this.http.post(url, usuario);
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  carcarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.identity = JSON.parse(localStorage.getItem('identity'));
    } else {
      this.token = null;
      this.identity = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('identity', JSON.stringify(usuario));
  }

  cambiarImagen(file: File, id: string) {
    this._subirArchivoService
      .subirArchivo(file, id)
      .then((resp: any) => {
        this.identity.imagen = resp.usuario.imagen;
        swal('Imagen actualizada', this.identity.nombre, 'success');
        this.guardarStorage(id, this.token, this.identity);
      })
      .catch(resp => {
        console.log(resp);
      });
  }
}
