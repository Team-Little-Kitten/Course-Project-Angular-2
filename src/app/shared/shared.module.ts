import { NgModule } from '@angular/core';

import { TinyEditorComponent } from './tiny-editor.component'
@NgModule({
    declarations: [TinyEditorComponent],
    exports: [TinyEditorComponent]
})
export class SharedModule { }