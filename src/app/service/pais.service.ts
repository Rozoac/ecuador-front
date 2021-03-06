import { Injectable } from '@angular/core';
import { Rol } from '../models/rol.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_LANDING_DEV } from '../config/config';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class PaisService {

  constructor(public http: HttpClient, public router: Router) {
  }

  getPais(){
    let url = `${URL_LANDING_DEV}pais`
    
    return this.http.get(url);
  }

  getCiudades(id){
    let url = `${URL_LANDING_DEV}ciudad/${id}`
    return this.http.get(url).pipe(
      map( (res:any) =>{
        return res.ciudades
      })
    );
  }
  
}
