import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "../service/usuario/usuario.service";
import { Usuario } from "../models/usuario.model";
import swal from "sweetalert2";

declare function init_plugins();

@Component({
  selector: "app-login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = null;
  token;
  identity;
  email: string;
  editor: any;
  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  // LOGIN

  ingresar(forma: NgForm) {
    let usuario = new Usuario(
      null,
      null,
      forma.value.email,
      forma.value.password
    );
    this._usuarioService.login(usuario, null, forma.value.recuerdame).subscribe(
      (resp: any) => {
        // Token
        if (resp.status !== 'error') {
          this.token = resp;
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
                console.log(identity2);
                if (identity2.email === 'admin@econtainerscolombia.com') {
                   this.router.navigate(['admin/dashboard']);
                 } else {
                   this.router.navigate(['admin/redes-sociales']);
                 }
              },
              error => {
                console.log(<any>error);
              }
            );
        } else {
          swal({
            type: 'error',
            title: 'Datos de usuario incorrectos',
            showConfirmButton: false,
            timer: 3000
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    // this.router.navigate(['/admin/dashboard']);
  }

  ngOnInit() {
    // init_plugins();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
    let user = this._usuarioService.getIdentity();
  }
}
