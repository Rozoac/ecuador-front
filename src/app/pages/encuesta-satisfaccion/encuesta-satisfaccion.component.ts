import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../models/encuesta.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from "sweetalert2";
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService } from '../../service/lead/lead.service';
import { EncuestaService } from '../../service/encuesta.service';



@Component({
  selector: 'app-encuesta-satisfaccion',
  templateUrl: './encuesta-satisfaccion.component.html',
  styleUrls: ['./encuesta-satisfaccion.component.css']
})
export class EncuestaSatisfaccionComponent implements OnInit {
public otro = false;

  encuesta:Encuesta= {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    id_lead: null
  };
 
  forma:FormGroup;

  constructor(public route: ActivatedRoute, public _encuestaService: EncuestaService, private router: Router,) { 
    
    this.forma = new FormGroup(
      {
        p1: new FormControl('', Validators.required),
        p2: new FormControl('', Validators.required),
        p3: new FormControl('', Validators.required),
        p4: new FormControl('', Validators.required),
        p5: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
      this.encuesta.id_lead = Number(id);
  }

  cambiarValorp1(estado){
    this.otro = estado;
    if(estado === true){
      this.limpiarFormulario();
    }
    return 
    
  }

  limpiarFormulario(){
    this.forma.reset({
      p1: null
    });
  }

  guardar(message:Encuesta) {
    var that = this;

    if(this.forma.valid){  
    this._encuestaService.guardar(message).subscribe((res)=>{
      console.log(res);
      let timerInterval;
      swal({
        type: "success",
        title: `Gracias!`,
        timer: 2000,
        onBeforeOpen: () => {
          swal.showLoading()
          timerInterval = setInterval(() => {
          
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        },
        showConfirmButton: false
      });
      localStorage.setItem('encuesta', 'true');
      setTimeout(function(){
        that.router.navigateByUrl("/gracias");
      }, 1500);
      
    });
  } else {
    swal({
      type: "error",
      title: `Campos por llenar!`,
      showConfirmButton: false
    });
  }
 }

}