import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: []
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;
    public fb: FormBuilder;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    register() {
        console.log(this.form.value);
    }
}
