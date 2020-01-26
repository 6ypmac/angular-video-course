import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[vcCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {
  @Input('vcCourseFreshness') creationDate: Date;

  currentDate: Date = new Date();
  lastFreshDate: Date = new Date();
  freshDateRange = 14;

  constructor(private element: ElementRef) {}

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
    this.element.nativeElement.style.borderColor = color;
  }
}
