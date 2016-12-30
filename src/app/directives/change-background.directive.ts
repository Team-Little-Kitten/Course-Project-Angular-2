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
        this._element.nativeElement.style.backgroundColor = 'lightgray';
        this._element.nativeElement.style.zoom = '110%';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._element.nativeElement.style.backgroundColor = 'white';
        this._element.nativeElement.style.zoom = '100%';
    }
}
