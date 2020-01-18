import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseComponent } from './course.component';
import { CourseInterface } from '../course.interface';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let expectedCourse: CourseInterface;
  let compiledComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent
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
    compiledComponent = fixture.debugElement.nativeElement;

    expectedCourse = {
      id: '1',
      titleOfCourse: 'Video Course 1',
      creationDate: new Date('February 12, 2016'),
      duration: '1h 28m',
      description: '' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
        'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
        '',
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
    expect(
      compiledComponent
        .querySelector('[data-test-id="course-title"]')
        .textContent
    ).toContain(expectedTitleOfCourse);
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
        TestHostCoursesPageComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture  = TestBed.createComponent(TestHostCoursesPageComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  // #docregion test-host-tests
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
      (click)="onClick()"
      *ngFor="let course of testCourses"
      [course]="course">
    </vc-course>
  `
})
class TestHostCoursesPageComponent {
  testCourses: CourseInterface [] = [
    {
      id: '1',
      titleOfCourse: 'Video Course 1',
      creationDate: new Date('February 12, 2016'),
      duration: '1h 28m',
      description: '' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
        'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
        '',
    }
  ];
  onClick() {
    console.log('click!');
  }
  onDelete(id: string): void {
    this.testCourses = this.testCourses.filter((item: CourseInterface) => item.id !== id);
  }
}
