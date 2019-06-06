
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte-terrestre',
  templateUrl: './transporte-terrestre.component.html',
  styleUrls: ['./transporte-terrestre.component.css']
})
export class TransporteTerrestreComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }

}
