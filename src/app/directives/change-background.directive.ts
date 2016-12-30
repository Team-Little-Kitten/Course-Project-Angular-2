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
        console.log(this._element);
        // this._element.nativeElement.style.width.px *= 1.1;
        // console.log(this._element.nativeElement.style.width);
        // console.log(this._element.nativeElement.style.width.px);
        // this._element.nativeElement.style.height.px *= 1.1;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._element.nativeElement.style.backgroundColor = 'white';
        // this._element.nativeElement.style.width.px /= 1.1;
        // this._element.nativeElement.style.height.px /= 1.1;
    }
}
