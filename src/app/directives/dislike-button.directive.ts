import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[dislike-button]'
})
export class DislikeButtonDirective {
    private _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this._element.nativeElement.innerHTML = 'stop, nooo';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._element.nativeElement.innerHTML = 'DISLIKE';
    }
}
