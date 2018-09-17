import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transform = "scale(0.5,0.5)";
    this.el.nativeElement.style.WebkitTransform = "scale(0.5,0.5)";
    this.el.nativeElement.style.transition = "1s";
  }

  @HostListener('mouseover')
  public ZoomIn() {
    this.el.nativeElement.style.transform = "scale(1,1)";
    this.el.nativeElement.style.WebkitTransform = "scale(1,1)";
  }
}
