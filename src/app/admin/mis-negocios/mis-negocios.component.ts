import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from './message';
import { NegociosService } from '../../service/negocios.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
UsuarioService

@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.scss']
})
export class MisNegociosComponent implements OnInit {
  closeResult: string;
  messages;
  selectedMessage: Message;
  messageOpen = false;
  usuario
  constructor(private negociosService: NegociosService, private modalService: NgbModal, public _usuarioService: UsuarioService) { 
    this.usuario = _usuarioService.getIdentity().usuario._id;
  }

  ngOnInit() {
    this.getLeads();
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
      console.log(this.messages);
      this.selectedMessage = this.messages[1];
    });
  }

  onSelect(message): void {
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
    console.log(nombre);
  }

}
