
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InicioShippingLineComponent } from '../shipping-line/inicio-shipping-line/inicio-shipping-line.component';
import { ConocenosComponent } from '../shipping-line/conocenos/conocenos.component';
import { ContactoComponent } from '../shipping-line/contacto/contacto.component';
import { TransporteMaritimoComponent } from '../shipping-line/servicios/transporte-maritimo/transporte-maritimo.component';
import { TransporteAereoComponent } from '../shipping-line/servicios/transporte-aereo/transporte-aereo.component';
import { MasInformacionComponent } from '../shipping-line/mas-informacion/mas-informacion.component';
import { QueOfrecemosComponent } from '../shipping-line/que-ofrecemos/que-ofrecemos.component';
import { TransporteTerrestreComponent } from '../shipping-line/servicios/transporte-terrestre/transporte-terrestre.component';
import { LogisticaIntegralComponent } from '../shipping-line/servicios/logistica-integral/logistica-integral.component';
import { IntermediacionAduaneraComponent } from '../shipping-line/servicios/intermediacion-aduanera/intermediacion-aduanera.component';
import { SegurosComponent } from '../shipping-line/servicios/seguros/seguros.component';
import { AlmacenamientosComponent } from '../shipping-line/servicios/almacenamientos/almacenamientos.component';
import { PAGES_ROUTES } from './shipping-line.routes';

@NgModule({
    declarations: [
        InicioShippingLineComponent,
        ConocenosComponent,
        ContactoComponent,
        TransporteMaritimoComponent,
        TransporteAereoComponent,
        MasInformacionComponent,
        QueOfrecemosComponent,
        TransporteTerrestreComponent,
        LogisticaIntegralComponent,
        IntermediacionAduaneraComponent,
        SegurosComponent,
        AlmacenamientosComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PAGES_ROUTES
    ]
})
export class ShippingLineModule { }
