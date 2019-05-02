import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenedoresService, Contenedor } from '../../service/contenedores.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {

  contenedor:any = [];

  constructor(private activateRoute: ActivatedRoute, private _contenedorService:ContenedoresService) {
    this.activateRoute.params.subscribe(params => {
      this.contenedor = this._contenedorService.getContenedor(params['id']);
   })
 }

}
