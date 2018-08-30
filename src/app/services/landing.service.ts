import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LandingService {
  constructor(public http: HttpClient) {}

  getContenedores(){
    const url = "https://econtainers-landing.herokuapp.com/contenedor";
   return this.http.get(url);
  }
}

