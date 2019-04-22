import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../config/config';

@Injectable()
export class GraficaService {
  leads: any;

  constructor(public http: HttpClient) {}

  getGrafica(fecha: any) {
    const url = URL_LANDING_DEV + 'lead/totalPorSegmento';

    return this.http.post(url , fecha).map((resp: any) => {
      this.leads = resp;
      return resp.total;
    });
  }

}
