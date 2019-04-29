import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { CiudadesTrasporteService } from '../../../../services/ciudades-trasporte.service';

@Component({
  selector: 'app-redireccionar-modal',
  templateUrl: './redireccionar-modal.component.html',
  styleUrls: ['./redireccionar-modal.component.css']
})

export class RedireccionarModalComponent implements OnInit {
  tipoarea: string[] = ['24/7', 'E-Containers', 'ShippingLine'];
  tipoTransporte;

  redireccion = {
    idLead: '',
    area: {
      nombre: '',
      tipoDeTransporte: ''
    },
    mensaje: ''
  };

  constructor(
    public _TransporteService: CiudadesTrasporteService,
    public dialogRef: MatDialogRef<RedireccionarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.getTipoTransporte();
    }

  ngOnInit() {
  }

  public getTipoTransporte() {
    this._TransporteService.getTransporte().subscribe((res: any) => {
      this.tipoTransporte = res;
      console.log(this.tipoTransporte);

    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
