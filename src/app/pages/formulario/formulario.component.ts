import { Component } from "@angular/core";
import { TipoCliente } from "../../models/tipoCliente.model";
import { CorreoService, IMessage } from "../../service/correo.service";
import swal from "sweetalert2";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import "rxjs/Rx";
import { Router } from "@angular/router";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  tipoId = 1;
  tipoCliente: TipoCliente[];
  message: IMessage = {
    ciudad: "¿Cual es tu ciudad mas cercana?",
    tipo: "¿En que estas interesado?",
    para: "¿Lo quieres para?",
    cliente: "Tipo de cliente"
  };

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
        autorizo: new FormControl(""),
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
    if (!this.forma.value.autorizo) {
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
        this.router.navigate(["gracias"]);
      },
      error => {
        swal({
          type: "error",
          title: `error ${error.message}`,
          showConfirmButton: true
        });
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
    this.tipoCliente = [
      { Id: 1, name: "Tipo de cliente" },
      { Id: 2, name: "Natural" },
      { Id: 3, name: "Empresa" },
      { Id: 4, name: "Contratación estatal" }
    ];
  }
}
