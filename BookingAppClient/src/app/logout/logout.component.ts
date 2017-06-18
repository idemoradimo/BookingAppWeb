import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService} from '../services/auth.service';
@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [AuthService]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
     this.authService.logOut().subscribe(x => {  
       localStorage.clear();
        this.router.navigate(['/home']); 
      });
  }

 /*onSubmit()
  {
    this.authService.logOut().subscribe(x => {  localStorage.removeItem("token_id");  this.router.navigate(['/home']); });
  }*/

}