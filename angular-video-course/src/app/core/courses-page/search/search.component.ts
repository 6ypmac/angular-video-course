import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'vc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() courseNameForSearch: EventEmitter<string> = new EventEmitter<string>();
  courseName = '';

  constructor() { }

  ngOnInit() {
  }

  public find(): void {
    this.courseNameForSearch.emit(this.courseName);
  }

}
