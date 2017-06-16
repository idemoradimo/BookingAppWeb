import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {NgForm} from '@angular/forms';
import { LoginModel } from './login.model';
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService]
})
export class LoginComponent implements OnInit {

Username: string;
Password: string;

 constructor(private authService: AuthService,private router:Router){

 }
  
  logIn(loginUser: LoginModel, form: NgForm) : void{
      this.authService.logIn(this.Username,this.Password).subscribe(this.onLogin);
   // form.reset();
      if(localStorage.getItem("role")=="Admin")
      {
         this.router.navigate(['/home']);
      }

  }

  onLogin(response: any){
    
    localStorage.setItem('token_id', response.json().access_token);
    localStorage.setItem('role', response.headers.get('Role'));
    localStorage.setItem('user', this.Username);

    console.log(response.json());

 }

  logOut(){
    this.authService.logOut();
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}

