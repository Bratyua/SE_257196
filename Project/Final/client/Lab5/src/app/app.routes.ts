import { Routes } from '@angular/router';
import { RoleGuard } from './guards/role-guard';
import { User } from './user/user';
import { authGuard } from './guards/auth-guard';
import { Login } from './login/login';
import { Register } from './register/register';
import { Admin } from './admin/admin';
import { Mod } from './mod/mod';


export const routes: Routes = [
    { path: 'user', component: User, canActivate: [RoleGuard], data: { roles: ['ROLE_USER', 'ROLE_MODERATOR', 'ROLE_ADMIN'] }, },
    { path: 'mod', component: Mod, canActivate: [RoleGuard], data: { roles: ['ROLE_MODERATOR', 'ROLE_ADMIN'] }, },
    { path: 'admin', component: Admin, canActivate: [authGuard], data: { roles: ['ROLE_ADMIN'] }, },
    { path: 'auth/login', component: Login },
    { path: 'signup', component: Register },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
