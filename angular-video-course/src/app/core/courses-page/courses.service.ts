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
        titleOfCourse: 'Video Course 1',
        creationDate: new Date('February 12, 2016'),
        duration: '1h 28m',
        description: '' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
          'ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam.' +
          '',
      },
      {
        id: '2',
        titleOfCourse: 'Video Course 2',
        creationDate: new Date('August 08, 2018'),
        duration: '2h 10m',
        description: '' +
          'Iaculis at erat pellentesque adipiscing commodo elit at. Fermentum odio eu feugiat pretium. ' +
          'Orci ac auctor augue mauris augue neque gravida in fermentum. Molestie a iaculis at erat pellentesque. ' +
          'Non blandit massa enim nec dui nunc mattis enim.' +
          '',
      },
      {
        id: '3',
        titleOfCourse: 'Video Course 3',
        creationDate: new Date('November 11, 2019'),
        duration: '45m',
        description: '' +
          'Urna id volutpat lacus laoreet non curabitur. Arcu non odio euismod lacinia at quis. Lacus sed viverra tellus in hac.' +
          '',
      },
    ];

    return courses;
  }
}
