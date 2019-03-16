import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.scss']
})
export class MisNegociosComponent implements OnInit {
  public datos;
  public leads;
  public leads2;
  public leads3;
  public leads4;
  public total;
  public total2;
  public total3;
  public total4;

  constructor(public _leadService: LeadService, public _usuarioService: UsuarioService, public router: Router) {
    const datos = _usuarioService.getIdentity();
    this.datos = datos;
  }
  ngOnInit() {
    this.getLeadsNuevos();
    this.getLeadsNuevos2();
    this.getLeadsNuevos3();
    this.getLeadsNuevos4();
  }

  getLead(cliente) {
    this.router.navigate([`/admin/negocio/${cliente}`]);
  }

  getLeadsNuevos() {
    this._leadService.getLeadsVerdes(this.datos.id).subscribe((res: any) => {
      console.log(res);
      this.leads = res.leads;
      this.leads.reverse();
      this.total = res.total;
    });
  }
  getLeadsNuevos2() {
    this._leadService.getLeadsVerdes2(this.datos.id).subscribe((res: any) => {
      console.log(res);
      this.leads2 = res.leads;
      this.leads2.reverse();
      this.total2 = res.total;
    });
  }
  getLeadsNuevos3() {
    this._leadService.getLeadsVerdes3(this.datos.id).subscribe((res: any) => {
      console.log(res);
      this.leads3 = res.leads;
      this.leads3.reverse();
      this.total3 = res.total;
    });
  }
  getLeadsNuevos4() {
    this._leadService.getLeadsVerdes4(this.datos.id).subscribe((res: any) => {
      console.log(res);
      this.leads4 = res.leads;
      this.leads4.reverse();
      this.total4 = res.total;
    });
  }

}
