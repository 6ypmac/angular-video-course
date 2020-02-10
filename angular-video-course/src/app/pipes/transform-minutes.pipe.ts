import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformMinutes'
})
export class TransformMinutesPipe implements PipeTransform {

  transform(duration: number): string {
    let durationFormated = '0 min';

    if (!duration) {
      return durationFormated;
    }

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
