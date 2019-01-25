import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message';
import { NegociosService } from '../../service/negocios.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LeadService } from '../../service/lead/lead.service';

@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.scss']
})
export class MisNegociosComponent implements OnInit, OnDestroy {
  closeResult: string;
  messages;
  selectedMessage: Message;
  messageOpen = false;
  usuario
  mensajesSuscription: Subscription;
  constructor(public _leadService: LeadService, private negociosService: NegociosService, private modalService: NgbModal, public _usuarioService: UsuarioService) { 
    this.usuario = _usuarioService.getIdentity().usuario._id;
  }

  ngOnInit() {
    this.getLeads();
    this.getLeadsWS();
    this.negociosService.sendLeadsWS();
  }

  ngOnDestroy(){
    this.mensajesSuscription.unsubscribe();
  }

  // getMessages(): void {
  //   this.negociosService.getMessages().then(messages => {
  //     this.messages = messages;
  //     this.selectedMessage = this.messages[1];
  //   });
  // }

  getLeads() {
    this.negociosService.getLeads(this.usuario).subscribe((res:any)=> {
      this.messages = res.leads;
      this.messages.reverse();
      console.log(this.messages);
      // this.selectedMessage = this.messages[1];
    });
  }

  
   getLeadsWS(){
    this.mensajesSuscription = this.negociosService.getLeadsWS().subscribe( (resp:any) => {
      console.log(resp);
      if(resp.id_usuario == this._usuarioService.getIdentity().id)
      this.messages.unshift(resp);
    })
  }

  onSelect(message, id): void {
    if (message.id_semaforo.color !== 'warning'){
      this._leadService.actualizarUsuario(id).subscribe((res:any)=> {
        console.log(res);
        this.messages.map((dato) => {
          if(dato._id === res.lead._id){
            dato.id_semaforo.color = 'warning';
            dato.id_semaforo.estado = 'Naranja';
          }
        });
      });
    }
    this.selectedMessage = message;
    console.log(this.selectedMessage);
  }

  // This is for the email compose
  open2(content) {
    
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public imagenSegmento(nombre:any){
    if(nombre === 'Contenedores Oficinas'){
      return 'assets/css/backend/images/users/user-4.jpg';
    }
    if(nombre === 'Contenedores Maritimos'){
      return 'assets/css/backend/images/users/user-2.jpg';
    }
    if(nombre === 'Contenedores Refrigerados'){
      return 'assets/css/backend/images/users/user.jpg';
    }
    console.log(nombre);
  }

  public whatsapp(numero){
    window.open(`https://api.whatsapp.com/send?phone=${numero}`, '_blank'); 
  }
  public gmail(correo){
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=Contacto Comercial&tf=1`, '_blank'); 
  }

}
