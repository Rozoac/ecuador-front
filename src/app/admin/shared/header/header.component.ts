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
    const role = JSON.parse(localStorage.getItem("identity"));
    let foto;
    if (role.email === "admin@econtainerscolombia.com") {
      foto = "assets/css/backend/images/users/vila.png";
    }
    if (role.email === "aberdugo@econtainerscolombia.com") {
      foto = "assets/css/backend/images/users/alejandra.png";
    }

    return foto;
  }

  ngOnInit() {}
}
