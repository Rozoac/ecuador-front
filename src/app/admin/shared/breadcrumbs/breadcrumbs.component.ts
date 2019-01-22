import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['../../admin.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  titulo:string;

  constructor(public router: Router, public title: Title) {

    this.getDataRoute().subscribe( data => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      console.log(this.titulo);
    });
  }
  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento:ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    )
  }

   MaysPrimera(dato) {
    return dato.charAt(0).toUpperCase() + dato.slice(1);
  }

  ngOnInit() {
  }

}


