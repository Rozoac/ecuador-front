import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { URL_LANDING_DEV } from '../../../../../colombia/src/app/config/config';

@Injectable()
export class UsuarioService {
  public identity;
  public token = null;

  constructor(public http: HttpClient, public router: Router) {
    this.carcarStorage();

  }

  createUsuario(usuario:Usuario){
    console.log(this.token);
    let url = `${URL_LANDING_DEV}usuario?token=${this.token}`
    return this.http.post(url, usuario)
  }

  getUsuarios() {
    let url = URL_LANDING_DEV
    return this.http.get(`${url}usuario`);
    }

  estaLogueado() {
    return this.token !== null ? true : false;
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
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}
