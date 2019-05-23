import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  estadoMenu = false;

  constructor() { }

  ngOnInit() {
  }
  // color en el boton menu al pisar el hamburguer
  colorMenu( estado: boolean ) {
    const $hamburguesa = document.getElementById('text-1');
  if (estado) {
    $hamburguesa.classList.add('color-principal');
  } else {
    $hamburguesa.classList.remove('color-principal');
  }
  }



  abrirMenu() {
    this.estadoMenu = !this.estadoMenu;

    // tslint:disable-next-line:prefer-const
    let $svgs = document.querySelectorAll('svg');
    // tslint:disable-next-line:prefer-const
    const $logo = document.getElementById('logo');
    const $black = document.getElementById('black');
    const $texto_menu = document.getElementById('text-1');
    let $path = document.querySelectorAll('path');
    const $menu_secciones = document.getElementById('menu-secciones');
    const $menu = document.getElementById('menu-principal');
    const $sidebar = document.getElementById('side-bar-2');
    const $contenedor = document.getElementsByClassName('principal-side-bar');
    const $contenedor2 = document.getElementById('contenedor-principal');


    if (this.estadoMenu === true) {
      $menu.classList.add('fadeInLeft');
      $menu.classList.remove('fadeOutLeft');
        setTimeout(() => {
          $black.classList.remove('hide');
          $black.classList.add('fadeIn');
          $black.classList.remove('fadeOutLeft');

            $logo.classList.remove('color-blanco');
            $logo.classList.add('color-negro');
            $texto_menu.classList.add('color-negro');
            $texto_menu.classList.remove('color-blanco');
            for (let i = 0; i < $svgs.length; i++) {
              $svgs[i].classList.remove('color-blanco');
              $svgs[i].classList.add('color-negro');
            }
            for (let i = 0; i < $path.length; i++) {
              $path[i].classList.remove('color-blanco');
              $path[i].classList.add('color-negro');
            }
        }, 500 );
    } else {
      $black.classList.remove('fadeIn');
      // $black.classList.add('fadeOutLeft');
      $black.classList.add('hide');

      $menu.classList.remove('fadeIn');
      $menu.classList.remove('fadeOut');
      $menu.classList.add('fadeOutLeft');
      $logo.classList.remove('color-negro');
      $logo.classList.add('color-blanco');
      $texto_menu.classList.add('color-blanco');
      $texto_menu.classList.remove('color-negro');
      for (let i = 0; i < $svgs.length; i++) {
        $svgs[i].classList.remove('color-negro');
        $svgs[i].classList.add('color-blanco');
      }
      for (let i = 0; i < $path.length; i++) {
        $path[i].classList.remove('color-negro');
        $path[i].classList.add('color-blanco');
      }
    }
    // ABRIR O CERRAR MENU
    setTimeout(() => {
    $menu.classList.toggle('hide');
  }, (this.estadoMenu === true) ? 300 : 1000 );
    // INSERTAR MENU EN EL CONTENEDOR SECUNDARIO
    if ($contenedor[0].childNodes.length > 0) {
      setTimeout(() => {
        $sidebar.appendChild($menu_secciones);
        $sidebar.classList.add('bottom-especial');
      }, 700 );
    } else {setTimeout(() => {

      $contenedor2.appendChild($menu_secciones);
      $sidebar.classList.remove('bottom-especial');
    }, 300 );
    }
  }

}
