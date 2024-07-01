import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    userName: '',
    gender: '',
    date: '',
    email: '',
    password: ''
  };
  todayDate = new Date();
  [x: string]: any;
  hide = true
  public registerForm!: FormGroup ;
  constructor(private fb : FormBuilder, private ApiService : ApiService){}

  ngOnInit(){
    this.registerForm = this.fb.group({
      userName : ['', Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.required],
      time: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required]
    })
  }
  onregister(){
    if(this.registerForm.valid){
      console.log('Hi, button clicked');
      this.ApiService.addUser(this.user)
      .subscribe({
        next:(res)=>{
          alert("Success")
          this.registerForm.reset();
        },
        error:()=>{
          alert("Error")
        }
      })
    }
  }
}
