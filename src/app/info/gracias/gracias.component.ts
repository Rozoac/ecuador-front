import { Component, OnInit } from "@angular/core";
import { LeadService } from "../../service/lead/lead.service";
import { LandingService } from '../../services/landing.service';
import swal from "sweetalert2";
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: "app-gracias",
  templateUrl: "./gracias.component.html",
  styleUrls: ["./gracias.component.css"]
})
export class GraciasComponent implements OnInit {
  public ultimo: string;
  public lead;
  public comercial;
  public nombre: string;
  public comercial_nombre:string;
  public posts:any;
  public loadImage: boolean = true
  public encuesta;

  public fabiano: string;
  public correo: string;

  constructor(public _lead: LeadService, public _landingService: LandingService, public router: Router) {


    _landingService.getPostBlog().subscribe( (res:any) =>{
      this.posts = res.posts;
      this.loadImage = false
      console.log(res.posts.date);
    });


  }

  abrirModal(){
    this.router.navigate([`/encuesta-satisfaccion/${this.comercial.id}`])
  }

  ngOnInit() {
    this.encuesta = localStorage.getItem('encuesta');
    this.datosComercial();
    this.imagenComercial(this.comercial.comercial_correo);
    if( !this.encuesta){
      swal({
        title: 'Hasta 10% de descuento',
        text: "Contesta las siguientes preguntas y recibe hasta el 10% de descuento.",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No gracias'
      }).then((result) => {
        if (result.value === true) {
  this.router.navigate([`/encuesta-satisfaccion/${this.comercial.id}`])   
        }
      })
    }
   

  }


  datosComercial() {
    this.comercial = JSON.parse(localStorage.getItem('comercial'));
    console.log(this.comercial);
  }


  imagenComercial(comercial: string) {
    if (comercial === "fcastrodelrio@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/ivan.png";
      this.comercial_nombre = "Ivan Castro"
      return ;
    }
    if (comercial === "pvalencia@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/paula.png";
      this.comercial_nombre = "Paula Valencia"

      return;
    }
    if (comercial === "fvargas@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/frank.png";
      this.comercial_nombre = "Frank Vargas"

      return;
    }
    if (comercial === "lmahecha@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/leonardo.png";
      this.comercial_nombre = "Leonardo Mahecha"

      return;
    }
    if (comercial === "avila@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/vila.png";
      this.comercial_nombre = "Alejandra Vila"

      return;
    }
    if (comercial === "moviedo@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/maxi.png";
      this.comercial_nombre = "Maximiliano Oviedo"

      return;
    }
    if (comercial === "darango@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/diego.png";
      this.comercial_nombre = "Diego Arango"

      return;
    }
    if (comercial === "ltorres@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/laura.png";
      this.comercial_nombre = "Diego Arango"

      return;
    }
    if (comercial === "lvargas@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      this.comercial_nombre = "Luisa Vargas"

      return;
    }
    if (comercial === "mmancipe@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/mancipe.png";
      this.comercial_nombre = "Maria Fernanda Mancipe"

      return;
    }
    if (comercial === "ppatino@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/ppatino.png";
      this.comercial_nombre = "Paula Patiño"

      return;
    }

    return comercial;
  }
 


}


