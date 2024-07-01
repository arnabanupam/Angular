import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from '../services/api.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  displayedColumns: string[] = ['userName', 'email', 'gender', 'date','action'];
  users: any[] = [];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private dialog: MatDialog, private api : ApiService){}
  ngOnInit(): void {
   // this.getAllUsers();
  }

  // openDialog() {
  //   this.dialog.open(DialogComponent, {
  //     width:'30%'
  //   }).afterClosed().subscribe(val =>{
  //     if(val === 'save'){
  //       this.getAllUsers();
  //     }
  //   })
  // }

  // getAllUsers(){
  //   this.api.getAllUsers().subscribe(users =>{
  //     this.users = users;
  //       this.dataSource = new MatTableDataSource(users);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       // console.log(res);
  //     }
  //   )
  // }

//   editUser(row : any){
//     this.dialog.open(DialogComponent,{
//       width : '30%',
//       data : row
//       }).afterClosed().subscribe(val =>{
//         if(val === 'update'){
//           this.getAllUsers();
//         }
//       })
// }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
