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
  selector: 'app-mod',
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
  templateUrl: './mod.html',
  styleUrl: './mod.css',
})
export class Mod implements OnInit {
  board = signal<string>('');
  errorMessage = signal<string>('');
  currentView = signal<'students' | 'calculate' | 'universities'>('students');
  
  students = signal<Student[]>([]);
  universities = signal<any[]>([]);
  olaAgreements = signal<any[]>([]);
  faculties = signal<any[]>([]);

  // State for calculation inputs per student ID
  calcInputs = signal<{[key: number]: { wa: number, lg: number, sg: number }}>({});

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
      this.loadBoard();
      this.loadStudents();
      this.loadUniversities();
      this.loadOlaAgreements();
      this.loadFaculties();
    }
  }

  loadBoard() {
    this.userService.getModPage().subscribe({
      next: (data) => {
        this.board.set(data);
      },
      error: (error) => {
        this.errorMessage.set(`${error.status}: ${error.error?.message || error.message}`);
      }
    });
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
      },
      error: (err) => {
        this.errorMessage.set(`Failed to load students: ${err.status}`);
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

  loadFaculties() {
    this.http.get<any[]>('http://localhost:8080/faculties').subscribe(data => {
      this.faculties.set(data);
    });
  }

  getAgreementsForUni(uniId: number) {
    return this.olaAgreements().filter(ola => 
      ola.destUnis && ola.destUnis.some((uni: any) => uni.id === uniId)
    );
  }

  assignToStudent(studentId: number | undefined, field: string, value: any) {
    if (studentId === undefined) return;
    const body: any = {};
    body[field] = value;
    
    this.studentService.patchStudent(body, studentId).subscribe({
      next: () => {
        alert(`${field} assigned successfully`);
        this.loadStudents();
      },
      error: (err) => {
        alert(`Failed to assign ${field}`);
      }
    });
  }

  setView(view: 'students' | 'calculate' | 'universities') {
    this.currentView.set(view);
    if (view === 'students') {
      this.loadStudents();
    } else if (view === 'universities') {
      this.loadUniversities();
      this.loadOlaAgreements();
    }
  }

  updateCalcInput(studentId: number | undefined, field: 'wa' | 'lg' | 'sg', value: number) {
    if (studentId === undefined) return;
    const current = this.calcInputs()[studentId] || { wa: 0, lg: 0, sg: 0 };
    this.calcInputs.set({
      ...this.calcInputs(),
      [studentId]: { ...current, [field]: value }
    });
  }

  calculateAndSavePoints(studentId: number | undefined) {
    if (studentId === undefined) return;
    const inputs = this.calcInputs()[studentId];
    if (!inputs) {
      alert('Please enter grades first');
      return;
    }

    const { wa, lg, sg } = inputs;
    
    // Validation
    if (wa < 0 || wa > 10) { alert('Weighted Average must be between 0 and 10'); return; }
    if (lg < 0 || lg > 11) { alert('Language Grade must be between 0 and 11'); return; }
    if (sg < 0 || sg > 5) { alert('Subjective Grade must be between 0 and 5'); return; }

    // Formula: WA + LG + SG
    // WA is limited to 2nd decimal part
    const roundedWA = Math.round(wa * 100) / 100;
    const totalPoints = roundedWA + lg + sg;

    this.studentService.patchStudent({ points: totalPoints }, studentId).subscribe({
      next: () => {
        alert(`Points calculated and saved: ${totalPoints.toFixed(2)}`);
        this.loadStudents();
      },
      error: (err) => {
        alert('Failed to save points');
      }
    });
  }

  updateOlaStatus(studentId: number | undefined, status: string) {
    if (studentId === undefined || !status) return;
    this.studentService.patchStudent({ olaStatus: status }, studentId).subscribe({
      next: () => {
        alert('OLA Status updated successfully');
        this.loadStudents();
      },
      error: (err) => {
        alert('Failed to update OLA Status');
      }
    });
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
