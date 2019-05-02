import { Component, OnInit } from '@angular/core';
import { CorreoService, IMessageT } from '../../service/correo.service';
import { TrabajosService } from '../../service/trabajos.service';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-trabaja-con-nosotros',
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrls: ['./trabaja-con-nosotros.component.css']
})
export class TrabajaConNosotrosComponent implements OnInit {

  message: IMessageT = {
    cargo: '¿Cual cargo aplicas?'
  };
  public hoja: File;
  forma: FormGroup;
  carga = false;
  trabajos: any[] = [];

  constructor( private _trabajosService:TrabajosService, private appService: CorreoService) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'celular': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'cargo': new FormControl('¿Cual cargo aplicas?', Validators.required),
      'hoja': new FormControl('', Validators.required)
    });
  }

  sendEmail(message: IMessageT) {
    this.carga  = true;


    this.appService.sendEmailT(message, this.hoja).then(res => {
      console.log('AppComponent Success', res);
      this.carga = false;
      swal({
        type: 'success',
        title: 'El mensaje ha sido enviado',
        showConfirmButton: false,
        timer: 3000
      });
      this.forma.reset({
        nombre: 'Seleccione',
         celular: '',
        correo: '',
        cargo: '¿Cual cargo aplicas?'
      });
    }, error => {
      this.carga = false;
      console.log('AppComponent Error', error);
    });
  }

  seleccionPdf(archivo: File) {
    if (!archivo) {
      this.hoja = null;
      return;
    }
    if (archivo.type.indexOf('pdf') < 0) {
      swal('Solo PDF', 'El archivo debe ser tipo pdf', 'error');
      this.hoja = null;
      return;
    }
    this.hoja = archivo;
  }

  ngOnInit() {
    // service
    this.trabajos = this._trabajosService.getTrabajos();

  }

}
