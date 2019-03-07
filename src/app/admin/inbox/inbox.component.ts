import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { InboxService } from '../../service/inbox.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Subscription } from 'rxjs';
import { LeadService } from '../../service/lead/lead.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit, OnDestroy {
  public messages;
  private usuario;
  public selectedMessage: any;
  private mensajesSuscription: Subscription;

  constructor(
    public _leadService: LeadService, private negociosService: InboxService, private modalService: NgbModal,
    public _usuarioService: UsuarioService, public router: Router) {
    this.usuario = _usuarioService.getIdentity().usuario._id;
  }

  ngOnInit() {
    this.getLeads();
    this.getLeadsWS();
    this.negociosService.sendLeadsWS();

  }

  ngOnDestroy() {
    this.mensajesSuscription.unsubscribe();
  }

  public getLeads() {
    this.negociosService.getLeads(this.usuario).subscribe((res: any ) => {
      this.messages = res.leads;
      this.messages.reverse();
      this.selectedMessage = this.messages[sessionStorage.getItem('posicion-inbox')] || '';
    });
  }
   public getLeadsWS() {
    this.mensajesSuscription = this.negociosService.getLeadsWS().subscribe( (resp: any) => {
      if (resp.id_usuario._id === this._usuarioService.getIdentity().id) {
        this.messages.unshift(resp);
      }
    });
  }

  public onSelect(message, id, estado): void {
    if (estado === 'warning') {
      if (message.id_semaforo.color === 'danger' && message.id_semaforo.color !== 'success') {
        this._leadService.actualizarUsuario(id, '5c4b576af1848a00177ab14a').subscribe((res: any ) => {
          this.messages.map((dato) => {
            if (dato._id === res.lead._id) {
              dato.id_semaforo.color = 'warning';
              dato.id_semaforo.estado = 'Naranja';
            }
          });
        });
      }
    }
    if (estado === 'success') {
      if (message.id_semaforo.color === 'success') {
        this.router.navigate([`admin/negocio/${id}`]);
      } else {
        this._leadService.actualizarUsuario(id, '5c4b5757f1848a00177ab149').subscribe((res: any) => {
          this.messages.map((dato) => {
            if (dato._id === res.lead._id) {
              dato.id_semaforo.color = 'success';
              dato.id_semaforo.estado = 'Verde';
              this.router.navigate([`admin/negocio/${id}`]);
            }
          });
        });
      }
    }
    this.selectedMessage = message;
  }

  public whatsapp(numero) {
    window.open(`https://api.whatsapp.com/send?phone=${numero}`, '_blank');
  }

  public gmail(correo) {
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=Contacto Comercial&tf=1`, '_blank');
  }

}
