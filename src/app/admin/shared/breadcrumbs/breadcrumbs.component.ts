import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['../../admin.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  label = 'asd';

  constructor(public router: Router, public title: Title) {

    this.getDataRoute().subscribe( event => {
      event = event.substr(7, 20);
      event = this.MaysPrimera(event);
      this.label = event;
      this.title.setTitle(this.label + ' - E-Containers');
    });
  }
  getDataRoute() {
    return this.router.events
    .filter( evento => evento instanceof NavigationEnd)
    .map((evento: NavigationEnd) => evento.url);
  }

   MaysPrimera(dato) {
    return dato.charAt(0).toUpperCase() + dato.slice(1);
  }

  ngOnInit() {
  }

}


