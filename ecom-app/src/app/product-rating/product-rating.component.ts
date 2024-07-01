import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { product } from '../datatype';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit{
  productData:product | undefined;
  //ratingCount:number | undefined;
  @Output() ratingUpdated = new EventEmitter<{ AverageRating: any; ratingCount: number }>();
  constructor(
  @Inject(MAT_DIALOG_DATA) public data: product,
  private route: ActivatedRoute,
  private productService: ProductService, private router: Router,
  private dialog : MatDialogRef<ProductRatingComponent>){}
  ngOnInit(): void {
    if (this.data.productId) {
      this.productService.getProduct(this.data.productId).subscribe(product => {
        this.productData = product;
        this.ratingCount = product.totalratings;
        this.AverageRating = product.averageratings;
      });
    }
  }
  
  ratingCount:number = 0 ;
  totalRating = 0;
  AverageRating : any;
  tooltips = ['very bad', 'bad', 'good', 'very good', 'excellent'];
  ratings = new FormControl(0);

  updateRatings(){
    this.ratingCount++;
    this.totalRating += this.ratings?.value || 0;
    this.AverageRating = (this.totalRating / this.ratingCount).toFixed(2);
    console.log(this.ratings.value);
    console.log(this.AverageRating,this.ratingCount);
    }
    saveRatings() {
      this.dialog.close({ averagerating: this.AverageRating, ratingCount: this.ratingCount });
    }

  closepopup(){
    this.dialog.close(); 
  }
}
