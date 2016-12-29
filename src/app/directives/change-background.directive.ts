import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[change-backgound]'
})
export class ChangeBackgroundDirective {
    private _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this._element);
        this._element.nativeElement.style.backgroundColor = 'gray';
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log(this._element);
        this._element.nativeElement.style.backgroundColor = 'white';
    }
}