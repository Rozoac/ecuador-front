import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GeolocalizacionService } from '../service/geolocalizacion.service';

declare var jQuery: any;
declare var $: any;



@Component({
  selector: 'pages-root',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public banderas: Array<string> = ['Colombia', 'Ecuador'];
  public pais: string;

  constructor(private router: Router, public geo: GeolocalizacionService, private zone: NgZone) {
    // this.geoPais();
  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
}

  // geoPais() {
  //   if (this.geo.getPais() === null) {
  //     this.geo.consultarPais().subscribe( (pais: any) => {
  //       this.pais = pais;
  //     });
  //   } else {
  //     this.pais = this.geo.getPais();
  //    }
  // }

  overh3(div: string) {
    const ruta = `.${div}`;

    $('.menu-' + div).css(
      {
        'background': 'url("/assets/imgs/menu/' + div + '.jpg")',
        'opacity': '1',
        'backgroundSize': 'cover',
      });
    $('h3').parents(ruta).css(
      {
        'color': 'white'
      });

  }
  leaveh3(div: string) {
    let ruta: string = `.${div}`

    $('.menu-' + div).css(
      {
        'opacity': '0',
      });
    $('h3').parents(ruta).css(
      {
        'color': 'black',

      });
  }
  overdiv(div: string) {
    let ruta: string = `.${div}`

    $('.menu-' + div).css(
      {
        'background': 'url("/assets/imgs/menu/' + div + '.jpg")',
        'opacity': '1',
        'backgroundSize': 'cover',
      });
    $('h3').parents(ruta).css(
      {
        'color': 'white'
      });

  }
  leavediv(div: string) {
    const ruta = `.${div}`

    $('.menu-' + div).css(
      {
        'background': 'url("/assets/imgs/menu/' + div + '.jpg")',
        'opacity': '0',
        'backgroundSize': 'cover',
      });
    $('h3').parents(ruta).css(
      {
        'color': 'black'

      });
  }

  cerrarModal() {
    document.getElementById('modal').setAttribute('class', 'hide');
  }

  // cambiarPais(pais) {
  //   localStorage.setItem('pais', pais);
  //   this.reloadPage();
    // this.geoPais();
  // }

  ngOnInit() {

    setTimeout(function() {
      $('#modal').removeClass('hide');
    }, 2000);


  this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo( 0, 0 );
        });

    // scroll
    $('#nav-icon3').click(function() {
      $(this).toggleClass('open');
      document.querySelector('.main-container').classList.toggle('open');
    });
    $('.cerrar').click(function() {
      $('#nav-icon3').toggleClass('open');
      document.querySelector('.main-container').classList.toggle('open');
    });



  }
}
