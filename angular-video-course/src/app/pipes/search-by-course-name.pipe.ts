import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCourseName'
})
export class SearchByCourseNamePipe implements PipeTransform {

  transform(courses: any[], courseName: string): any {
    if ( !courses ) {
      return [];
    }

    if ( !courseName ) {
      return courses;
    }

    courseName = courseName.toLowerCase();

    return courses.filter( (course) => course.titleOfCourse.toLowerCase().includes(courseName) );
  }

}
