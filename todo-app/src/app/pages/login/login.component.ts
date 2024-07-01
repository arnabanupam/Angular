import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  
login(){
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  console.log(users);
  const { email, password } = this.loginForm.value;
  const user = users.find((u: { email: any; password: any; }) => u.email === email && u.password === password);
  if (user) {
    // Login successful, navigate to dashboard
    alert('Login successful!');
    this.router.navigate(['/dashboard']);
  } else {
    // Invalid credentials, show error message or handle accordingly
    alert('Invalid email or password');
  }
}
}
