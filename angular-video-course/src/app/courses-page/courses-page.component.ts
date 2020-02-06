import { Component, OnInit } from '@angular/core';
import { CourseInterface } from './course.interface';
import { CoursesService } from './courses.service';
import { SearchByCourseNamePipe } from './search/search-by-course-name.pipe';

@Component({
  selector: 'vc-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [ SearchByCourseNamePipe ]
})
export class CoursesPageComponent implements OnInit {
  courses: CourseInterface[];
  nonFilteredCourses: CourseInterface[];

  constructor(
    private coursesService: CoursesService,
    private searchByCourseName: SearchByCourseNamePipe,
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.nonFilteredCourses = this.courses;
  }

  public onDelete(id: string): void {
    this.courses = this.courses.filter((item: CourseInterface) => item.id !== id);
  }

  public onFind(courseName: string): void {
    this.courses = this.nonFilteredCourses;
    this.courses = this.searchByCourseName.transform(this.courses, courseName);
  }

}
