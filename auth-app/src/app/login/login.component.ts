import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  public loginform!: FormGroup ;
  userdata :any;

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router){
      sessionStorage.clear();
     }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }
  onLogin(){
    console.log("hi");
    //if(this.registerform.valid){
      this.service.getByCode(this.loginform.value.username)
      .subscribe({
        next:(res)=>{
          this.userdata = res;
          console.log(this.userdata);
          if(this.userdata.password == this.loginform.value.password){
            if(this.userdata.isactive){
              sessionStorage.setItem('username',this.userdata.id);
              sessionStorage.setItem('userrole',this.userdata.role);
              this.router.navigate(['']);
            }else{
              alert("Inactive User, please contact admin");
            }
          }else{
            alert("Invalid password");
          }
        },
        error:()=>{
          alert("Error")
        }
      })
    }
}
