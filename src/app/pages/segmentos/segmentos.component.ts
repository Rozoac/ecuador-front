import { Component, OnInit } from '@angular/core';
import { Segmento } from './models/segmento';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.component.html',
  styleUrls: ['./segmentos.component.css']
})
export class SegmentosComponent implements OnInit {
  tipoS: any;
  segmentos: Segmento[] = [
    {
      nombre: 'reefer',
      tipo: [
        {
          nombre: 'Reefer de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x especificaciones'
        },
        {
          nombre: 'Reefer de 40 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'salas de ventas',
      tipo: [
        {
          nombre: 'Salas de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Salas de 40 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'bodegas',
      tipo: [
        {
          nombre: 'Salas de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Salas de 40 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'bodegas',
      tipo: [
        {
          nombre: 'Salas de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Salas de 40 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'proyectos arquitectonicos',
      tipo: [
        {
          nombre: 'Salas de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Salas de 40 pies',
          precio: '18.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    }
  ];

  segmentoSeleccionado = new Segmento();
  constructor() { }

  seleccionar(segmento: string) {
    this.segmentoSeleccionado = this.segmentos.find((e) => e.nombre === segmento);
    console.log(this.segmentoSeleccionado);
  }

  onChanges(ev) {
    this.tipoS = this.segmentoSeleccionado.tipo.find((e) => e.nombre === ev.value);
    console.log(this.tipoS);
  }

  ngOnInit() {
  }

}
