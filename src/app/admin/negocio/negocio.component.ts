import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { Howl } from 'howler';



@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  public negocio: any;
  public tiempo;
  public tiempo2;
  public tiempo3;
  public tiempo4;
  // cargas
  public carga2 = false;
  public carga3 = false;
  public carga4 = false;
  public tiempoInicial_1;
  public tiempoInicial_2;
  public tiempoInicial_3;
  public tiempoInicial_4;
  public tiempoFinal_1;
  public tiempoFinal_2;
  public tiempoFinal_3;
  public tiempoFinal_4;
  public persona: any;
  public estadoGeneral;
  public estado_1_dias: any = 0;
  public estado_2_dias: any = 0;
  public estado_3_dias: any = 0;
  public estado_4_dias: any = 0;
  public id;
  public dos;
  public sound = new Howl({
    src: ['../../../../assets/sounds/cash.mp3']
  });


  constructor(public _leadService: LeadService,
              public activateRouter: ActivatedRoute,
              public  config: NgbProgressbarConfig,
              public toastr: ToastrService) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }

  getLead() {
    this.activateRouter.params.subscribe((resp: any) => {

        this._leadService.getLead(resp.id).subscribe( (res: any) => {
          this.tiempoFinal_1 = moment(res.lead.estado.primerPaso.fecha_final).format('L');
          this.tiempoFinal_2 = moment(res.lead.estado.segundoPaso.fecha_final).format('L');
          this.tiempoFinal_3 = moment(res.lead.estado.tercerPaso.fecha_final).format('L');
          if (res.lead.estado.cuartoPaso.estado) {
            this.tiempoFinal_4 = moment(res.lead.estado.tercerPaso.fecha_final).format('L');
          }
          this.estadoGeneral =  res.lead.estado;
          this.id = res.lead._id;
          this.negocio = res;
          this.tiempo = res.lead.estado.primerPaso.fecha_inicial;
          this.tiempo2 = res.lead.estado.segundoPaso.fecha_inicial;
          this.tiempo3 = res.lead.estado.tercerPaso.fecha_inicial;
          this.tiempoInicial_1 =  moment(this.tiempo).locale('es').fromNow();
          if (res.lead.estado.segundoPaso.estado === true) {
            this.tiempoInicial_2 =  moment(this.tiempo2).locale('es').fromNow();
          }
          if (res.lead.estado.tercerPaso.estado === true) {
            this.tiempoInicial_3 =  moment(this.tiempo3).locale('es').fromNow();
          }
          const cadena = this.tiempoInicial_1.split(' ');
          this.persona = res.lead.id_cliente;
          if (this.tiempoInicial_1 === '1 dia') {
            this.estado_1_dias = 1;
          }
          if (cadena[1] === 'dias') {
            this.estado_1_dias = cadena[0];
          }
        });
    });
  }

  estado(estado) {
    if (estado === 2) {
      this.carga2 = true;
      this._leadService.actualizarUsuario( this.id, '5c5869777933fe00170b515b' ).subscribe ( (res: any) => {
        this.estadoGeneral =  res.lead.estado;
        console.log(this.estadoGeneral);
        this.tiempoInicial_2 =  moment(this.tiempo2).locale('es').fromNow();
        const final = moment(res.lead.estado.primerPaso.fecha_final).format('L');
        this.tiempoFinal_1 = final;
        this.carga2 = false;
        this.toastr.info('Fase terminada', 'Contacto Establecido 📞', {
          progressBar: true
        });
      });
    }
    if (estado === 3) {
      if (this.estadoGeneral.segundoPaso.estado === true) {
        if (!this.estadoGeneral.tercerPaso.fecha_final) {
          this.carga3 = true;
          this._leadService.actualizarUsuario( this.id, '5c5869847933fe00170b515c' ).subscribe ( (res: any) => {
            this.estadoGeneral =  res.lead.estado;
            this.tiempoInicial_3 =  moment(this.tiempo3).locale('es').fromNow();
            const final = moment(res.lead.estado.segundoPaso.fecha_final).format('L');
            this.tiempoFinal_2 = final;
            this.carga3 = false;
            this.toastr.info('Fase terminada', 'Propuesta Realizada 📝', {
              progressBar: true
            });
          });
        }
      }
      return ;
    }
    if (estado === 4) {
      if (this.estadoGeneral.tercerPaso.estado === true) {
        this.carga4 = true;
        this._leadService.actualizarUsuario( this.id, '5c58698b7933fe00170b515d' ).subscribe ( (res: any) => {
          this.carga4 = false;
          this.estadoGeneral =  res.lead.estado;
          this.tiempoInicial_4 =  moment(this.tiempo3).locale('es').fromNow();
          const final = moment(res.lead.estado.tercerPaso.fecha_final).format('L');
          this.tiempoFinal_3 = final;
          this.tiempoFinal_4 = final;
          this.carga4 = false;
          this.sound.play();
          this.toastr.info('Fase terminada', 'Negociación Terminada 💵 💵 💵 💵 💵!! WUUU' , {
            progressBar: true
          });
        });
      }
    }
  }

  ngOnInit() {
    this.getLead();
  }

}
