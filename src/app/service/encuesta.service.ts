import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Encuesta } from '../models/encuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor( public http: HttpClient) { }

  guardar(encuesta:Encuesta){

    let url = `https://econtainers.herokuapp.com/encuesta`

    return this.http.post(url, encuesta);
  }
  busqueda(termino){
    let params = 'json=' + termino;
    let headers = new HttpHeaders().set(
    'Content-Type',
     'application/x-www-form-urlencoded'
    );
    let url = `${URL_SERVICIOS}busqueda-email`

    return this.http.post(url, params, { headers: headers });
  }

  mostrar(){
    let url = `https://econtainers.herokuapp.com/encuesta`
    return this.http.get(url);
  }
}

