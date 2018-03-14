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
            { path: '', redirectTo:'/home' ,pathMatch: 'full' }
          ] },
  {
          path: 'admin',
          component: AdminComponent,
          children: [
            { path: 'graficas', component: GraficasComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo:'dashboard' ,pathMatch: 'full' }
          ] },
          { path: 'login', component: LoginComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
