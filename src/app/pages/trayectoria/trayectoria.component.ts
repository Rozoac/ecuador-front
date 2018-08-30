import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from "ng2-parallaxscroll";

@Component({
  selector: "app-trayectoria",
  templateUrl: "./trayectoria.component.html",
  styleUrls: ["./trayectoria.component.css"]
})
export class TrayectoriaComponent implements OnInit {
  constructor() {}

  config: IParallaxScrollConfig = {
    axis: "X",
    speed: 1
  };

  ngOnInit() {}
}
