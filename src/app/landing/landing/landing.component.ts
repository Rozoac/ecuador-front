import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { LandingService } from '../../services/landing.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public carrusel: NguCarouselConfig;
  
  public contenedores: any;
  public loading:boolean;
  public ruta_imagen;
  public active:boolean = false;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 4, lg: 4, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    slide: 1,
    point: { visible: true }
  }

  constructor(public _landingService: LandingService, private cdr: ChangeDetectorRef) {
    this.loading = false;
    _landingService.getContenedores().subscribe( (elberry:any) =>{
      this.contenedores = elberry.contenedores;
      this.ruta_imagen = elberry.contenedores.img;
      this.loading = true;
      console.log(this.contenedores);
    });
  }


  ngOnInit() {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}


