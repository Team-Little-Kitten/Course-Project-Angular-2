import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [HttpModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [],
    providers: [AuthService]
})
export class AuthModule { }