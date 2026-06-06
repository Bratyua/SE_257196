import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TokenStorageService } from '../auth/token-storage-service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/studentService';
import { Student } from '../models/student';
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

@Component({
  selector: 'app-user',
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
    MatListModule
  ],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  board = signal<string>('');
  errorMessage = signal<string>('');
  currentView = signal<'profile' | 'universities' | 'allStudents' | 'calculator'>('profile');
  
  studentProfile = signal<Student | null>(null);
  students = signal<Student[]>([]);
  universities = signal<any[]>([]);
  olaAgreements = signal<any[]>([]);

  // Calculator State
  calcSem2 = signal(2.0);
  calcSem3 = signal(2.0);
  calcEnglish = signal(0);
  calcSubjective = signal(3);
  calcResult = signal<number | null>(null);

  isChangingPassword = signal(false);
  newPassword = signal('');
  confirmPassword = signal('');

  private userService = inject(UserService);
  private studentService = inject(StudentService);
  private platformId = inject(PLATFORM_ID);
  public tokenStorage = inject(TokenStorageService);
  private http = inject(HttpClient);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadProfile();
      this.loadUniversities();
      this.loadOlaAgreements();
      this.loadStudents();
    }
  }

  loadProfile() {
    this.studentService.getMyProfile().subscribe({
      next: (student) => {
        this.studentProfile.set(student);
      },
      error: (err) => {
        this.errorMessage.set(`Failed to load profile: ${err.status}`);
      }
    });
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
      },
      error: (err) => {
        this.errorMessage.set(`Failed to load student list: ${err.status}`);
      }
    });
  }

  loadUniversities() {
    this.http.get<any[]>('http://localhost:8080/universities').subscribe(data => {
      this.universities.set(data);
    });
  }

  loadOlaAgreements() {
    this.http.get<any[]>('http://localhost:8080/ola-agreements').subscribe(data => {
      this.olaAgreements.set(data);
    });
  }

  getAgreementsForUni(uniId: number) {
    return this.olaAgreements().filter(ola => 
      ola.destUnis && ola.destUnis.some((uni: any) => uni.id === uniId)
    );
  }

  calculatePoints() {
    const s2 = this.calcSem2();
    const s3 = this.calcSem3();
    const eng = this.calcEnglish();
    const sub = this.calcSubjective();

    // Validation
    if (s2 < 2 || s2 > 5 || s3 < 2 || s3 > 5) {
      alert('Semester averages must be between 2.0 and 5.0');
      return;
    }
    if (eng < 0 || eng > 11) {
      alert('English points must be between 0 and 11');
      return;
    }
    if (sub < 3 || sub > 5) {
      alert('Subjective grade must be between 3 and 5');
      return;
    }

    // Formula: english + subjective + s2 + s3
    const result = eng + sub + s2 + s3;
    this.calcResult.set(Number(result.toFixed(2)));
  }

  setView(view: 'profile' | 'universities' | 'allStudents' | 'calculator') {
    this.currentView.set(view);
    if (view === 'universities') {
      this.loadUniversities();
      this.loadOlaAgreements();
    } else if (view === 'allStudents') {
      this.loadStudents();
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  startChangePassword() {
    this.isChangingPassword.set(true);
  }

  cancelChangePassword() {
    this.isChangingPassword.set(false);
    this.newPassword.set('');
    this.confirmPassword.set('');
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
        this.logout();
      },
      error: (err) => {
        alert('Failed to change password');
      }
    });
  }
}
