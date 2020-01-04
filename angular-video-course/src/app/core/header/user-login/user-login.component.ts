import { Component, OnInit } from '@angular/core';
import { UserLoginInterface } from './user-login.interface';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'vc-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  users: UserLoginInterface[];

  constructor(
    private userLoginService: UserLoginService,
  ) {}

  ngOnInit() {
    this.users = this.userLoginService.getUsers();
  }
}
