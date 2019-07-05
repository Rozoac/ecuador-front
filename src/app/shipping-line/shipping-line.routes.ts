import { RouterModule, Routes } from '@angular/router';
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

const freightForwardingRoutes: Routes = [
    {
        path: '',
        component: InicioShippingLineComponent,
    },
    {
        path: 'conocenos',
        component: ConocenosComponent,
    },
    {
        path: 'contacto',
        component: ContactoComponent,
    },
    {
        path: 'transporte-maritimo',
        component: TransporteMaritimoComponent,
    },
     {
        path: 'transporte-aereo',
        component: TransporteAereoComponent,
    },
    
     {
        path: 'mas-informacion',
        component: MasInformacionComponent,
    },
    
     {
        path: 'que-ofrecemos',
        component: QueOfrecemosComponent,
    },
    
     {
        path: 'transporte-terrestre',
        component: TransporteTerrestreComponent,
    },
    
     {
        path: 'logistica-integral',
        component: LogisticaIntegralComponent,
    },
    
     {
        path: 'intermediacion-aduanera',
        component: IntermediacionAduaneraComponent,
    },
    
     {
        path: 'seguros',
        component: SegurosComponent,
    },
    
     {
        path: 'almacenamientos',
        component: AlmacenamientosComponent,
    }
];


export const PAGES_ROUTES = RouterModule.forChild( freightForwardingRoutes );
