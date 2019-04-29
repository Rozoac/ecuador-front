import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../service/sidebar.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  datos;
  usuario;
  showMenu = "";
  showSubMenu = "";
  public sidebarnavItems: any[];

  constructor(public _sidebar: SidebarService, _usuario: UsuarioService) {
    this.usuario = _usuario.getIdentity();
    console.log(this.datos);
      this.datos = _sidebar.generarMenu();
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

  fotoPrincipal() {
    let foto:string;
    foto = (this.usuario.usuario.imagen) ?  this.usuario.usuario.imagen : 'assets/imgs/images/no-image.png';
    return foto;
    }

  ngOnInit() {}
}
