import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './create-thread.component.html',
    styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent {
    public createThreadForm: FormGroup;
    public fb: FormBuilder;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    public createThread(): void {
        
    }
}
