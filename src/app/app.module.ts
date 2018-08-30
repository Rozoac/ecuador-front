import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs);

import {APP_ROUTING} from './app.routes';

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
import { InfoComponent } from './info/info.component';
import { DashboardRedesComponent } from './admin/dashboard-redes/dashboard-redes.component';

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
import { NguCarouselModule } from "@ngu/carousel";
import { ToastrModule } from "ngx-toastr";
import { CounterModule } from "angular-circle-counter";
import { ParallaxScrollModule } from "ng2-parallaxscroll";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// pipes
import { NombrePipe } from './pipes/nombre.pipe';
import { CiudadPipe } from './pipes/ciudad.pipe';
import { HoraPipe } from './pipes/hora.pipe';
import { ComercialPipe } from './pipes/comercial.pipe';
import { GraciasComponent } from './info/gracias/gracias.component';
import { AniversarioComponent } from './aniversario/aniversario.component';
import { LandingComponent } from './landing/landing/landing.component';
import { CotizacionComponent } from './landing/cotizacion.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
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
    InfoComponent,
    DashboardRedesComponent,
    GraciasComponent,
    AniversarioComponent,
    LandingComponent,
    CotizacionComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
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
      apiKey: "AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo"
    }),
    ChartsModule,
    MyDatePickerModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es"
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
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    LeadService,
    ContadorService,
    GraficaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
