import { Component, OnInit } from '@angular/core';
import { ArquitectonicosService } from '../../../service/arquitectonicos.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMessage, CorreoService } from '../../../service/correo.service';
import swal from "sweetalert2";
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-productos-arquitectonicos',
  templateUrl: './productos-arquitectonicos.component.html',
  styleUrls: ['./productos-arquitectonicos.component.css']
})
export class ProductosArquitectonicosComponent implements OnInit {

  public contenedor;
  isLinear = true;
  filteredOptions: Observable<string[]>;
  firstFormGroup: FormGroup;
  ciudad_control = new FormControl();
  secondFormGroup: FormGroup;
  message: IMessage = {};
  interes: string[] = ['Natural' ,'Empresa', 'Contratación estatal'] ;
  ciudades: string[] = [
    'Armenia',
    'Barranca',
    'Barranquilla',
    'Bogotá',
    'Bucaramanga',
    'Cali',
    'Ibagué',
    'Maicao',
    'Manizales',
    'Medellín',
    'Otros',
    'Pereira',
    'Riohacha',
    'Santa Marta',
    'Valledupar',
    'Villavicencio'
  ];
  constructor(public _arquitectonicosService: ArquitectonicosService, public router: ActivatedRoute, private appService: CorreoService) { 
    
    this.firstFormGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      celular: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{1,10}'),
        Validators.minLength(10)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      ciudad: new FormControl('', [Validators.required]),
      cliente: new FormControl('', [Validators.required]),
      nit: new FormControl(),
      cedula: new FormControl(),
    });
   
  }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.contenedor = this._arquitectonicosService.getArquitectonico(params['id']);
      this.tipoDeProyecto();
      console.log(this.contenedor);

   })
   

   this.filteredOptions = this.ciudad_control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
  }


  tipoDeProyecto(){
    this.message.tipo = 'Productos Especiales';
    if (this.contenedor.nombre === 'Unidades Comerciales' || this.contenedor.nombre === 'Piscina Container'){
      this.message.tipo_estandar = this.contenedor.nombre;
    }
    if(this.contenedor.nombre === 'Casa tipo 1' || this.contenedor.nombre === 'Casa tipo 2'){
      this.message.tipo_casa = this.contenedor.nombre;
    }
  } 


  getErrorMessage(campo: string, form: string) {
    return this.firstFormGroup.get(`${campo}`).hasError('required')
      ? `Debes ingresar un ${campo}`
      : this.firstFormGroup.get(`${campo}`).hasError('email')
        ? 'No es un email valido'
        : '';
  }



  sendEmail(message: IMessage) {
    console.log(message);

    this.appService.sendEmail(message).subscribe(
      res => {
        console.log(res);
        console.log(message);
        console.log('AppComponent Success', res);
        swal({
          type: 'success',
          title:
            '¡Muchas Gracias! Proximamente un asesor comercial se estará comunicando contigo.',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(message);
        swal({
          type: 'error',
          title: `error ${error.message}`,
          showConfirmButton: true
        });

      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.ciudades.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }


  



  

}
