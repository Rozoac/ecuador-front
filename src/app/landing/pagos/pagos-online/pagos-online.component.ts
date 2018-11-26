import { Component, OnInit } from '@angular/core';
import { Payu } from '../../../models/payu.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PayuService } from '../../../service/payu.service';

@Component({
  selector: 'app-pagos-online',
  templateUrl: './pagos-online.component.html',
  styleUrls: ['./pagos-online.component.css']
})
export class PagosOnlineComponent implements OnInit {
  public payuMessage: Payu = {};
  public body = { referenceCode: '', amount: 0 };
  payuFormGroup: FormGroup;
  cantidad:number = 1;
  tamano:number = 20;
  contenedor: {
    tamano: {
      veinte_pies: 7590000
      cuarenta_pies: 9190000
    }
  }
  iva = 19;
  valor_producto:number = 7590000;
  total = 7590000;
  public prueba = 'https://checkout.payulatam.com/ppp-web-gateway-payu';
  public disablePaymentButton = true;

  total2;

  constructor(public _payu: PayuService) { 
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
  }
  enviarPago(res) {
    this.signature();
    console.log( this.payuMessage);

    setTimeout(()=>{  
      return res.submit();
 }, 3000);
   
  }

  cambiarTamanio(tamano:number){
    if(tamano === 40){
      this.tamano = 40;
      this.valor_producto = 9190000; 
      this.total =  9190000;
      this.cantidad = 1;
      this.signature();
      return
    }
    this.tamano = 20;

    this.valor_producto = 7590000; 
    this.total =  7590000;
    this.cantidad = 1;
    this.signature();

  }

  img:string = "assets/imgs/e-commerce/image-1.png";

  cambiarImagen(ruta){
    let ruta_imagen = `assets/imgs/e-commerce/${ruta}`;
    this.img = ruta_imagen;
  }
  cantidadProducto(numero){
    if(this.cantidad >= 3 && numero > 0 ){
      this.cantidad = 3;
      return
    }
    if(this.cantidad <= 1 && numero < 0 ){
      this.cantidad = 1;
      return
    }
    this.cantidad = this.cantidad + numero;
    this.total = this.valor_producto * this.cantidad;

  }

  signature() {
    this.body = {
      referenceCode: `${Number(Math.ceil(Math.random() * 1000000)).toFixed()}${this.tamano}`,
      amount: (this.total === 7590000) ?  9032100 : 10936100
    };
    this._payu.getComercio(this.body).subscribe(
      datos => {
        console.log(datos);
        this.payuMessage.merchantId = datos.merchantId;
        this.payuMessage.referenceCode = this.body.referenceCode;
        this.payuMessage.description = `Contenedor Maritimo ${this.tamano} Pies` ;
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

  ngOnInit() {
  }

}
