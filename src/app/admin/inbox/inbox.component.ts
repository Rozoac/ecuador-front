import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { InboxService } from '../../service/inbox.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Subscription } from 'rxjs';
import { LeadService } from '../../service/lead/lead.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit, OnDestroy {
  public messages;
  public rol;
  myForm: FormGroup;
  private usuario;
  public usuarios: any[] = [];
  private comerciales;
  public selectedMessage: any;
  private mensajesSuscription: Subscription;
  redireccion = {
    id_lead: '',
    id_nuevo: '',
  };

  constructor(
    public fb: FormBuilder,
    public _leadService: LeadService, private negociosService: InboxService, private modalService: NgbModal,
    public _usuarioService: UsuarioService, public router: Router) {
      this.myForm = this.fb.group({
          comercial: ['', Validators.required]
      });

    this.usuario = _usuarioService.getIdentity().usuario._id;
    if (_usuarioService.getIdentity().usuario.id_rol.nombre === 'ADMIN'
        //  || _usuarioService.getIdentity().usuario.id_rol.nombre === 'SHIPPIN LINE ADMIN '
         || _usuarioService.getIdentity().usuario.id_rol.nombre === '24-7 ADMIN') {
      this.rol = true;
    }
    console.log(this.rol);
  }

  ngOnInit() {
    this.getLeads();
    this.getLeadsWS();
    this.negociosService.sendLeadsWS();
    this.getComerciales();
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

  public getComerciales() {
    this._usuarioService.getUsuarios().subscribe( (res: any) => {
      for (const iterator of res.usuarios) {
        if (this._usuarioService.getIdentity().usuario.id_rol.nombre === 'ADMIN') {
          if (iterator.estado === 'ACTIVO' && iterator.id_rol.nombre === 'COMERCIAL') {
            console.log('entro comercial');
            this.usuarios.push(iterator);
          }
        } else if (this._usuarioService.getIdentity().usuario.id_rol.nombre ===  '24-7 ADMIN') {
          console.log('entro');
          if (iterator.estado === 'ACTIVO' && iterator.id_rol.nombre === 'COMERCIAL 24-7') {
            console.log('entro comercial');
            this.usuarios.push(iterator);
            return;
          }
        }
      }
    });
  }

  public whatsapp(numero) {
    window.open(`https://api.whatsapp.com/send?phone=${numero}`, '_blank');
  }

  public gmail(correo) {
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=Contacto Comercial&tf=1`, '_blank');
  }

  public reasignarLead(form) {
    this.redireccion = {
      id_lead : this.selectedMessage._id,
      id_nuevo :  form.comercial._id
    };
    this._leadService.redireccionLead(this.redireccion).subscribe( (res: any) => {
      swal({
        type: 'success',
        title: `Lead redireccionado con exito :) `,
        showConfirmButton: false,
        timer: 2000
      });
      this.getLeads();
      });
  }

}
