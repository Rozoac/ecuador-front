import { Injectable } from '@angular/core';
import { URL_LANDING_DEV } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo(archivo: File, id: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();
      formData.append("image", archivo, archivo.name);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("imagen subida");
            resolve(JSON.parse(xhr.response));
          } else {
            console.log("fallo la subida");
            reject(xhr.response);
          }
        }
      };
      let url = `${URL_LANDING_DEV}fileupload/usuarios/${id}`;
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

 
}
