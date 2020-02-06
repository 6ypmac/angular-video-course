import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BorderDecoratorDirective } from './border-decorator.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  template: `
      <div [vcBorderDecorator]="futureDate">Test for future course.creationDate</div>
      <div [vcBorderDecorator]="freshDate">Test for fresh course.creationDate</div>
      <div [vcBorderDecorator]="oldDate">Test for old course.creationDate</div>
  `,
})
class HostComponent {
  date: Date = new Date();
  futureDate: Date = new Date(this.date.setDate( this.date.getDate() + 5 ));
  freshDate: Date = new Date(this.date.setDate( this.date.getDate() - 10 ));
  oldDate: Date = new Date(this.date.setDate( this.date.getDate() - 30 ));
}

describe('BorderDecoratorDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let allTestBoxes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BorderDecoratorDirective,
        HostComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    allTestBoxes = fixture.debugElement.queryAll(By.directive(BorderDecoratorDirective));

    fixture.detectChanges();
  });

  it('should have three border decorated elements', () => {
    expect(allTestBoxes.length).toBe(3);
  });

  it('background for futureDate should be "blue"', () => {
    expect(allTestBoxes[0].styles['border-color']).toBe('blue');
  });

  it('background for freshDate should be "green"', () => {
    expect(allTestBoxes[1].styles['border-color']).toBe('green');
  });

  it('background for oldDate should be "undefined"', () => {
    expect(allTestBoxes[2].styles['border-color']).toBeUndefined();
  });
});
