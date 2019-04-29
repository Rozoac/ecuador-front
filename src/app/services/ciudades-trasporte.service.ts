import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadesTrasporteService {

  constructor(private http: HttpClient) { }

  getCiudades() {
    const url = 'http://econtainers.herokuapp.com/ciudadTransporte';
    return this.http.get( url );
  }

  getTransporte() {
    const url = 'http://econtainers.herokuapp.com/tipoTransporte';
    return this.http.get(url);
  }

  



}


