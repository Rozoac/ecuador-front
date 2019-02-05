import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { SegmentoService } from '../../../service/segmento.service';
import { PaisService } from '../../../service/pais.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenActual;
  //id de usuario
  id_usuario:string;
  todo:any[] = [];
  segmentos:any = [];
  segmentos_total:any = [];
  paises:any = [];
  ciudades:any = [];
  ciudadesArray:any = [];
  dropdownList = [];
  cities = [];
  selectedItems = [];
  singleselectedItems = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  

  constructor(public _segmentoService: SegmentoService, public _usuarioService: UsuarioService, route: ActivatedRoute, public router: Router, public _paisService: PaisService) {
    // this.usuario = _usuarioService.usuario;
    route.params.subscribe(params => {
      this.id_usuario = params.id;
      
    });
  }

  ngOnInit() {
    this.getUsuario();
    this.dropdownList = [
      { item_id: 1, item_text: 'Bogota' },
      { item_id: 2, item_text: 'Medellin' },
      { item_id: 3, item_text: 'Cali' },
    ];
    this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];
    this.selectedItems = [];
    this.singleselectedItems = ['Pune'];
    this.singledropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'nombre',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todos',
      searchPlaceholderText: 'Busqueda',
      itemsShowLimit: 7,
      allowSearchFilter: true
      
    };
    

    
    
  }

  onItemSelect(item: any) {
    // this.ciudadesArray.push(item);
    console.log(this.ciudadesArray);
  }
  onSelectAll(items: any) {
    this.ciudadesArray = [];
    this.ciudadesArray =items ;
    console.log(this.ciudadesArray);
  }
  
  unSelectAll(items: any){
    // this.ciudadesArray = [];
    console.log(this.ciudadesArray);
  }
  unSelect(items: any){
    let index = this.ciudades.findIndex(obj => obj._id == items._id)
    this.ciudades.splice(index, 1);
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

  async getUsuario(){
    await this._usuarioService.getUsuario(this.id_usuario).subscribe( (resp:any) => {
      console.log(resp);
      this.usuario = resp.usuario;
      this.ciudadesArray = resp.usuario.ciudad;
      this.todo = resp.usuario.segmento;
      this.getCiudades(this.usuario.id_pais);
      this.getSegmento();
    });
  }
  // var index = data.findIndex(obj => obj.name=="allInterests");
   getSegmento(){
     this._segmentoService.getSegmento().subscribe( (resp:any ) => {
      this.segmentos = resp.segmento;
      this.segmentos.filter(number => {
        let index = this.todo.findIndex(obj => obj._id == number._id)
        if(index < 0){
          this.segmentos_total.push(number);
        }
      });
    });
  }

  deleteUsuario(id){
    swal({
      title: '¿Estas seguro?',
      text: "No podrás revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.value) {
        this._usuarioService.deleteUsuario(id).subscribe((resp:any) => {
          this.router.navigate(['admin/usuarios']);
          swal({
            type: 'success',
            title: `El usuario ${this.usuario.nombre} ${this.usuario.apellido} a sido eliminado correctamente `,
            showConfirmButton: false,
            timer: 3000
          }); 
        }, error => {
          swal('Error', error, 'error');
        });
      }
    })
  }

  estadoUsuario(estado){
    if(estado === 'INACTIVO'){
      return 'grayscale(100%)';
    }else{
      return 'inherit';
    }
  }
  
  
  
  guardar(usuario: Usuario, id) {

    this.usuario.nombre = usuario.nombre;
    this.usuario.apellido = usuario.apellido;
    this.usuario.celular = usuario.celular;
    this.usuario.correo = usuario.correo;
    this.usuario.segmento = this.todo;
    this.usuario.ciudad = this.ciudadesArray;
   

    this._usuarioService.actualizarUsuario(this.usuario, id).subscribe(resp => {
      console.log(resp);
    });
  }

  cambiarEstado(estado, id){
    let nuevoEstado; 
    if(estado === 'ACTIVO'){
       nuevoEstado= 'INACTIVO'; 
    }
    else{
       nuevoEstado= 'ACTIVO'; 
    }
    this.usuario.estado = nuevoEstado;
    this._usuarioService.actualizarUsuario(this.usuario, id).subscribe(resp => {
      console.log(resp);
    })
    
    }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      swal('Solo imagenes', 'El archivo debe ser una imagen', 'error');
      this.imagenSubir = null;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL (archivo);

    reader.onloadend = () => this.imagenActual = reader.result;
  }


  imagenContenedor(nombre: string) {
    if (nombre === 'Contenedores Maritimos') {
      return 'assets/css/backend/images/users/user-2.jpg';
    }
    if (nombre === 'Contenedores Oficinas') {
      return 'assets/css/backend/images/users/user-4.jpg';
    }
    if (nombre === 'Contenedores Refrigerados') {
      return 'assets/css/backend/images/users/user.jpg';
    }
    if (nombre === 'Productos Especiales') {
      return 'assets/css/backend/images/users/user-3.jpg';
    }
    if (nombre === 'Contenedores Salas de Ventas') {
      return 'assets/css/backend/images/users/user-5.jpg';
    }
  }

  cambiarImagen() {
    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id);
  }
  getCiudades(id) {
    this._paisService.getCiudades(id).subscribe( (res:any) => {
      this.ciudades = res;
      console.log(this.ciudades);
    });
  }
}
