import { Component, OnInit } from '@angular/core';
import { Payu } from '../../../models/payu.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PayuService } from '../../../service/payu.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tailor-made',
  templateUrl: './tailor-made.component.html',
  styleUrls: ['./tailor-made.component.css']
})
export class TailorMadeComponent implements OnInit {

  public payuMessage: Payu = {};
  public prueba = 'https://checkout.payulatam.com/ppp-web-gateway-payu';
  public body = { referenceCode: '', amount: 0 };
  public disablePaymentButton = true;
  filteredOptions: Observable<string[]>;
  payuFormGroup: FormGroup;
  ciudad_control = new FormControl();
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

  constructor(public _payu: PayuService) { 
    
  }



  ngOnInit() {

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
    this.filteredOptions = this.ciudad_control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.ciudades.filter(option =>
      option.toLowerCase().includes(filterValue)
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

  enviarPago(res) {
    return res.submit();
  }
  

  getErrorMessage(campo: string, form: string) {
    return this.payuFormGroup.get(`${campo}`).hasError('required')
      ? `Debes ingresar un ${campo}`
      : this.payuFormGroup.get(`${campo}`).hasError('email')
        ? 'No es un email valido'
        : '';
  }

}
