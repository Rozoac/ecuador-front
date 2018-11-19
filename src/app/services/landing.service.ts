import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_LANDING_DEV, URL_LANDING_PRO } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  constructor(public http: HttpClient) {}

  getContenedores() {
    const url = `${URL_LANDING_PRO}/contenedor`;
   return this.http.get(url);
  }
  getContenedor(id: any) {
    const url = `${URL_LANDING_PRO}/contenedor/${id}`;
    console.log(url);
   return this.http.get(url);
  }

  getPostBlog() {
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/blog.econtainerscolombia.com/posts?number=3'
    return this.http.get(url);
  }
}

