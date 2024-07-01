import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-detail-dialog',
  templateUrl: './stock-detail-dialog.component.html',
  styleUrl: './stock-detail-dialog.component.css'
})
export class StockDetailDialogComponent {
  stock: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private route: ActivatedRoute, private router: Router,
  private stockService: StockService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const stockName = params['name'];
      this.stock = this.stockService.getCompanyNames();
      console.log('Stock Name:', stockName);
    });
  }
  openStockDetails(stockName: string) {
    this.router.navigate(['/stock-detail', stockName]);
  }
}
