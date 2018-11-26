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
        img_2: 'assets/imgs/arquitectonicos/casa2-1.jpg',
        img_3: 'asd'
      },
      estado: true
    },
    {
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
        img_2: 'assets/imgs/arquitectonicos/comercial2-1.jpg',
        img_3: 'asd'
      },
      estado: true
    },

    {
      nombre: "Piscina Container",
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
        img_2: 'assets/imgs/arquitectonicos/4-principal.jpg',
        img_3: 'asd'
      },
      estado: true
    },
  ];

  constructor() {}


  getArquitectonico(idx: string) {
    return this.arquitectonicos[idx];
  }

  cargarArquitectonicos(){
    return this.arquitectonicos;
  }

}
