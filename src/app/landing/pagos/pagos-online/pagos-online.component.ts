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
  public payuFormGroup: FormGroup;
  public cantidad = 1;
  public tamano = 20;
  public contenedor: {
    tamano: {
      veinte_pies: 7590000
      cuarenta_pies: 9190000
    }
  };
  public transporte20 = 290000;
  public transporte40 = 490000;
  public iva = 19;
  public valor = false;
  public valor2 = true;
  public valor_producto = 7590000;
  public total = 7590000;
  public prueba = 'https://checkout.payulatam.com/ppp-web-gateway-payu';
  public disablePaymentButton = true;
  public transporte_valor = false;
  public total2;
  public fuente = true;
  public img = 'assets/imgs/e-commerce/image-1.png';
  public estado;

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
    console.log( this.payuMessage);
    setTimeout(() => {
      return res.submit();
    }, 3000);
  }

  cambiarTamanio(tamano: number) {
    if (tamano === 40) {
      if (this.transporte_valor === true) {
        this.tamano = 40;
        this.valor_producto = 9680000;
        this.total =  9680000;
        this.cantidad = 1;
        this.signature(490000);
        return;
      } else {
        this.tamano = 40;
        this.valor_producto = 9190000;
        this.total =  9190000;
        this.cantidad = 1;
        this.signature();
        return;
      }
    }
    this.tamano = 20;
    this.valor_producto = 7590000;
    this.total =  7590000;
    this.cantidad = 1;
    this.signature(290000);
  }


  transporte(estado) {
    this.estado = estado;


    if (this.tamano === 20 ) {
        if (estado === true) {
          if (this.valor_producto < 7870000 ) {
              this.valor_producto +=  290000;
              this.total = this.valor_producto;
              this.signature(290000);
          }
        } else  {
          if (this.valor_producto > 7590000 ) {
             this.valor_producto -=  290000;
             this.total = this.valor_producto;
          }
      }
    }
    if ( this.tamano === 40 ) {
      if ( estado === true) {
        if ( this.valor_producto < 9670000) {
          this.valor_producto +=  490000;
          this.total = this.valor_producto;
          this.signature(490000);
        }
      } else {
        if (this.valor_producto > 9190000 ) {
          this.valor_producto -=  490000;
          this.total = this.valor_producto;
        }
      }
    }
    return;
  }

  cambiarImagen(ruta) {
    const ruta_imagen = `assets/imgs/e-commerce/${ruta}`;
    this.img = ruta_imagen;
  }
  cantidadProducto(numero) {
    if (this.cantidad >= 3 && numero > 0 ) {
      this.cantidad = 3;
      return;
    }
    if (this.cantidad <= 1 && numero < 0 ) {
      this.cantidad = 1;
      return;
    }
    this.cantidad = this.cantidad + numero;
    this.total = this.valor_producto * this.cantidad;
  }

  signature(transporte?) {
    this.body = {
      referenceCode: `${Number(Math.ceil(Math.random() * 1000000)).toFixed()}${this.tamano}`,
      amount: (this.total === 7590000) ?  (9032100 + transporte) : (10936100 + transporte)
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
