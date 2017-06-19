import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from './login.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  Username: string;
  Password: string;

  constructor(private authService: AuthService, private router: Router) {

  }

  logIn(loginUser: LoginModel, form: NgForm): void {
    this.authService.logIn(this.Username, this.Password).subscribe(asd => {
      localStorage.setItem('token_id', asd.json().access_token);
      localStorage.setItem('role', asd.headers.get('Role'));
      localStorage.setItem('user', this.Username);

      console.log(asd.json());

      if (localStorage.getItem("role") != undefined) {
        this.router.navigate(['/home']);
      }
    });
  }

  logOut() {
    this.authService.logOut();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}

