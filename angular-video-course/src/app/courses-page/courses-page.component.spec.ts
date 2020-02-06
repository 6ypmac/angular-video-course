import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesService } from './courses.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent
      ],
      providers: [
        CoursesService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    coursesService = fixture.debugElement.injector.get(CoursesService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create CoursesPageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call CoursesService', () => {
    const getCoursesSpy = spyOn(coursesService, 'getCourses');
    component.ngOnInit();
    expect(getCoursesSpy).toHaveBeenCalled();
  });

  it('should be created courses list', () => {
    const coursesLength = component.courses.length;
    expect(coursesLength).not.toBe(0);
  });

  it('should emit onDelete action', () => {
    const spy = spyOn(component, 'onDelete');
    fixture.debugElement.query(By.css('[data-test-id="vc-course"]')).triggerEventHandler('deleteCourse', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
