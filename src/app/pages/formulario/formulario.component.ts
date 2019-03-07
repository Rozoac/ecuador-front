import { Component } from '@angular/core';
import { TipoCliente } from '../../models/tipoCliente.model';
import { CorreoService, IMessage } from '../../service/correo.service';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public ciudades;
  public segmentos;
  tipoId = 1;
  tipoCliente: TipoCliente[] = [ {tipo: 'Natural' }, {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];
  forma: FormGroup;
  message: IMessage = {
    documento: {
      tipo_documento: '',
      numero: ''
    },
    id_ciudad: '¿Cual es tu ciudad mas cercana?',
    tipo_cliente: {
      tipo: 'Tipo de cliente',
      nombre: ''
    },
    id_segmento: '¿En que estas interesado?',
    modalidad: '¿Lo quieres para?',
    id_pais: '5c3ce3835d14850017167207',
    fuente: 'Landing'
  };

  constructor(private appService: CorreoService, public router: Router, public _landingService: LandingService) {
    this.forma = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        id_ciudad: new FormControl(
          '¿Cual es tu ciudad mas cercana?',
          Validators.required
        ),
        cel: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{1,10}'),
          Validators.minLength(10)
        ]),
        id_segmento: new FormControl(
          '¿En que estas interesado?',
          Validators.required
        ),
        correo: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]),
        modalidad: new FormControl('¿Lo quieres para?', Validators.required),
        tipo_cliente: new FormControl('Tipo de cliente', Validators.required),
        autorizo: new FormControl(''),
        mensaje: new FormControl(),
        cedula: new FormControl(),
        nit: new FormControl()
      },
      {
        validators: this.validacionCampos(
          'id_ciudad',
          'id_segmento',
          'modalidad',
          'tipo_cliente'
        )
      }
    );
  }

  validacionCampos(
    campo1: string,
    campo2: string,
    campo3: string,
    campo4: string
  ) {
    return (group: FormGroup) => {
      const id_ciudad = group.controls[campo1].value;
      const id_segmento = group.controls[campo2].value;
      const para = group.controls[campo3].value;
      const cliente = group.controls[campo4].value;

      if (
        id_ciudad !== '¿Cual es tu ciudad mas cercana?' &&
        id_segmento !== '¿En que estas interesado?' &&
        para !== '¿Lo quieres para?' &&
        cliente !== 'Tipo de cliente'
      ) {
        return null;
      }
      return {
        validado: true
      };
    };
  }

  sendEmail(message) {
    if (!this.forma.value.autorizo) {
      swal({
        type: 'error',
        title: `campos por llenar`,
        showConfirmButton: true
      });
      return;
    }

    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        localStorage.setItem('comercial', JSON.stringify(res));
        this.router.navigate(['gracias']);
      },
      error => {
        swal({
          type: 'error',
          title: `error ${error.message}`,
          showConfirmButton: true
        });
      }
    );
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

  onEvent(evento) {
    if ((evento.source.value.tipo === 'Natural') && (evento.isUserInput = true)) {
      this.message.documento.tipo_documento = 'Cedula';
      console.log(this.message);
    return;
  } if ((evento.source.value.tipo !== 'Natural' && (evento.isUserInput = true)) ) {
     this.message.documento.tipo_documento = 'NIT';
  }
  console.log(evento);
  // return;
}

  ngOnInit() {
   this._landingService.getCiudades().subscribe((res: any) => {
    this.ciudades = res.ciudades;
   });
   this._landingService.getSegmentos().subscribe((res: any) => {
    this.segmentos = res.segmento;
   });
  }
}
