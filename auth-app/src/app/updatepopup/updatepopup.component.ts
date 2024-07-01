import { Component, Inject, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrl: './updatepopup.component.css'
})
export class UpdatepopupComponent implements OnInit{
  todayDate = new Date();
  hide = true
  public registerform!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router: Router, private dialog:MatDialogRef<UpdatepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){ }

    rolelist : any;
    editdata:any;
    selected :any;

  ngOnInit(): void {
    if(this.data.usercode!=null && this.data.usercode !=''){
      this.service.getByCode(this.data.usercode).subscribe(res=>{
        this.editdata = res;
        this.registerform.setValue({
          id:this.editdata.id,
          name:this.editdata.name,
          password:this.editdata.password,
          email:this.editdata.email,
          gender:this.editdata.gender,
          date:this.editdata.date,
          role:this.editdata.role,
          isactive:this.editdata.isactive
        })
      })
    }

    this.service.getAllRole().subscribe(res =>{
      this.rolelist = res;
    });

    this.registerform = this.formBuilder.group({
      id:[''],
      name:[''],
      password:[''],
      email:[''],
      gender:['Male'],
      date:[''],
      role:['',Validators.required],
      isactive:[false]
    });
  }
  updateUser(){
    this.service.updateUser(this.registerform.value.id, this.registerform.value).subscribe(res=>{
      alert('User Updated');
      this.dialog.close();
    })
  }
}
