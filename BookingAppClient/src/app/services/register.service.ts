import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../app-user/app-user.model';

@Injectable()
export class AuthService{

    constructor (private http: Http){
        
    }

     register(regUser): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Account/Register',
        JSON.stringify({
            Name: regUser.Name,
            Email: regUser.Email,
            Password: regUser.Password
        }), opts);
  }
  
}