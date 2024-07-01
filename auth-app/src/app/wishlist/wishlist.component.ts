import { Component } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  columnDefs = [
    { headerName: 'Company', field: 'name' },
    { headerName: 'Type', field: 'type' },
    // Add other column definitions as per your requirement
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    sortable: true,
    resizable: true,
  };

  rowData: any;

  constructor(private service: StockService) { }

  ngOnInit(): void {
    // Initially, you can fetch wishlist items from a local storage or a service
    this.rowData = this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(users => {
    this.rowData = users;
    });
    }

}
