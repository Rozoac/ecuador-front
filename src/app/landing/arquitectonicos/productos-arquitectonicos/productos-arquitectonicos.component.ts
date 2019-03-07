import { Component, OnInit } from '@angular/core';
import { ArquitectonicosService } from '../../../service/arquitectonicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMessage, CorreoService, Ciudad } from '../../../service/correo.service';
import { LandingService } from '../../../services/landing.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatOptionSelectionChange } from '@angular/material';
import { TipoCliente } from '../../../models/tipoCliente.model';

@Component({
  selector: 'app-productos-arquitectonicos',
  templateUrl: './productos-arquitectonicos.component.html',
  styleUrls: ['./productos-arquitectonicos.component.css']
})
export class ProductosArquitectonicosComponent implements OnInit {
  public ciudades: Ciudad[];
  public contenedor;
  isLinear = true;
  filteredOptions: Observable<string[]>;
  firstFormGroup: FormGroup;
  ciudad_control = new FormControl();
  secondFormGroup: FormGroup;
  message: IMessage = {
    documento: {
      tipo_documento: '',
      numero: ''
    },
    modalidad: 'Compra',
    id_segmento: '5c4f3d456a1be30017d8f038',
    tipo_cliente: {
      tipo: '',
      nombre: ''
    },
    id_pais: '5c3ce3835d14850017167207',
    fuente: 'Landing'
  };
  interes: TipoCliente[] =  [  {tipo: 'Natural' }, {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];
  // tslint:disable-next-line:max-line-length

  constructor(public _landingService: LandingService, public _arquitectonicosService: ArquitectonicosService,
     public router: ActivatedRoute, public router2: Router, private appService: CorreoService) {
    this.firstFormGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      ciudad: new FormControl('', [Validators.required]),
      tipo_cliente: new FormControl('', [Validators.required]),
      mensaje: new FormControl(),
      documento: new FormControl(),
      modalidad: new FormControl(),
    });
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.contenedor = this._arquitectonicosService.getArquitectonico(params['id']);
      this.tipoDeProyecto();
      console.log(this.contenedor);

   });

   this._landingService.getCiudades().subscribe( (res: any) => {
    this.ciudades = res.ciudades;
    console.log(res);
  });
  }

  


  tipoDeProyecto() {
    // this.message.tipo = 'Productos Especiales';
    if (this.contenedor.nombre === 'Unidades Comerciales' || this.contenedor.nombre === 'Piscina Container') {
      // this.message.tipo_estandar = this.contenedor.nombre;
    }
    if (this.contenedor.nombre === 'Casa tipo 1' || this.contenedor.nombre === 'Casa tipo 2') {
      // this.message.tipo_casa = this.contenedor.nombre;
    }
  }


  getErrorMessage(campo: string, form: string) {
    return this.firstFormGroup.get(`${campo}`).hasError('required')
      ? `Debes ingresar un ${campo}`
      : this.firstFormGroup.get(`${campo}`).hasError('email')
        ? 'No es un email valido'
        : '';
  }



  sendEmail(message: IMessage) {
    console.log(message);

    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        localStorage.setItem('comercial', JSON.stringify(res));
        this.router2.navigate(['gracias']);
      },
      error => {
        console.log(message);

      }
    );
  }


  onEvent(evento: MatOptionSelectionChange) {
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
}
