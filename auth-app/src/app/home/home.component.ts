import { Component, DoCheck, OnInit} from '@angular/core';
import { ActioncellrendererComponent } from '../actioncellrenderer/actioncellrenderer.component';
import { EmojirendererComponent } from '../emojirenderer/emojirenderer.component';
import { AuthService } from '../services/auth.service';
import { StockService } from '../services/stock.service';
import { MatDialog } from '@angular/material/dialog';
import { StockDetailDialogComponent } from '../stock-detail-dialog/stock-detail-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck,OnInit {
  isAdminUser = false;
  wishlist: any[] = [];

  constructor(private dialog: MatDialog, private service: StockService,private api: AuthService){}
  columnDefs = [
    { headerName: 'Company', field: 'name', sortable: true, filter: true },
    { headerName: 'Type', field: 'type', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true, cellRenderer:EmojirendererComponent },
    { headerName: 'Previous Close', field: 'previous_close', sortable: true, filter: true },
    { headerName: 'Currency', field: 'currency', sortable: true, filter: true },
    { headerName: 'TimeZone', field: 'timezone', sortable: true, filter: true },
    {
    headerName: 'Action',
    // field: '',
    // cellRenderer: ActioncellrendererComponent
    field: 'actions',
      cellRenderer: (params: any ) => {
        const actionsElement = document.createElement('span');

        // Details button
        const detailsButton = document.createElement('button');
        detailsButton.innerText = 'Details';
        detailsButton.onclick = () => {
          this.openDialog(params.data);
        };
        actionsElement.appendChild(detailsButton);

        // Wishlist button
        const wishlistButton = document.createElement('button');
        wishlistButton.innerText = 'Wishlist';
        wishlistButton.onclick = () => {
          this.addToWishlist(params.data);
        };
        actionsElement.appendChild(wishlistButton);

        return actionsElement;
      }
    }
    ];
    
    defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true
    };
    
    rowData: any[] = [];
    
    ngOnInit() {
    this.getAllUsers();
    }
  
    
    getAllUsers() {
    this.service.getAllUsers().subscribe((users: any) => {
    this.rowData = users;
    });
    }

  ngDoCheck(): void {
    if(this.api.getUserRole() === 'admin'){
      this.isAdminUser = true;
    }
    else this.isAdminUser=false;
  }

  addToWishlist(stock: any) {
    this.service.addToWishlist(stock);
    this.getWishlist(); // Refresh the wishlist
  }

  
  getWishlist() {
    this.wishlist = this.service.getWishlist();
  }

  openDialog(data: any) {
    this.dialog.open(StockDetailDialogComponent, {
      width: '250px',
      data: data
    });
  }
    
}
