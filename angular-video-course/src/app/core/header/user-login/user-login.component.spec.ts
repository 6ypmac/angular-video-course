import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { UserLoginService } from './user-login.service';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let userLoginService: UserLoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      providers: [ UserLoginService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    userLoginService = TestBed.get(UserLoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserLoginService', () => {
    const getUsersSpy = spyOn(userLoginService, 'getUsers');
    component.ngOnInit();
    expect(getUsersSpy).toHaveBeenCalled();
  });
});
