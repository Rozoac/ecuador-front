import { Component, OnInit } from '@angular/core';
import { ContenedoresService } from '../../service/contenedores.service';
import { Router } from '@angular/router';
import { NguCarousel } from "@ngu/carousel";


@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./portafolio.component.css"]
})
export class PortafolioComponent implements OnInit {
  public tipo: any = null;
  public carouselOne: NguCarousel;

  contenedores: any[] = [];
  portafolio() {
    let portafolio = document.getElementById("portafolio-e");
    portafolio.classList.add("colorear");
  }
  verContenedor(idx: number): void {
    this.router.navigate(["/contenedor", idx]);
  }
  constructor(
    private _contenedoresService: ContenedoresService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carouselOne = { grid: { xs: 1, sm: 1, md: 4, lg: 4, all: 0 }, slide: 1, speed: 400, interval: 4000, point: { visible: true }, load: 2, touch: true, loop: true, custom: "banner" };

    // service

    this.contenedores = this._contenedoresService.getContenedores();
    // Carousel Auto-Cycle
  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
}
