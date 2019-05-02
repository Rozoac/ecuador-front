import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Payu } from '../../../../../models/payu.model';


@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent implements OnInit {

  @Input() formData: FormData;
  private isLinear = true;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public payuFormGroup: FormGroup;
  public prueba = 'https://checkout.payulatam.com/ppp-web-gateway-payu';
  public payuMessage: Payu = {};

  public  cantidades = [
      { nombre: '1 a 2 ', valor: 630000 },
      { nombre: '3 a 4 ', valor: 1890000 },
      { nombre: '5 a 6 ', valor: 3290000 },
      { nombre: '7 a 8 ', valor: 4590000 },
      { nombre: '9 a 12 ', valor: 6890000 },
      { nombre: '13 a 15', valor: 8890000 },
      { nombre: '16 a 20', valor: 11890000 }
    ];

    formulario = {
    tamanio: '20',
    cantidad: {
      nombre: '',
      valor: ''
    },
    nombre: '',
    celular: '',
    direccion: '',
    correo: ''
  };

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.payuFormGroup = new FormGroup({
      nombre_payu: new FormControl('', [Validators.required]),
      celular_payu: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      direccion_payu: new FormControl('', [Validators.required]),
      email_payu: new FormControl('', [Validators.required, Validators.email])
    });

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

  seleccionTamanio( event ) {
    this.formulario.tamanio = event.target.defaultValue;
  }
  seleccionCantidad( event ) {
    this.formulario.cantidad = event;
  }
}
