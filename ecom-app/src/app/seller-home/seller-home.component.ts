import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList: undefined | product[];
  productDelMessage:undefined | string;

  deleteIcon = faTrash;
  UpdateIcon = faEdit;

  constructor(private product:ProductService){}
  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id:any){
    console.warn(id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productDelMessage = "Product Deleted";
        this.list();
      }
    })
    setTimeout(()=>(
      this.productDelMessage = undefined
    ),3000);
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.productList = result;
      }
    })
  }

}
