import { DoCheck, ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[rating-color]'
})
export class CritiqueRatingColorDirective implements DoCheck {
    private _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    ngDoCheck(): void {
        let value = +this._element.nativeElement.innerHTML;
        console.log(value);
        if (value < 0) {
            this._element.nativeElement.style.color = 'red';
        } else if (value === 0) {
            this._element.nativeElement.style.color = 'black';
        } else {
            this._element.nativeElement.style.color = 'lightgreen';
        }
    }
}
