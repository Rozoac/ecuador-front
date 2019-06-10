import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistica-integral',
  templateUrl: './logistica-integral.component.html',
  styleUrls: ['./logistica-integral.component.css']
})
export class LogisticaIntegralComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }

}
