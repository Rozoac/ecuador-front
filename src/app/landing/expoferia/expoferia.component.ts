import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoCliente } from '../../models/tipoCliente.model';
import { IMessage, CorreoService, Ciudad } from '../../service/correo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { MatOptionSelectionChange } from '@angular/material';
import { LeadService } from '../../service/lead/lead.service';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-expoferia',
  templateUrl: './expoferia.component.html',
  styleUrls: ['./expoferia.component.css']
})
export class ExpoferiaComponent implements OnInit {

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
  message = {

    nombre: '',
    empresa: '',
    correo: '',
    celular: '',
    cargo: '',
    requerimiento: ''
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
    private toastr: ToastrService,
    public _leadService: LeadService,
    public router: ActivatedRoute,
    public router2: Router,
    private appService: CorreoService,
    public _landingService: LandingService,
  ) {
    this.interes = [  {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];

    this.firstFormGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      cargo: new FormControl('', [Validators.required]),
      requerimiento: new FormControl('', [Validators.required])
    });
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

  sendEmail(message) {
    // this.disabled = true;
    this.appService.sendEmailExpo(message).subscribe(
      res => {
        this.toastr.info('Cliente guardado en base de datos', 'Guardado', {
          progressBar: true
        });
        this.limpiar();
      },
      error => {
        console.log(error);
      }
    );
    console.log(message);
  }

  limpiar() {
    this. message = {
      nombre: '',
    empresa: '',
    correo: '',
    celular: '',
    cargo: '',
    requerimiento: ''
    };
   }

}
