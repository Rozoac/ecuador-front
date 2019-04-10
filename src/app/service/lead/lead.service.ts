import { Injectable } from '@angular/core';
import { Lead } from '../../models/lead.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../../config/config';
import { Comercial } from '../../models/comercial.model';
import 'rxjs/Rx';
import { Observable,  } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Fechas } from '../../models/fechas.model';


@Injectable()
export class LeadService {
  constructor(public http: HttpClient) {}

  leads: any;
  getLeads(
    pagina: number = 1,
    segmento: string = '',
    fecha?: Fechas,
    comercial: string = '',
    pdf: string = ''
  ) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Segmento', segmento)
      .set('Comercial', comercial)
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
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const params = 'json=' + json;

    const url = URL_SERVICIOS + `pdf`;
      return this.http.post(url, params , { responseType: 'blob', headers });

  }



  getReferidosPDF() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const url = URL_SERVICIOS + `pdfReferidos`;

    return this.http.get(url, { responseType: 'blob', headers });
  }

  getComercial(fecha: any, pagina: any, pdf: string) {
    const url = URL_LANDING_DEV + `lead/unico/personalizada`;
    if (pdf === 'true') {
      // return this.http.post(url, params, { responseType: 'blob', headers });
    } else {
      return this.http.post(url, fecha, ).pipe(
        map((res: any) => res.usuario)
      );
    }
  }

  buscarLeadFecha(termino: string, comercial: Comercial) {
    console.log(termino);
    console.log(comercial);

    const url = URL_LANDING_DEV  + `cliente/busqueda/${termino}`;
    return this.http.post(url, comercial);
  }

  buscarLeads(termino: string) {
    const url = URL_SERVICIOS + `busqueda/${termino}`;
    return this.http.get(url).map((resp: any) => resp.leads);
  }

  getTipoMensaje() {
    const url = URL_LANDING_DEV  + `tipoMensaje`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.tiposMensajes;
      })
    );
  }
  buscarLead(id: string) {
    const url = URL_LANDING_DEV + `cliente/${id}`;
    return this.http.get(url).map((resp: any) => resp.cliente);
  }


  segmentos() {
    const url = URL_LANDING_DEV + 'lead/todos/personalizada';
    return this.http.get(url);
  }

  getLeadsComercial(fecha: any) {

    const url = URL_LANDING_DEV + 'lead/todos/personalizada';

    return this.http.post(url, fecha);
  }

  getLeadsComercialActual() {
    const url = URL_LANDING_DEV + 'lead/todos/dia';
    return this.http.get(url);
  }
  // ultimos 30 dias
  getLeadsComercialMes() {
    const url = URL_LANDING_DEV + 'lead/todos/mes';
    return this.http.get(url);
  }


  getReferidos() {
    const url = URL_LANDING_DEV + 'cliente/redes/sociales';
    return this.http.get(url);
  }
  ultimo() {
    const url = URL_SERVICIOS + 'ultimo';
    return this.http.get(url);
  }

  enviarLead(mensaje) {
    const json = JSON.stringify(mensaje);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + 'crearLead';

    return this.http.post(url, params, { headers });
  }

  actualizarUsuario(id, estado) {
    const url = `${URL_LANDING_DEV}lead/${id}/${estado}`;
    return this.http.put(url, id);
  }

    getLeadsNuevos(id) {
    const url = `${URL_LANDING_DEV}lead/nuevo/${id}`;
    return this.http.get(url, id);
  }
    getLeadsVerdes(id) {
    const url = `${URL_LANDING_DEV}lead/verde/${id}`;
    return this.http.get(url, id);
  }
    getLeadsVerdes2(id) {
    const url = `${URL_LANDING_DEV}lead/verdeDos/${id}`;
    return this.http.get(url, id);
  }
    getLeadsVerdes3(id) {
    const url = `${URL_LANDING_DEV}lead/verdeTres/${id}`;
    return this.http.get(url, id);
  }
    getLeadsVerdes4(id) {
    const url = `${URL_LANDING_DEV}lead/verdeCuatro/${id}`;
    return this.http.get(url, id);
  }

  getLead(id: string) {
    const url = URL_LANDING_DEV + `lead/unico/${id}`;
    return this.http.get(url);
  }
  getLeadPorCliente(id: string) {
    const url = URL_LANDING_DEV + `lead/cliente/${id}`;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.cliente[0];
      })
    );
  }

  agregarMensaje(id, lead) {
    console.log(id);
      const url = URL_LANDING_DEV + `lead/mensaje/${id}`;
      return this.http.put(url, lead);
  }

  agregarTipoMensaje(mensaje, id) {
      const url = URL_LANDING_DEV + `lead/tipoMensaje/${id}`;
      return this.http.put(url, mensaje );
  }

  borrarLead(id){
    const url = URL_LANDING_DEV + `lead/${id}`;
    return this.http.delete(url);
  }

  getSegmentos() {
    const url = URL_LANDING_DEV + `segmento/`;
    return this.http.get(url);
  }
  getTiposDeCliente() {
    const url = URL_LANDING_DEV + `tipocliente/`;
    return this.http.get(url);
  }

  getCausales() {
    const url = URL_LANDING_DEV + `causal/`;
    return this.http.get(url).pipe(
      map( (res: any) => {
        return res.causal;
      })
    );
  }

  agregarCausal(mensaje, id) {
    const url = URL_LANDING_DEV + `lead/rechazo/${id}`;
    return this.http.put(url, mensaje );
}

}
