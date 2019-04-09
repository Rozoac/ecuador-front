import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { MatDialog } from '@angular/material';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  usuarios:any;

  constructor(public _usuariosService: UsuarioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this._usuariosService.getUsuarios().subscribe((data:any) => {
      this.usuarios = data.usuarios;
      console.log(this.usuarios);
    });
  }

  estadoUsuario(estado) {
    if (estado === 'INACTIVO') {
      return 'grayscale(100%)';
    } else {
      return 'inherit';
    }
  }

  openDialog(nombre): void {
    const dialogRef = this.dialog.open(CrearUsuarioComponent, {
      width: '800px',
      maxHeight: '600px',
      // minHeight: '400px',
      // data: {}
    });
     dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.getUsuarios();
          }
    });
  }

}
