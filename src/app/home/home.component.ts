import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @HostBinding('class') classes = 'landing-page';

    public pieces: any[];
    public tinymce: any;
}
