import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router:Router){}
  showLogin = false;
  authError : string = '';
  ngOnInit(): void {
   this.seller.reloadSeller();
  }
  
  signup(data:SignUp):void{
    console.warn(data);
  }

  login(data:Login):void{
    this.authError = "";
    console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((error)=>{
      if(error){
        this.authError = "Invalid Credentials!";
      }
    })
  }
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
}
