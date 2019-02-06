import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { UsuarioService } from '../../service/usuario/usuario.service';

@Component({
  selector: 'app-mis-negocios',
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.scss']
})
export class MisNegociosComponent implements OnInit {
  public datos;
  public leads;
  public total;

  constructor(public _leadService: LeadService, public _usuarioService: UsuarioService) {
    const datos = _usuarioService.getIdentity();
    this.datos = datos;
  }
  ngOnInit() {
    this.getLeadsNuevos();
  }

  getLeadsNuevos() {
    this._leadService.getLeadsVerdes(this.datos.id).subscribe((res: any) => {
      console.log(res);
      this.leads = res.leads;
      this.leads.reverse();
      this.total = res.total;
    });
  }

}
