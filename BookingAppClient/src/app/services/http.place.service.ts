import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from '../place/place.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpPlaceService{

    place: Place;

    constructor (private http: Http){

    }

    getPlaces(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Places");        
    }
    

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postPlace(place): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post( 'http://localhost:54042/api/Places',place, opts);
  }
   deletePlace(Id : number) : Observable<any> {
        return this.http.delete(`http://localhost:54042/api/Places/`+Id);
    }
}