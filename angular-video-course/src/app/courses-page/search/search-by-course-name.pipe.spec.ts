import { SearchByCourseNamePipe } from './search-by-course-name.pipe';
import { CourseInterface } from '../course.interface';

describe('SearchByCourseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SearchByCourseNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('Courses length should be = 2', () => {
    const pipe = new SearchByCourseNamePipe();
    const courses: CourseInterface[] = [
      {
        titleOfCourse: 'Lorem ipsum'
      },
      {
        titleOfCourse: 'Dolor ipsum amet'
      },
      {
        titleOfCourse: 'Lorem tincidunt libero'
      }
    ];
    const searchResult = pipe.transform(courses, 'lorem');
    expect(searchResult.length).toBe(2);
  });
});
