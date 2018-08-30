import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class GraficaService {
  constructor(public http: HttpClient) {}

  leads: any;

  getGrafica(fecha: any) {
    const json = JSON.stringify(fecha);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + 'cantidadSegmento';

    return this.http.post(url, params, { headers }).map(resp => {
      this.leads = resp;
      return resp;
    });
  }
}
