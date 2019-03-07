import { Component, OnInit } from '@angular/core';
import { TipoCliente } from '../../models/tipoCliente.model';
import { CorreoService, IMessage } from '../../service/correo.service';
import { LeadService } from '../../service/lead/lead.service';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService, ToastContainerDirective } from "ngx-toastr";
import 'rxjs/Rx';
import { saveAs } from 'file-saver';
declare var $: any;

@Component({
  selector: 'app-dashboard-redes',
  templateUrl: './dashboard-redes.component.html',
  styleUrls: ['./dashboard-redes.component.css']
})
export class DashboardRedesComponent implements OnInit {
  cargaReporte: boolean = false;
    tipoId = 1;
  tipoCliente;
  message = {
  ciudad: '¿Cual es tu ciudad mas cercana?',
  tipo: '¿En que estas interesado?',
  para: '¿Lo quieres para?',
  cliente: 'Tipo de cliente'
  };
    forma: FormGroup;
    referidos: any;

   constructor( private appService: CorreoService, private _referidos: LeadService, private toastr: ToastrService
 ) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'ciudad': new FormControl('¿Cual es tu ciudad mas cercana?', Validators.required),
      'cel': new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,10}'), Validators.minLength(10)]),
      'cel2': new FormControl('', [Validators.pattern('[0-9]{1,10}'), Validators.minLength(10)]),
      'interes': new FormControl('¿En que estas interesado?', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'para': new FormControl('¿Lo quieres para?', Validators.required),
      'cliente': new FormControl('Tipo de cliente', Validators.required),
      'referido': new FormControl('Referido', Validators.required),
      'referido2': new FormControl('Referido'),
      'empresa': new FormControl('Empresa'),
    });

  }

  generarReporte(){
    this.cargaReporte = true;
    this._referidos.getReferidosPDF()
      .subscribe((resp2: any) => {
        this.cargaReporte = false;
        this.toastr.info("Reporte generado satisfactoriamente", "Reporte PDF", {
          progressBar: true
        });
        return saveAs(resp2);  
      });  
    }
    


    sendEmail(message: IMessage) {
      console.log(message.referido2);
      if (!this.forma.value.nombre || !this.forma.value.email || !this.forma.value.cel ) {
        swal({
          type: "error",
          title: `campos por llenar`,
          showConfirmButton: true
        });
        return;
      }
    this.appService.sendEmailRedes(message).subscribe(res => {
      console.log('AppComponent Success', res);
      swal({
        type: 'success',
        title: 'Registro Almacenado :)',
        showConfirmButton: false,
        timer: 3000
      });
      this.forma.reset({
        nombre: '',
        ciudad: '¿Ciudad?',
        cel: '',
        cel2: '',
        interes: '¿Interes?',
        email: '',
        para: '¿Lo quiere para?',
        cliente: 'Tipo de cliente',
      });
    }, error => {
        swal({
          type: "error",
          title: `error ${error.message}`,
          showConfirmButton: true
        });
    });
  }

  ngOnInit() {
      this.tipoCliente = [
      {Id: 1, name: 'Tipo de cliente'},
      {Id: 2, name: 'Natural'},
      {Id: 3, name: 'Empresa'},
      {Id: 4, name: 'Contratación estatal'}
    ];

    this._referidos.getReferidos()
      .subscribe((response:any) =>{
        this.referidos = response;
      });
  }

  

}
