import { Injectable } from "@angular/core";
import { Lead } from "../../models/lead.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";
import { Comercial } from "../../models/comercial.model";
import "rxjs/Rx";
import { Observable } from "rxjs/Rx";
import { Fechas } from "../../models/fechas.model";

@Injectable()
export class LeadService {
  constructor(public http: HttpClient) {}

  leads: any;

  getLeads(
    pagina: number = 1,
    segmento: string = "",
    fecha?: Fechas,
    comercial: string = "",
    pdf: string = ""
  ) {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Segmento", segmento)
      .set("Comercial", comercial)
      .set('Archivo', pdf)
      .set('Fecha', JSON.stringify(fecha));

    const url = URL_SERVICIOS + `leads?page=${pagina}`;
    const urlPDF = URL_SERVICIOS + `leads`;
    if (pdf === 'true') {
      return this.http.get(urlPDF, { responseType: 'blob', headers });
    } else {
      return this.http.get(url, { headers: headers });    }

  }
  getLeadsPDF(
    fecha?: Fechas,
  ) {
    const json = JSON.stringify(fecha);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const params = 'json=' + json;

    const url = URL_SERVICIOS + `pdf`;
    
      return this.http.post(url,params ,{ responseType: 'blob', headers });

  }

  borrarLead(id){
      const url = `https://api.econtainerscolombia.com/public/api/leads/${id}`;
      return this.http.delete(url);
  }

  getReferidosPDF(){
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const url = URL_SERVICIOS + `pdfReferidos`;

    return this.http.get(url, { responseType: 'blob', headers });
  }

  getComercial(fecha: any, pagina: any, pdf: string) {
    const json = JSON.stringify(fecha);
    console.log(json);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + `leadFecha?page=${pagina}`;

    if (pdf === 'true') {
      return this.http.post(url, params, { responseType: 'blob', headers });
    } else {
      return this.http.post(url, params, { headers });
    }
  }

  buscarLeadFecha(termino: string, comercial: Comercial) {
    let json = JSON.stringify(comercial);
    console.log(json);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    const url = URL_SERVICIOS + `busquedaFecha/${termino}`;
    return this.http.post(url, params, { headers });
  }

  buscarLeads(termino: string) {
    const url = URL_SERVICIOS + `busqueda/${termino}`;
    return this.http.get(url).map((resp: any) => resp.leads);
  }
  buscarLead(id: string) {
    const url = URL_SERVICIOS + `leads/${id}`;
    return this.http.get(url).map((resp: any) => resp.lead);
  }

  segmentos() {
    const url = URL_SERVICIOS + `cantidadSegmento`;
    return this.http.get(url);
  }

  getLeadsComercial(fecha: any) {
    let json = JSON.stringify(fecha);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + 'leadFechaC';

    return this.http.post(url, params, { headers }).map(resp => {
      this.leads = resp;
      return resp;
    });
  }

  getLeadsComercialActual() {
    const url = URL_SERVICIOS + 'leadFechaCA';
    return this.http.get(url);
  }
  // ultimos 30 dias
  getLeadsComercialMes() {
    const url = URL_SERVICIOS + 'leadFechaCT';
    return this.http.get(url);
  }


  getReferidos() {
    const url = URL_SERVICIOS + 'referidos';
    return this.http.get(url);
  }
  
  ultimo(){
    const url = URL_SERVICIOS + 'ultimo';
    return this.http.get(url);
  }
}
