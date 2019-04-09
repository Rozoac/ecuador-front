import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Fechas } from '../../models/fechas.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisService } from '../../service/pais.service';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../service/usuario/usuario.service';
import * as moment from 'moment';

// Modelos


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['../admin.component.css']
})
export class GraficasComponent implements OnInit {


  constructor(public _leadService: LeadService, public router: Router,
              public _paisesService: PaisService, public _usuariosService: UsuarioService) {
                 this._leadService.getLeadsComercialMes()
                       .subscribe( (resp: any) => {
                         console.log(resp);
                          this.mesInicio = resp.inicio;
                          this.mesFin = resp.fin;
                       });
  }

  public startDate: IMyDpOptions = {
    dateFormat: 'mm-dd-yyyy',
    editableDateField: false
  };

  public endDate: IMyDpOptions = {
    dateFormat: 'mm-dd-yyyy',
    disableUntil: { year: 0, month: 0, day: 0 },

  };

  public totalLeads: any;
  public paises: any;
  public usuarios: any;
  public comerciales: any = null;
  public inicio: any = null;
  public fin: any = null;
  public mesInicio: any;
  public mesFin: any ;
  public totalGeneral: number;
  public editable = false;
  public locale = 'es';
  public placeholder = 'Selecciona una fecha';
  public date = new Date();

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


  getLeads(fechas: NgForm) {
    const f = new Fechas(
      fechas.value.start.formatted || '',
      fechas.value.end.formatted || ''
    );
    this.inicio = f.start;
    this.fin = f.end;


    this._leadService.getLeadsComercial(f)
                     .subscribe( (resp: any) => {
                        this.comerciales = resp.comerciales;
                        this.totalLeads = resp.total;
                     });

  }
  getLeadsHoy() {
    this.inicio = moment().format('MM-DD-YYYY');
    this.fin = '';
    this._leadService.getLeadsComercialActual()
                     .subscribe( (resp: any) => {
                        this.comerciales = resp.comerciales;
                        this.totalLeads = resp.total;
                        console.log(this.comerciales);

                  });
    this._leadService.getLeadsComercialActual()
                     .subscribe( (resp: any) => {
                        this.comerciales = resp.comerciales;
                        this.totalLeads = resp.total;
                        console.log(this.comerciales);

                  });
  }


  getLeadsMes() {
    this.fin = moment().format('MM-DD-YYYY');
    this.inicio = moment().startOf('month').format('MM-DD-YYYY');
    this._leadService.getLeadsComercialMes()
                     .subscribe( (resp: any) => {
                      console.log(this.comerciales);

                       this.comerciales = resp.comerciales;
                       this.totalLeads = resp.total;
                     });
    this._leadService.getLeadsComercialMes()
                     .subscribe( (resp: any) => {
                      console.log(this.comerciales);

                       this.comerciales = resp.comerciales;
                       this.totalLeads = resp.total;
                     });
  }

  getPaises() {
    this._paisesService.getPais().subscribe((res: any) => {
      this.paises = res.pais;
    });
  }

  // getUsuarios() {
  //   this._usuariosService.getUsuarios().subscribe( (res: any) => {
  //     this.usuarios = res.usuarios;
  //     console.log(this.usuarios);
  //   });
  // }

  comercialInfo(ruta, inicio, fin): any {
    console.log(ruta + inicio + fin);
    this.router.navigate(['/admin/comercial', ruta, inicio, fin]);
  }

  ngOnInit() {
    this.getPaises();
    // this.getUsuarios();
  }
}
