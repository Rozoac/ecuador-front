import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesTrasporteService } from '../../../../services/ciudades-trasporte.service';

@Component({
  selector: 'app-redireccionar-modal',
  templateUrl: './redireccionar-modal.component.html',
  styleUrls: ['./redireccionar-modal.component.css']
})

export class RedireccionarModalComponent implements OnInit {
  tipoarea: string[] = ['24/7', 'E-Containers', 'ShippingLine'];
  tipoTransporte;
  myForm: FormGroup;
  redireccion = {
    id_lead: '',
    area: {
      nombre: '',
      tipoDeTransporte: ''
    },
    mensaje: ''
  };

  constructor(
    public _TransporteService: CiudadesTrasporteService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<RedireccionarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.myForm = this.fb.group({
        area: this.fb.group({
          nombre: ['', Validators.required],
          tipoTransporte: ['']
        }),
        mensaje: ['', Validators.required]
      });
      this.getTipoTransporte();
    }

  ngOnInit() {}

  public getTipoTransporte() {
    this._TransporteService.getTransporte().subscribe((res: any) => {
      this.tipoTransporte = res;
      console.log(this.tipoTransporte);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.myForm.value.area.nombre === '24/7' && !this.myForm.value.area.tipoTransporte) {
      alert('error');
    }  else {
      alert('bien');
    }
  }

}
