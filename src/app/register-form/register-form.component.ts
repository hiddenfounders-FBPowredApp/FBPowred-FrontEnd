import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User = new User('', '', '', '');

  constructor() {
  }

  ngOnInit() {
  }
  register(user) {
    console.log(user);
  }

}
