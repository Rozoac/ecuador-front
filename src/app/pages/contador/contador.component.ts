import { Component, OnInit} from '@angular/core';
import { ContadorService } from '../../service/contador.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  nuestroEquipo: any ;
  clientesColombia: any ;
  entregasConcretadas: any ;
  proyectosTerminados: any ;
  loading:boolean;


  constructor( public _contadorService: ContadorService ) {

    
  }

  ngOnInit() {

    this.loading = false;
    this._contadorService.contador()
    .subscribe((res: any) => {
      this.nuestroEquipo = res.datos[0].nuestro_equipo;
      this.clientesColombia = res.datos[0].clientes_colombia;
      this.entregasConcretadas = res.datos[0].entregas_concretadas;
      this.proyectosTerminados = res.datos[0].proyectos_terminados;
      this.loading = true;
      });

  }




}
