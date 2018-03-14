import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
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



// servicios

import {ContenedoresService} from './service/contenedores.service';
import {PortafolioService} from './service/portafolio.service';
import {TrabajosService} from './service/trabajos.service';
import {CorreoService} from './service/correo.service';

import { SweetAlertService } from 'angular-sweetalert-service';

// GOOGLE MAPS API
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GraficasComponent } from './admin/graficas/graficas.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './admin/shared/breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}




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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    ReactiveFormsModule,
    FormsModule,
    NgxCarouselModule,
    APP_ROUTING,
    NgxPageScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo'
    })  ],
  providers: [ContenedoresService, TrabajosService, PortafolioService, CorreoService,SweetAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
