import { Component, HostBinding } from '@angular/core';

@Component({
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
    @HostBinding('class') classes = 'landing-page';
}
