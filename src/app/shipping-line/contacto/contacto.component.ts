import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['../shipping-line.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  message = {
    nombre: '',
    cel: '',
    correo: '',
    mensaje: ''
  };

  constructor() {
    this.forma = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        cel: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{1,10}'),
          Validators.minLength(10)
        ]),
        correo: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]),
        mensaje: new FormControl(),
      });
  }

  sendEmail(message) {
    if (!this.forma.value.autorizo) {
      swal({
        type: 'error',
        title: `campos por llenar`,
        showConfirmButton: true
      });
      return;
    }

    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        localStorage.setItem('comercial', JSON.stringify(res));
        this.router.navigate(['gracias']);
      },
      error => {
        swal({
          type: 'error',
          title: `error ${error.message}`,
          showConfirmButton: true
        });
      }
    );
  }

  ngOnInit() {
  }

}
