import {
  Directive,
  ViewContainerRef,
  OnChanges,
  TemplateRef,
  Input,
 } from '@angular/core';

@Directive({
  selector: '[appNgLoopOf]'
})
export class DltLoopDirective implements OnChanges {

  @Input() appNgLoopOf: Array<any>;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
            ) { }

  ngOnChanges() {
    this.container.clear();

    for (const input of this.appNgLoopOf) {
      this.container.createEmbeddedView(this.template,  {
        $implicit: input,
        index1: this.appNgLoopOf.indexOf(input),
       });
    }
  }

}
