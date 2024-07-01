import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  todayDate = new Date();
  hide = true
  public registerform!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router){ }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      id:['',Validators.compose([Validators.required, Validators.minLength(5)])],
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      gender:['Male'],
      date:['',Validators.required],
      role:['',Validators.required],
      isactive:[false]
    });
  }
  onRegister(){
    console.log("hi");
    //if(this.registerform.valid){
      this.service.proceedRegister(this.registerform.value)
      .subscribe({
        next:(res)=>{
          alert("Please contact admin for access','Registered successfully")
          this.router.navigate(['login']);
          this.registerform.reset();
        },
        error:()=>{
          alert("Error")
        }
      })
    }
    // if(this.registerform.valid){
    //   this.service.proceedRegister(this.registerform.value).subscribe((res=>{
    //     this.toastr.success('Please contact admin for access','Registered successfully');
    //   }));
    // }else{
    //   this.toastr.warning('Please enter valid data');
    // }
  //}
}
