import { Component, OnInit } from '@angular/core';
import { ContenedoresService } from '../../service/contenedores.service';
import { NgxCarousel } from 'ngx-carousel';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public carouselOne: NgxCarousel;
public tipo: any = null;
  // portafolio

contenedores: any[] = [];
   portafolio(){
     let portafolio = document.getElementById('portafolio-e');
     portafolio.classList.add("colorear");
   }
   verContenedor(idx: number): void {
    this.router.navigate(['/contenedor', idx])
  }
  constructor(private _contenedoresService: ContenedoresService, private router: Router) { }

  ngOnInit() {

    this.carouselOne = {
      grid: {xs: 1, sm: 4, md: 4, lg: 4, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      // interval: 4000,
      point: {
        visible: true,
        pointStyles: `

        .ngxcarouselPoint {
              list-style-type: none;
              text-align: center;
              padding: 12px;
              margin: 0;
              white-space: nowrap;
              overflow: auto;
              box-sizing: border-box;
            }
            .ngxcarouselPoint li {
              display: inline-block;
              border-radius: 50%;
              border: 2px solid rgba(0, 0, 0, 0.55);
              padding: 4px;
              margin: 0 3px;
              transition-timing-function: cubic-bezier(.17, .67, .83, .67);
              transition: .4s;
            }
            .ngxcarouselPoint li.active {
                background: #6b6b6b;
                transform: scale(1.2);
            }
    `
      },
      load: 2,
      touch: true,
      loop: true,
      easing: 'ease'

    }

    // service
    this.contenedores = this._contenedoresService.getContenedores();
    // Carousel Auto-Cycle


  }

}
