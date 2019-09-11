import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {QuienesSomosComponent} from './pages/quienes-somos/quienes-somos.component';
import {TrabajaConNosotrosComponent} from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import {ContenedorComponent} from './pages/contenedor/contenedor.component';
import {CompromisoEmpresarialPComponent} from './pages/compromiso-empresarial-p/compromiso-empresarial-p.component';
import {PqrsComponent} from './pages/pqrs/pqrs.component';
import {LoginComponent} from './login/login.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { GraciasComponent } from './info/gracias/gracias.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CotizacionComponent } from './landing/cotizacion.component';
import { RefrigeradosComponent } from './landing/landing/refrigerados.component';
import { EncuestaSatisfaccionComponent } from './pages/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { GraciasGuard } from './services/guards/gracias.guard';
import { SegmentosComponent } from './pages/segmentos/segmentos.component';

const APP_ROUTES: Routes = [
  {
          path: '',
          component: PagesComponent,
          children: [
            { path: 'home', component: HomepageComponent },
            { path: 'quienes-somos', component: QuienesSomosComponent },
            { path: 'compromiso-empresarial', component: CompromisoEmpresarialPComponent },
            { path: 'trabaja', component: TrabajaConNosotrosComponent },
            { path: 'pqrs', component: PqrsComponent },
            { path: 'encuesta-satisfaccion/:id', component: EncuestaSatisfaccionComponent },
            { path: 'contenedor/:id', component: ContenedorComponent },
            { path: '', redirectTo: 'home' , pathMatch: 'full' },
            // { path: '**',  component: NotFoundComponent }
          ] },
          
          { path: 'detalles', component: SegmentosComponent},
          { path: 'landing', component: LandingComponent },
          { path: 'refrigerados', component: RefrigeradosComponent },
          { path: 'cotizacion/:nombre', component: CotizacionComponent },
          { path: 'gracias', component: GraciasComponent, canActivate: [GraciasGuard], },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  scrollPositionRestoration: 'enabled'
});
