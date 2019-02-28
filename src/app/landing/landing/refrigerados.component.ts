import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoCliente } from '../../models/tipoCliente.model';
import { IMessage, CorreoService } from '../../service/correo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from '../../services/landing.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-refrigerados',
  templateUrl: './refrigerados.component.html',
  styleUrls: ['../cotizacion.component.css']
})
export class RefrigeradosComponent implements OnInit {
  
  public body = { referenceCode: '', amount: 0 };

  tipoId = 1;

  
  carga = true;
  carga2 = true;
  ciudad_control = new FormControl();
  datos_control = new FormControl();
  filteredOptions: Observable<string[]>;
  tipoCliente: TipoCliente[];
  tipoCliente2: TipoCliente[];
  displayedColumns: string[] = ['Nombre', 'Celular', 'Correo', 'Ciudad'];
  message: IMessage = {};
  halloweenActivo = false;
  halloween;
  public active = false;

  interes: string[] = ['Empresa', 'Contratación estatal'];

  ciudades: string[] = [
    'Armenia',
    'Barranca',
    'Barranquilla',
    'Bogotá',
    'Bucaramanga',
    'Cali',
    'Ibagué',
    'Maicao',
    'Manizales',
    'Medellín',
    'Otros',
    'Pereira',
    'Riohacha',
    'Santa Marta',
    'Valledupar',
    'Villavicencio'
  ];
  contenedor: any;
  contenedor_id: any;
  forma: FormGroup;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tercerFormGroup: FormGroup;

  constructor(
    public router: ActivatedRoute,
    public router2: Router,
    private appService: CorreoService,
    public _landingService: LandingService
  ) {
    this.message.tipo = 'Contenedores Refrigerados'; 
    this.firstFormGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      ciudad: new FormControl('', [Validators.required])
    });
    this.secondFormGroup = new FormGroup({
      cliente: new FormControl('', [Validators.required]),
      nit: new FormControl(),
      cedula: new FormControl(),
      interes: new FormControl('', Validators.required)
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
        interes: new FormControl(
          '¿En que estas interesado?',
          Validators.required
        ),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]),
        para: new FormControl('¿Lo quieres para?', Validators.required),
        cliente: new FormControl('Tipo de cliente', Validators.required),
        autorizo: new FormControl('', Validators.required),
        mensaje: new FormControl(),
        cedula: new FormControl(),
        nit: new FormControl()
      },
      {
        validators: this.validacionCampos(
          'ciudad',
          'interes',
          'para',
          'cliente'
        )
      }
    );
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
    campo2: string,
    campo3: string,
    campo4: string
  ) {
    return (group: FormGroup) => {
      const ciudad = group.controls[campo1].value;
      const interes = group.controls[campo2].value;
      const para = group.controls[campo3].value;
      const cliente = group.controls[campo4].value;

      if (
        ciudad !== '¿Cual es tu ciudad mas cercana?' &&
        interes !== '¿En que estas interesado?' &&
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
    if (this.message.name === 'juan rozo') {
      this.router2.navigate(['gracias']);
    }
  }

  tipoContenedor(tipo: string) {
    this.message.tipo = tipo;
    this.contenedor.tipo = tipo;
  }
  

  sendEmail(message: IMessage) {
    this.carga2 = false;
    console.log(message);
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        localStorage.setItem('comercial', JSON.stringify(res));
        this.carga2 = true;
        this.router2.navigate(['gracias']);
      },
      error => {
        console.log(message);
        // swal({
        //   type: 'error',
        //   title: `error ${error.message}`,
        //   showConfirmButton: true
        // });
        this.router2.navigate(['gracias']);
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.ciudades.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit() {
    this.tipoCliente = [
      { Id: 1, name: 'Natural' },
      { Id: 2, name: 'Empresa' },
      { Id: 3, name: 'Contratación estatal' }
    ];
    this.tipoCliente2 = [
      { Id: 1, name: 'Empresa' },
      { Id: 2, name: 'Contratación estatal' }
    ];
    this.carga2 = true;
    this.filteredOptions = this.ciudad_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
}
