import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage-service';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-admin',
  imports: [
    FormsModule, 
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatChipsModule
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  board = signal<string>('');
  errorMessage = signal<string>('');
  currentView = signal<'faculties' | 'universities' | 'users' | 'ola'>('faculties');
  
  facultyName = signal('');
  faculties = signal<any[]>([]);
  
  uniName = signal('');
  uniCountry = signal('');
  uniCity = signal('');
  universities = signal<any[]>([]);

  users = signal<any[]>([]);
  newUsername = signal('');
  newPassword = signal('');
  newRole = signal('ROLE_USER');

  userPasswords = signal<{[key: number]: string}>({});

  // OLA Agreements
  olaAgreements = signal<any[]>([]);
  newOlaNo = signal<number | null>(null);
  newOlaName = signal('');
  selectedDestUniId = signal<number | null>(null);

  // Account management signals
  isChangingPassword = signal(false);
  accountNewPassword = signal('');
  accountConfirmPassword = signal('');

  private userService = inject(UserService);
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  public tokenStorage = inject(TokenStorageService);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadData();
      this.loadFaculties();
      this.loadUniversities();
      this.loadUsers();
      this.loadOlaAgreements();
    }
  }

  setView(view: 'faculties' | 'universities' | 'users' | 'ola') {
    this.currentView.set(view);
    if (view === 'users') {
      this.loadUsers();
    } else if (view === 'ola') {
      this.loadOlaAgreements();
      this.loadUniversities();
    }
  }

  loadData() {
    this.userService.getAdminPage().subscribe({
      next: (data) => {
        this.board.set(data);
      },
      error: (error) => {
        this.errorMessage.set(`Board Error: ${error.status}`);
      }
    });
  }

  loadFaculties() {
    this.http.get<any[]>('http://localhost:8080/faculties').subscribe(data => {
      this.faculties.set(data);
    });
  }

  loadUniversities() {
    this.http.get<any[]>('http://localhost:8080/universities').subscribe(data => {
      this.universities.set(data);
    });
  }

  loadUsers() {
    this.errorMessage.set('');
    this.http.get<any[]>('http://localhost:8080/admin/users').subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (err) => {
        console.error('Failed to load users', err);
        this.errorMessage.set(`Failed to load users: ${err.status} ${err.message}`);
      }
    });
  }

  loadOlaAgreements() {
    this.http.get<any[]>('http://localhost:8080/ola-agreements').subscribe(data => {
      this.olaAgreements.set(data);
    });
  }

  addFaculty() {
    const name = this.facultyName().trim();
    if (!name) return;

    this.http.post('http://localhost:8080/faculties', { name }).subscribe({
      next: () => {
        this.facultyName.set('');
        this.loadFaculties();
      },
      error: (err) => {
        alert('Failed to add faculty');
      }
    });
  }

  deleteFaculty(id: number) {
    if (!confirm('Are you sure you want to delete this faculty?')) return;

    this.http.delete(`http://localhost:8080/faculties/${id}`).subscribe({
      next: () => {
        this.loadFaculties();
      },
      error: (err) => {
        alert('Failed to delete faculty');
      }
    });
  }

  addUniversity() {
    const name = this.uniName().trim();
    const country = this.uniCountry().trim();
    const city = this.uniCity().trim();
    if (!name || !country || !city) return;

    this.http.post('http://localhost:8080/universities', { name, country, city }).subscribe({
      next: () => {
        this.uniName.set('');
        this.uniCountry.set('');
        this.uniCity.set('');
        this.loadUniversities();
      },
      error: (err) => {
        alert('Failed to add university');
      }
    });
  }

  deleteUniversity(id: number) {
    if (!confirm('Are you sure you want to delete this university?')) return;

    this.http.delete(`http://localhost:8080/universities/${id}`).subscribe({
      next: () => {
        this.loadUniversities();
      },
      error: (err) => {
        alert('Failed to delete university');
      }
    });
  }

  addUser() {
    const username = this.newUsername().trim();
    const password = this.newPassword().trim();
    const role = this.newRole();

    if (!username || !password) {
        alert('Username and password are required');
        return;
    }

    this.errorMessage.set('');
    this.http.post('http://localhost:8080/admin/users', {
      username,
      password,
      roles: [role]
    }).subscribe({
      next: () => {
        this.newUsername.set('');
        this.newPassword.set('');
        this.loadUsers();
        alert('User added successfully');
      },
      error: (err) => {
        console.error('Failed to add user', err);
        this.errorMessage.set(`Failed to add user: ${err.status} ${err.error?.message || err.message}`);
        alert('Failed to add user');
      }
    });
  }

  updateUserRole(user: any, newRole: string) {
    if (!newRole) return;
    this.errorMessage.set('');
    this.http.put(`http://localhost:8080/admin/users/${user.id}/roles`, [newRole]).subscribe({
      next: () => {
        this.loadUsers();
        alert('User role updated');
      },
      error: (err) => {
        console.error('Failed to update user role', err);
        this.errorMessage.set(`Failed to update role: ${err.status}`);
        alert('Failed to update user role');
      }
    });
  }

  resetUserPassword(id: number) {
    const newPwd = this.userPasswords()[id]?.trim();
    const confirmMsg = newPwd 
        ? `Are you sure you want to set a NEW temporary password and force a reset for this user?`
        : `Are you sure you want to force a password reset for this user? (They will need to know their current password to log in)`;

    if (!confirm(confirmMsg)) return;

    this.http.post(`http://localhost:8080/admin/users/${id}/reset-password`, {
        newPassword: newPwd || ''
    }).subscribe({
      next: () => {
        alert(newPwd ? 'Temporary password set and reset flag triggered!' : 'Password reset flag set successfully');
        const updatedPwds = { ...this.userPasswords() };
        delete updatedPwds[id];
        this.userPasswords.set(updatedPwds);
        this.loadUsers();
      },
      error: (err) => {
        alert('Failed to reset password');
      }
    });
  }

  updateTempPwd(id: number, value: string) {
    const updatedPwds = { ...this.userPasswords(), [id]: value };
    this.userPasswords.set(updatedPwds);
  }

  addOlaAgreement() {
    const olaNo = this.newOlaNo();
    const name = this.newOlaName().trim();
    const destUniId = this.selectedDestUniId();

    if (olaNo === null || !name || !destUniId) {
      alert('OLA Number, Name, and University are required');
      return;
    }

    this.http.post('http://localhost:8080/ola-agreements', {
      olaNo,
      name,
      destUniId
    }).subscribe({
      next: () => {
        this.newOlaNo.set(null);
        this.newOlaName.set('');
        this.loadOlaAgreements();
        alert('OLA Agreement added successfully');
      },
      error: (err) => {
        alert('Failed to add OLA Agreement: ' + (err.error?.message || err.message || err));
      }
    });
  }

  deleteOlaAgreement(olaNo: number) {
    if (!confirm('Are you sure you want to delete this OLA Agreement?')) return;

    this.http.delete(`http://localhost:8080/ola-agreements/${olaNo}`).subscribe({
      next: () => {
        this.loadOlaAgreements();
      },
      error: (err) => {
        alert('Failed to delete OLA Agreement');
      }
    });
  }

  getRolesString(user: any): string {
    if (!user || !user.roles) return '';
    return user.roles.map((r: any) => r.name).join(', ');
  }

  // Account actions
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  startChangePassword() {
    this.isChangingPassword.set(true);
  }

  cancelChangePassword() {
    this.isChangingPassword.set(false);
    this.accountNewPassword.set('');
    this.accountConfirmPassword.set('');
  }

  onChangePassword() {
    if (this.accountNewPassword() !== this.accountConfirmPassword()) {
      alert('Passwords do not match');
      return;
    }
    if (this.accountNewPassword().length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    this.http.post('http://localhost:8080/auth/change-password', {
      newPassword: this.accountNewPassword()
    }).subscribe({
      next: () => {
        alert('Password changed successfully! Please login again.');
        this.logout();
      },
      error: (err) => {
        alert('Failed to change password');
      }
    });
  }
}
