import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../login/login.model';

@Injectable()

export class AuthService {

    loggedIn: boolean;

    constructor(private http: Http) {

    }

    logIn(Username: string, Password: string): Observable<any> {

        //localStorage.setItem("token","myToken");

        const headers: Headers = new Headers();
        //headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
            'http://localhost:54042/oauth/token', `username=${Username}&password=${Password}&grant_type=password`, opts);
    }

    logOut(): Observable<any> {

        let header = new Headers();
        header.append('Content-type', 'application/x-www-form-urlencoded');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/api/Account/Logout`, "", opts);

    }

    isLoggedIn(): boolean {
        if (localStorage.getItem("token_id") !== null)
            return true;
        else
            return false;
    }
}