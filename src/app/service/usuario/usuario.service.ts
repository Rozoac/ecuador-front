import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {
  public identity;
  public token = null;

  constructor(public http: HttpClient, public router: Router) {
    this.carcarStorage();

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
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    if (gettoken != null) {
      usuario.gettoken = 'true';
    }
    let json = JSON.stringify(usuario);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + 'login';

    return this.http.post(url, params, { headers: headers });
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
