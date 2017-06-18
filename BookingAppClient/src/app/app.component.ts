import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';

constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService)
  {

  }

  ngOnInit()
  {
    //this.router.navigate(['/home']);
  }

  isUserLoggedIn():boolean
  {
    return this.authService.isLoggedIn();
  }
 /* isAdmin():boolean
  {
    return this.authService.isUserAdmin();
  }
  isAppUser():boolean
  {
    return this.authService.isUserAppUser();
  }
  isManager():boolean
  {
    return this.authService.isUserManager();
  }*/
  userLogout(){
    this.authService.logOut().subscribe(x => {  localStorage.clear(); this.router.navigate(['/home']); });
  }
}

