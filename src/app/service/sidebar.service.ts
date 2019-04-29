import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Injectable()
export class SidebarService {

  public menu;

  constructor( public _usuarioService:UsuarioService ){
    this.generarMenu();
  }

  generarMenu() {
    this.menu = this._usuarioService.getIdentity().usuario.id_rol.menu;
    return this.menu;
  }



  // menu = [
  //   {
  //     titulo: 'Leads',
  //     icono: 'mdi mdi-gauge',
  //     url : 'dashboard'

  //   },
  //   {
  //     titulo: 'Comerciales',
  //     icono: 'mdi mdi-account-multiple',
  //     url : 'comerciales'

  //   },
  //   {
  //     titulo: 'Leads',
  //     icono: 'mdi mdi-file-document-box',
  //     url : 'lista'

  //   },
  //   {
  //     titulo: 'Encuestas',
  //     icono: 'mdi mdi-image-filter-none',
  //     url : 'encuestas'

  //   },
  // ];

  menu2 = [
    {
      titulo: 'Referidos de Redes Sociales',
      icono: 'mdi mdi-account-multiple',
      url: 'redes-sociales'

    }
  ];


}
