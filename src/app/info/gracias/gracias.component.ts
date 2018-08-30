import { Component, OnInit } from "@angular/core";
import { LeadService } from "../../service/lead/lead.service";

@Component({
  selector: "app-gracias",
  templateUrl: "./gracias.component.html",
  styleUrls: ["../info.component.css"]
})
export class GraciasComponent implements OnInit {
  public ultimo: string;
  public nombre: string;

  constructor(public _lead: LeadService) {
    _lead.ultimo().subscribe((res: any) => {
      this.imagenComercial(res.ultimo.comercial);
    });
  }

  imagenComercial(comercial: string) {
    if (comercial === "fcastrodelrio@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/ivan.png";
      return ;
    }
    if (comercial === "pvalencia@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/paula.png";
      return;
    }
    if (comercial === "fvargas@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/frank.png";
      return;
    }
    if (comercial === "lmahecha@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/leonardo.png";
      return;
    }
    if (comercial === "avila@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/vila.png";
      return;
    }
    if (comercial === "cortega@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/carlos.png";
      return;
    }
    if (comercial === "cfiallo@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/carolina.png";
      return;
    }
    if (comercial === "lvargas@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      return;
    }
    if (comercial === "arodriguez@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/andrea.png";
      return;
    }
    if (comercial === "kalfaro@econtainerscolombia.com") {
      this.ultimo = "assets/css/backend/images/users/luisa.png";
      return;
    }

    return comercial;
  }

  ngOnInit() {}
}


