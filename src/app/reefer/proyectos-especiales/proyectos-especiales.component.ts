import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-especiales',
  templateUrl: './proyectos-especiales.component.html',
  styleUrls: ['./proyectos-especiales.component.css']
})
export class ProyectosEspecialesComponent implements OnInit {
  index = 1;
  testimonios = 4;
  constructor() { }

  ngOnInit() {}

  public nextTestimonials() {
    this.index++;
    this.index = this.index % this.testimonios;
  }

  public prevTestimonials() {
    if (this.index === 0) {
      this.index = this.testimonios;
    }
    this.index = this.index - 1;
  }

}
