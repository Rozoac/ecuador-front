import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { WebsocketService } from '../service/websocket.service';
import { ToastrService, ToastContainerDirective } from "ngx-toastr";



@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastEstado: ToastContainerDirective;
  color = "defaultdark";

  showSettings = false;
  showMinisidebar = false;
  public innerWidth: any;
  public variable1: any;
  public config: PerfectScrollbarConfigInterface = {};

  constructor(public wsService: WebsocketService,  private toastr: ToastrService) {
    this.variable1 = this.toastr.overlayContainer = this.toastEstado; 
    
  }


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
