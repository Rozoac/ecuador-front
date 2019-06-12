import { Component, OnInit} from '@angular/core';
import { ContadorService } from '../../service/contador.service';
import { GeolocalizacionService } from '../../service/geolocalizacion.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {
  pais;
  nuestroEquipo: any ;
  clientesColombia: any ;
  entregasConcretadas: any ;
  proyectosTerminados: any ;
  loading: Boolean = false;

  constructor( public _contadorService: ContadorService) {
    this.pais = localStorage.getItem('pais');
  }

  ngOnInit() {
    this.nuestroEquipo = 78;
    this.clientesColombia = 4450;
    this.entregasConcretadas = 1800;
    this.proyectosTerminados = 1334;
    this.loading = true;
  }
}
