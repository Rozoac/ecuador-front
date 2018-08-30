import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jQuery: any;
declare var $: any;



@Component({
  selector: 'pages-root',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(private router: Router) {}

  overh3(div: string) {
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
    let ruta: string = `.${div}`

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






  ngOnInit() {
  this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo( 0, 0 );
        });


    // scroll
    $('#nav-icon3').click(function() {
      $(this).toggleClass('open');
      document.querySelector(".main-container").classList.toggle("open");
    });
    $('.cerrar').click(function() {
      $('#nav-icon3').toggleClass('open');
      document.querySelector(".main-container").classList.toggle("open");
    });



  }
}
