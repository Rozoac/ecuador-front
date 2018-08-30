import { Component } from "@angular/core";
import { TipoCliente } from "../models/tipoCliente.model";
import { CorreoService, IMessage } from "../service/correo.service";
import swal from "sweetalert2";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import "rxjs/Rx";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import {Router} from "@angular/router"
declare var $: any;

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  tipoId = 1;
  tipoCliente: TipoCliente[];
  message: IMessage = {
    ciudad: "¿Cual es tu ciudad mas cercana?",
    tipo: "¿En que estas interesado?",
    para: "¿Lo quieres para?",
    cliente: "Tipo de cliente"
  };
  // ciudades:any[]=[
  //
  //         {id:1,nombre:'Barranquilla'},
  //         {id:2,nombre:'Bogotá'},
  //         {id:3,nombre:'Bucaramanga'},
  //         {id:4,nombre:'Cali'},
  //         {id:5,nombre:'Cartagena'},
  //         {id:6,nombre:'Medellin'},
  //         {id:7,nombre:'Otros'},
  //         {id:8,nombre:'Santa Marta'},
  //         {id:9,nombre:'Villavicencio'}
  // 	];
  //
  //   selectedElement:any= 2;

  forma: FormGroup;

  constructor(private appService: CorreoService, public router: Router) {
    this.forma = new FormGroup(
      {
        nombre: new FormControl("", Validators.required),
        ciudad: new FormControl(
          "¿Cual es tu ciudad mas cercana?",
          Validators.required
        ),
        cel: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]{1,10}"),
          Validators.minLength(10)
        ]),
        interes: new FormControl(
          "¿En que estas interesado?",
          Validators.required
        ),
        email: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]),
        para: new FormControl("¿Lo quieres para?", Validators.required),
        cliente: new FormControl("Tipo de cliente", Validators.required),
        autorizo: new FormControl("", Validators.required),
        mensaje: new FormControl(),
        cedula: new FormControl(),
        nit: new FormControl()
      },
      {
        validators: this.validacionCampos(
          "ciudad",
          "interes",
          "para",
          "cliente"
        )
      }
    );
  }

  validacionCampos(
    campo1: string,
    campo2: string,
    campo3: string,
    campo4: string
  ) {
    return (group: FormGroup) => {
      let ciudad = group.controls[campo1].value;
      let interes = group.controls[campo2].value;
      let para = group.controls[campo3].value;
      let cliente = group.controls[campo4].value;

      if (
        ciudad !== "¿Cual es tu ciudad mas cercana?" &&
        interes !== "¿En que estas interesado?" &&
        para !== "¿Lo quieres para?" &&
        cliente !== "Tipo de cliente"
      ) {
        return null;
      }
      return {
        validado: true
      };
    };
  }

  sendEmail(message: IMessage) {
    if (!this.forma.value.autorizo || !this.forma.value.nombre || !this.forma.value.cel || !this.forma.value.email || this.forma.value.ciudad === "¿Cual es tu ciudad mas cercana?" || this.forma.value.interes === "¿En que estas interesado?" || this.forma.value.para === "¿Lo quieres para?" || this.forma.value.cliente === "Tipo de cliente") {
      swal({
        type: "error",
        title: `campos por llenar`,
        showConfirmButton: true
      });
      return;
    }
    this.appService.sendEmail(message).subscribe(
      res => {
        console.log("AppComponent Success", res);
        swal({
          type: "success",
          title:
            "¡Muchas Gracias! Proximamente un asesor comercial se estará comunicando contigo.",
          showConfirmButton: false,
          timer: 3000
        });
        this.forma.reset({
          nombre: "",
          ciudad: "¿Cual es tu ciudad mas cercana?",
          cel: "",
          interes: "¿En que estas interesado?",
          email: "",
          para: "¿Lo quieres para?",
          cliente: "Tipo de cliente",
          mensaje: ""
        });

        this.router.navigate(['gracias']);

      },
      error => {
        swal({
          type: "error",
          title: `error ${error.message}`,
          showConfirmButton: true
        });
        this.router.navigate(['gracias']);
      }
    );
  }

  // guardarCambios() {
  //   // console.log(this.forma);
  //   // console.log(this.forma.value);
  //   this.forma.reset({
  //     nombre:"",
  //     ciudad:"",
  //     cel:"",
  //     interes:"",
  //     email:"",
  //     para:"",
  //     mensaje:""
  //   })
  //
  // }

  // sendEmail(message: IMessage){
  //   this.appService.sendEmail(message).suscribe(res => {
  //     console.log('success', res);
  //   }, error => {
  //     console.log('error', error);
  //   })
  // }
  

  ngOnInit() {
    $(".owl-carousel").owlCarousel({
      animateOut: "fadeOut",

      loop: true,
      autoplayTimeout: 3000,
      margin: 10,
      autoplay: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    this.tipoCliente = [
      { Id: 1, name: "Tipo de cliente" },
      { Id: 2, name: "Natural" },
      { Id: 3, name: "Empresa" },
      { Id: 4, name: "Contratación estatal" }
    ];
  }
}
