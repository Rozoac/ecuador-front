import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index = 0;
  id;
  testimonios = [
    {
      name: 'Esperanza Molina',
      role: 'Comerciante de aguacates',
      // tslint:disable-next-line:max-line-length
      mensaje: 'Los aguacates se estaban dañando y por eso decidimos llamar a E-containers, quienes nos ayudaron con una solucion mas economica que una bodega de frio',
      img: 'aguacates'
    },
    {
      name: 'Lina Fernandez',
      role: 'Comerciante de frutas y hortalizas',
      // tslint:disable-next-line:max-line-length
      mensaje: 'Fue una solucion rapida y oportuna para mantener todas las frutas y hortalizas que cultivamos en al finca',
      img: 'fresas'
    },
    {
      name: 'Jeronimo Martinez',
      role: 'Comerciante de rosas',
      // tslint:disable-next-line:max-line-length
      mensaje: 'La mejor opcion para conservar rosas para temporadas como San Valentin y Dia de las madres',
      img: 'rosas'
    }
  ];

  constructor() {}

  ngOnInit() {

  const nextSlide = () =>  {
    this.index++;
    this.index = this.index % this.testimonios.length;
  };

    this.id = setInterval(nextSlide, 5000);
  }

  public nextTestimonials() {
    clearInterval(this.id);
    this.index++;
    this.index = this.index % this.testimonios.length;
  }

  public prevTestimonials() {
    clearInterval(this.id);
    if (this.index === 0) {
      this.index = this.testimonios.length;
    }
    this.index = this.index - 1;
  }

}
