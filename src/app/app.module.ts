import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
registerLocaleData(localeEs);

import {APP_ROUTING} from './app.routes';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

// componentes
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContenedorComponent } from './pages/contenedor/contenedor.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SliderPrincipalComponent } from './pages/slider-principal/slider-principal.component';
import { TrayectoriaComponent } from './pages/trayectoria/trayectoria.component';
import { VentajasComponent } from './pages/ventajas/ventajas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { Formulario2Component } from './pages/formulario-2/formulario-2.component';
import { CompromisoEmpresarialPComponent } from './pages/compromiso-empresarial-p/compromiso-empresarial-p.component';
import { CarrouselComponent } from './pages/carrousel/carrousel.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { PlaneacionComponent } from './pages/planeacion/planeacion.component';
import { PqrsComponent } from './pages/pqrs/pqrs.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { ComercialComponent } from './admin/comercial/comercial.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GraficasComponent } from './admin/graficas/graficas.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './admin/shared/breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { ListaComponent } from './admin/lista/lista.component';
import { DashboardRedesComponent } from './admin/dashboard-redes/dashboard-redes.component';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  DateAdapter,
  MOMENT
} from 'angular-calendar';

// servicios
import {ContenedoresService} from './service/contenedores.service';
import {PortafolioService} from './service/portafolio.service';
import {TrabajosService} from './service/trabajos.service';
import {CorreoService} from './service/correo.service';
import {SidebarService} from './service/sidebar.service';
import { UsuarioService } from './service/usuario/usuario.service';
import { LeadService } from './service/lead/lead.service';
import { ContadorService } from './service/contador.service';
import { GraficaService } from './service/grafica.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { RolService } from './service/rol.service';
import { SegmentoService } from './service/segmento.service';
import { PaisService } from './service/pais.service';
import moment from 'moment';

// Angular Material
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatTableModule,
  MatRadioModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop'




// guardias
import { LoginGuardGuard } from './services/guards/login-guard.guard';

// apis
// import { SweetAlertService } from 'angular-sweetalert-service';
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ChartsModule } from 'ng2-charts';
import { MyDatePickerModule } from 'mydatepicker';
import { GraficaDonaComponent } from './admin/grafica-dona/grafica-dona.component';
import { LeadComponent } from './admin/lead/lead.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ToastrModule } from 'ngx-toastr';
import { CounterModule } from 'angular-circle-counter';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { QuillModule } from 'ngx-quill'



// pipes
import { NombrePipe } from './pipes/nombre.pipe';
import { CiudadPipe } from './pipes/ciudad.pipe';
import { HoraPipe } from './pipes/hora.pipe';
import { ImagenPipe } from './pipes/imagen.pipe';

import { ComercialPipe } from './pipes/comercial.pipe';
import { GraciasComponent } from './info/gracias/gracias.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CotizacionComponent } from './landing/cotizacion.component';
import { RmEtiquetasPipe } from './pipes/rm-etiquetas.pipe';
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
import { TerminosYCondicionesComponent } from './landing/pagos/terminos-y-condiciones/terminos-y-condiciones.component';
import { DevolucionesYReembolsosComponent } from './landing/pagos/devoluciones-y-reembolsos/devoluciones-y-reembolsos.component';
import { CrearUsuarioComponent } from './admin/crear-usuario/crear-usuario.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { UsuarioComponent } from './admin/admin-usuarios/usuario/usuario.component';
import { InboxComponent } from './admin/inbox/inbox.component';
import { InboxService } from './service/inbox.service';
import { environment } from '../environments/environment.prod';
import { SharedService } from './service/shared.service';
import { MisNegociosComponent } from './admin/mis-negocios/mis-negocios.component';
import { NegocioComponent } from './admin/negocio/negocio.component';
import { HeaderLandingComponent } from './landing/shared/header-landing/header-landing.component';
import { FooterLandingComponent } from './landing/shared/footer-landing/footer-landing.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};
export function momentAdapterFactory() {
  return adapterFactory(moment);
}





@NgModule({
  declarations: [
    AppComponent,
    ImagenPipe,
    // TypingAnimationDirective,
    HomepageComponent,
    FooterComponent,
    HeaderLandingComponent,
    FooterLandingComponent,
    QuienesSomosComponent,
    TrabajaConNosotrosComponent,
    ContenedorComponent,
    PortafolioComponent,
    SliderPrincipalComponent,
    TrayectoriaComponent,
    VentajasComponent,
    ClientesComponent,
    FormularioComponent,
    MapaComponent,
    Formulario2Component,
    CompromisoEmpresarialPComponent,
    PlaneacionComponent,
    PqrsComponent,
    ContadorComponent,
    TestimoniosComponent,
    CarrouselComponent,
    PagesComponent,
    LoginComponent,
    DashboardComponent,
    GraficasComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    AdminComponent,
    NombrePipe,
    CiudadPipe,
    GraficaDonaComponent,
    LeadComponent,
    HoraPipe,
    ComercialComponent,
    ComercialPipe,
    ListaComponent,
    DashboardRedesComponent,
    GraciasComponent,
    LandingComponent,
    CotizacionComponent,
    RmEtiquetasPipe,
    PayuComponent,
    PayuResponseComponent,
    RefrigeradosComponent,
    ArquitectonicosComponent,
    ProductosArquitectonicosComponent,
    PagosOnlineComponent,
    NotFoundComponent,
    TailorMadeComponent,
    EncuestaSatisfaccionComponent,
    EncuestasComponent,
    RespuestaComponent,
    TerminosYCondicionesComponent,
    DevolucionesYReembolsosComponent,
    CrearUsuarioComponent,
    AdminUsuariosComponent,
    UsuarioComponent,
    ImagenPipe,
    InboxComponent,
    MisNegociosComponent,
    NegocioComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientJsonpModule,
    MatButtonToggleModule,
    MatSelectModule,
    SweetAlert2Module.forRoot(),
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: momentAdapterFactory
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarMomentDateFormatter
        }
      }
    ),
    MatStepperModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatTableModule,
    NgMultiSelectDropDownModule.forRoot(),
    QuillModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxImageZoomModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NguCarouselModule,
    APP_ROUTING,
    NgxPageScrollModule,
    ParallaxScrollModule,
    CounterModule,
    PerfectScrollbarModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo'
    }),
    ChartsModule,
    MyDatePickerModule
  ],
  entryComponents: [CrearUsuarioComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    {
      provide: MOMENT,
      useValue: moment
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ContenedoresService,
    TrabajosService,
    PortafolioService,
    CorreoService,
    // SweetAlertService,
    InboxService,
    SidebarService,
    UsuarioService,
    RolService,
    SegmentoService,
    PaisService,
    SharedService,
    LoginGuardGuard,
    LeadService,
    ContadorService,
    GraficaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
