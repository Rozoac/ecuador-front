import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ContenedoresService } from '../../service/contenedores.service';
import { Router } from '@angular/router';
import { Contacto } from '../../models/contacto.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      console.log(params);
    })



}
}
