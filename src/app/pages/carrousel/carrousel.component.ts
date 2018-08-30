import { Component, OnInit } from "@angular/core";
import { NguCarousel } from "@ngu/carousel";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: "app-carrousel",
  templateUrl: "./carrousel.component.html",
  styleUrls: ["./carrousel.component.css"]
})
export class CarrouselComponent implements OnInit {
  public carouselOne: NguCarousel;
  constructor(config: NgbCarouselConfig) {
    // this.carouselOne = { grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 }, interval: 6000, speed: 200, animation: "lazy", point: { visible: true }, touch: true, loop: true, easing: "ease" }; // interval: 4000,
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {}
}
