import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoCliente } from '../../models/tipoCliente.model';
import { IMessage, CorreoService, Ciudad } from '../../service/correo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { MatOptionSelectionChange } from '@angular/material';
import { LeadService } from '../../service/lead/lead.service';

@Component({
  selector: 'app-refrigerados',
  templateUrl: './refrigerados.component.html',
  styleUrls: ['../cotizacion.component.css']
})
export class RefrigeradosComponent implements OnInit {
  public tiposDeCliente: any;
  public ciudades: Ciudad[];
  public disabled = false;
  public tipoId = 1;
  carga = true;
  ciudad_control = new FormControl();
  datos_control = new FormControl();
  filteredOptions: Observable<string[]>;
  tipoCliente;
  tipoCliente2: TipoCliente[];
  displayedColumns: string[] = ['Nombre', 'Celular', 'Correo', 'Ciudad'];
  message: IMessage = {
    documento: {
      tipo_documento: '',
      numero: ''
    },
    tipo_cliente: {
      tipo: '',
      nombre: ''
    },
    id_pais: '5c3ce3835d14850017167207',
    fuente: 'Landing',
    id_segmento: '5c4f3d7f6a1be30017d8f03b'
  };
  public active = false;
  interes: TipoCliente[];
  interes2: string[];
  contenedor: any;
  contenedor_id: any;
  forma: FormGroup;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tercerFormGroup: FormGroup;

  constructor(
    public _leadService: LeadService,
    public router: ActivatedRoute,
    public router2: Router,
    private appService: CorreoService,
    public _landingService: LandingService,
  ) {
    this.interes = [  {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];

    this.firstFormGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      ciudad: new FormControl('', [Validators.required])
    });
    this.secondFormGroup = new FormGroup({
      tipo_cliente: new FormControl('', [Validators.required]),
      mensaje: new FormControl(''),
      documento: new FormControl('', [Validators.required]),
      modalidad: new FormControl(
        '¿En que estas interesado?',
        Validators.required
      ),
    });
    this.forma = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        ciudad: new FormControl(
          '¿Cual es tu ciudad mas cercana?',
          Validators.required
        ),
        cel: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{1,10}'),
          Validators.minLength(10)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]),
        para: new FormControl('¿Lo quieres para?', Validators.required),
        cliente: new FormControl('Tipo de cliente', Validators.required),
        autorizo: new FormControl('', Validators.required),
        mensaje: new FormControl(),
        documento: new FormControl()
      },
      {
        validators: this.validacionCampos(
          'ciudad',
          'para',
          'cliente'
        )
      }
    );
  }
  ngOnInit() {
    this.tipoCliente = [
      { Id: 1, name: 'Natural' },
      { Id: 2, name: 'Empresa' },
      { Id: 3, name: 'Contratación estatal' }
    ];
    this._landingService.getCiudades().subscribe( (res: any) => {
      this.ciudades = res.ciudades;
    });

    this._leadService.getTiposDeCliente().subscribe( (res: any) => {
      this.tiposDeCliente = res.tipoCliente;
      console.log(this.tiposDeCliente);
    });

  }
  enviarPago(res) {
    return res.submit();
  }

  imagenContenedor(tipo: string) {
      return 'assets/imgs/conte-refi (1).png';
  }

  getErrorMessage(campo: string, form: string) {
    return this.firstFormGroup.get(`${campo}`).hasError('required')
      ? `Debes ingresar un ${campo}`
      : this.firstFormGroup.get(`${campo}`).hasError('email')
        ? 'No es un email valido'
        : '';
  }
  getErrorMessage2(campo: string, form: string) {
    return this.secondFormGroup.get(`${campo}`).hasError('required')
      ? `Debes ingresar un ${campo}`
      : this.secondFormGroup.get(`${campo}`).hasError('email')
        ? 'No es un email valido'
        : '';
  }
  onEvent(evento: MatOptionSelectionChange) {
      if ((evento.source.value.tipo === 'Natural') && (evento.isUserInput = true)) {
        this.message.documento.tipo_documento = 'Cedula';
        console.log(this.message);
      return;
    } if ((evento.source.value.tipo !== 'Natural' && (evento.isUserInput = true)) ) {
       this.message.documento.tipo_documento = 'NIT';
    }
  }
  validacionCampos(
    campo1: string,
    campo3: string,
    campo4: string
  ) {
    return (group: FormGroup) => {
      const ciudad = group.controls[campo1].value;
      const para = group.controls[campo3].value;
      const cliente = group.controls[campo4].value;
      if (
        ciudad !== '¿Cual es tu ciudad mas cercana?' &&
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

  admin() {
    if (this.message.nombre === 'juan rozo') {
      this.router2.navigate(['gracias']);
    }
  }

  sendEmail(message: IMessage) {
    this.disabled = true;
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log('AppComponent Success', res);
         localStorage.setItem('comercial', JSON.stringify(res));
        this.router2.navigate(['gracias']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
