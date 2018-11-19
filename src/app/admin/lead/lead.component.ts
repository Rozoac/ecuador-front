import { LeadService } from '../../service/lead/lead.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lead } from '../../models/lead.model';

@Component({
  selector: "app-lead",
  templateUrl: "./lead.component.html",
  styleUrls: ["../admin.component.css"]
})
export class LeadComponent {
  public lead: any = [];

  constructor(
    public _leadService: LeadService,
    public routerA: ActivatedRoute
  ) {
    this.routerA.params.subscribe(params => {
      this._leadService.buscarLead(params["id"]).subscribe((res: any) => {
        this.lead = res;
      });
    });
  }

  imgModalidad(modalidad) {
    let ruta;
    if (modalidad === "Salas de Ventas") {
      ruta = "assets/imgs/contenedores/renault-0.jpg";
    }
    if (modalidad === "Productos Especiales") {
      ruta = "assets/imgs/contenedores/biblioteca-0.jpg";
    }
    if (modalidad === "Contenedores Refrigerados") {
      ruta = "assets/imgs/contenedores/refrigerado-0.jpg";
    }
    if (modalidad === "Oficinas") {
      ruta = "assets/css/backend/images/background/login-register.jpg";
    }
    if (modalidad === "Contenedores Maritimos") {
      ruta = "assets/imgs/contenedores/dussan-0.jpg";
    }

    return ruta;
  }
  avatar(segmento: string) {
    let img = "";
    if (segmento === "Salas de Ventas") {
      img = "/assets/css/backend/images/users/user-5.jpg";
    }
    if (segmento === "Oficinas") {
      img = "/assets/css/backend/images/users/user-4.jpg";
    }
    if (segmento === "Productos Especiales") {
      img = "/assets/css/backend/images/users/user-3.jpg";
    }
    if (segmento === "Contenedores Maritimos") {
      img = "/assets/css/backend/images/users/user-2.jpg";
    }
    if (segmento === "Contenedores Refrigerados") {
      img = "/assets/css/backend/images/users/user.jpg";
    }
    return img;
  }
}
