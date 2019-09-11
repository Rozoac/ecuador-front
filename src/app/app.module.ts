import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { MatMenuModule } from '@angular/material/menu';

registerLocaleData(localeEs);

import { APP_ROUTING } from './app.routes';
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
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  DateAdapter,
  MOMENT
} from 'angular-calendar';

import { MatTabsModule } from '@angular/material/tabs';

// servicios
import {ContenedoresService} from './service/contenedores.service';
import {PortafolioService} from './service/portafolio.service';
import {TrabajosService} from './service/trabajos.service';
import { CorreoService } from './service/correo.service';
import { SidebarService } from './service/sidebar.service';
import { UsuarioService } from './service/usuario/usuario.service';
import { LeadService } from './service/lead/lead.service';
import { ContadorService } from './service/contador.service';
import { GraficaService } from './service/grafica.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { RolService } from './service/rol.service';
import { SegmentoService } from './service/segmento.service';
import { PaisService } from './service/pais.service';
import moment from 'moment-timezone';

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
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatTableModule,
  MatRadioModule,
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';

// guardias
import { LoginGuardGuard } from './services/guards/login-guard.guard';

// apis
import { AgmCoreModule } from '@agm/core';
  import 'hammerjs';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ChartsModule } from 'ng2-charts';
import { MyDatePickerModule } from 'mydatepicker';

import { NguCarouselModule } from '@ngu/carousel';
import { ToastrModule } from 'ngx-toastr';
import { CounterModule } from 'angular-circle-counter';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { QuillModule } from 'ngx-quill';
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
import { RefrigeradosComponent } from './landing/landing/refrigerados.component';
import { EncuestaSatisfaccionComponent } from './pages/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { InboxService } from './service/inbox.service';
import { environment } from '../environments/environment.prod';
import { SharedService } from './service/shared.service';
import { HeaderLandingComponent } from './landing/shared/header-landing/header-landing.component';
import { FooterLandingComponent } from './landing/shared/footer-landing/footer-landing.component';
import { SegmentosComponent } from './pages/segmentos/segmentos.component';

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

    NombrePipe,
    CiudadPipe,

    HoraPipe,
    ComercialPipe,

    GraciasComponent,
    LandingComponent,
    CotizacionComponent,
    RmEtiquetasPipe,

    RefrigeradosComponent,
    EncuestaSatisfaccionComponent,
  
    ImagenPipe,
  
    SegmentosComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    NgxPageScrollCoreModule,
    MatButtonModule,
    NgxAutoScrollModule,
    MatPaginatorModule,
    MatMenuModule,
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
    MatTabsModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatTableModule,
    NgMultiSelectDropDownModule.forRoot(),
    QuillModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxImageZoomModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
