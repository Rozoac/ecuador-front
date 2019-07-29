import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit , AfterViewInit {
  public carrusel: NguCarouselConfig;
  public contenedores: any;
  public loading;
  public loading2;
  public ruta_imagen;
  public active = false;
  public posts;
  public carouselBanner: NguCarouselConfig;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  @ViewChild('myCarousel2') myCarousel2: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 4, lg: 6, all: 0 },
    load: 3,
    interval: {timing: 2000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 1,
    slide: 1,
    point: { visible: true }
  };

  constructor(public _landingService: LandingService, private cdr: ChangeDetectorRef, public router: Router) {
    this.loading = false;
    this.loading2 = false;
    _landingService.getContenedores().subscribe( (elberry: any) => {
      this.contenedores = elberry.contenedores;
      this.ruta_imagen = elberry.contenedores.img;
      this.loading = true;
      console.log(this.contenedores);
    });
    this.getPostInstagram();

  }



  cotizacion(id) {
    if (id === '5bd8f880b71ca700131dec9d') {
      this.router.navigate(['refrigerados']);
      return ;
    }
    this.router.navigate([`/cotizacion/${id}`]);
    if (id === '5bd8f95cb71ca700131dec9f') {
      this.router.navigate(['arquitectonicos']);
      return ;
    }
    if (id === '5bd8fa35b71ca700131decb0') {
      this.router.navigate(['tailor-made']);
      return ;
    }
    if (id === '5bd8fa35b71ca700131decb1') {
      this.router.navigate(['freight-forwarding/contacto']);
      return ;
    }
  }

  getPostInstagram() {
   this._landingService.getPostInstagram().subscribe( ( res: any ) => {
     this.posts = res.data;
     this.loading2 = true;
     console.log(this.posts);
   });
  }



  ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 4, md: 5, lg: 6, all: 0 },
      slide: 1,
      speed: 400,
      interval: {
        timing: 2000,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  onmoveFn(data: NguCarouselStore) {
    console.log(data);
  }

}


