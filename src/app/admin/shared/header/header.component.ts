import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../../admin.component.css"]
})
export class HeaderComponent implements OnInit {
  public datos;
  @Output() toggleSidebar = new EventEmitter<void>();
  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    public _usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {
    let datos = _usuarioService.getIdentity();
    this.datos = datos;
    console.log(this.datos);
  }
  public showSearch = false;

  fotoPrincipal() {
    let foto:string;
    foto = (this.datos.usuario.imagen) ?  this.datos.usuario.imagen : 'assets/imgs/images/no-image.png';
    return foto;
    }

  ngOnInit() {}
}
