import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms'; // Added ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true, // Assuming it's a standalone component as per previous context
  imports: [CommonModule, ReactiveFormsModule] // Added CommonModule and ReactiveFormsModule
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
     this.loginForm = this.fb.group({
    emailOrUsername: ['', Validators.required],
    password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      // Optionally, iterate through controls to find specific errors
      // Object.keys(this.loginForm.controls).forEach(key => {
      //   const controlErrors = this.loginForm.get(key)?.errors;
      //   if (controlErrors != null) {
      //     console.log('Key control: ' + key + ', errors: ' + JSON.stringify(controlErrors));
      //   }
      // });
      return;
    }

    // Process login here
    console.log('Form is valid. Logging in...');
    console.log('Email/Username:', this.loginForm.value.emailOrUsername);
    console.log('Password:', this.loginForm.value.password);
    // Reset submitted flag and form after successful submission if desired
    // this.submitted = false;
    // this.loginForm.reset();
  }
}
