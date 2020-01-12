import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CoursesPageComponent } from './courses-page.component';
import { SearchComponent } from './search/search.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        CoursesPageComponent,
        SearchComponent,
        CourseComponent
      ],
      providers: [
        CoursesService
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
    const getCoursesLength = coursesService.getCourses().length;
    expect(component.courses.length).toBe(getCoursesLength);
  });

  it('should emit onDelete action', () => {
    const spy = spyOn(component, 'onDelete');
    fixture.debugElement.query(By.css('vc-course')).triggerEventHandler('deleteCourse', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
