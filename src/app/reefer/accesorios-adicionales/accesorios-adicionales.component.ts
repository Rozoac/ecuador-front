import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesorios-adicionales',
  templateUrl: './accesorios-adicionales.component.html',
  styleUrls: ['./accesorios-adicionales.component.css']
})
export class AccesoriosAdicionalesComponent implements OnInit {
  accesorioSelecionado: any = {};

  accesoriosAdicionales: any = [
    {
      id: '1',
      titulo: 'CONECTIVIDAD Y ENERGÍA PORTABLE',
      image: 'energia',
      // tslint:disable-next-line:max-line-length
      descripcion: `El Genset es un generador de electricidad que funciona con un motor diesel de 20 HP. Se encarga de alimentar de corriente eléctrica a los contenedores reefer durante el transporte por carretera.`
    },
    {
      id: '2',
      titulo: 'LÁMPARAS, TOMAS Y OTROS',
      image: 'lamparas',
      // tslint:disable-next-line:max-line-length
      descripcion: `Contamos con lámparas herméticas que permiten darle luz interior a nuestros contenedores refrigerados. Lo cual ayuda a tener mejor visibilidad y una mejor manipulación a los productos.. `
    },
    {
      id: '3',
      titulo: 'CORTINAS PARA CONSERVACIÓN DE FRÍO',
      image: 'cortina',
      // tslint:disable-next-line:max-line-length
      descripcion: `Las cortinas de plástico ayudan a evitar el escape de refrigeración en los contenedores refrigerados cuando sus puertas estén abiertas, también evitan contaminación cuando se están manipulando productos alimenticios. `
    }
  ];

  constructor() {
   this.accesorioSelecionado = this.accesoriosAdicionales[0];
  }

  seleccionar(id: string) {
    this.accesorioSelecionado = this.accesoriosAdicionales.find((e) => e.id === id);
  }

  ngOnInit() {}

}
