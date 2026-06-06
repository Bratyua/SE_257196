import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const RESET_REQUIRED_KEY = 'AuthResetRequired';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private roles: Array<string> = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  signOut() {
    if (this.isBrowser) {
      window.sessionStorage.clear();
    }
  }

  public saveToken(token: string) {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  public getToken(): string {
    if (this.isBrowser) {
      return sessionStorage.getItem(TOKEN_KEY) || '{}';
    }
    return '{}';
  }

  public saveUsername(username: string) {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(USERNAME_KEY);
      window.sessionStorage.setItem(USERNAME_KEY, username);
    }
  }

  public getUsername(): string {
    if (this.isBrowser) {
      return sessionStorage.getItem(USERNAME_KEY) || '{}';
    }
    return '{}';
  }

  public saveAuthorities(authorities: string[]) {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(AUTHORITIES_KEY);
      window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (this.isBrowser) {
      if (sessionStorage.getItem(TOKEN_KEY)) {
        JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach((authority: { authority: string; }) => {
          this.roles.push(authority.authority);
        });
      }
    }

    return this.roles;
  }

  public saveResetRequired(required: boolean) {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(RESET_REQUIRED_KEY);
      window.sessionStorage.setItem(RESET_REQUIRED_KEY, JSON.stringify(required));
    }
  }

  public getResetRequired(): boolean {
    if (this.isBrowser) {
      return JSON.parse(sessionStorage.getItem(RESET_REQUIRED_KEY) || 'false');
    }
    return false;
  }
}
