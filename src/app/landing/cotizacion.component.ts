import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCliente } from '../models/tipoCliente.model';
import { CorreoService, IMessage } from '../service/correo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LandingService } from '../services/landing.service';
import { Payu } from '../models/payu.model';
import { PayuService } from '../service/payu.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  public payuMessage: Payu = {};
  public prueba = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu';
  public body = { referenceCode: '', amount: 0 };
  public disablePaymentButton = true;
  public contenedor_maritimo = 'CONTENEDORES MARÍTIMOS';

  payu= null;
  tipoId = 1;
  maritimo = false;
  estandar = false;
  casa = false;
  tailor = false;
  // -------------------------
  // TIPO DE PROYECTO ESTANDAR
  // -------------------------
  tipo_vivienda: string;
  tipo_estandar: string;
  // -----------------------------
  // FIN TIPO DE PROYECTO ESTANDAR
  // -----------------------------
  precio;
  nombre_producto;
  seasons = [
    { nombre: '1 a 2 ', valor: 630000 },
    { nombre: '3 a 4 ', valor: 1890000 },
    { nombre: '5 a 6 ', valor: 3290000 },
    { nombre: '7 a 8 ', valor: 4590000 },
    { nombre: '9 a 12 ', valor: 6890000 },
    { nombre: '13 a 15', valor: 8890000 },
    { nombre: '16 a 20', valor: 11890000 }
  ];
  carga = true;
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

  interes: string[]
  interes2: string[]

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
  payuFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tercerFormGroup: FormGroup;

  constructor(
    public router: ActivatedRoute,
    public router2: Router,
    private appService: CorreoService,
    public _landingService: LandingService,
    public _payu: PayuService
  ) {
    this.contenedor_id = router.params.subscribe(res => {
      _landingService
        .getContenedor(res['nombre'])
        .subscribe((contenedor: any) => {
          if(contenedor.contenedor.tipo === 'Contenedores Refrigerados'){
            
            this.interes = [ 'Empresa', 'Contratación estatal']
              }
              if(contenedor.contenedor.tipo !== 'Contenedores Refrigerados'){
                this.interes = ['Natural' ,'Empresa', 'Contratación estatal'];
              }
          this.contenedor = contenedor.contenedor;
          this.message.tipo = this.contenedor.tipo;
          // if (this.contenedor.tipo === 'Contenedores Maritimos') {
          //   this.maritimo = true;
          // }
          if (this.contenedor.tipo === 'Productos Especiales') {
            this.estandar = true;
          }
          if (this.contenedor.tipo === 'Tailor made') {
            this.tailor = true;
          }
          console.log(this.contenedor);
          this.carga = false;
        });
    });

    this.payuFormGroup = new FormGroup({
      nombre_payu: new FormControl('', [Validators.required]),
      seleccion_payu: new FormControl('', [Validators.required]),
      celular_payu: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      email_payu: new FormControl('', [Validators.required, Validators.email]),
      ciudad_payu: new FormControl('', [Validators.required]),
      direccion_payu: new FormControl('', [Validators.required])
    });

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

  signature(valor) {
    this.nombre_producto = valor.nombre;
    this.body = {
      referenceCode: Number(Math.ceil(Math.random() * 1000000)).toFixed(),
      amount: valor.valor
    };
    this._payu.getComercio(this.body).subscribe(
      datos => {
        console.log(datos);
        this.payuMessage.merchantId = datos.merchantId;
        this.payuMessage.referenceCode = this.body.referenceCode;
        this.payuMessage.description = `${valor.nombre} Contenedores`;
        this.payuMessage.amount = this.body.amount;
        this.payuMessage.tax = 0;
        this.payuMessage.taxReturnBase = 0;
        this.payuMessage.signature = datos.signature;
        this.payuMessage.accountId = datos.accountId;
        this.payuMessage.currency = datos.currency;
        this.payuMessage.shippingCountry = 'COL';
        this.payuMessage.test = 0;
        this.disablePaymentButton = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  pagosOnline(){
   this.router2.navigate(['/pagos-online']);
  }

  enviarPago(res) {
    return res.submit();
  }

  imagenContenedor(tipo: string) {
    if (tipo === 'Oficinas') {
      return 'assets/imgs/oficina.png';
    }
    if (tipo === 'Contenedores Maritimos') {
      return 'assets/imgs/contenedores/bodega-2.png';
    }
    if (tipo === 'Bodegas') {
      return 'assets/imgs/contenedores/bodega-2.png';
    }
    if (tipo === 'Bodegas') {
      return 'assets/imgs/contenedores/bodega-2.png';
    }
    if (tipo === 'Bodegas') {
      return 'assets/imgs/contenedores/bodega-2.png';
    }
    if (tipo === 'Contenedores Refrigerados') {
      return 'assets/imgs/conte-refi (1).png';
    }
    if (tipo === 'Proyectos Especiales o Arquitectonicos') {
      return 'assets/imgs/contenedor-6.png';
    }
    if (tipo === 'Salas de Ventas') {
      return 'assets/imgs/contenedor-salas-de-ventas.png';
    }
    if (tipo === 'Productos Especiales') {
      return 'assets/imgs/contenedor5.png';
    }
    if(tipo === 'Piscina container'){
      return 'assets/imgs/piscina-principal.png'
    }
    if(tipo === 'Unidades comerciales'){
      return 'assets/imgs/arquitectonicos/unidad-comercial.png'
    }
    if(tipo === 'Casa 1'){
      return 'assets/imgs/arquitectonicos/unidad-comercial.png'
    }
    if(tipo === 'Casa 2'){
      return 'assets/imgs/arquitectonicos/unidad-comercial.png'
    }
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
    this.maritimo = false;
    this.message.tipo = tipo;
    this.contenedor.tipo = tipo;
  }
  tipoContenedorVivienda() {
    this.estandar = false;
    this.casa = true;

  }

  seleccionVivienda(tipo) {
    this.contenedor.tipo = tipo;
    this.tipo_vivienda = tipo;
    this.casa = false;
  }
  seleccionEstandar(tipo) {
    this.contenedor.tipo = tipo;
    this.tipo_estandar = tipo;
    this.estandar = false;
  }

  volver(ruta) {
    if (ruta === 'estandar') {
      this.casa = false;
      this.estandar = true;
    }
  }

  // botonHallowen(mensaje) {
  //   this.halloween = mensaje;
  //   this.halloweenActivo = true;
  //   this.active = false;
  // }
  activarModal() {
    this.active = true;
  }

  sendEmail(message: IMessage) {
    console.log(message);

    message.tipo_estandar = this.tipo_estandar;
    message.tipo_casa = this.tipo_vivienda;
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        // swal({
        //   type: 'success',
        //   title:
        //     '¡Muchas Gracias! Proximamente un asesor comercial se estará comunicando contigo.',
        //   showConfirmButton: false,
        //   timer: 3000
        // });

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

    this.filteredOptions = this.ciudad_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
}
