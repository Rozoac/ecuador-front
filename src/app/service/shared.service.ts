import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable()
export class SharedService {

  constructor(public wsService: WebsocketService) { }

  getLeadsNuevosWS(){
    return this.wsService.listen('leads-nuevos');
  }

  

}
