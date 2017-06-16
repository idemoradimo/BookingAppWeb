import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../country/country.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpCountryService{

    country: Country;

    constructor (private http: Http){

    }

    getCountries(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Countries");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postCountry(country): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Countries',country, opts);
  }
}
