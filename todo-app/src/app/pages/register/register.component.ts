import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../validators/confirmPassword.validator';
import { StorageService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private storageService: StorageService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  
    register() {
      console.log(this.registerForm.value);
      //if (this.registerForm.valid) {
        // Save user data to local storage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(this.registerForm.value);
        localStorage.setItem('users', JSON.stringify(users));
        // Show registration successful popup
        alert('Registration successful! Please login.');
        // Redirect to login page after successful registration
        this.router.navigate(['/login']);
      //}
    }
}
