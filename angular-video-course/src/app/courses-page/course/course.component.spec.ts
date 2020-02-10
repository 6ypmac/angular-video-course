import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseComponent } from './course.component';
import { CourseInterface } from '../course.interface';
import { BorderDecoratorDirective } from '../../directives';
import { TransformMinutesPipe } from '../../pipes';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let expectedCourse: CourseInterface;
  let compiledComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        BorderDecoratorDirective,
        TransformMinutesPipe
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    compiledComponent = fixture.debugElement;

    expectedCourse = {
      id: '1',
      titleOfCourse: 'Lorem ipsum',
      creationDate: new Date('February 12, 2016'),
      duration: 88,
      description: '' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
        'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
        '',
      topRate: true,
    };

    component.course = expectedCourse;
    fixture.detectChanges();
  });

  it('should create CourseComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should raises the delete event when clicked', () => {
    const comp = new CourseComponent();
    comp.course = expectedCourse;
    comp.delete();
    expect(comp.delete()).toBe(comp.deleteCourse.emit(comp.course.id));
  });

  it('should display title of course', () => {
    const expectedTitleOfCourse = expectedCourse.titleOfCourse;
    const value = compiledComponent
      .query(
        By.css('[data-test-id="course-title"]')
      )
      .nativeElement
      .textContent;
    expect(value)
      .toContain(expectedTitleOfCourse.toUpperCase());
  });
});

////// Test Host Component //////
import { Component } from '@angular/core';

describe('CourseComponent when inside a test host', () => {
  let testHost: TestHostCoursesPageComponent;
  let fixture: ComponentFixture<TestHostCoursesPageComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        TestHostCoursesPageComponent,
        BorderDecoratorDirective,
        TransformMinutesPipe
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture  = TestBed.createComponent(TestHostCoursesPageComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete course', () => {
    const courseDeleteId = testHost.testCourses[0].id;
    testHost.onDelete(courseDeleteId);
    fixture.autoDetectChanges();
    expect(fixture.debugElement.childNodes.length).toBe(1);
  });
});

@Component({
  template: `
    <vc-course
      (deleteCourse)="onDelete($event)"
      *ngFor="let course of testCourses; index as i"
      [course]="course"
      [courseIndex]="i">
    </vc-course>
  `
})
class TestHostCoursesPageComponent {
  testCourses: CourseInterface [] = [
    {
      id: '1',
      titleOfCourse: 'Lorem ipsum',
      creationDate: new Date('February 12, 2016'),
      duration: 88,
      description: '' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
        'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
        '',
      topRate: true,
    }
  ];

  onDelete(id: string): void {
    this.testCourses = this.testCourses.filter((item: CourseInterface) => item.id !== id);
  }
}
