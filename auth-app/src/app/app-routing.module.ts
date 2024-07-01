import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StockDetailDialogComponent } from './stock-detail-dialog/stock-detail-dialog.component';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'stock-detail/:name', component: StockDetailDialogComponent },
  ]},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserlistingComponent, canActivate: [AuthGuard]},
  {path:'wishlist',component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
