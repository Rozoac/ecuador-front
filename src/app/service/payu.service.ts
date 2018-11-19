import { Injectable } from '@angular/core';
import { URL_PAYU , URL_LANDING_PRO } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayuService {

  constructor(public http: HttpClient) {}

  getComercio(body): Observable<any> {
    const url = `${URL_LANDING_PRO}/signature`;
    return this.http.post(url, body);
  }
}
