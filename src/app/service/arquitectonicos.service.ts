import { Injectable } from '@angular/core';
import { asTextData } from '@angular/core/src/view';
import { _MatButtonToggleGroupMixinBase } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ArquitectonicosService {

  public arquitectonicos:any =
  [
    {
      id: 1,
      nombre: "Casa tipo 1",
      descripcion_corta: "Innovación y confort. Adquiere un espacio adaptado a tus necesidades, elaborado mediante un sistema constructivo modular y transportable. ",
      precio: {
        desde: '5.000.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: {
        cocina: '1',
        banio: '1',
        area: '2400'
      },
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/card-1.jpg',
        img_2: 'asd',
        img_3: 'asd'
      },
      estado: true
    },
    {
      id: 2,
      nombre: "Casa tipo 2",
      descripcion_corta: "Comodidad, estética, movilidad. Obtén una vivienda versátil e innovadora acondicionada con insumos móviles y de alta calidad. ",
      precio: {
        desde: '5.000.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: {
        cocina: true,
        banio: '1',
        area: '2400'
      },
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/card-2.jpg',
        img_2: 'asd',
        img_3: 'asd'
      },
      estado: true
    },
    {
      id: 3,
      nombre: "Unidades Comerciales",
      descripcion_corta: "Aumenta el flujo de clientes y optimiza tus ventas con un diseño atractivo, versátil e innovador.",
      precio: {
        desde: '5.000.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: {
        cocina: '1',
        banio: '1',
        area: '2400'
      },
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/card-3.jpg',
        img_2: 'asd',
        img_3: 'asd'
      },
      estado: true
    },
    {
      id: 4,
      nombre: "Piscina",
      descripcion_corta: "Innovación y confort. Adquiere un espacio adaptado a tus necesidades, elaborado mediante un sistema constructivo modular y transportable. ",
      precio: {
        desde: '5.000.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: {
        cocina: '1',
        banio: '1',
        area: '2400'
      },
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/card-4.jpg',
        img_2: 'asd',
        img_3: 'asd'
      },
      estado: true
    },
  ];

  constructor() {}



  cargarArquitectonicos(){
    return this.arquitectonicos;
  }

}
