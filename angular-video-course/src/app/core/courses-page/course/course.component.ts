import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { CourseInterface } from '../course.interface';

@Component({
  selector: 'vc-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: CourseInterface;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public delete(): void {
    this.onDelete.emit(this.course.id);
  }

}
