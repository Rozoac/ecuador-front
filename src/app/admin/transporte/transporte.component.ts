import { Component, OnInit } from '@angular/core';
import { CiudadesTrasporteService } from '../../services/ciudades-trasporte.service';
import { Transporte } from '../../models/transporte';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {

  public formTransporte: Transporte = {
     tipoVehiculo: '',
     origen: '',
     destino: ''
  };
  ciudades: string[];
  transportes: any[];

  constructor( public _servicioTransporte: CiudadesTrasporteService) {
    this.getTransporte();
    this.getCiudades();
  }

  ngOnInit() {
  }


  getTransporte() {
    this._servicioTransporte.getTransporte().subscribe( (transportes: any) => {
      this.transportes = transportes.tipoTrasnporte;
    });

  }


  getCiudades(){
    this._servicioTransporte.getCiudades().subscribe( (ciudades: any) => {
      this.ciudades = ciudades.ciudades;
    });

  }

  calcular( f ) {
    console.log(f.value);
  }

}
