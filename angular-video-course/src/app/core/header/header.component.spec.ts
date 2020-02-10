import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo component', () => {
    const value = fixture
      .debugElement
      .query(
        By.css('[data-test-id="vc-logo"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });

  it('should render user-login component', () => {
    const value = fixture
      .debugElement
      .query(
        By.css('[data-test-id="vc-user-login"]')
      )
      .nativeElement;
    expect(value).toBeTruthy();
  });
});
