import { Component, OnInit } from '@angular/core';
import { NguCarousel } from "@ngu/carousel";
import { LandingService } from '../../services/landing.service';

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  public carrusel: NguCarousel;
  public contenedores: any;
  public loading:boolean;
  public ruta_imagen;

  constructor(public _landingService: LandingService) {
    _landingService.getContenedores().subscribe( (elberry:any) =>{
      this.contenedores = elberry.contenedores;
      this.ruta_imagen = elberry.contenedores.img;
      this.loading= true;
      console.log(this.contenedores)
    });
  }

  ngOnInit() {
    this.loading = false;
    this.carrusel = {
      grid: { xs: 1, sm: 1, md: 4, lg: 4 , all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: false,
      custom: "banner"
    };
  }
}
