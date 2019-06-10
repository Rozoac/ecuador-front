import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacenamientos',
  templateUrl: './almacenamientos.component.html',
  styleUrls: ['./almacenamientos.component.css']
})
export class AlmacenamientosComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }

}
