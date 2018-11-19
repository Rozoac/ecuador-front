import { Component, OnInit } from '@angular/core';
import { Payu } from '../models/payu.model';
import { HttpClient } from '@angular/common/http';
import { PayuService } from '../service/payu.service';

@Component({
  selector: "app-payu",
  templateUrl: "./payu.component.html",
  styles: []
})
export class PayuComponent implements OnInit {
  public payuMessage: Payu = {};
  public prueba = "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu";
  public body = { referenceCode: "", amount: 0 };
  public disablePaymentButton = true;

  constructor(public http: HttpClient, public _payu: PayuService) {
    this.body = {
      referenceCode: "123456Refrigerado" + "-" + new Date().getMilliseconds(),
      amount: 15000
    };
    this._payu.getComercio(this.body).subscribe(
      datos => {
        console.log(datos);
        this.payuMessage.merchantId = datos.merchantId;
        this.payuMessage.referenceCode = this.body.referenceCode;
        this.payuMessage.description = "Contenedor Refrigerado";
        this.payuMessage.amount = this.body.amount;
        this.payuMessage.tax = 0;
        this.payuMessage.taxReturnBase = 0;
        this.payuMessage.signature = datos.signature;
        this.payuMessage.accountId = datos.accountId;
        this.payuMessage.currency = datos.currency;
        this.payuMessage.buyerFullName = "Juan Rozo";
        this.payuMessage.buyerEmail = "rozoacg@gmail.com";
        this.payuMessage.shippingAddress = "Calle 123";
        this.payuMessage.shippingCity = "Bogotá";
        this.payuMessage.shippingCountry = "COL";
        this.payuMessage.telephone = "3232205135";
        this.payuMessage.test = 1;
        this.disablePaymentButton = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}

  enviarPago(res) {
    return res.submit();
  }
}
