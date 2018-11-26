import { Component, OnInit } from '@angular/core';
import { ArquitectonicosService } from '../../../service/arquitectonicos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-arquitectonicos',
  templateUrl: './productos-arquitectonicos.component.html',
  styleUrls: ['./productos-arquitectonicos.component.css']
})
export class ProductosArquitectonicosComponent implements OnInit {

  public contenedor;

  constructor(public _arquitectonicosService: ArquitectonicosService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.contenedor = this._arquitectonicosService.getArquitectonico(params['id']);
      console.log(this.contenedor);
   })

  }

}
