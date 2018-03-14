import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrabajosService {

  private trabajos: Trabajo[] =
  [
    {
      nombre: "Comercial",
      bio: "Buscamos personal con disposición para atención de clientes y habilidades para realizar ventas.",
      img: "assets/imgs/contenedores/1.jpg",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      nombre: "Logística",
      bio: "¿Eres experto en administración de operaciones logísticas? Únete a nuestro equipo. ",
      img: "assets/imgs/contenedores/2.jpg",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      nombre: "Administrativa",
      bio: "¿Quieres ser parte del equipo encargado de definir los objetivos, fijar estrategias, trazar planes y coordinar las actividades de nuestra compañía?",
      img: "assets/imgs/contenedores/3.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Comercio Exterior",
      bio: "Realizamos procesos de nacionalización, ventas internacionales, agentes de aduana, incoterms, si sabes acerca de estos temas no dudes en enviarnos tu hoja de vida.",
      img: "assets/imgs/contenedores/4.jpg",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      nombre: "Producción",
      bio: "Para nuestros proyectos arquitectónicos requerimos personal capacitado en soldadura, revestimientos, acabados, entre otros.",
      img: "assets/imgs/contenedores/5.jpg",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Marketing",
      bio: "Si eres profesional en diseño, comunicación, mercadeo, publicidad, estamos esperando tu talento para unirte al departamento creativo de la compañía.",
      img: "assets/imgs/contenedores/6.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Técnico de refrigeración",
      bio: "Buscamos técnicos expertos en refrigeración industrial, con conocimiento en contenedores refrigerados y aires acondicionados. Debe tener disposición para viajar a nivel nacional.",
      img: "assets/imgs/contenedores/6.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Arquitectura",
      bio: "Si eres experto en arquitectura, y sabes manejar programas como : Lumión, Sketchup y autocad envianos tu hoja de vida.",
      img: "assets/imgs/contenedores/6.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    }
  ];




  constructor() { }

  getTrabajos(){
    return this.trabajos;
  }

  getTrabajo(idx: string) {
    return this.trabajos[idx];
  }


}
export interface Trabajo{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}
