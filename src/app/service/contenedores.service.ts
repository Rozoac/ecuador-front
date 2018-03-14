import { Injectable } from '@angular/core';

@Injectable()
export class ContenedoresService {
  private contenedores:any =
  [
    {
      nombre: "Renault",
      bio_1: "Sala de ventas",
      bio_2: "En Manizales, Caldas, se realizó una sala de ventas para la marca francés de automóviles Renault, hecha de un contenedor de 20 pies que cuenta con los colores corporativos para conservar la identidad de la marca. Los laterales son en vidrio, ideales para aumentar la magnitud visual del proyecto, con el fin de llamar la atención de sus potenciales clientes. Adicionalmente, puede ser trasladada de un lugar a otro para asegurar su operación en diferentes lugares de Colombia.",
      bio_3: "E-Containers Colombia brinda a sus usuarios los mejores productos del sector y en el tiempo oportuno para poner en marcha el desarrollo de cada uno de sus proyectos, por eso las salas de ventas son fabricadas bajo los más altos estándares de calidad y con los mejores acabados.",
      img_0: "assets/imgs/contenedores/renault-0.jpg",
      img: "assets/imgs/contenedores/renault-1.jpg",
      img_1: "assets/imgs/contenedores/renault-2.jpg",
      img_2: "assets/imgs/contenedores/planos/renault.jpg",
      img_3: "assets/imgs/contenedores/renault-3.jpg",
      img_4: "assets/imgs/contenedores/renault-4.jpg",
      tipo: "arquitectonico"

    },
    {
      nombre: "Biblioteca pública",
      bio_1: "Proyecto arquitectónico",
      bio_2: "Dentro de los proyectos que ha realizado E-Containers Colombia, se presenta unabiblioteca pública, en compañía del Ministerio de Cultura, ubicada en la veredaSanta Helena del municipio de Mesetas, Meta. Esta consta de 5 contenedores, 3de 20 pies y 2 de 40 pies, los cuales fueron restaurados y adaptados para lasnecesidades del municipio en temas culturales. La biblioteca pública cuenta con paneles solares para su funcionamiento y elpróximo 6 de marzo será dotada de aproximadamente 1.400 libros, suministradospor las Bibliotecas Nacionales, con el objetivo de facilitar la circulación y el accesoa la información hacia un mayor conocimiento y fortalecer los procesos de lecturay escritura.",
      img_0: "assets/imgs/contenedores/biblioteca-0.jpg",
      img: "assets/imgs/contenedores/biblioteca-1.jpg",
      img_1: "assets/imgs/contenedores/biblioteca-2.jpg",
      img_2: "assets/imgs/contenedores/planos/biblioteca.jpg",
      img_3: "assets/imgs/contenedores/biblioteca-3.jpg",
      img_4: "assets/imgs/contenedores/biblioteca-4.jpg",
      tipo: "arquitectonico"
    },
    {
      nombre: "Cromantic",
      bio_1: "Showroom",
      bio_2: "E-Containers presenta sus soluciones para espacios comerciales, los cuales están diseñados para dar una solución versátil y diferente al negocio del cliente, generando valor agregado y haciendo realidad su sueño con un proyecto arquitectónico innovador. Cromantic, una marca de maquillaje se suma a la tendencia de confiar temas de mercadeo y publicidad montando una exhibición de sus productos en un contenedor.",
      img_0: "assets/imgs/contenedores/cromantic-0.jpg",
      img: "assets/imgs/contenedores/cromantic-1.jpg",
      img_1: "assets/imgs/contenedores/cromantic-2.jpg",
      img_2: "assets/imgs/contenedores/planos/cromantic.jpg",
      img_3: "assets/imgs/contenedores/cromantic-3.jpg",
      img_4: "assets/imgs/contenedores/cromantic-4.jpg",
      tipo: "sala de venta"
    },
    {
      nombre: "Datacom",
      bio_1: "Proyecto de almacenamiento ",
      bio_2: "Los contenedores se han convertido en soluciones de almacenaje para grandes empresas. Data Storage es una empresa especializara en almacenamiento de datos que hoy se suman a la gran lista de nuestros clientes. Un proyecto con más de 60 contenedores como solución de almacenamiento de información. La empresa Data Storage, especialista es una empresa especializada en almacenamiento de datos que hoy se suman a la gran lista de nuestros clientes. Conoce el proyecto completo en el enlace adjunto.",
      img_0: "assets/imgs/contenedores/dussan-0.jpg",
      img: "assets/imgs/contenedores/dussan-1.jpg",
      img_1: "assets/imgs/contenedores/dussan-2.jpg",
      img_2: "assets/imgs/2.jpg",
      img_3: "assets/imgs/contenedores/dussan-3.jpg",
      img_4: "assets/imgs/contenedores/dussan-4.jpg",
      tipo: "bodega"

    },
    {
      nombre: "Bodegas",
      bio_1: "Soluciones de almacenamiento",
      bio_2: "Las bodegas presentadas por E-Containers son espacios diseñados paragarantizar la seguridad y disponibilidad inmediata de los elementos que serequieran almacenar.Ideales para preservar y organizar herramientas, equipos, materiales, productos y materia prima necesarios para el avance y cumplimiento de todos sus proyectos,estas unidades se adaptan fácilmente según sus necesidades:- Las unidades de E-Containers cuentan con excelente presentación que mejoranel aspecto de la obra y resalta la imagen del proyecto.- Es una unidad impermeable, que garantiza la protección de los elementosalmacenados.- La bodega se adapta a todo requerimiento según las necesidades yespecificaciones de los equipos que se van almacenar.- Distribución eléctrica que brinda iluminación interna y garantiza la conectividadde los equipos.- Instalación de divisiones internas que generan diferentes espacios en la mismazona.- Aislamiento termo-acústico para regular la temperatura.",
      img_0: "assets/imgs/contenedores/bodega-0.jpg",
      img: "assets/imgs/contenedores/bodega-1.jpg",
      img_1: "assets/imgs/contenedores/bodega-2.jpg",
      img_2: "assets/imgs/2.jpg",
      img_3: "assets/imgs/contenedores/bodega-3.jpg",
      img_4: "assets/imgs/contenedores/bodega-4.jpg",
      tipo: "bodega"

    },
    {
      nombre: "Horizontes",
      bio_1: "Sala de ventas",
      bio_2: "Una sala de ventas de 20 pies con recubrimientos y forrados internos, y detalles en deck para el exterior, es la solución para llamar la atención de sus clientes y lograr la mayor cantidad de ventas para su proyecto.",
      img_0: "assets/imgs/contenedores/horizontes-0.jpg",
      img: "assets/imgs/contenedores/horizontes-1.jpg",
      img_1: "assets/imgs/contenedores/horizontes-2.jpg",
      img_2: "assets/imgs/contenedores/planos/horizontes.jpg",
      img_3: "assets/imgs/contenedores/horizontes-3.jpg",
      img_4: "assets/imgs/contenedores/horizontes-4.jpg",
      tipo: "sala de venta"

    },
    {
      nombre: "Naguará",
      bio_1: "Proyecto arquitectónico",
      bio_2: "Un espacio creado a partir de un contenedor marítimo de 20 pies,cumple con la función de cocina y restaurante de arepas venezolanas. La unidad cuenta con acometidas hidraúlicas, tomas de 220v y 110v para los equipos de cocina, una barra exterior para atención al público y con todas las comodidades exigidas por el cliente.",
      img_0: "assets/imgs/contenedores/naguara-0.jpg",
      img: "assets/imgs/contenedores/naguara-1.jpg",
      img_1: "assets/imgs/contenedores/naguara-2.jpg",
      img_2: "assets/imgs/contenedores/planos/naguara.jpg",
      img_3: "assets/imgs/contenedores/naguara-3.jpg",
      img_4: "assets/imgs/contenedores/naguara-4.jpg",
      tipo: "arquitectonico"

    },
    {
      nombre: "Acqua",
      bio_1: "Sala de ventas",
      bio_2: "Esta sala de ventas se encuentra ubicada en Valledupar, se caracteriza por tener un diseño moderno y funcional, por la calidad de sus materiales y acabados, y su ubicación estratégica.",
      img_0: "assets/imgs/contenedores/acqua-0.jpg",
      img: "assets/imgs/contenedores/acqua-1.jpg",
      img_1: "assets/imgs/contenedores/acqua-2.jpg",
      img_2: "assets/imgs/contenedores/planos/acqua.jpg",
      img_3: "assets/imgs/contenedores/acqua-3.jpg",
      img_4: "assets/imgs/contenedores/acqua-4.jpg",
      tipo: "sala de venta"


    },
    {
      nombre: "Reefer Line",
      bio_1: "Contenedores refrigerados",
      bio_2: "Los contenedores refrigerados pueden ser utilizados en cualquier condición de ambiente y son totalmente seguros, gracias a su construcción a base de acero. Este tipo de unidades sirven para almacenar farmacéuticos, cárnicos, flores, frutas, verduras, y cualquier producto perecedero que necesite estar en temperaturas entre -25 a 25 grados centígrados.",
      img_0: "assets/imgs/contenedores/refrigerado-0.jpg",
      img: "assets/imgs/contenedores/refrigerado-1.jpg",
      img_1: "assets/imgs/contenedores/refrigerado-2.jpg",
      img_2: "assets/imgs/refrigerado_plano.jpg",
      img_3: "assets/imgs/contenedores/refrigerado-3.jpg",
      img_4: "assets/imgs/contenedores/refrigerado-4.jpg",
      vinculo: "Más Información",
      tipo: "refrigerado"

    },
    {
      nombre: "Mall Turístico (Ilarco)",
      bio_1: "Proyecto arquitectónico",
      bio_2: "Ubicado en el km 13 vía al aeropuerto, en Pozos Colorados, Santa Marta. Un complejo de restaurantes, Zona C, hecho en 5 contenedores de 40 y 4 de 20 pies. Una idea auténtica e innovadora llena de coloridos ambientes que inspiran dinamismo y alegría, reflejando así los aires de la Costa Pacifica colombiana.",
      img_0: "assets/imgs/contenedores/santamarta-1.jpg",
      img: "assets/imgs/contenedores/santamarta-1.jpg",
      img_1: "assets/imgs/contenedores/santamarta-2.jpg",
      img_2: "assets/imgs/contenedores/planos/ilarco.jpg",
      img_3: "assets/imgs/contenedores/santamarta-4.jpg",
      img_4: "assets/imgs/contenedores/santamarta-5.jpg",
      tipo: "arquitectonico"

    },
    {
      nombre: "Pontificia Universidad Javeriana",
      bio_1: "Proyecto arquitectónico",
      bio_2: "La adecuación y el diseño de interiores hace parte de nuestros valores agregados en nuestros productos y servicios, un ambiente propicio según la función y la necesidad de cada uno de nuestros clientes a partir de arquitectura sustentable y renovable este complejo esta Ubicado en La Pontificia Universidad Javeriana - Bogota.",
      img_0: "assets/imgs/contenedores/bogota-1.jpg",
      img: "assets/imgs/contenedores/bogota-1.jpg",
      img_1: "assets/imgs/contenedores/bogota-2.jpg",
      img_2: "assets/imgs/contenedores/planos/javeriana.jpg",
      img_3: "assets/imgs/contenedores/bogota-0.jpg",
      img_4: "assets/imgs/contenedores/bogota-5.jpg",
      tipo: "arquitectonico"

    }
  ];




  constructor() { }

  getContenedores(){
    return this.contenedores;
  }

  getContenedor(idx: string) {
    return this.contenedores[idx];
  }


}
export interface Contenedor{
  nombre:string;
  bio_1:string;
  bio_2:string;
  bio_3?:string;
  img_0:string;
  img:string;
  img_1:string;
  img_2:string;
  img_3:string;
  img_4:string;
  vinculo?:string;
  tipo:string;
}
