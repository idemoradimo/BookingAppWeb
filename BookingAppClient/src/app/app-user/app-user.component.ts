import { Component, OnInit } from '@angular/core';
import { HttpAppUserService } from '../services/http.app-user.service';
import { AppUser } from './app-user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css'],
  providers: [HttpAppUserService]
})

export class AppUserComponent implements OnInit {

  appUser: AppUser; // iz forme
  appUsers: Object[]; //iz get metode

  constructor(
    private httpAppUserService: HttpAppUserService
  ) { }

  ngOnInit() {
    this.httpAppUserService.getAppUsers().subscribe(
      (au: any)=>{this.appUsers = au;
      console.log(this.appUsers)},
      error => {alert("Unsuccessful fetch operation!");
      console.log(error);}
    );
  }

  addAppUser(newAppUser:AppUser, form: NgForm):void{
    this.httpAppUserService.postAppUser(newAppUser).subscribe(this.onPost);
  }

  onPost(res:any):void{
    alert('Post!');
    console.log(res.json());
  }
}
