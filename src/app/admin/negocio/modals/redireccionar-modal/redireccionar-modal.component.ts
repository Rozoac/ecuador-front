import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesTrasporteService } from '../../../../services/ciudades-trasporte.service';
import { UsuarioService } from '../../../../service/usuario/usuario.service';
import { LeadService } from '../../../../service/lead/lead.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-redireccionar-modal',
  templateUrl: './redireccionar-modal.component.html',
  styleUrls: ['./redireccionar-modal.component.css']
})

export class RedireccionarModalComponent implements OnInit {
  public id_lead;
  tipoarea: string[] = ['24/7', 'E-Containers', 'ShippingLine'];
  tipoTransporte;
  myForm: FormGroup;
  redireccion = {
    id_lead: '',
    id_nuevo: '',
    mensaje: ''
    // area: {
    //   nombre: '',
    //   tipoDeTransporte: ''
    // },
  };

  constructor(
    public _usuarioService: UsuarioService,
    public _TransporteService: CiudadesTrasporteService,
    public _leadService: LeadService,
    public fb: FormBuilder,
    public activateRouter: ActivatedRoute,
    public router: Router,
    public dialogRef: MatDialogRef<RedireccionarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.myForm = this.fb.group({
        area: this.fb.group({
          nombre: ['', Validators.required],
          tipoTransporte: ['']
        }),
        mensaje: ['', Validators.required]
      });
      this.getTipoTransporte();
    }

  ngOnInit() {
    this.getLead();
  }

  public getTipoTransporte() {
    this._TransporteService.getTransporte().subscribe((res: any) => {
      this.tipoTransporte = res;
      console.log(this.tipoTransporte);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getLead() {
    this.activateRouter.params.subscribe((resp: any) => {
      console.log(this.data);
      this.id_lead = this.data.id_lead;
    });
  }

  ingresar(form) {
    switch (form.area.nombre) {
      case '24/7':
        this.redireccion.id_nuevo = '5cd05c186d71140017c44fb5';
        this.redireccion.id_lead = this.id_lead;
        this.redireccion.mensaje = form.mensaje;
        break;
      case 'E-Containers':
        this.redireccion.id_nuevo = '5c3cdede5d14850017167206';
        this.redireccion.id_lead = this.id_lead;
        this.redireccion.mensaje = form.mensaje;
      break;
      case 'ShippingLine':
        this.redireccion.id_nuevo = '5cc72e4766537400172a1110';
        this.redireccion.id_lead = this.id_lead;
        this.redireccion.mensaje = form.mensaje;
        break;
      default:
        break;
    }
   this._leadService.redireccionLead(this.redireccion).subscribe( (res: any) => {
    //  console.log(res.leadActualizado.id_usuario.correo);
    swal({
      type: 'success',
      title: `Lead redireccionado con exito :) `,
      showConfirmButton: false,
      timer: 2000
    });
    this.onNoClick();
    this.router.navigate([`admin/inbox`]);
    });
  }



 }
