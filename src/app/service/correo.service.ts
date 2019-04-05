import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../config/config';
import { TipoCliente } from '../models/tipoCliente.model';

export interface IMessage {
  nombre?: string;
  apellido?: string;
  celular?: string;
  correo?: string;
  id_ciudad?: string;
  documento?: Documento;
  tipo_cliente?: TipoCliente;
  modalidad?: string;
  id_segmento?: string;
  id_pais?: string;
  mensaje?: string;
  fuente?: string;
  celular2?: string;
  referido?: string;
  referido2?: number;
}

export interface Documento {
  tipo_documento: string;
  numero: string;
}
export interface Ciudad {
  _id: string;
  nombre: string;
  pais: Pais;
}

export interface Pais {
  _id: string;
  nombre: string;
}


export interface IMessageR {
  name?: string;
  ciudad?: any;
  celular?: string;
  email?: string;
  tipo?: string;
  para?: string;
  cliente?: string;
  message?: string;
}
export interface IMessageP {
  asunto?: string;
  nombre?: any;
  telefono?: string;
  tipo?: string;
  id?: string;
  correo?: string;
  motivo?: string;
  alquileroventa?: string;
  producto?: string;
}
export interface IMessageT {
  nombre?: string;
  celular?: any;
  correo?: string;
  cargo?: string;
  archivo?: any;
}

@Injectable()
export class CorreoService {
  private emailUrl = 'assets/email.php';
  private emailUrlRedes = 'assets/emailRedes.php';
  private emailUrlPQRS = 'assets/emailPQRS.php';
  private emailUrlT = 'assets/emailT.php';

  constructor(private http: HttpClient) {}

  sendEmail(message: IMessage) {
    const url = URL_LANDING_DEV + 'cliente';
    return this.http.post(url, message);
  }


  // REDES
  sendEmailRedes(message: IMessageR): Observable<IMessage> | any {
    return this.http.post(this.emailUrlRedes, message).pipe(
      map(response => {
        console.log('Sending email was successfull', response);
        return response;
      }),
      catchError(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      })
    );
  }

  // PQRS
  sendEmailPQRS(message: IMessageP): Observable<IMessage> | any {
    return this.http.post(this.emailUrlPQRS, message).pipe(
      map(response => {
        console.log('Sending email was successfull', response);
        return response;
      }),
      catchError(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      })
    );
  }

  // Trabaja con nosotros
  sendEmailT(message: IMessageT): Observable<IMessage> | any {
    return this.http.post(this.emailUrlT, message).pipe(
      map(response => {
        console.log('Sending email was successfull', response);
        return response;
      }),
      catchError(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      })
    );
  }
}
