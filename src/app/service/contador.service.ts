import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContadorService {

  constructor(public http: HttpClient) { }


  contador() {
    const url = URL_SERVICIOS + `contador`;
    return this.http.get(url);
  }

}

