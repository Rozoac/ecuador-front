import { Component, OnInit } from '@angular/core';
import { ZoomControlOptions } from '@agm/core/services/google-maps-types';
declare var $: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title: string = 'My first AGM project';

  latMapa: number = -2.892183;
  lngMapa: number = -79.0243997;
  latQuito: number = -0.2017126;
  lngQuito: number = -78.4847716;
  latQuito2: number = -0.1977709;
  lngQuito2: number = -78.4813194;
  latGuayaquil: number = -2.0884538;
  lngGuayaquil: number = -79.944177;
  zoom: number = 7;
  // zoomControl = false;
  zoomControlOptions: ZoomControlOptions = {
  position: 1

};

  // iconUrl: string = "/assets/imgs/marcador.png";
  scrollwheel: boolean = true;
  isOpen: boolean = false;




  constructor() {
  }

  ngOnInit() {


    $('.asd').owlCarousel({
      loop: false,
      margin: 10,
      dotsClass: 'prueba',
      dotClass: 'prueba-2',



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
    })
    $('.prueba').css({'height': '10px','width': '10px', 'position' : 'absolute', 'left':'91%', 'bottom': '74%'});
    $('.prueba-2').css({'background' : '#34cdff', 'height': '10px','width': '10px', 'display' : 'inline-block', 'borderRadius': '50%', 'cursor': 'pointer'});
    // let x = document.querySelectorAll('.prueba-2.active') as HTMLCollectionOf<HTMLElement>;
    //   x[0].style.backgroundColor = "red";
}
    // $('.prueba-2').filter(".active").css({'background' : 'red'});

  }