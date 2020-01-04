import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'vc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  courseName = '';

  constructor() { }

  ngOnInit() {
  }

  public find(): void {
    console.log(this.courseName);
  }

}
