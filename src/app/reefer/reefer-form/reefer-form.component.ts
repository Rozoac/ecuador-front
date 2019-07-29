import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { CorreoService, IMessage, Ciudad } from '../../service/correo.service';
import { LeadService } from '../../service/lead/lead.service';
import { LandingService } from '../../services/landing.service';
import { PayuService } from '../../service/payu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reefer-form',
  templateUrl: './reefer-form.component.html',
  styleUrls: ['./reefer-form.component.css']
})
export class ReeferFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  tipoCliente = [];
  ciudades: Ciudad[];
  tiposDeCliente = [];

  message = {
    nombre: '',
    apellido: '',
    correo: '',
    celular: '',
    id_ciudad: '',
    mensaje: '',
    modalidad: '',
    documento: {
      tipo_documento: 'NIT',
      numero: ''
    },
    tipo_cliente: {
      tipo: '5ca53c81c2ba0b0017eccd87',
      nombre: ''
    },
    id_pais: '5c3ce3835d14850017167207',
    fuente: 'Landing',
    id_segmento: '5c4f3d7f6a1be30017d8f03b'
  };

  constructor(
    public _landingService: LandingService,
    public router2: Router,
    public _leadService: LeadService,
    public appService: CorreoService
  ) {
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
      mensaje: new FormControl(''),
      documento: new FormControl('', [Validators.required]),
      // interes: new FormControl('', Validators.required),
      modalidad: new FormControl(
        '¿En que estas interesado?',
        Validators.required
      ),
    });
  }

  enviar(message: IMessage) {
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        localStorage.setItem('comercial', JSON.stringify(res));
        this.router2.navigate(['gracias']);
      },
      error => {
        console.log(error);
      }
    );
  }

  onEvent(evento: any) {
    if ((evento.source.value.tipo === '5ca53c81c2ba0b0017eccd87') && (evento.isUserInput = true)) {
       this.message.documento.tipo_documento = 'Cedula';
    return;
    } if ((evento.source.value.tipo !== '5ca53c81c2ba0b0017eccd87' && (evento.isUserInput = true))) {
       this.message.documento.tipo_documento = 'NIT';
    }
  }

  ngOnInit() {
    this.tipoCliente = [
      { Id: 1, name: 'Natural' },
      { Id: 2, name: 'Empresa' },
      { Id: 3, name: 'Contratación estatal' }
    ];

    this._landingService.getCiudades().subscribe( (res: any) => {
      this.ciudades = res.ciudades;
      console.log(res);
    });

    this._leadService.getTiposDeCliente().subscribe( (res: any) => {
      this.tiposDeCliente = res.tipoCliente;
      console.log(this.tiposDeCliente);
    });
  }
}
