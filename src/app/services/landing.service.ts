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
    const url = 'https://public-api.wordpress.com/rest/v1.1/sites/noticias.econtainerscolombia.com/posts?number=3'
    return this.http.get(url);
  }

    getPostInstagram() {
    // tslint:disable-next-line:max-line-length
    const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=1700981807.1677ed0.47d58bc3e86d40eabd905eed1925210e&callback=JSONP_CALLBACK';
    return this.http.jsonp(url, '');
 }
}

