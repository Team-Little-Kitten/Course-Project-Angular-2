import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[like-button]'
})
export class LikeButtonDirective {
    private _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this._element.nativeElement.innerHTML = 'please like me';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._element.nativeElement.innerHTML = 'LIKE';
    }
}
