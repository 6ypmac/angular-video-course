import { Injectable } from '@angular/core';
import { CourseInterface } from './course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    const courses: CourseInterface[] = [
      {
        id: '1',
        titleOfCourse: 'Lorem ipsum',
        creationDate: new Date('December 12, 2019'),
        duration: 88,
        description: '' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
          'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
          '',
        topRate: true,
      },
      {
        id: '2',
        titleOfCourse: 'Dolor ipsum amet',
        creationDate: new Date('January 25, 2020'),
        duration: 130,
        description: '' +
          'Iaculis at erat pellentesque adipiscing commodo elit at. Fermentum odio eu feugiat pretium. ' +
          'Orci ac auctor augue mauris augue neque gravida in fermentum. Molestie a iaculis at erat pellentesque. ' +
          'Non blandit massa enim nec dui nunc mattis enim.' +
          '',
        topRate: false,
      },
      {
        id: '3',
        titleOfCourse: 'Lorem tincidunt libero',
        creationDate: new Date('May 11, 2020'),
        duration: 45,
        description: '' +
          'Urna id volutpat lacus laoreet non curabitur. Arcu non odio euismod lacinia at quis. Lacus sed viverra tellus in hac.' +
          '',
        topRate: false,
      },
    ];

    return courses;
  }
}
