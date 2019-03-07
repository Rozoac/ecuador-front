import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCliente } from '../models/tipoCliente.model';
import { CorreoService, IMessage, Ciudad } from '../service/correo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LandingService } from '../services/landing.service';
import { Payu } from '../models/payu.model';
import { PayuService } from '../service/payu.service';
import { MatOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  public ciudades: Ciudad[];
  public payuMessage: Payu = {};
  public prueba = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu';
  public body = { referenceCode: '', amount: 0 };
  public disablePaymentButton = true;
  public contenedor_maritimo = 'CONTENEDORES MARÍTIMOS';
  public disabled = false;
  public payu = null;
  public tipoId = 1;
  public maritimo = false;
  public estandar = false;
  public casa = false;
  public tailor = false;
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
    fuente: 'Landing'
  };
  public active = false;
  interes: TipoCliente[];
  interes2: string[];
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
          console.log(contenedor);
          if (contenedor.contenedor.tipo === 'Contenedores Refrigerados') {
            this.interes = [  {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];
              }
              if (contenedor.contenedor.tipo !== 'Contenedores Refrigerados') {
                // tslint:disable-next-line:max-line-length
                this.interes = [ {tipo: 'Natural' }, {tipo: 'Empresa', nombre: '' }, {tipo: 'Contratación estatal' , nombre: ''}];
              }
          this.contenedor = contenedor.contenedor;
          this.message.id_segmento = this.contenedor.id_segmento;
          // this.message.tipo = this.contenedor.tipo;
          // if (this.contenedor.tipo === 'Contenedores Maritimos') {
          //   this.maritimo = true;
          // }
          if (this.contenedor.tipo === 'Productos Especiales') {
            this.estandar = true;
          }
          if (this.contenedor.tipo === 'Tailor made') {
            this.tailor = true;
          }
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
      // interes: new FormControl('', Validators.required),
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
    // this.tipoCliente2 = [
    //   { Id: 1, name: 'Empresa' },
    //   { Id: 2, name: 'Contratación estatal' }
    // ];

    this._landingService.getCiudades().subscribe( (res: any) => {
      this.ciudades = res.ciudades;
      console.log(res);
    });

  }

  signature(valor) {
    this.nombre_producto = valor.nombre;
    this.body = {
      referenceCode: Number(Math.ceil(Math.random() * 1000000)).toFixed(),
      amount: valor.valor
    };
    this._payu.getComercio(this.body).subscribe(
      datos => {
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

  pagosOnline() {
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
    if (tipo === 'Piscina container') {
      return 'assets/imgs/piscina-principal.png';
    }
    if (tipo === 'Unidades comerciales') {
      return 'assets/imgs/arquitectonicos/unidad-comercial.png';
    }
    if (tipo === 'Casa 1') {
      return 'assets/imgs/arquitectonicos/unidad-comercial.png';
    }
    if (tipo === 'Casa 2') {
      return 'assets/imgs/arquitectonicos/unidad-comercial.png';
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

  validacionCampos(
    campo1: string,
    campo3: string,
    campo4: string
  ) {
    return (group: FormGroup) => {
      const ciudad = group.controls[campo1].value;
      // const modalidad = group.controls[campo2].value;
      const para = group.controls[campo3].value;
      const cliente = group.controls[campo4].value;

      if (
        ciudad !== '¿Cual es tu ciudad mas cercana?' &&
        // modalidad !== '¿En que estas interesado?' &&
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

  tipoContenedor(tipo: string) {
    this.maritimo = false;
    // this.message.tipo = tipo;
    this.contenedor.tipo = tipo;
  }
  tipoContenedorVivienda() {
    this.estandar = false;
    this.casa = true;

  }

  seleccionVivienda(tipo) {
    if (tipo === 1 ) {
      this.contenedor.tipo = 'Casa 1';
      this.tipo_vivienda = tipo;
      this.casa = false;
    } else {
      this.contenedor.tipo = 'Casa 2';
      this.tipo_vivienda = tipo;
      this.casa = false;
    }
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
    this.disabled = true;

    // message.tipo_estandar = this.tipo_estandar;
    // message.tipo_casa = this.tipo_vivienda;
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



}
