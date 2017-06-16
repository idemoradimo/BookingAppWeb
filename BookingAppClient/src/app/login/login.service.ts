import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Injectable} from  '@angular/core'

@Injectable()
export class LoginService
{
    loggedIn : boolean;

    constructor(private http: Http)
    {
        
    }

    logIn(user: string, pass: string, grant_type:string): Observable<any>
    {
        let header = new Headers()
        header.append('Content-type','application/x-www-form-urlencoded');
        //header.append('Authorization','Bearer' + localStorage.getItem("token"));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.post(`http://localhost:54042/oauth/token`, `username=${user}&password=${pass}&grant_type=${grant_type}`,opts);
    }

    logOut(): void{
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    isLoggedIn(): boolean{
        if(localStorage.getItem("token") !== null)
            return true;
        else
            return false;
    }
}