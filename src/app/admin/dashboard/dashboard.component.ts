import { Component, OnInit, ViewChild } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { GraficaService } from '../../service/grafica.service';
import { ToastrService, ToastContainerDirective } from "ngx-toastr";
import { Lead } from '../../models/lead.model';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Router } from '@angular/router';
import { Fechas } from '../../models/fechas.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["../admin.component.css"]
})
export class DashboardComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  public graficas: any = null;

  public compra;
  public alquiler;
  public suma;
  public dato1;
  public dato2;
  public toastv = true;
  public placeholder = "Selecciona una fecha";
  public locale = "es";
  public segmento;
  public doughnutChartLabels: string[] = ["Compras", "Alquiler"];
  public doughnutChartData: number[] = [0, 0];
  public doughnutChartType = "doughnut";
  public barChartLabels: string[] = [
    "Armenia",
    "Barranca",
    "Barranquilla",
    "Bogotá",
    "Bucaramanga",
    "Cali",
    "Ibagué",
    "Maicao",
    "Manizales",
    "Medellin",
    "Otros",
    "Pereira",
    "Riohacha",
    "Santa Marta",
    "Valledupar",
    "Villavicencio"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public colores: Array<any> = [
    {
      // grey
      backgroundColor: "#2dc4e4",
      borderColor: "#2dc4e4",
      pointBackgroundColor: "#2dc4e4",
      pointBorderColor: "#2dc4e4",
      pointHoverBackgroundColor: "#2dc4e4",
      pointHoverBorderColor: "#2dc4e4"
    }
  ];

  public barChartData: any[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: "Ciudades" }
  ];

  //   public doughnutOptions: any = {
  //     tooltips: {
  //       callbacks: {
  //         title: function() {

  //           return this.dato1 + '%';
  //         }
  //       },
  //   }

  // };

  constructor(
    public _lead: LeadService,
    private router: Router,
    public _grafica: GraficaService,
    private toastr: ToastrService
  ) {}
  variable1;
  ngOnInit() {
    this.getGrafica(null);
    this.variable1 = this.toastr.overlayContainer = this.toastContainer;

    this.toastr.info("Selecciona una Fecha para empezar! 📅,", "Info", {
              progressBar: true
    });
  }

  public toast2(seleccionado:boolean) {
    if (seleccionado === false) {
      this.toastr.info("Selecciona un segmento,", "Info", {
        progressBar: true
      });
    }else{
      this.toastr.clear(this.variable1);
    }
  }

  public toast() {
    this.toastr.clear(this.variable1);
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

  getGrafica(fechas: NgForm) {
    if (fechas === null) {
      const f = new Fechas("2018-01-01", "2018-12-31");
      this._grafica.getGrafica(f).subscribe((resp: any) => {
        this.graficas = resp;
      });
    } else {
      const f = new Fechas(
        fechas.value.start.formatted,

        fechas.value.end.formatted
      );

      this._grafica.getGrafica(f).subscribe((resp: any) => {
        this.graficas = resp;
      });
    }
  }

  // segmentos() {
  //   this._lead.segmentos().subscribe(resp => {
  //     this.segmento = resp;
  //     console.log(resp);
  //   });
  // }

  graficaDona(tipo: string) {
    // this.segmentos();
    this.graficaBarras(tipo);
    if (tipo === "bodega") {
      this.compra = this.graficas.bodegas.compra;
      this.alquiler = this.graficas.bodegas.alquiler;
      this.suma = this.compra + this.alquiler;

      this.dato1 = Math.round((this.compra * 100) / this.suma);
      this.dato2 = Math.round((this.alquiler * 100) / this.suma);
      this.doughnutChartData = [this.dato1, this.dato2];
    }
    if (tipo === "sala") {
      this.compra = this.graficas.salas.compra;
      this.alquiler = this.graficas.salas.alquiler;
      this.suma = this.compra + this.alquiler;

      this.dato1 = Math.round((this.compra * 100) / this.suma);
      this.dato2 = Math.round((this.alquiler * 100) / this.suma);
      this.doughnutChartData = [this.dato1, this.dato2];
    }
    if (tipo === "arq") {
      this.compra = this.graficas.proyectos.compra;
      this.alquiler = this.graficas.proyectos.alquiler;
      this.suma = this.compra + this.alquiler;

      this.dato1 = Math.round((this.compra * 100) / this.suma);
      this.dato2 = Math.round((this.alquiler * 100) / this.suma);
      this.doughnutChartData = [this.dato1, this.dato2];
    }
    if (tipo === "oficina") {
      this.compra = this.graficas.oficinas.compra;
      this.alquiler = this.graficas.oficinas.alquiler;
      this.suma = this.compra + this.alquiler;

      this.dato1 = Math.round((this.compra * 100) / this.suma);
      this.dato2 = Math.round((this.alquiler * 100) / this.suma);
      this.doughnutChartData = [this.dato1, this.dato2];
    }
    if (tipo === "refrigerado") {
      this.compra = this.graficas.refrigerados.compra;
      this.alquiler = this.graficas.refrigerados.alquiler;
      this.suma = this.compra + this.alquiler;

      this.dato1 = Math.round((this.compra * 100) / this.suma);
      this.dato2 = Math.round((this.alquiler * 100) / this.suma);
      this.doughnutChartData = [this.dato1, this.dato2];
    }
  }

  graficaBarras(tipo: string) {
    // this.segmentos();
    if (tipo === "bodega") {
      (this.colores = [
        {
          // grey
          backgroundColor: "#7258f2",
          borderColor: "#7258f2",
          pointBackgroundColor: "#7258f2",
          pointBorderColor: "#7258f2",
          pointHoverBackgroundColor: "#7258f2",
          pointHoverBorderColor: "#7258f2"
        }
      ]),
        (this.barChartData = [
          this.graficas.bodegas.ciudades.armenia,
          this.graficas.bodegas.ciudades.barranca,
          this.graficas.bodegas.ciudades.barranquilla,
          this.graficas.bodegas.ciudades.bogota,
          this.graficas.bodegas.ciudades.bucaramanga,
          this.graficas.bodegas.ciudades.cali,
          this.graficas.bodegas.ciudades.ibague,
          this.graficas.bodegas.ciudades.maicao,
          this.graficas.bodegas.ciudades.manizales,
          this.graficas.bodegas.ciudades.medellin,
          this.graficas.bodegas.ciudades.otros,
          this.graficas.bodegas.ciudades.pereira,
          this.graficas.bodegas.ciudades.riohacha,
          this.graficas.bodegas.ciudades.santaMarta,
          this.graficas.bodegas.ciudades.valledupar,
          this.graficas.bodegas.ciudades.villavicencio
        ]);
    }
    if (tipo === "sala") {
      this.barChartData = [
        this.graficas.salas.ciudades.armenia,
        this.graficas.salas.ciudades.barranca,
        this.graficas.salas.ciudades.barranquilla,
        this.graficas.salas.ciudades.bogota,
        this.graficas.salas.ciudades.bucaramanga,
        this.graficas.salas.ciudades.cali,
        this.graficas.salas.ciudades.ibague,
        this.graficas.salas.ciudades.maicao,
        this.graficas.salas.ciudades.manizales,
        this.graficas.salas.ciudades.medellin,
        this.graficas.salas.ciudades.otros,
        this.graficas.salas.ciudades.pereira,
        this.graficas.salas.ciudades.riohacha,
        this.graficas.salas.ciudades.santaMarta,
        this.graficas.salas.ciudades.valledupar,
        this.graficas.salas.ciudades.villavicencio
      ];
    }
    if (tipo === "arq") {
      this.barChartData = [
        this.graficas.proyectos.ciudades.armenia,
        this.graficas.proyectos.ciudades.barranca,
        this.graficas.proyectos.ciudades.barranquilla,
        this.graficas.proyectos.ciudades.bogota,
        this.graficas.proyectos.ciudades.bucaramanga,
        this.graficas.proyectos.ciudades.cali,
        this.graficas.proyectos.ciudades.ibague,
        this.graficas.proyectos.ciudades.maicao,
        this.graficas.proyectos.ciudades.manizales,
        this.graficas.proyectos.ciudades.medellin,
        this.graficas.proyectos.ciudades.otros,
        this.graficas.proyectos.ciudades.pereira,
        this.graficas.proyectos.ciudades.riohacha,
        this.graficas.proyectos.ciudades.santaMarta,
        this.graficas.proyectos.ciudades.valledupar,
        this.graficas.proyectos.ciudades.villavicencio
      ];
    }
    if (tipo === "oficina") {
      this.barChartData = [
        this.graficas.oficinas.ciudades.armenia,
        this.graficas.oficinas.ciudades.barranca,
        this.graficas.oficinas.ciudades.barranquilla,
        this.graficas.oficinas.ciudades.bogota,
        this.graficas.oficinas.ciudades.bucaramanga,
        this.graficas.oficinas.ciudades.cali,
        this.graficas.oficinas.ciudades.ibague,
        this.graficas.oficinas.ciudades.maicao,
        this.graficas.oficinas.ciudades.manizales,
        this.graficas.oficinas.ciudades.medellin,
        this.graficas.oficinas.ciudades.otros,
        this.graficas.oficinas.ciudades.pereira,
        this.graficas.oficinas.ciudades.riohacha,
        this.graficas.oficinas.ciudades.santaMarta,
        this.graficas.oficinas.ciudades.valledupar,
        this.graficas.oficinas.ciudades.villavicencio
      ];
    }
    if (tipo === "refrigerado") {
      this.barChartData = [
        this.graficas.refrigerados.ciudades.armenia,
        this.graficas.refrigerados.ciudades.barranca,
        this.graficas.refrigerados.ciudades.barranquilla,
        this.graficas.refrigerados.ciudades.bogota,
        this.graficas.refrigerados.ciudades.bucaramanga,
        this.graficas.refrigerados.ciudades.cali,
        this.graficas.refrigerados.ciudades.ibague,
        this.graficas.refrigerados.ciudades.maicao,
        this.graficas.refrigerados.ciudades.manizales,
        this.graficas.refrigerados.ciudades.medellin,
        this.graficas.refrigerados.ciudades.otros,
        this.graficas.refrigerados.ciudades.pereira,
        this.graficas.refrigerados.ciudades.riohacha,
        this.graficas.refrigerados.ciudades.santaMarta,
        this.graficas.refrigerados.ciudades.valledupar,
        this.graficas.refrigerados.ciudades.villavicencio
      ];
    }
  }
}
