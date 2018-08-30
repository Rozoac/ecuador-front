import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import "confetti-js";


@Component({
  selector: 'app-aniversario',
  templateUrl: './aniversario.component.html',
  styleUrls: ['./aniversario.component.css']
})
export class AniversarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  popup(){
    swal({
      imageUrl: "assets/images/Invitacion2.gif",
      showConfirmButton: false
    });
  }

}
