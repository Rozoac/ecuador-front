import { Component, OnInit } from '@angular/core';
import { CorreoService, IMessageP } from '../../service/correo.service';
import swal from 'sweetalert2'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';




@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {
  message: IMessageP = {
    asunto:"Seleccione",
    tipo: "Seleccione",
    alquileroventa: "Seleccione",
    producto: "Seleccione"
  };

  forma:FormGroup;


  constructor( private appService:CorreoService ) {

    this.forma = new FormGroup({
      'asunto': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'tipo': new FormControl('Seleccione', Validators.required),
      'id': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'motivo': new FormControl('', Validators.required),
      'alquileroventa': new FormControl('', Validators.required),
      'producto': new FormControl('', Validators.required)
    });

  }

  sendEmail(message: IMessageP) {
    this.appService.sendEmailPQRS(message).subscribe(res => {
      console.log('AppComponent Success', res);
      swal({
        type: 'success',
        title: 'El mensaje ah sido enviado',
        showConfirmButton: false,
        timer: 3000
      })
      this.forma.reset({
        asunto:"Seleccione",
        nombre:"",
        telefono:"",
        tipo:"Seleccione",
        id:"",
        correo:"",
        motivo:"",
        alquileroventa:"Seleccione",
        producto:"Seleccione"
      })
    }, error => {
      console.log('AppComponent Error', error);
    })
  }


  ngOnInit() {
  }

}
