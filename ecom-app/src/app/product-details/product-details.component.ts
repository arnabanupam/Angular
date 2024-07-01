import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product } from '../datatype';
import { MatDialog } from '@angular/material/dialog';
import { ProductRatingComponent } from '../product-rating/product-rating.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productData:undefined | product;
  productQuantity:number=1;
  removeCart = false;
  cartData:product|undefined
  ratingcount: number | undefined;
  averagerating: any;

  constructor(private activateRoute: ActivatedRoute, private product: ProductService, private dialog:MatDialog){}
  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProduct(productId)
    .subscribe((result)=>{
      console.warn(result);
      this.productData = result;

      let cartData = localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:product)=>productId == item.id.toString());
        if(items.length){
          this.removeCart = true;
        }else{
          this.removeCart = false;
        }
      }
      let user = localStorage.getItem('user');
      
      if(user){
        let userId = user && JSON.parse(user).id;
        this.product.getCartList(userId);
        this.product.cartData.subscribe((res)=>{
          let item = res.filter((item:product)=> productId?.toString()=== item.productId?.toString())
          if(item.length){
            this.cartData = item[0];
            this.removeCart = true
          }
        })

        //tohandle user rating
        // this.productData.averageratings = 2.5;
        // this.productData.totalratings = 3;
        // this.updateProductRating(this.productData);
      }

    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<5 && val==='plus'){
      this.productQuantity+=1;
    }
    else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }
  AddToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        console.warn(this.productData);
        this.product.localAddToCart(this.productData);
        this.removeCart = true;
      }
      else
      {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        console.warn(userId);
        let cartData : cart = {
          ...this.productData,
          userId,
          productId : this.productData.id
        }
        delete cartData.id;
        console.warn(cartData);
        this.product.addToCart(cartData).subscribe((res)=>{
          if(res){
            this.product.getCartList(userId);
            this.removeCart = true;
          }
        })
      }
      
    }
  }

  removeFromCart(productId: string){
  if(!localStorage.getItem('user')){
    this.product.removeItemFromCart(productId);
  }else{
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    console.warn(this.cartData);
    this.cartData && this.product.removeToCart(this.cartData?.id)
    .subscribe((res)=>{
      if(res){
        this.product.getCartList(userId);
      }
    })
    this.removeCart = false;
  }
  }


  OpenRatings(){
    var popup = this.dialog.open(ProductRatingComponent,{
      width:'60%',
      height:'400px',
      data: { productId: this.productData?.id }
    });
    popup.afterClosed().subscribe(result=>{
      //console.log(item);
      if (result && this.productData) {
        console.log('Rating Updated:', result);
        this.productData.averageratings = result.averagerating;
        this.productData.totalratings = result.ratingCount;
        this.updateProductRating(this.productData);
      }
      
    })
    console.log("Ratings popup");
  }

  updateProductRating(data:product){
    console.warn(data);
    if(this.productData){
      data.id = this.productData.id; 
    }
    this.product.updateProduct(data).subscribe((result)=>{
      // if(result){
      //   alert("Rated");
      // }
    });
  }
}
