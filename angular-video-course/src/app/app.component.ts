import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit {

  constructor() {}

  public ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  public ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  public ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  public ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  public ngDoCheck(): void {
    console.log('DoCheck');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  public ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  public ngOnInit(): void {
    console.log('OnInit');
  }
}
