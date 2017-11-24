import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User = new User('', '', '', '');

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  register(user) {
    console.log(user);
    this.userService.createUser(user);
  }

}
