import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';



@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  negocio: any;
  tiempo;
  tiempo2;
  persona: any;

  constructor(public _leadService: LeadService, public activateRouter: ActivatedRoute, config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    this.getLead();
  }

  getLead() {
    this.activateRouter.params.subscribe((resp: any) => {
        this._leadService.getLead(resp.id).subscribe( (res: any) => {
          console.log((res));
          this.negocio = res;
          this.tiempo = res.lead.estado.primerPaso.fecha_inicial;
          this.tiempo2 = moment(this.tiempo).locale('es').fromNow();
          this.persona = res.lead.id_cliente;
          console.log(this.persona);
        });
    });
  }

  estado(estado) {
    console.log(estado);
  }

  ngOnInit() {}

}
