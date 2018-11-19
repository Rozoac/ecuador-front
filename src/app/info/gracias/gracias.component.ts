import { Component, OnInit } from "@angular/core";
import { LeadService } from "../../service/lead/lead.service";
import { LandingService } from '../../services/landing.service';


@Component({
  selector: "app-gracias",
  templateUrl: "./gracias.component.html",
  styleUrls: ["./gracias.component.css"]
})
export class GraciasComponent implements OnInit {
  public ultimo: string;
  public nombre: string;
  public comercial_nombre:string;
  public posts:any;
  public loadImage: boolean = true

  public fabiano: string;
  public correo: string;

  constructor(public _lead: LeadService, public _landingService: LandingService) {
    _lead.ultimo().subscribe((res: any) => {
      this.correo = res.ultimo.comercial;
      this.imagenComercial(res.ultimo.comercial);
      console.log(res)
    });

    _landingService.getPostBlog().subscribe( (res:any) =>{
      this.posts = res.posts;
      this.loadImage = false
      console.log(res.posts.date);
    });

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
    if (comercial === "cortega@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/carlos.png";
      this.comercial_nombre = "Carlos Ortega"

      return;
    }
    if (comercial === "cfiallo@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/carolina.png";
      this.comercial_nombre = "Carolina Fiallo"

      return;
    }
    if (comercial === "lvargas@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      this.comercial_nombre = "Luisa Vargas"

      return;
    }
    if (comercial === "ltorres@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/laura.png";
      this.comercial_nombre = "Laura Torres"

      return;
    }
    if (comercial === "arodriguez@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/andrea.png";
      this.comercial_nombre = "Andrea Rodriguez"

      return;
    }
    if (comercial === "kalfaro@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      this.comercial_nombre = "Kerly Alfaro"

      return;
    }
    if (comercial === "mmancipe@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      this.comercial_nombre = "Maria Fernanda Mancipe";

      return;
    }
    if (comercial === "ppatino@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      this.comercial_nombre = "Paula Patiño";

      return;
    }
    if (comercial === "moviedo@econtainers.co") {
      this.ultimo = "assets/css/backend/images/users/carlos.png";
      this.comercial_nombre = "Maximiliano Oviedo";

      return;
    }

    return comercial;
  }
  numeroComercial(comercial: string) {
    if (comercial === "fcastrodelrio@econtainerscolombia.com") {
     
      return "3224243121" ;
    }
    if (comercial === "pvalencia@econtainerscolombia.com") {
      

      return "3108331305" ;

    }
    if (comercial === "fvargas@econtainerscolombia.com") {
      

            return "3103617492" ;

    }
    if (comercial === "lmahecha@econtainerscolombia.com") {
      

      return "3203997868" ;

    }
    if (comercial === "avila@econtainerscolombia.com") {
      

      return "3164650177" ;

    }
    if (comercial === "cortega@econtainerscolombia.com") {
      

            return "3103617492" ;

    }
    if (comercial === "cfiallo@econtainerscolombia.com") {
      

      return "3138847558" ;

    }
    if (comercial === "lvargas@econtainerscolombia.com") {
      

            return "3103617492" ;

    }
    if (comercial === "arodriguez@econtainerscolombia.com") {
      

      return "3176590829" ;

    }
    if (comercial === "kalfaro@econtainerscolombia.com") {
      

      return "3005375219" ;

    }

    if (comercial === "ltorres@econtainers.co") {
      

      return "3132323919" ;

    }

    return comercial;
  }

  ngOnInit() {}
}


