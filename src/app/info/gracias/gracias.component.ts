import { Component, OnInit, NgZone } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent implements OnInit {
  public imagen: string;
  public lead;
  public comercial;
  public nombre: string;
  public comercial_nombre: string;
  public posts: any;
  public loadImage = true;
  public encuesta;
  public fabiano: string;
  public correo: string;

  constructor(public _lead: LeadService, public _landingService: LandingService, public router: Router, private zone: NgZone) {
    
    _landingService.getPostBlog().subscribe( (res: any) => {
      this.posts = res.posts;
      this.loadImage = false;
      console.log(res.posts.date);
    });
  }

  reloadPage() {
       
}

  abrirModal() {
    this.router.navigate([`/encuesta-satisfaccion/${this.comercial.lead._id}`]);
  }
  cerrarModal() {
    document.getElementById('modal').setAttribute('class', 'hide');
  }

  ngOnInit() {
    this.reloadPage();
    this.encuesta = localStorage.getItem('encuesta');
    this.datosComercial();
    this.imagenComercial(this.comercial.lead.id_usuario.correo);
    if (!this.encuesta) {
      setTimeout(function() {
        $('#modal').removeClass('hide');
      }, 2000);
    }
  }

  datosComercial() {
    this.comercial = JSON.parse(localStorage.getItem('comercial'));
  }

  imagenComercial(comercial: string) {
    if (comercial === 'fcastrodelrio@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/ivan.png';
    }
    if (comercial === 'pvalencia@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/paula.png';

    }
    if (comercial === 'fvargas@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/frank.png';

    }
    if (comercial === 'lmahecha@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/leo.png';

    }
    if (comercial === 'avila@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/vila.png';

    }
    if (comercial === 'moviedo@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/maxi.png';

    }
    if (comercial === 'darango@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/diego.png';

    }
    if (comercial === 'ltorres@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/laura.png';

    }
    if (comercial === 'lvargas@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/luisa.png';

    }
    if (comercial === 'mmancipe@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/mancipe.png';

    }
    if (comercial === 'dgomez@econtainers.co') {
      this.imagen = 'assets/imgs/gracias/dgomez.png';

    }

    return comercial;
  }

}


