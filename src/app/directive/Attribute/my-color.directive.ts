import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MyColorDirective implements AfterViewInit {

  @Input() inputColor: string;

  constructor(private elRef: ElementRef) {
// elRef.nativeElement.style.color = 'green';
elRef.nativeElement.style.backgroundColor = '#ccccff';
elRef.nativeElement.style.fontSize = '20px';
   }

   ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.inputColor;
      }

}
