import { Injectable } from '@angular/core';

import { Message } from '../admin/mis-negocios/message';
import { MESSAGES } from '../admin/mis-negocios/mock-messages';
import { URL_LANDING_DEV } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebsocketService } from './websocket.service';

@Injectable()
export class NegociosService {

  constructor(public http: HttpClient, public router: Router, public wsService: WebsocketService) {

  }


  getLeads(id){
    let url = URL_LANDING_DEV
    return this.http.get(`${url}lead/${id}`);

  }

  sendLeadsWS(id?:string){
    const payload = {
      id:'5c38fe2eea1a921fcf8320f2'
    };
    this.wsService.emit('leads-por-comercial', payload, r => {
      // console.log(r);
    });
  }

  getLeadsWS(){
    return this.wsService.listen('respuesta-leads');
  }

}
