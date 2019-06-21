import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reefer',
  templateUrl: './reefer.component.html',
  styleUrls: ['./reefer.component.css']
})
export class ReeferComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

}
