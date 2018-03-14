import { Component } from '@angular/core';
// import { Contacto } from '../../models/contacto.model';
import { CorreoService, IMessage } from '../../service/correo.service';
import swal from 'sweetalert2'
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
message: IMessage = {
  ciudad:"¿Cual es tu ciudad mas cercana?",
  tipo: "¿En que estas interesado?",
  para: "¿Lo quieres para?"

};
// ciudades:any[]=[
//
//         {id:1,nombre:'Barranquilla'},
//         {id:2,nombre:'Bogotá'},
//         {id:3,nombre:'Bucaramanga'},
//         {id:4,nombre:'Cali'},
//         {id:5,nombre:'Cartagena'},
//         {id:6,nombre:'Medellin'},
//         {id:7,nombre:'Otros'},
//         {id:8,nombre:'Santa Marta'},
//         {id:9,nombre:'Villavicencio'}
// 	];
//
//   selectedElement:any= 2;

  forma:FormGroup;


  constructor( private appService:CorreoService ) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'ciudad': new FormControl('¿Cual es tu ciudad mas cercana?', Validators.required),
      'cel': new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,10}")]),
      'interes': new FormControl('¿En que estas interesado?', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'para': new FormControl('¿Lo quieres para?', Validators.required),
      'autorizo': new FormControl('', Validators.required),
      'mensaje': new FormControl()
    })

  }




  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
      swal({
        type: 'success',
        title: '¡Muchas Gracias! Proximamente un asesor comercial se estará comunicando contigo.',
        showConfirmButton: false,
        timer: 3000
      })
      this.forma.reset({
        nombre:"",
        ciudad:"¿Cual es tu ciudad mas cercana?",
        cel:"",
        interes:"¿En que estas interesado?",
        email:"",
        para:"¿Lo quieres para?",
        mensaje:""
      })
    }, error => {
      console.log('AppComponent Error', error);
    })
  }






  // guardarCambios() {
  //   // console.log(this.forma);
  //   // console.log(this.forma.value);
  //   this.forma.reset({
  //     nombre:"",
  //     ciudad:"",
  //     cel:"",
  //     interes:"",
  //     email:"",
  //     para:"",
  //     mensaje:""
  //   })
  //
  // }

  // sendEmail(message: IMessage){
  //   this.appService.sendEmail(message).suscribe(res => {
  //     console.log('success', res);
  //   }, error => {
  //     console.log('error', error);
  //   })
  // }

}
