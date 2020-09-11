import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '75'

    constructor(
        private render: Renderer2,
        private el: ElementRef,
    ) {}
   
    @HostListener('mouseover')
    darkenOn() {
        this.render.setStyle(
        this.el.nativeElement, 'filter',`brightness(${this.brightness}%)`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}