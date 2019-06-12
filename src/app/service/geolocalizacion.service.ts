import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor(
    public http: HttpClient
  ) { }

  // consultarPais() {
  //       return this.http.get('http://ip-api.com/json').pipe(
  //         map((res: any) => {
  //           localStorage.setItem('pais', res.country);
  //           return res.country;
  //         })
  //       );
  //     }

  //   getPais() {
  //     if (!localStorage.getItem('pais')) {
  //       return null;
  //     } else {
  //       return localStorage.getItem('pais');
  //     }
  //   }


  }



