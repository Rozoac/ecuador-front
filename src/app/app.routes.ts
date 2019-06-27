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
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { LeadComponent } from './admin/lead/lead.component';
import { ComercialComponent } from './admin/comercial/comercial.component';
import { ListaComponent } from './admin/lista/lista.component';
import { DashboardRedesComponent } from './admin/dashboard-redes/dashboard-redes.component';
import { GraciasComponent } from './info/gracias/gracias.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CotizacionComponent } from './landing/cotizacion.component';
import { PayuComponent } from './landing/payu.component';
import { PayuResponseComponent } from './landing/payu-response.component';
import { RefrigeradosComponent } from './landing/landing/refrigerados.component';
import { ArquitectonicosComponent } from './landing/landing/arquitectonicos/arquitectonicos.component';
import { ProductosArquitectonicosComponent } from './landing/arquitectonicos/productos-arquitectonicos/productos-arquitectonicos.component';
import { PagosOnlineComponent } from './landing/pagos/pagos-online/pagos-online.component';
import { NotFoundComponent } from './pages/shared/not-found/not-found.component';
import { TailorMadeComponent } from './landing/arquitectonicos/tailor-made/tailor-made.component';
import { EncuestaSatisfaccionComponent } from './pages/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { EncuestasComponent } from './admin/encuestas/encuestas.component';
import { RespuestaComponent } from './admin/encuestas/respuesta/respuesta.component';
import { GraciasGuard } from './services/guards/gracias.guard';
import { TerminosYCondicionesComponent } from './landing/pagos/terminos-y-condiciones/terminos-y-condiciones.component';
import { DevolucionesYReembolsosComponent } from './landing/pagos/devoluciones-y-reembolsos/devoluciones-y-reembolsos.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { UsuarioComponent } from './admin/admin-usuarios/usuario/usuario.component';
import { InboxComponent } from './admin/inbox/inbox.component';
import { MisNegociosComponent } from './admin/mis-negocios/mis-negocios.component';
import { NegocioComponent } from './admin/negocio/negocio.component';
import { TransporteComponent } from './admin/transporte/transporte.component';
import { SegmentosComponent } from './pages/segmentos/segmentos.component';
import { ExpoferiaComponent } from './landing/expoferia/expoferia.component';
import { ShippingLineComponent } from './shipping-line/shipping-line.component';
import { InicioShippingLineComponent } from './shipping-line/inicio-shipping-line/inicio-shipping-line.component';
import { ConocenosComponent } from './shipping-line/conocenos/conocenos.component';
import { ContactoComponent } from './shipping-line/contacto/contacto.component';
import { TransporteMaritimoComponent } from './shipping-line/servicios/transporte-maritimo/transporte-maritimo.component';
import { TransporteAereoComponent } from './shipping-line/servicios/transporte-aereo/transporte-aereo.component';
import { MasInformacionComponent } from './shipping-line/mas-informacion/mas-informacion.component';
import { QueOfrecemosComponent } from './shipping-line/que-ofrecemos/que-ofrecemos.component';
import { TransporteTerrestreComponent } from './shipping-line/servicios/transporte-terrestre/transporte-terrestre.component';
import { IntermediacionAduaneraComponent } from './shipping-line/servicios/intermediacion-aduanera/intermediacion-aduanera.component';
import { SegurosComponent } from './shipping-line/servicios/seguros/seguros.component';
import { AlmacenamientosComponent } from './shipping-line/servicios/almacenamientos/almacenamientos.component';
import { LogisticaIntegralComponent } from './shipping-line/servicios/logistica-integral/logistica-integral.component';
import { ReeferComponent } from './reefer/reefer/reefer.component';

import { HomeComponent } from './reefer/home/home.component';

import { ProductosYServiciosComponent } from './reefer/productos-y-servicios/productos-y-servicios.component';
import { ContenedoresComponent } from './reefer/contenedores/contenedores.component';

import { ComoFuncionaUnReeferComponent } from './reefer/como-funciona-un-reefer/como-funciona-un-reefer.component';

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
        {
          path: 'freight-forwarding',
          component: ShippingLineComponent,
          children: [
            { path: 'inicio', component: InicioShippingLineComponent},
            { path: 'conocenos', component: ConocenosComponent},
            { path: 'contacto', component: ContactoComponent },
            { path: 'mas-informacion', component: MasInformacionComponent },
            { path: 'que-ofrecemos', component: QueOfrecemosComponent },
            { path: 'transporte-maritimo', component: TransporteMaritimoComponent },
            { path: 'transporte-aereo', component: TransporteAereoComponent },
            { path: 'transporte-terrestre', component: TransporteTerrestreComponent },
            { path: 'logistica-integral', component: LogisticaIntegralComponent },
            { path: 'intermediacion-aduanera', component: IntermediacionAduaneraComponent },
            { path: 'seguros', component: SegurosComponent },
            { path: 'almacenamiento', component: AlmacenamientosComponent },
            { path: '', redirectTo: 'inicio' , pathMatch: 'full' },
          ]
        },
        {
           path: 'reefer',
           component: ReeferComponent,
           children: [
             {
              path: 'inicio',
              component: HomeComponent
             },
             {
              path: 'productos-y-servicios',
              component: ProductosYServiciosComponent,
              children: [
                  {
                   path: 'contenedores-de-20-y-40-pies',
                   component: ContenedoresComponent
                  },
                  {
                    path: 'como-funciona-un-reefer',
                    component: ComoFuncionaUnReeferComponent
                  },
                  {
                    path: '',
                    redirectTo: 'contenedores-de-20-y-40-pies',
                    pathMatch: 'full'
                  }
              ]
              },
              {
               path: '',  redirectTo: 'inicio' , pathMatch: 'full'
              }
           ]
          },
          { path: 'tailor-made', component: TailorMadeComponent },
          { path: 'arquitectonicos/:id', component: ProductosArquitectonicosComponent },
          { path: 'arquitectonicos', component: ArquitectonicosComponent },
          { path: 'detalles', component: SegmentosComponent},
          { path: 'landing', component: LandingComponent },
          { path: 'refrigerados', component: RefrigeradosComponent },
          { path: 'payu', component: PayuComponent },
          { path: 'pagos-online', component: PagosOnlineComponent },
          { path: 'pagos-online/terminos-y-condiciones', component: TerminosYCondicionesComponent },
          { path: 'pagos-online/devolucion-y-reembolsos', component: DevolucionesYReembolsosComponent },
          { path: 'payu-response', component: PayuResponseComponent },
          { path: 'cotizacion/:nombre', component: CotizacionComponent },
          { path: 'gracias', component: GraciasComponent, canActivate: [GraciasGuard], },
          { path: 'login', component: LoginComponent },
          { path: 'expoferia', component: ExpoferiaComponent },
          // { path: '**',  component: NotFoundComponent },

  {
          path: 'admin',
          component: AdminComponent ,
          canActivate: [LoginGuardGuard],
          children: [
            { path: 'comerciales', component: GraficasComponent, data: { titulo: 'Leads'} },
            { path: 'usuarios', component: AdminUsuariosComponent, data: { titulo: 'Usuarios'} },
            { path: 'transporte', component: TransporteComponent, data: { titulo: 'Cotización de transporte'} },
            { path: 'inbox', component: InboxComponent, data: { titulo: 'Inbox'} },
            { path: 'mis-negocios', component: MisNegociosComponent, data: { titulo: 'Mis Negocios'} },
            { path: 'negocio/:id', component: NegocioComponent, data: { titulo: 'Negocio'} },
            { path: 'usuarios/usuario/:id', component: UsuarioComponent, data: { titulo: 'Usuario'} },
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'redes-sociales', component: DashboardRedesComponent, data: { titulo: 'Redes-Sociales'} },
            { path: 'encuestas', component: EncuestasComponent, data: { titulo: 'Encuestas'} },
            { path: 'encuestas/id', component: RespuestaComponent, data: { titulo: 'Clientes'} },
            { path: 'lista', component: ListaComponent },
            { path: 'lead/:id', component: LeadComponent },
            { path: 'comercial/:id/:inicio/:fin', component: ComercialComponent },
            { path: '', redirectTo: 'dashboard' , pathMatch: 'full' },
            // { path: '**',  component: NotFoundComponent },
          ] }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  scrollPositionRestoration: 'enabled'
});
