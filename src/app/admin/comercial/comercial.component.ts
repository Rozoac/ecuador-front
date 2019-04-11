import { Component, OnInit, ViewChild } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { ActivatedRoute } from '@angular/router';
import { Comercial } from '../../models/comercial.model';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {saveAs} from 'file-saver';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { UsuarioService } from '../../service/usuario/usuario.service';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { InfoClienteModalComponent } from './modals/info-cliente-modal/info-cliente-modal.component';
import { map } from 'rxjs/operators';
export interface UserData {
 nombre: string;
 apellido: string;
 celular: string;
 correo: string;
 modalidad: string;
 fecha_creacion: string;
 hora_creacion: string;
 id_ciudad: {
   nombre: string
 };
 tipoCliente: string;
  }
  // name: string;
  // progress: string;
  // color: string;


@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.component.html',
  styleUrls: ['../admin.component.css']
})
export class ComercialComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'celular', 'correo', 'modalidad', 'ciudad'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public data: any;
  public data2: any;
  public comercial;
  public pagina = 1;
  public ultimaPagina;
  public inicio: string;
  public fin: string;
  public closeResult: string;
  public busquedaResultado: string;
  public resultado: Comercial;
  public pdf = 'false';
  public cargaReporte = true;

  constructor(
    public _leadService: LeadService,
    public activateRouter: ActivatedRoute,
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {
    this.cargarLeads(this.pdf);
  }





  cargarLeads(pdf: string) {
    this.activateRouter.params.subscribe((resp: any) => {
      this.resultado = new Comercial(
        resp['id'],
        resp['inicio'],
        resp['fin'],
        pdf
      );
      this.inicio = resp.inicio;
      this.fin = resp.fin;
      this._usuarioService.getUsuario(resp['id']).subscribe( (res: any) => {
        this.comercial = res.usuario;
        console.log(this.comercial);
      });
      if (pdf === 'true') {
        this.cargaReporte = false;
        this._leadService
          .getComercial(this.resultado, this.pagina, pdf)
          .subscribe((resp2: any) => {
            this.cargaReporte = true;
            this.toastr.info('Reporte generado satisfactoriamente', 'Reporte PDF', {
              progressBar: true
            });
            return saveAs(resp2);
          });
      } else {
        this._leadService
          .getComercial(this.resultado, this.pagina, pdf)
          .subscribe((resp2: any) => {
            this.data = resp2;
            this.data = resp2.map( respuesta => respuesta.id_cliente);
            this.dataSource = new MatTableDataSource(this.data != null && this.data);
            this.paginator._intl.itemsPerPageLabel = 'Clientes por página';
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(this.dataSource);
            console.log(this.data);
          });
      }
    });
  }

  getLead( id ) {
    this._leadService.getLeadPorCliente(id).subscribe((res: any) => {
      this.openDialog(res);
    });
    }

  openDialog(lead): void {
    const dialogRef = this.dialog.open(InfoClienteModalComponent, {
      width: '1200px',
      data: {data: lead }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargarLeads(this.pdf);
     
    });
  }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
