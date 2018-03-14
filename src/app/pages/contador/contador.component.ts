import { Component, OnInit} from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {



  constructor() { }

  ngOnInit() {

    

    $(document).ready(function(){

      $('.counter').counterUp({
        delay: 10,
        time: 1500
      });
      $('.counter-2').counterUp({
        delay: 10,
        time: 1500
      });
      $('.counter-3').counterUp({
        delay: 10,
        time: 1500
      });
      $('.counter-4').counterUp({
        delay: 10,
        time: 1500
      });


    });
  }




}
