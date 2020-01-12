import { TestBed } from '@angular/core/testing';

import { UserLoginService } from './user-login.service';

describe('UserLoginService', () => {
  let service: UserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UserLoginService ]
    });

    service = TestBed.get(UserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    const numberOfUsers = service.getUsers().length;
    expect(service.getUsers().length).not.toBe(0);
  });
});
