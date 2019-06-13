import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socketStatus:boolean = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus(){

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () =>{
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit( evento:string, payload?: any, callback?: Function ) {
    this.socket.emit(evento, payload, callback);
  }

  listen( evento:string){
    return this.socket.fromEvent(evento);
  }

  leadsWS(id: string){
    this.emit('leads-por-comercial', { id: '5c38fe2eea1a921fcf8320f2' }, resp => {
      console.log(resp);
    });
  }
}
