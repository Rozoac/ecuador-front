import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { LandingService } from '../../services/landing.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public carrusel: NguCarousel;
  public contenedores: any;
  public loading:boolean;
  public ruta_imagen;
  public active:boolean = false;

  constructor(public _landingService: LandingService) {
    this.loading = false;
    _landingService.getContenedores().subscribe( (elberry:any) =>{
      this.contenedores = elberry.contenedores;
      this.ruta_imagen = elberry.contenedores.img;
      this.loading = true;
      console.log(this.contenedores);
    });
  }

  //  modalHalloween() {
  //    this.active = true;
  //   }
  //   cambiarActive(){
  //     this.active = false;
  // }

  ngOnInit() {
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
      custom: 'banner'
    };

    // setTimeout( () => {
    //   this.modalHalloween();
    // }, 3000);
  }
}

