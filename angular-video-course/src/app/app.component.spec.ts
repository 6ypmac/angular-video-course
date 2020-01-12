import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { By } from '@angular/platform-browser';
import {SearchComponent} from './core/courses-page/search/search.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ngOnInit action', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngDoCheck action', () => {
    const spy = spyOn(component, 'ngDoCheck');
    component.ngDoCheck();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngAfterContentInit action', () => {
    const spy = spyOn(component, 'ngAfterContentInit');
    component.ngAfterContentInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngAfterContentChecked action', () => {
    const spy = spyOn(component, 'ngAfterContentChecked');
    component.ngAfterContentChecked();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngAfterViewInit action', () => {
    const spy = spyOn(component, 'ngAfterViewInit');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngAfterViewChecked action', () => {
    const spy = spyOn(component, 'ngAfterViewChecked');
    component.ngAfterViewChecked();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit ngOnDestroy action', () => {
    const spy = spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
