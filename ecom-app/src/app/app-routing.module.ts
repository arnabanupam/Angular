import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthguardGuard } from './guards/seller-authguard.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchComponent } from './search/search.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UpdatePhotoPopupComponent } from './update-photo-popup/update-photo-popup.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { CategorySearchComponent } from './category-search/category-search.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent, canActivate:[SellerAuthguardGuard]},
  {path:'seller-add-product',component:SellerAddProductComponent, canActivate:[SellerAuthguardGuard]},
  {path:'seller-update-product/:id',component:SellerUpdateProductComponent, canActivate:[SellerAuthguardGuard]},
  {path:'details/:productId',component:ProductDetailsComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'search/:query',component:SearchComponent},
  {path:'searchByCategory/:query',component:CategorySearchComponent},
  {path:'profile/:id',component:ProfilePageComponent},
  {path:'profile/:id/update-photo',component:UpdatePhotoPopupComponent},
  {path:'my-orders',component:MyOrdersComponent},
  //{path:'rating/:id',component:ProductRatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
