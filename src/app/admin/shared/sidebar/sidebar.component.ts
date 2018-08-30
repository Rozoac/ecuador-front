import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SidebarService } from '../../../service/sidebar.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  datos;
  showMenu = "";
  showSubMenu = "";
  public sidebarnavItems: any[];

  constructor(public _sidebar: SidebarService, _usuario: UsuarioService) {
    let datos = _usuario.getIdentity();
    console.log(datos.email);

    if (datos.email === "admin@econtainerscolombia.com") {
      this.datos = _sidebar.menu;
    } else {
      this.datos = _sidebar.menu2;
    }
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = "0";
    } else {
      this.showSubMenu = element;
    }
  }

  ngOnInit() {}
}
