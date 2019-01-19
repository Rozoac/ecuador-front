import { Pipe, PipeTransform } from "@angular/core";
import { URL_SERVICIOS } from "../config/config";
import { UsuarioService } from "../service/usuario/usuario.service";

@Pipe({
  name: "imagen"
})
export class ImagenPipe implements PipeTransform {
   datos
  constructor(public _usuarioService: UsuarioService){
     this.datos = _usuarioService.getIdentity();
  }
  transform(img: string, tipo: string = "usuario"): any {
    let url


    if (!img) {
      return "assets/imgs/images/no-image.png";
    }

    switch (tipo) {
      case "usuario":
        url = this.datos.usuario.imagen;
        break;


      default:
        console.log('tipo de imagen no existe');
        url = 'assets/imgs/images/no-image.png';
        break;
    }

    return url;
  }
}
