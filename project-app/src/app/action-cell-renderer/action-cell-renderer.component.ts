import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrl: './action-cell-renderer.component.css'
})
export class ActionCellRendererComponent implements OnInit, ICellRendererAngularComp{
  data: any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.data = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  DisplayedColumns: string[] = ['userName', 'email', 'gender', 'date','action'];
  users: any[] = [];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private dialog: MatDialog, private api : ApiService){}
  ngOnInit(): void {
    //this.getAllUsers();
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

  onButtonClicked(){
    console.log("Hi!");
  }

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

}
