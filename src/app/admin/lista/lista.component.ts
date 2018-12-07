import { Component, OnInit } from "@angular/core";
import { LeadService } from "../../service/lead/lead.service";
import { Lead } from "../../models/lead.model";
import { Router } from "@angular/router";
import { IMyDpOptions, IMyDateModel } from "mydatepicker";
import { Fechas } from "../../models/fechas.model";
import { ToastrService, ToastContainerDirective } from "ngx-toastr";
import { NgForm } from "@angular/forms";
import { saveAs } from "file-saver";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["../admin.component.css"]
})
export class ListaComponent implements OnInit {
  public leads: Array<Lead>;
  public total;
  public pagina = 1;
  public ultimaPagina;
  public segmento;
  public pdf;
  public comercial;
  public placeholder = "Selecciona una fecha";
  public locale = "es";
  public fechaEnviar: Fechas = null;
  public cargaReporte: boolean = false;

  constructor(
    public _lead: LeadService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.cargarLeads("", null, this.fechaEnviar, "");
  }

  fechalista(fechas: NgForm) {
    if (fechas === null) {
      const f = new Fechas("2018-01-01", "2018-12-31");
    } else {
      const f = new Fechas(
        fechas.value.start.formatted,
        fechas.value.end.formatted
      );
      this.fechaEnviar = f;
      this.cargarLeads(
        this.segmento,
        null,
        this.fechaEnviar,
        this.comercial,
        this.pdf
      );
    }
  }

  cargarPDF(fechas: Fechas) {
    if (fechas === null) {
      this.toastr.info("Debes seleccionar una fecha", "Reporte PDF", {
        progressBar: true
      });
      return;
    }
    // this.cargaReporte = false;
    this.cargaReporte = true;
    this._lead.getLeadsPDF(fechas).subscribe((response: any) => {
      this.cargaReporte = false;
      this.toastr.info("Reporte generado satisfactoriamente", "Reporte PDF", {
        progressBar: true
      });
      return saveAs(response);
    });
  }

  cargarLeads(segmento, valor?, fecha?: Fechas, comercial?, pdf?) {
    if (valor === 1) {
      this.pagina = 1;
    }
    this._lead.getLeads(this.pagina, segmento, fecha, comercial, pdf).subscribe(
      (response: any) => {
        if (response.status === "success") {
          this.leads = response.leads.data;
          this.total = response.leads.total;
          this.ultimaPagina = response.leads.last_page;
          this.segmento = segmento;
          this.comercial = comercial;
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  public startDate: IMyDpOptions = {
    dateFormat: "yyyy-mm-dd",
    editableDateField: false
  };

  public endDate: IMyDpOptions = {
    dateFormat: "yyyy-mm-dd",
    disableUntil: { year: 0, month: 0, day: 0 }
  };

  onStartDateChanged(event: IMyDateModel) {
    const d: Date = new Date(event.jsdate.getTime());

    // set previous of selected date
    d.setDate(d.getDate() - 1);

    // Get new copy of options in order the date picker detect change
    const copy: IMyDpOptions = this.getCopyOfEndDateOptions();
    copy.disableUntil = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
    this.endDate = copy;
  }

  onEndDateChanged(event: IMyDateModel) {
    // end date changed...
  }

  getCopyOfEndDateOptions(): IMyDpOptions {
    return JSON.parse(JSON.stringify(this.endDate));
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

    this.cargarLeads(this.segmento, null, this.fechaEnviar);
  }

  buscarLead(termino: string) {
    if (termino.length <= 0) {
      this.cargarLeads("");
      return;
    }
    this._lead.buscarLeads(termino).subscribe((leads) => {
      console.log(termino);
      console.log(leads);
      this.leads = leads.data;
    });
  }

  leadInfo(ruta): any {
    this.router.navigate(["/admin/lead", ruta]);
  }
}
