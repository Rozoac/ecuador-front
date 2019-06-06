import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte-aereo',
  templateUrl: './transporte-aereo.component.html',
  styleUrls: ['./transporte-aereo.component.css']
})
export class TransporteAereoComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }
}
