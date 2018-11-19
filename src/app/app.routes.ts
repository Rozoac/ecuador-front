import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {QuienesSomosComponent} from './pages/quienes-somos/quienes-somos.component';
import {TrabajaConNosotrosComponent} from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import {ContenedorComponent} from './pages/contenedor/contenedor.component';
import {CompromisoEmpresarialPComponent} from './pages/compromiso-empresarial-p/compromiso-empresarial-p.component';
import {PqrsComponent} from './pages/pqrs/pqrs.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {GraficasComponent} from './admin/graficas/graficas.component';
import {AdminComponent} from './admin/admin.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { LeadComponent } from './admin/lead/lead.component';
import { ComercialComponent } from './admin/comercial/comercial.component';
import { ListaComponent } from './admin/lista/lista.component';
import { DashboardRedesComponent } from './admin/dashboard-redes/dashboard-redes.component';
import { GraciasComponent } from './info/gracias/gracias.component';
import { AniversarioComponent } from './aniversario/aniversario.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CotizacionComponent } from './landing/cotizacion.component';
import { PayuComponent } from './landing/payu.component';
import { PayuResponseComponent } from './landing/payu-response.component';
import { RefrigeradosComponent } from './landing/landing/refrigerados.component';
import { ArquitectonicosComponent } from './landing/landing/arquitectonicos/arquitectonicos.component';
import { ProductosArquitectonicosComponent } from './landing/arquitectonicos/productos-arquitectonicos/productos-arquitectonicos.component';
import { PagosOnlineComponent } from './landing/pagos/pagos-online/pagos-online.component';

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
            { path: 'contenedor/:id', component: ContenedorComponent },
            { path: '', redirectTo: 'home' , pathMatch: 'full' }
          ] },

          { path: 'aniversario', component: AniversarioComponent },
          { path: 'landing', component: LandingComponent },
          { path: 'arquitectonicos', component: ArquitectonicosComponent },
          { path: 'arquitectonicos/:id', component: ProductosArquitectonicosComponent },
          { path: 'refrigerados', component: RefrigeradosComponent },
          { path: 'payu', component: PayuComponent },
          { path: 'pagos-online', component: PagosOnlineComponent },
          { path: 'payu-response', component: PayuResponseComponent },
          { path: 'cotizacion/:nombre', component: CotizacionComponent },
          { path: 'gracias', component: GraciasComponent },

  {
          path: 'admin',
          component: AdminComponent ,
          canActivate: [LoginGuardGuard],
          children: [
            { path: 'comerciales', component: GraficasComponent, data: { titulo: 'Leads'} },
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'redes-sociales', component: DashboardRedesComponent, data: { titulo: 'Redes-Sociales'} },
            { path: 'lista', component: ListaComponent },
            { path: 'lead/:id', component: LeadComponent },
            { path: 'comercial/:id/:inicio/:fin', component: ComercialComponent },
            { path: '', redirectTo: 'dashboard' , pathMatch: 'full' }
          ] },
          { path: 'login', component: LoginComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
