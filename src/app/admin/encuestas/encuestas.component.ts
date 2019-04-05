import { Component, OnInit,ViewChild } from '@angular/core';
import { EncuestaService } from '../../service/encuesta.service';
import { Encuesta } from '../../models/encuesta.model';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  displayedColumns: string[] = ['p1', 'p2', 'p3', 'p4', 'p5', 'fecha'];
  dataSource: MatTableDataSource<Encuesta>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  encuestas;
  total: number;
  carga=true;

  constructor(public _encuestaService:EncuestaService) { 
    _encuestaService.mostrar().subscribe((res:any) => {
      console.log(res.encuestas)
     this.encuestas = res.encuestas;
     this.dataSource = new MatTableDataSource(this.encuestas);
     this.total = res.total;
     this.paginator._intl.itemsPerPageLabel = 'Encuestas por pagína';
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     this.total = res.total;
     this.carga= false;
    });
  }



  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
