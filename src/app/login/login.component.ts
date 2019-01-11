import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "../service/usuario/usuario.service";
import { Usuario } from "../models/usuario.model";
import swal from "sweetalert2";


@Component({
  selector: "app-login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = null;
  token;
  identity;
  correo: string;
  editor: any;
  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  // LOGIN

  ingresar(forma: NgForm) {
    let usuario = new Usuario(
      forma.value.correo,
      forma.value.clave
    );
    this._usuarioService.login(usuario, null, forma.value.recuerdame).subscribe(
      (resp: any) => {
        // Token
        if (resp.ok !== 'false') {
          this.token = resp.token;
          localStorage.setItem( 'token', this.token);
          // Objeto usuario identificado
          this._usuarioService
            .login(usuario, true, forma.value.recuerdame)
            .subscribe(
              resp2 => {
                this.identity = resp2;
                localStorage.setItem('identity', JSON.stringify(this.identity));
                // redireccion
                const identity2 = JSON.parse(localStorage.getItem('identity'));
                // console.log(identity2);
                swal({
                  type: 'success',
                  title: `Bienvenido ${identity2.usuario.nombre} ${identity2.usuario.apellido} `,
                  showConfirmButton: false,
                  timer: 3000
                });
              this.router.navigate(['admin/dashboard']);
              
              },
              error => {
                console.log(<any>error);
              }
            );
        }
      },
      error => {
        let mensaje = error.error.mensaje;
        swal({
          type: 'error',
          title: mensaje,
          showConfirmButton: false,
          timer: 3000
        });
      }
    );
    // this.router.navigate(['/admin/dashboard']);
  }

  ngOnInit() {
    // init_plugins();
    this.correo = localStorage.getItem('correo') || '';
    if (this.correo.length > 1) {
      this.recuerdame = true;
    }
    let user = this._usuarioService.getIdentity();
  }
}
