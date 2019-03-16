import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbProgressbarConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-info-cliente-modal',
  templateUrl: './info-cliente-modal.component.html',
  styleUrls: ['./info-cliente-modal.component.css']
})
export class InfoClienteModalComponent implements OnInit {
  public mensajes;
  public estado;
  public estadoFinal;

  constructor(public dialogRef: MatDialogRef<InfoClienteModalComponent>,
    public  config: NgbProgressbarConfig,
    @Inject(MAT_DIALOG_DATA) public lead: any) { }

  ngOnInit() {
    console.log(this.lead);
    this.mensajes = this.lead.data.mensaje;
    this.estado = this.lead.data.id_semaforo.estado;
    this.getEstado();
  }

  getEstado() {
    switch (this.estado) {
      case 'Amarillo':
        this.estadoFinal = 'Leido';
        break;
      case 'Tercero':
        this.estadoFinal = 'Resuelto - (Propuesta realizada)' ;
        break;
      case 'Cuarto':
        this.estadoFinal = 'Resuelto - (Negociación Terminada)' ;
        break;
      case 'Segundo':
        this.estadoFinal = 'Resuelto - (Contacto Establecido)';
        break;
      case 'Verde':
        this.estadoFinal = 'Resuelto - (Lead en Proceso)';
        break;
        case 'Rojo':
        this.estadoFinal = 'No Leido';
        break;
        case 'Gris':
        this.estadoFinal = 'Cerrado';
        break;
    }
  }

}
