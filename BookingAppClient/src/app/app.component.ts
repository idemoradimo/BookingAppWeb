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
  role: string;
  public isLogged: boolean;

constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService)
  {
    this.role = localStorage.getItem('role');
  }

  ngOnInit()
  {
    //this.router.navigate(['/home']);
    this.isLogged=this.authService.isLoggedIn();
  }

  isUserLoggedIn():boolean
  {
    //this.isLogged=this.authService.isLoggedIn();
    return this.authService.isLoggedIn();
  }

  userLogout(){
    this.authService.logOut().subscribe(x => {  localStorage.clear(); this.router.navigate(['/home']); });
  }
}

