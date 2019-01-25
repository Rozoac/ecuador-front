import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../config/config';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';


@Injectable()
export class LeadService {
  public identity
  public token = null;
  

  constructor(public http: HttpClient, public router: Router) {

  }
  actualizarUsuario(id) {
    let url = `${URL_LANDING_DEV}lead/${id}`
    return this.http.put(url, id);
  }
}
