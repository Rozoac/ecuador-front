import { Injectable } from '@angular/core';
import { Rol } from '../models/rol.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../config/config';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class RolService {

  constructor(public http: HttpClient, public router: Router) {

  }

  getRoles(){
    let url = `${URL_LANDING_DEV}rol`
    return this.http.get(url);
  }
  
}
