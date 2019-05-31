import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-ofrecemos',
  templateUrl: './que-ofrecemos.component.html',
  styleUrls: ['./que-ofrecemos.component.css']
})
export class QueOfrecemosComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {
    this.animacion();
  }

  animacion() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        panel.classList.toggle('open');
      });
    });
    panels.forEach(panel2 => {
      panel2.addEventListener('transitionend', (e: any) => {
        if (e.propertyName.includes('flex')) {
           panel2.classList.toggle('open-active');
         }
      });
    });
  }


}
