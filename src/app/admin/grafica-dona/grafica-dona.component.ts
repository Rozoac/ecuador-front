import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Compras' , 'Alquiler'];
  public doughnutChartData: number[] = [0, 0];
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
