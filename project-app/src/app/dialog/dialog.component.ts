import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit{
  todayDate = new Date;
  userForm !: FormGroup;
  actionBtn : string = "Save"

  constructor(private formBuilder : FormBuilder, private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<DialogComponent>){  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName : ['', Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])],
      gender : ['',Validators.required],
      date : ['',Validators.required]
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.userForm.controls['userName'].setValue(this.editData.userName)
      this.userForm.controls['email'].setValue(this.editData.email)
      this.userForm.controls['gender'].setValue(this.editData.gender)
      this.userForm.controls['date'].setValue(this.editData.date)
    }
    //console.log(this.editData);
  }

  // addUser(){
  //   if(!this.editData){
  //     if(this.userForm.valid){
  //       this.api.addUser(this.userForm.value)
  //       .subscribe({
  //         next:(res)=>{
  //           alert("User Added Succefully");
  //           this.userForm.reset();
  //           this.dialogRef.close('save');
  //         },
  //         error:()=>{
  //           alert("Error")
  //         }
  //       })
  //     }
  //   }
  //   else{
  //     this.updateUser()
  //   }
  //   //console.log(this.userForm.value);
  // }

  // updateUser(){
  //   this.api.putUser(this.userForm.value, this.editData.id)
  //   .subscribe({
  //     next:(res)=>{
  //       alert("User Updated Successfully")
  //       this.userForm.reset()
  //       this.dialogRef.close('update')
  //     },
  //     error:()=>{
  //       alert("Error updating")
  //     }
  //   })
  // }

}
