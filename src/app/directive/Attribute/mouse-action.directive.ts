import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouseaction]'
})
export class MouseActionDirective {

  constructor(private elRef: ElementRef) { }

  @HostBinding('style.color') private color: string;

  @HostBinding('style.backgroundColor') private backgroundColor: string;

  @HostBinding('class.two') private isHovering: boolean;

  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('darkgrey', 'red', true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white', 'black', false);
  }
  private changeBackgroundColor(backgroundColor: string , color: string, isHovering: boolean) {
   // this.elRef.nativeElement.style.backgroundColor = backgroundColor;
   // this.elRef.nativeElement.style.color = color;
   this.color = color;
   this.backgroundColor = backgroundColor;
   this.isHovering = isHovering;
  }
}
