import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { ActivatedRoute } from '@angular/router';
import { Comercial } from '../../models/comercial.model';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {saveAs} from 'file-saver';
import { ToastrService, ToastContainerDirective } from "ngx-toastr";


@Component({
  selector: "app-comercial",
  templateUrl: "./comercial.component.html",
  styleUrls: ["../admin.component.css"]
})
export class ComercialComponent implements OnInit {
  data: any;
  data2: any;
  public pagina = 1;
  public ultimaPagina;
  inicio: string;
  fin: string;
  closeResult: string;
  busquedaResultado: string;
  resultado: Comercial;
  pdf = "false";
  cargaReporte: boolean = true;

  constructor(
    public _leadService: LeadService,
    public activateRouter: ActivatedRoute,
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private toastr: ToastrService
  ) {
    this.cargarLeads(this.pdf);
  }

  open2(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  open(content) {
    this.modalService2.open(content, { windowClass: "dark-modal" });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  cargarLeads(pdf: string) {
    this.activateRouter.params.subscribe((resp: any) => {
      this.resultado = new Comercial(
        resp["id"],
        resp["inicio"],
        resp["fin"],
        pdf
      );
      this.inicio = resp.inicio;
      this.fin = resp.fin;
      console.log(this.resultado);

      if (pdf === "true") {
        this.cargaReporte = false;
        this._leadService
          .getComercial(this.resultado, this.pagina, pdf)
          .subscribe((resp2: any) => {
            this.cargaReporte = true;
            this.toastr.info("Reporte generado satisfactoriamente", "Reporte PDF", {
              progressBar: true
            });
            return saveAs(resp2);
          });
      } else {
        this._leadService
          .getComercial(this.resultado, this.pagina, pdf)
          .subscribe((resp2: any) => {
            this.data = resp2;
            console.log(resp2);
            this.ultimaPagina = resp2.total.last_page;
          });
      }
    });
  }

  busqueda(termino: string, comercial: Comercial) {
    if (termino.length <= 0) {
      this.cargarLeads(this.pdf);
      return;
    }
    this._leadService
      .buscarLeadFecha(termino, comercial)
      .subscribe((busqueda: any) => {
        console.log(busqueda);
        this.data = busqueda;
      });
  }

  buscarLead(id, content) {
    this._leadService.buscarLead(id).subscribe((resp: any) => {
      this.data2 = resp;
      console.log(resp);
      this.open2(content);
    });
  }

  cambiarDesde(valor: number) {
    const desde = this.pagina + valor;

    if (desde > this.ultimaPagina) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.pagina += valor;
    this.cargarLeads(this.pdf);
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

  imagenComercial(comercial: string) {
    let foto;
    if (comercial === "pvalencia") {
      foto = "/assets/css/backend/images/users/paula.png";
    }
    if (comercial === "ppatino") {
      foto = "/assets/css/backend/images/users/ppatino.png";
    }
    if (comercial === "avila") {
      foto = "/assets/css/backend/images/users/vila.png";
    }
    if (comercial === "fvargas") {
      foto = "/assets/css/backend/images/users/frank.png";
    }
    if (comercial === "fcastrodelrio") {
      foto = "/assets/css/backend/images/users/ivan.png";
    }
    if (comercial === "lmahecha") {
      foto = "/assets/css/backend/images/users/leonardo.png";
    }
    if (comercial === "lrios") {
      foto = "/assets/css/backend/images/users/laura.png";
    }
    if (comercial === "mmancipe") {
      foto = "/assets/css/backend/images/users/mancipe.png";
    }
    if (comercial === "lvargas") {
      foto = "/assets/css/backend/images/users/luisa.png";
    }
    if (comercial === "moviedo") {
      foto = "/assets/css/backend/images/users/maxi.png";
    }
    if (comercial === "darango") {
      foto = "/assets/css/backend/images/users/diego.png";
    }
   
    return foto;
  }

  ngOnInit() {}
}
