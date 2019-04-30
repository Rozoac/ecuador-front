import { Component, OnInit, DoCheck, Inject } from '@angular/core';
import { LeadService } from '../../../../service/lead/lead.service';
import { Causal } from '../../../../service/correo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-rechazo-modal',
  templateUrl: './rechazo-modal.component.html',
  styleUrls: ['./rechazo-modal.component.css']
})

export class RechazoModalComponent implements OnInit, DoCheck {
  // public message;
  public rechazo: string[] = [];
  public fueraOportunidad: string[] = [];
  public valorEscojido: string[] = [];
  public causal: Causal = {
    id_causal: '',
    mensaje: ''
  };

  causalEscojida: string;
  causales: string[] = ['Perdida de oportunidad', 'Rechazo'];

  constructor(public _leadService: LeadService, public dialogRef: MatDialogRef<RechazoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private toastr: ToastrService) {
    this.getCausal();
  }

  getCausal() {
    this._leadService.getCausales().subscribe((res: any) => {
      for (const iterator of res) {
        if (iterator.tipo === 'Rechazo') {
          this.rechazo.push(iterator);
        } else {
          this.fueraOportunidad.push(iterator);
        }
      }
    });
  }

  escogerCausal() {
    console.log(this.causalEscojida);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.causalEscojida === 'Perdida de oportunidad') {
      this.valorEscojido = this.fueraOportunidad;
    } else {
      this.valorEscojido = this.rechazo;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar() {
    this._leadService.agregarCausal(this.causal, this.data.id_lead ).subscribe(res => {
      this.toastr.info('Actualización', 'Ok', {
        progressBar: true
      });
      this.onNoClick();
    });
  }
}
