import { Component, OnInit } from '@angular/core';
import { User } from "app/registration/User.model";
import { UserService } from './User.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {

  Username: string;
  Password: string;
  Email: string;
  ConfirmPassword: string;
  Role: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmitRegister(user: User, form: NgForm) {
    this.userService.register(new User(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword)).subscribe();
    this.Email = "";
    this.Password = "";
    this.ConfirmPassword = "";
    form.resetForm();
    alert("Successfully registered!");
  }

  onSubmitLogin() {
    this.userService.login(new User(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword)).subscribe();
    this.Email = "";
    this.Password = "";
    this.ConfirmPassword = "";
  }

}
