import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[vcBorderDecorator]'
})
export class BorderDecoratorDirective implements OnInit {
  @Input('vcBorderDecorator') creationDate: Date;

  currentDate: Date = new Date();
  lastFreshDate: Date = new Date();
  freshDateRange = 14;

  constructor( private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    this.lastFreshDate = new Date(this.lastFreshDate.setDate( this.lastFreshDate.getDate() - this.freshDateRange ));

    if (
      ( this.creationDate < this.currentDate ) &&
      ( this.creationDate >= this.lastFreshDate )
    ) {
      this.borderStatusColor('green');
    } else if (
      this.creationDate > this.currentDate
    ) {
      this.borderStatusColor('blue');
    }
  }

  private  borderStatusColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', color);
  }
}
