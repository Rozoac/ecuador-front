import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RolService } from '../../service/rol.service';
import { SegmentoService } from '../../service/segmento.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Usuario } from '../../models/usuario.model';
import { PaisService } from '../../service/pais.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import swal from "sweetalert2";
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  todo:any[] = [];

  segmentos:any = [];
  paises:any = [];

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  roles:any;
  usuario:Usuario = {
    correo: '',
    clave: '',
    nombre: '',
    apellido: '',
    segmento: []
  };
  

  constructor(public dialogRef: MatDialogRef<CrearUsuarioComponent>, private _formBuilder: FormBuilder, public _rolService: RolService, public _segmentoService: SegmentoService, public _paisService:PaisService, public _usuarioService:UsuarioService) {
    this.getRoles();
    this.getSegmento();
    this.getPais();
    
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      contrasenia: ['', Validators.required],
      rol: ['', Validators.required],
      pais: ['', Validators.required]
    });
    
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getRoles(){
    this._rolService.getRoles().subscribe( (resp:any ) => {
      console.log(resp);
      this.roles = resp.roles;
    });
  }

  imagenContenedor(nombre:string){
    if (nombre == "Contenedores Maritimos"){
      return 'assets/css/backend/images/users/user-2.jpg';
    }
    if (nombre == "Contenedores Oficinas"){
      return 'assets/css/backend/images/users/user-4.jpg';
    }
    if (nombre == "Contenedores Refrigerados"){
      return 'assets/css/backend/images/users/user.jpg';
    }
    if (nombre == "Productos Especiales"){
      
      return 'assets/css/backend/images/users/user-3.jpg';
    }
    if (nombre == "Contenedores Salas de Ventas"){
      return 'assets/css/backend/images/users/user-5.jpg';
    }
  }
  getSegmento(){
    this._segmentoService.getSegmento().subscribe( (resp:any ) => {
      console.log(resp);
      this.segmentos = resp.segmento;
    });
  }
  getPais(){
    this._paisService.getPais().subscribe( (resp:any ) => {
      console.log(resp);
      this.paises = resp.pais;
    });
  }

  guardar(){
    for (let  index = 0;  index < this.todo.length;  index++) {
      this.usuario.segmento.push(this.todo[index]._id); 
    }
      this._usuarioService.createUsuario(this.usuario).subscribe((resp:any) => {
        this.dialogRef.close(true);
        swal({
          type: 'success',
          title: `Usuario ${resp.usuario.nombre} ${resp.usuario.apellido} creado con exito  `,
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(error);
        swal({
          type: 'error',
          title: `${error.error.mensaje}`,
          showConfirmButton: false,
          timer: 3000
        });
      });
  }

}
