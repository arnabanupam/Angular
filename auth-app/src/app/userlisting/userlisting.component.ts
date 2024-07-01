import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrl: './userlisting.component.css'
})
export class UserlistingComponent {

  displayedColumns: string[] = ['username','name', 'email', 'gender','role','status', 'date','action'];
  users: any[] = [];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  userlist: any;

  constructor(private dialog: MatDialog, private api : AuthService){}
  ngOnInit(): void {
    this.getAll();
  }

  updateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      width:'30%',
      data:{
        usercode : code
      }
    }).afterClosed().subscribe(val =>{    
        this.getAll();
    })
  }

  getAll(){
    this.api.getAll().subscribe(res =>{
      this.userlist = res;
        this.dataSource = new MatTableDataSource(this.userlist);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(res);
      }
    )
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
