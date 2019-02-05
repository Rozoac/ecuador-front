import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { LeadService } from '../../../service/lead/lead.service';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedService } from '../../../service/shared.service';
import { Subscription } from 'rxjs';
import { InboxService } from '../../../service/inbox.service';
import { Howl } from 'howler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../admin.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public datos;
  @Output() toggleSidebar = new EventEmitter<void>();
  public config: PerfectScrollbarConfigInterface = {};
  public leads;
  public total;
  public leadsSuscription: Subscription;
  public leadsNuevoSuscription: Subscription;
  public sound = new Howl({
    src: ['../../../../assets/sounds/sonido2.wav']
  });

  constructor(
    public _usuarioService: UsuarioService,
    public _leadService: LeadService,
    private modalService: NgbModal,
    public _sharedService: SharedService,
    public negociosService: InboxService,
    public router: Router
  ) {
    const datos = _usuarioService.getIdentity();
    this.datos = datos;
    console.log(this.datos);
    this.getLeadsNuevos();
  }
  public showSearch = false;

  ngOnInit() {
    this.getLeadsNuevosWS();
    this.getLeadsRecientesWS();
    console.log(this.leads);
  }

  ngOnDestroy() {
    this.leadsSuscription.unsubscribe();
    this.leadsNuevoSuscription.unsubscribe();
  }

  fotoPrincipal() {
    let foto: string;
    foto = (this.datos.usuario.imagen) ?  this.datos.usuario.imagen : 'assets/imgs/images/no-image.png';
    return foto;
    }

    getLeadsNuevos() {
      this._leadService.getLeadsNuevos(this.datos.id).subscribe((res:any)=> {
        console.log(res);
        this.leads = res.leads;
        this.leads.reverse();
        this.total = res.total;
      });
    }
    // lead borrado, responde el socket y aca se borra en el array
    getLeadsNuevosWS() {
      this.leadsSuscription = this._sharedService.getLeadsNuevosWS().subscribe( (res:any) => {
        if (this.leads.length === 1 ) {
          const ayuda = this.leads.splice(0, 1);
          this.total = this.leads.length;
          return ;
        }
        const indice = this.leads.findIndex(busqueda => busqueda._id === res._id);
        if (indice === 0) {
          this.leads.splice(0, 1);
          this.total = this.leads.length;
          return;
        }
        const ayuda2 = this.leads.splice(indice, indice);
        this.total = this.leads.length;
      });
    }

    mensaje(posicion) {
      const indice = this.leads.findIndex(busqueda => busqueda._id === posicion);
      sessionStorage.setItem('posicion-inbox', indice);
      this.router.navigate(['/admin/inbox']);
    }

    getLeadsRecientesWS() {
      this.leadsNuevoSuscription = this.negociosService.getLeadsWS().subscribe( (resp:any) => {
        if (resp.id_usuario._id === this._usuarioService.getIdentity().id){
          this.leads.unshift(resp);
          this.sound.play();
          this.total = this.leads.length;
        }
      });
    }

    playAudio() {
      const audio = new Audio();
      audio.src = '../../../../assets/sounds/sonido.mp4a';
      audio.load();
      audio.play();
    }
}
