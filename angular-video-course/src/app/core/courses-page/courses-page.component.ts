import { Component, OnInit } from '@angular/core';
import { CourseInterface } from './course.interface';
import { CoursesService } from './courses.service';

@Component({
  selector: 'vc-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  courses: CourseInterface[];

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

}
