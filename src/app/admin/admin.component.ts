import { Component, OnInit, HostListener } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";



@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  color = "defaultdark";

  showSettings = false;
  showMinisidebar = false;
  public innerWidth: any;
  public config: PerfectScrollbarConfigInterface = {};

  constructor() {}

  ngOnInit() {
    this.handleLayout();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.handleLayout();
  }

  toggleSidebar() {
    console.log(this.showMinisidebar);
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }

  onDeactivate() {
    // document.body.scrollTop = 0;
  }
}
