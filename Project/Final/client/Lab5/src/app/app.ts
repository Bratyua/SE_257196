import {Component, inject, signal, computed} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {TokenStorageService} from './auth/token-storage-service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public roles = signal<string[]>([]);
  authority = signal<string>('');
  username = signal<string>('');

  private tokenStorage = inject (TokenStorageService);

  displayTitle = computed(() => {
    const user = this.username();
    return user && user !== '{}' ? `Welcome ${user}` : 'Welcome to ErasmoBoard';
  });

  ngOnInit() {
    this.updateUserStatus();
  }

  updateUserStatus() {
    const token = this.tokenStorage.getToken();
    if (token && token !== '{}') {
      this.username.set(this.tokenStorage.getUsername());
      this.roles.set(this.tokenStorage.getAuthorities());
      this.roles().every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority.set('admin');
          return false;
        } else if (role === 'ROLE_MODERATOR') {
          this.authority.set('mod');
          return false;
        }
        this.authority.set('user');
        return true;
      });
    }
  }
}
