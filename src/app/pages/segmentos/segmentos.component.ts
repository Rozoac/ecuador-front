import { Component, OnInit } from '@angular/core';
import { Segmento } from './models/segmento';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.component.html',
  styleUrls: ['./segmentos.component.css']
})
export class SegmentosComponent implements OnInit {
  tipoS = {
    nombre: 'Nah',
    precio: 'Nah',
    medidas: 'Nah',
    especificaciones: 'Nah'
  };

  segmento: any;
  segmentos: Segmento[] = [
    {
      nombre: 'reefer',
      tipo: [
        {
          nombre: 'Reefer de 20 pies',
          precio: '18.0000',
          medidas: 'x medidas de reefer 20 pies',
          especificaciones: 'un contenedor mas pequeño'
        },
        {
          nombre: 'Reefer de 40 pies',
          precio: '20.0000',
          medidas: 'x medidas reefer 40 pies',
          especificaciones: 'un contenedor mas grande'
        }
      ],
    },
    {
      nombre: 'salas de ventas',
      tipo: [
        {
          nombre: 'Salas de 20 pies',
          precio: '10.0000',
          medidas: 'x medidas de salas de evntas de 20 pies',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Salas de 40 pies',
          precio: '19.0000',
          medidas: 'x medidas de salas de evntas de 40 pies',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'bodegas',
      tipo: [
        {
          nombre: 'Bodegas de 20 pies',
          precio: '15.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Bodegas de 40 pies',
          precio: '10.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    },
    {
      nombre: 'proyectos arquitectonicos',
      tipo: [
        {
          nombre: 'Proyectos de 20 pies',
          precio: '10.0000',
          medidas: 'x medidas',
          especificaciones: 'x expecificaciones'
        },
        {
          nombre: 'Proyectos de 40 pies',
          precio: '18.0000',
          medidas: 'xx  medidas',
          especificaciones: 'x expecificaciones'
        }
      ],
    }
  ];

  segmentoSeleccionado = new Segmento();
  constructor() { }

  seleccionar(segmento: string) {
    this.segmento = segmento;
    this.segmentoSeleccionado = this.segmentos.find((e) => e.nombre === segmento);
    console.log(this.segmentoSeleccionado);
  }

  onChanges(ev) {
    this.tipoS = this.segmentoSeleccionado.tipo.find((e) => e.nombre === ev.value);
    console.log(this.tipoS) ;
  }

  ngOnInit() {
  }

}
