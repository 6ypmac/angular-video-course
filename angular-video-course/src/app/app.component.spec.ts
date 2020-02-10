import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiledComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiledComponent = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header component', () => {
    const value = compiledComponent
      .query(
        By.css('[data-test-id="vc-header"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });

  it('should render breadcrumbs component', () => {
    const value = compiledComponent
      .query(
        By.css('[data-test-id="vc-breadcrumbs"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });

  it('should render content component', () => {
    const value = compiledComponent
      .query(
        By.css('[data-test-id="vc-content"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });

  it('should render footer component', () => {
    const value = compiledComponent
      .query(
        By.css('[data-test-id="vc-footer"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });
});
