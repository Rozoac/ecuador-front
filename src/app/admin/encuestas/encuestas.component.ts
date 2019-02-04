import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../service/encuesta.service';
import { Encuesta } from '../../models/encuesta.model';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  encuestas;
  total:number;
  carga=true;

  constructor(public _encuestaService:EncuestaService) { 
    _encuestaService.mostrar().subscribe((res:any) => {
     this.encuestas = res.respuestas;
     this.total = res.total;
     this.carga= false;
    });
  }

  busqueda(termino){
    console.log(termino);
    this._encuestaService.busqueda(termino).subscribe( (res:any) => {
      this.encuestas = res.busqueda
    })
  }

  ngOnInit() {
  }

}
