import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinyEditorComponent } from './tiny-editor.component'

@NgModule({
    imports: [HttpModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [TinyEditorComponent],
    exports: [TinyEditorComponent]
})
export class SharedModule { }