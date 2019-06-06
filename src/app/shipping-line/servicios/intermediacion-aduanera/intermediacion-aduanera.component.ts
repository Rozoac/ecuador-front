import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intermediacion-aduanera',
  templateUrl: './intermediacion-aduanera.component.html',
  styleUrls: ['./intermediacion-aduanera.component.css']
})
export class IntermediacionAduaneraComponent implements OnInit {

  public rellax;
  public rellax_title;

  constructor() {  }
  ngOnInit() {
    this.rellax = new Rellax('.rellax');
    this.rellax = new Rellax('.rellax-title', {
    });

  }

}
