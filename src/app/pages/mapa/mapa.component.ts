import { Component, OnInit } from '@angular/core';
import { ZoomControlOptions } from '@agm/core/services/google-maps-types';
declare var $: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  pais;
  title: string = 'My first AGM project';
  latCali: number = 3.4382475;
  lngCali: number = -76.5304554;
  latCartagena: number = 10.3522594;
  lngCartagena: number = -75.4923761;
  latBogota: number = 4.694814;
  lngBogota: number = -74.063321;
  latManizales: number = 5.068235;
  lngManizales: number = -75.518285;
  latMedellin: number = 6.206960;
  lngMedellin: number = -75.564878;
  latMapa: number = -2.892183;
  lngMapa: number = -79.0243997;
  latQuito: number = -0.2017126;
  lngQuito: number = -78.4847716;
  latQuito2: number = -0.1977709;
  lngQuito2: number = -78.4813194;
  latGuayaquil: number = -2.0884538;
  lngGuayaquil: number = -79.944177;
  zoom: number = 6;
  // zoomControl = false;
  zoomControlOptions: ZoomControlOptions = {
  position: 1

};

  // iconUrl: string = "/assets/imgs/marcador.png";
  scrollwheel: boolean = true;
  isOpen: boolean = true;




  constructor() {
    this.pais = localStorage.getItem('pais');
    if (this.pais === 'Ecuador') {
      this.zoom = 7;
    }
  }

  ngOnInit() {

    const owl = $('.asd');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      dotsClass: 'prueba',
      dotClass: 'prueba-2',
      activeClass: 'activop',
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay'); 
  });
    $('.prueba').css({'height': '10px', 'width': '10px', 'position' : 'absolute', 'left': '91%', 'bottom': '74%'});
    // tslint:disable-next-line:max-line-length
    $('.prueba-2').css({'background' : '#34cdff', 'height': '15px', 'width': '10px', 'display' : 'inline-block', 'borderRadius': '50%', 'cursor': 'pointer'});
    $('active').css({'border' : 'black'});
    // let x = document.querySelectorAll('.prueba-2.active') as HTMLCollectionOf<HTMLElement>;
    //   x[0].style.backgroundColor = "red";
}
    // $('.prueba-2').filter(".active").css({'background' : 'red'});

  }
