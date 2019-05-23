import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';

@Component({
  selector: 'app-shipping-line',
  templateUrl: './shipping-line.component.html',
  styleUrls: ['./shipping-line.component.css'],
  animations: [
    // fader,
    // slider,
    // transformer,
    stepper
  ]
})
export class ShippingLineComponent  {

  constructor() { }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
