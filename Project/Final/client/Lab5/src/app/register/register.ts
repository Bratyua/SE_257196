import {Component, inject, signal} from '@angular/core';
import {SignupInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth-service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule, 
    CommonModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  form: any = {};
  signupInfo?: SignupInfo;
  isSignedUp = signal(false);
  isSignUpFailed = signal(false);
  errorMessage = signal<string>('');

  private authService = inject(AuthService);

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignupInfo(
      this.form.username,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe({
      next: (data) =>
      {
        console.log(data);
        this.isSignedUp.set(true);
        this.isSignUpFailed.set(false);
      }
      ,
      error: (error) => {
        console.log(error);
        this.errorMessage.set(error.error.message);
        this.isSignUpFailed.set(true);
      }
    });
  }

}







