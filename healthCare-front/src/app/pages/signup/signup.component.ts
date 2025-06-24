import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Ensure HeaderComponent is correctly imported if it were to be used directly in this template
// import { HeaderComponent } from '../../shared/header/header';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // HeaderComponent // Not needed here as header is global in app.html
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]], // Basic password validation
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else if (confirmPassword) {
      // Clear mismatch error if passwords match or only one field is filled
      // Ensure other validators on confirmPassword (like required) are not cleared unintentionally
      const errors = confirmPassword.errors;
      if (errors && errors['mismatch']) {
        delete errors['mismatch'];
        if (Object.keys(errors).length === 0) {
          confirmPassword.setErrors(null);
        } else {
          confirmPassword.setErrors(errors);
        }
      }
    }
    return null;
  }

  get f() { return this.signupForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      console.log('Form is invalid');
      // Optionally, log specific errors
      Object.keys(this.signupForm.controls).forEach(key => {
        const controlErrors = this.signupForm.get(key)?.errors;
        if (controlErrors) {
          console.log('Key control: ' + key + ', errors: ' + JSON.stringify(controlErrors));
        }
      });
      return;
    }
    console.log('Sign up successful:', this.signupForm.value);
    // Here you would typically call an authentication service
  }
}
