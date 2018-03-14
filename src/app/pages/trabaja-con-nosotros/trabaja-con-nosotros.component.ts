import { Component, OnInit } from '@angular/core';
import { CorreoService, IMessageT } from '../../service/correo.service';
import { TrabajosService } from '../../service/trabajos.service';
import swal from 'sweetalert2'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css']
})
export class TrabajaConNosotrosComponent implements OnInit {

  message: IMessageT = {
    cargo: "¿Cual cargo aplicas?"
  };

  forma:FormGroup;

  trabajos:any[] = [];

  constructor( private _trabajosService:TrabajosService, private appService:CorreoService) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'celular': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'cargo': new FormControl('¿Cual cargo aplicas?', Validators.required)
    });
  }

  sendEmail(message: IMessageT) {
    this.appService.sendEmailT(message).subscribe(res => {
      console.log('AppComponent Success', res);
      swal({
        type: 'success',
        title: 'El mensaje ah sido enviado',
        showConfirmButton: false,
        timer: 3000
      })
      this.forma.reset({
        nombre:"Seleccione",
         celular:"",
        correo:"",
        cargo:"¿Cual cargo aplicas?"
      })
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
    // service
    this.trabajos = this._trabajosService.getTrabajos();

  }

}
