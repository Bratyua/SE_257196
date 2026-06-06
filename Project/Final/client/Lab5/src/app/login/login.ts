import {Component, inject, OnInit, signal} from '@angular/core';
import {LoginInfo} from '../auth/login-info';
import {AuthService} from '../auth/auth-service';
import {TokenStorageService} from '../auth/token-storage-service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  form: any = {};
  token?: string;
  isLoggedIn = signal(false);
  isLoginFailed = signal(false);
  isResetRequired = signal(false);
  errorMessage = signal<string>('');
  roles: string[] = [];
  username = signal('');
  
  newPassword = signal('');
  confirmPassword = signal('');

  private authService = inject(AuthService);
  public tokenStorage = inject(TokenStorageService);
  private router = inject(Router);
  private http = inject(HttpClient);

  ngOnInit() {
    if (this.tokenStorage.getToken() != null && this.tokenStorage.getToken() != '{}') {
      this.username.set(this.tokenStorage.getUsername());
      if (this.tokenStorage.getResetRequired()) {
        this.isResetRequired.set(true);
      } else {
        this.isLoggedIn.set(true);
        this.roles = this.tokenStorage.getAuthorities();
      }
    }
  }

  redirectToPanel() {
    if (this.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin']);
    } else if (this.roles.includes('ROLE_MODERATOR')) {
      this.router.navigate(['/mod']);
    } else if (this.roles.includes('ROLE_USER')) {
      this.router.navigate(['/user']);
    } else {
      this.reloadPage();
    }
  }

  onSubmit() {
    const loginInfo = new LoginInfo(this.form.username, this.form.password);

    this.authService.attemptAuth(loginInfo).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken || '{}');
        this.tokenStorage.saveUsername(data.username || '{}');
        this.tokenStorage.saveAuthorities(data.authorities || []);
        this.tokenStorage.saveResetRequired(data.passwordResetRequired || false);

        this.username.set(data.username || '');
        this.isLoginFailed.set(false);
        this.roles = this.tokenStorage.getAuthorities();

        if (data.passwordResetRequired) {
          this.isResetRequired.set(true);
        } else {
          this.isLoggedIn.set(true);
          this.token = this.tokenStorage.getToken();
          this.redirectToPanel();
        }
      },
      error: (error) => {
        console.log(error);
        this.errorMessage.set(error.error.message || 'Login failed');
        this.isLoginFailed.set(true);
      }
    });
  }

  onChangePassword() {
    if (this.newPassword() !== this.confirmPassword()) {
      alert('Passwords do not match');
      return;
    }
    if (this.newPassword().length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    this.http.post('http://localhost:8080/auth/change-password', {
      newPassword: this.newPassword()
    }).subscribe({
      next: () => {
        alert('Password changed successfully! Please login again.');
        this.tokenStorage.signOut();
        window.location.reload();
      },
      error: (err) => {
        alert('Failed to change password');
      }
    });
  }

  startChangePassword() {
    this.isResetRequired.set(true);
    this.isLoggedIn.set(false);
  }

  cancelChangePassword() {
    this.isResetRequired.set(false);
    this.isLoggedIn.set(true);
  }

  reloadPage() {
    window.location.reload();
  }
}
