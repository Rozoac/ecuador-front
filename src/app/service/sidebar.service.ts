import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      url : 'dashboard'

    },
    {
      titulo: 'Comerciales',
      icono: 'mdi mdi-account-multiple',
      url : 'comerciales'

    },
    {
      titulo: 'Leads',
      icono: 'mdi mdi-file-document-box',
      url : 'lista'

    },
  ];

  menu2 = [
    {
      titulo: 'Referidos de Redes Sociales',
      icono: 'mdi mdi-account-multiple',
      url: 'redes-sociales'

    }
  ];

  constructor() { }

}
