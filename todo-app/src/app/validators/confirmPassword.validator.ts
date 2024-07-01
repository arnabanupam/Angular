import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms"
import { ValidatorFn } from "@angular/forms"

// export const confirmPasswordValidator: ValidatorFn = 
//     (control: AbstractControl): ValidationErrors | null =>{
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');

//     if(!password || !confirmPassword){
//         return null;
//     }
//     return password.value === confirmPassword.value ? null :{passwordMismatch : true}
//     }

export const confirmPasswordValidator = (controlName: string, controlNameToMatch: string)=>{
    return (formGroup: FormGroup)=>{
        let control = formGroup.controls[controlName];
        let controlToMatch = formGroup.controls[controlNameToMatch];
        if(controlToMatch.errors && controlToMatch.errors['confirmPasswordValidator']){
            return;
        }
        if(control.value != controlToMatch.value){
            controlToMatch.setErrors({
                confirmPasswordValidator : true
            })
        }else{
            controlToMatch.setErrors(null);
        }
    }
}