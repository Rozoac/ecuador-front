import { Component, OnInit } from '@angular/core';
import { ArquitectonicosService } from '../../../service/arquitectonicos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-arquitectonicos',
  templateUrl: './arquitectonicos.component.html',
  styleUrls: ['./arquitectonicos.component.css']
})
export class ArquitectonicosComponent implements OnInit {

  arquitectonicos;
  frases = [ 'Construimos Espacios Únicos en Diseño y Confort.' , 'Arquitectura modular que reduce el impacto ambiental' , 'Arquitectura 100% Ecoamigable.']   
  palabra = this.frases[0]
 
 onComplete(){
  return  this.frases[1]
 }
 frase(){
 }
  
  constructor(public _arquitectonicosService: ArquitectonicosService, public router: Router) {
    this.cargarArquitectonicos();
  }

  ngOnInit() {}

  verArquitectonico( id ){
    this.router.navigate(["/arquitectonicos", id]);
    // return this.arquitectonicos[id];
  }

  alcobas(cantidad) {
    if (cantidad <= 0 ){
      return
    }
    if(cantidad > 0 && cantidad <= 1){
      return `${cantidad} Alcoba |`
    }
    if(cantidad > 0 && cantidad > 1){
      return `${cantidad} Alcobas |`
    }
  }

  cargarArquitectonicos() {
    this.arquitectonicos = this._arquitectonicosService.cargarArquitectonicos(); 
  }
  
}
