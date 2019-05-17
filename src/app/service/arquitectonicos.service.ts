import { Injectable } from '@angular/core';
import { asTextData } from '@angular/core/src/view';
// import { _MatButtonToggleGroupMixinBase } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ArquitectonicosService {

  public arquitectonicos: any =
  [
    {
      nombre: "Casa tipo 1",
      descripcion_corta: "Innovación y confort. Adquiere un espacio adaptado a tus necesidades, elaborado mediante un sistema constructivo modular y transportable. ",
      contenedores: "2 Contenedores de 20FT ",
      precio: {
        desde: '61.490.000' ,
        hasta: '85.000.000'
      },
      caracteristicas: [
        { 
          a:{
            medida: '30m',
            cocina: '1',
            banio: '1',
            alcoba: 1
          }
       },
       {
          b:{ 
            medida: '30m',
            cocina: '1',
            banio: '1',
            area: '2400'
            }
       }
      ],
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/casa2.jpg',
        img_2: 'assets/imgs/arquitectonicos/casa1.jpg',
        img_3: 'asd'
      },
      estado: true
    },
    {
      nombre: "Casa tipo 2",
      descripcion_corta: "Comodidad, estética, movilidad. Obtén una vivienda versátil e innovadora acondicionada con insumos móviles y de alta calidad. ",
      contenedores: "2 Contenedores de 40FT ",
      precio: {
        desde: '95.000.000' ,
        hasta: '122.390.000'
      },
      caracteristicas: [
        { 
          a:{
            medida: '60m',
            cocina: '1',
            banio: '1',
            alcoba: 2

          }
       },
       {
          b:{ 
            medida: '30m',
            cocina: '1',
            banio: '1',
            area: '2400'
            }
       }
      ],
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/casa3.jpg',
        img_2: 'assets/imgs/arquitectonicos/casa4.jpg',
        img_3: 'asd'
      },
      estado: true
    },
    {
      nombre: "Unidades Comerciales",
      descripcion_corta: "Aumenta el flujo de clientes y optimiza tus ventas con un diseño atractivo, versátil e innovador.",
      contenedores: "1 Contenedor de 10FT ",

      precio: {
        desde: '15.490.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: [
        { 
          a:{
            medida: '15m',
            cocina: null,
            banio: null,
            alcoba: 0

          }
       },
       {
          b:{ 
            medida: '30m',
            cocina: '1',
            banio: '1',
            area: '2400'
            }
       }
      ],
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/unidad1.jpg',
        img_2: 'assets/imgs/arquitectonicos/unidad2.jpg',
        img_3: 'asd'
      },
      estado: true
    },

    {
      nombre: "Piscina Container",
      descripcion_corta: "Innovación y confort. Adquiere un espacio adaptado a tus necesidades, elaborado mediante un sistema constructivo modular y transportable. ",
      contenedores: "1 Contenedor de 20FT ",
      precio: {
        desde: '36.690.000' ,
        hasta: '5.000.000'
      },
      caracteristicas: [
        { 
          a:{
            medida: '30m',
            cocina: null,
            banio: null,
            alcoba: 0

          }
       },
       {
          b:{ 
            medida: '30m',
            cocina: null,
            banio: null,
            area: '2400'
            }
       }
      ],
      imgs : {
        plano: 'asd',
        img_1: 'assets/imgs/arquitectonicos/card-4.png',
        img_2: 'assets/imgs/arquitectonicos/piscina-contenedor.png',
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
