import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { URL_SERVICIOS } from "../config/config";

export interface IMessage {
  name?: string;
  ciudad?: any;
  celular?: string;
  celular2?: string;
  email?: string;
  tipo?: string;
  empresa?: string;
  para?: string;
  cliente?: string;
  message?: string;
  referido?: string;
  referido2?: number;
  cedula?: number;
  nit?: number;
  halloween?: string;
  tipo_estandar?: string;
  tipo_casa?: string;
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
  private emailUrl = "assets/email.php";
  private emailUrlRedes = "assets/emailRedes.php";
  private emailUrlPQRS = "assets/emailPQRS.php";
  private emailUrlT = "assets/emailT.php";

  constructor(private http: HttpClient) {}
  // CONTACTANOS
  // sendEmail(message: IMessage): Observable<IMessage> | any {
  //   console.log(message);
  //   return this.http.post(this.emailUrl, message).pipe(
  //     map(response => {
  //       console.log("Sending email was successfull", response);
  //       return response;
  //     }),
  //     catchError(error => {
  //       console.log("Sending email got error", error);
  //       return Observable.throw(error);
  //     })
  //   );
  // }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    let json = JSON.stringify(message);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const url = URL_SERVICIOS + 'crearLead';
    return this.http.post(url, params, { headers });
  }


  // REDES
  sendEmailRedes(message: IMessageR): Observable<IMessage> | any {
    return this.http.post(this.emailUrlRedes, message).pipe(
      map(response => {
        console.log("Sending email was successfull", response);
        return response;
      }),
      catchError(error => {
        console.log("Sending email got error", error);
        return Observable.throw(error);
      })
    );
  }

  // PQRS
  sendEmailPQRS(message: IMessageP): Observable<IMessage> | any {
    return this.http.post(this.emailUrlPQRS, message).pipe(
      map(response => {
        console.log("Sending email was successfull", response);
        return response;
      }),
      catchError(error => {
        console.log("Sending email got error", error);
        return Observable.throw(error);
      })
    );
  }

  // Trabaja con nosotros
  sendEmailT(message: IMessageT): Observable<IMessage> | any {
    return this.http.post(this.emailUrlT, message).pipe(
      map(response => {
        console.log("Sending email was successfull", response);
        return response;
      }),
      catchError(error => {
        console.log("Sending email got error", error);
        return Observable.throw(error);
      })
    );
  }
}
