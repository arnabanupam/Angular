import { Component} from '@angular/core';
import { ActionCellRendererComponent } from '../action-cell-renderer/action-cell-renderer.component';
import { MatDialog } from '@angular/material/dialog';
//import { ApiService } from '../services/api.service';
import { ApiService } from '../services/stock.service';
import { DialogComponent } from '../dialog/dialog.component';
import { EmojicellrendererComponent } from '../emojicellrenderer/emojicellrenderer.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent{
    columnDefs = [
      { headerName: 'Company', field: 'name', sortable: true, filter: true },
      { headerName: 'Type', field: 'type', sortable: true, filter: true },
      { headerName: 'Price', field: 'price', sortable: true, filter: true, cellRenderer:EmojicellrendererComponent },
      { headerName: 'Previous Close', field: 'previous_close', sortable: true, filter: true },
      { headerName: 'Currency', field: 'currency', sortable: true, filter: true },
      { headerName: 'TimeZone', field: 'timezone', sortable: true, filter: true },
      {
      headerName: 'Action',
      field: '',
      cellRenderer: ActionCellRendererComponent
      }
      ];
      
      defaultColDef = {
      flex: 1,
      minWidth: 150,
      resizable: true
      };
      
      rowData: any[] = [];
      
      constructor(private dialog: MatDialog,private api : ApiService) {}
      ngOnInit() {
      this.getAllUsers();
      }
    
      openDialog(userData?: any) {
      const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: userData ? userData : null
      });
      
      dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
      this.getAllUsers();
      }
      });
      }
      
      getAllUsers() {
      this.api.getAllUsers().subscribe(users => {
      this.rowData = users;
      });
      }
}

