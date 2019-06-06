import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transporte-maritimo',
  templateUrl: './transporte-maritimo.component.html',
  styleUrls: ['./transporte-maritimo.component.css']
})
export class TransporteMaritimoComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }

}
