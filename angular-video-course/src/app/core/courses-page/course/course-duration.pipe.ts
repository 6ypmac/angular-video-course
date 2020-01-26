import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(duration: number): string {
    let durationFormated;
    const hours = Math.floor( duration / 60 );
    const minutes = Math.floor( duration % 60 );

    if (hours) {
      durationFormated = hours + 'h ' + minutes + 'min';
    } else {
      durationFormated = minutes + 'min';
    }

    return durationFormated;
  }

}
