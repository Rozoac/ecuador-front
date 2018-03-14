import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string ,
  ciudad?: any,
  celular?: string,
  email?: string,
  tipo?: string,
  para?: string,
  message?: string
}
export interface IMessageP {
  asunto?: string ,
  nombre?: any,
  telefono?: string,
  tipo?: string,
  id?: string,
  correo?: string,
  motivo?: string
}
export interface IMessageT {
  nombre?: string ,
  celular?: any,
  correo?: string,
  cargo?: string
  archivo?: any
}

@Injectable()
export class CorreoService {
  private emailUrl = 'assets/email.php';
  private emailUrlPQRS = 'assets/emailPQRS.php';
  private emailUrlT = 'assets/emailT.php';

  constructor(private http: Http) {
  }
// CONTACTANOS
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }

  // PQRS
  sendEmailPQRS(message: IMessageP): Observable<IMessage> | any {
    return this.http.post(this.emailUrlPQRS, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }

  // Trabaja con nosotros
  sendEmailT(message: IMessageT): Observable<IMessage> | any {
    return this.http.post(this.emailUrlT, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}
