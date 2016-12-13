import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AuthModule } from './auth/auth.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        AuthModule
    ]
})
export class AppModule { }