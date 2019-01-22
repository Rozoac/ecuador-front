import { Injectable } from '@angular/core';

import { Message } from '../admin/mis-negocios/message';
import { MESSAGES } from '../admin/mis-negocios/mock-messages';
import { URL_LANDING_DEV } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class NegociosService {

  constructor(public http: HttpClient, public router: Router) {

  }

  getMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }

  getLeads(id){
    let url = URL_LANDING_DEV
    return this.http.get(`${url}lead/${id}`);
  }

}
