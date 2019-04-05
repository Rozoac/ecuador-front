import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoCliente } from '../../models/tipoCliente.model';
import { CorreoService, IMessage, Ciudad } from '../../service/correo.service';
import { LeadService } from '../../service/lead/lead.service';
import swal from 'sweetalert2';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import 'rxjs/Rx';
import { saveAs } from 'file-saver';
import { LandingService } from '../../services/landing.service';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Referido } from '../../models/referido.model';
declare var $: any;

@Component({
  selector: 'app-dashboard-redes',
  templateUrl: './dashboard-redes.component.html',
  styleUrls: ['./dashboard-redes.component.css']
})
export class DashboardRedesComponent implements OnInit {
  carga: boolean = false;
  displayedColumns: string[] = ['Nombre', 'Referido', 'hora'];
  dataSource: MatTableDataSource<Referido>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public segmentos;
  public tiposDeCliente;
  public ciudades: Ciudad[];
  public cargaReporte = false;
  public tipoId = 1;
  public tipoCliente;
  public message: IMessage = {
    documento: {
      tipo_documento: '',
      numero: ''
    },
    tipo_cliente: {
      tipo: '',
      nombre: ''
    },
    modalidad: '',
    id_segmento: '',
    id_pais: '5c3ce3835d14850017167207',
  };
  public forma: FormGroup;
  public referidos: any;

   constructor( private appService: CorreoService, private _referidos: LeadService,
               private _landingService: LandingService, private toastr: ToastrService,
               public _leadService: LeadService
 ) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'celular': new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,10}'), Validators.minLength(10)]),
      'ciudad': new FormControl('¿Cual es tu ciudad mas cercana?', Validators.required),
      'cel2': new FormControl('', [Validators.pattern('[0-9]{1,10}'), Validators.minLength(10)]),
      'id_segmento': new FormControl('', Validators.required),
      'documento': new FormControl('', Validators.required),
      'modalidad': new FormControl('¿Lo quieres para?', Validators.required),
      'tipo_cliente': new FormControl('Tipo de cliente', Validators.required),
      'fuente': new FormControl('Fuente', Validators.required),
      'referido2': new FormControl('Referido'),
      'empresa': new FormControl('Empresa'),
    });

  }

  generarReporte() {
    this.cargaReporte = true;
    this._referidos.getReferidosPDF()
      .subscribe((resp2: any) => {
        this.cargaReporte = false;
        this.toastr.info('Reporte generado satisfactoriamente', 'Reporte PDF', {
          progressBar: true
        });
        return saveAs(resp2);
      });
    }


    sendEmail(message: IMessage) {
      this.carga = true;
      this.limpiar();
      this.appService.sendEmail(message).subscribe(
        res => {
          this.carga = false;
          console.log('AppComponent Success', res);
          this.toastr.info('Lead agregado satisfactoriamente ', 'Lead Referido', {
            progressBar: true
          });
          this._referidos.getReferidos()
          .subscribe((response: any) => {
            console.log(response);
            this.referidos = response.clientes;
            this.dataSource = new MatTableDataSource(this.referidos);
            this.paginator._intl.itemsPerPageLabel = 'Referidos por pagína';
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
      this.tipoCliente = [
      {Id: 1, name: 'Tipo de cliente'},
      {Id: 2, name: 'Empresa'},
      {Id: 3, name: 'Contratación estatal'}
    ];

    this._referidos.getReferidos()
      .subscribe((response: any) => {
        console.log(response);
        this.referidos = response.clientes;
        this.dataSource = new MatTableDataSource(this.referidos);
        this.paginator._intl.itemsPerPageLabel = 'Referidos por pagína';
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      this._landingService.getCiudades().subscribe( (res: any) => {
        this.ciudades = res.ciudades;
      });
      this._landingService.getSegmentos().subscribe( (res: any) => {
        this.segmentos = res.segmento;
        console.log(res);
      });
      this._leadService.getTiposDeCliente().subscribe( (res: any) => {
        this.tiposDeCliente = res.tipoCliente;
      });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  limpiar() {
    this. message = {
      nombre: '',
      apellido: '',
      correo: '',
      celular: '',
      documento: {
        tipo_documento: '',
        numero: ''
      },
      tipo_cliente: {
        tipo: '',
        nombre: ''
      },
      id_pais: '5c3ce3835d14850017167207',
    };
   }
}
