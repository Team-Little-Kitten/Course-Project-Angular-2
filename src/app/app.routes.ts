import { Routes } from '@angular/router';
import { RegisterComponent, LoginComponent } from './auth';

export const APP_ROUTES: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];