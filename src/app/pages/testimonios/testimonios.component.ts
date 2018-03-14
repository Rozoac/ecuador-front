import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.asd-2').owlCarousel({
      animateOut: 'fadeOut',
      autoplay: 'true',
      loop: true,



      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })

  }

}
