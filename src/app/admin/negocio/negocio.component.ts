import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { LeadService } from '../../service/lead/lead.service';
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, DAYS_OF_WEEK, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { Howl } from 'howler';
import { Subject, Subscription } from 'rxjs';

moment.updateLocale('es', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
    doy: 0
  }
});


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  public view = 'day';
  public viewDate: Date = new Date();
  public modalData: {å
    action: string;
    event: CalendarEvent;
  };
public mensajes




  actions: CalendarEventAction[] = [
        {
      label: '<i class="fa fa-fw fa-times  text-white"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 3),
      end: addHours(startOfDay(new Date()), 4),
      title: `(${moment().format('LT')} - ${moment().format('LT')})`,
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen = true;

  public mensaje: any;
  public negocio: any;
  public tiempo;
  public tiempo2;
  public tiempo3;
  public tiempo4;
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
  public mensajeAccion = {
    id_tipo: '',
    nombre: '',
    mensaje: '',
    hora_inicio: '',
    hora_fin: ''
  };
  public tipoMensaje;


  constructor(public _leadService: LeadService,
              public activateRouter: ActivatedRoute,
              public  config: NgbProgressbarConfig,
              public toastr: ToastrService,
              private modal: NgbModal) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }

  llenarTipoMensaje(mensaje) {
    console.log(mensaje);
    this.mensajeAccion = {
      id_tipo: mensaje._id,
      nombre: mensaje.nombre,
      mensaje: '',
      hora_inicio: '',
      hora_fin: ''
    };
  }
  agregarTipoMensaje() {
    this._leadService.agregarTipoMensaje(this.mensajeAccion, this.id ).subscribe( (res: any) => {
      console.log(res);
      this.getLead();
    });
  }
  getLead() {
    this.activateRouter.params.subscribe((resp: any) => {
        this._leadService.getLead(resp.id).subscribe( (res: any) => {
          console.log(res.lead.mensaje);
          this.mensajes = res.lead.mensaje;
          this.tiempoFinal_1 = moment(res.lead.estado.primerPaso.fecha_final).calendar();
          this.tiempoFinal_2 = moment(res.lead.estado.segundoPaso.fecha_final).calendar();
          this.tiempoFinal_3 = moment(res.lead.estado.tercerPaso.fecha_final).calendar();
          if (res.lead.estado.cuartoPaso.estado) {
            this.tiempoFinal_4 = moment(res.lead.estado.tercerPaso.fecha_final).calendar();
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
      if (!this.estadoGeneral.segundoPaso.fecha_final) {
      this.carga2 = true;
      this._leadService.actualizarUsuario( this.id, '5c5869777933fe00170b515b' ).subscribe ( (res: any) => {
        this.estadoGeneral =  res.lead.estado;
        this.tiempoInicial_2 =  moment(this.tiempo2).locale('es').fromNow();
        const final = moment(res.lead.estado.primerPaso.fecha_final).format('L');
        this.tiempoFinal_1 = final;
        this.carga2 = false;
        this.toastr.success('Fase terminada', 'Contacto Establecido 📞', {
          progressBar: true
        });
      });
    }
    return;
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
            this.toastr.success('Fase terminada', 'Propuesta Realizada 📝', {
              progressBar: true
            });
          });
        }
      }
      return ;
    }
    if (estado === 4) {
      if (this.estadoGeneral.tercerPaso.estado === true) {
        if (!this.estadoGeneral.cuartoPaso.fecha_final) {
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
          this.toastr.success('Fase terminada', 'Negociación Terminada 💵 💵 💵 !! ' , {
            progressBar: true
          });
        });
      }
    }
  }
}

limpiarMensaje() {
  this.mensaje = '';
}

dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  if (isSameMonth(date, this.viewDate)) {
    if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }
  }
}

eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
  event.start = newStart;
  event.end = newEnd;
  this.handleEvent('Dropped or resized', event);
  this.refresh.next();
}

handleEvent(action: string, event: CalendarEvent): void {
  this.events[0].start = event.start;
  this.mensajeAccion.hora_inicio = String(moment(this.events[0].start).format('LLL'));
  this.events[0].end = event.end;
  this.mensajeAccion.hora_fin = String(moment(this.events[0].end).format('LLL'));

  this.events[0].title = `(${moment(this.events[0].start).format('LT')} -
                          ${moment(this.events[0].end).format('LT')})`;
  console.log(event);
  console.log(this.events);
}

addEvent(): void {
  this.events.push({
    title: 'New event',
    start: startOfDay(new Date()),
    end: endOfDay(new Date()),
    color: colors.red,
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true
    }
  });
  this.refresh.next();
}

  getMensaje() {
    this._leadService.agregarMensaje(this.id, this.mensajeAccion ).subscribe( (resp) => {
      console.log(resp);
    });
  }

  getTipoMensaje() {
    this._leadService.getTipoMensaje().subscribe( (res: any) => {
      this.tipoMensaje = res;
    });
  }

  ngOnInit() {
    this.getLead();
    this.getTipoMensaje();
  }

}