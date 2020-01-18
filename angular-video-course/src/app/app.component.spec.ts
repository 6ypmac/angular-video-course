import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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
    compiledComponent = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header component', () => {
    expect(compiledComponent.querySelector('[data-test-id="vc-header"]')).toBeTruthy();
  });

  it('should render breadcrumbs component', () => {
    expect(compiledComponent.querySelector('[data-test-id="vc-breadcrumbs"]')).toBeTruthy();
  });

  it('should render content component', () => {
    expect(compiledComponent.querySelector('[data-test-id="vc-content"]')).toBeTruthy();
  });

  it('should render footer component', () => {
    expect(compiledComponent.querySelector('[data-test-id="vc-footer"]')).toBeTruthy();
  });
});
