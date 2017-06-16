import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Accomodation } from '../accomodation/accomodation.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAccomodationService{

    acc: Accomodation;

    constructor (private http: Http){

    }
    addAccommodation(accomodation : Accomodation, file: File) : Observable<any> {
        accomodation.PlaceId = null;
       // accomodation.Rooms = null;
       // accomodation.AccommodationType = null;
        let formData: FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accomodation));
        formData.append('uploadFile', file, file.name);
        console.log("aaaa" + formData);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        
        headers.append('Accept', 'application/json');
        let opts = new RequestOptions( { headers: headers });

        return this.http.post('http://localhost:54042/api/Accomodations', formData, opts);
  }

    getAccomodation(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Accomodations");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postAccomodation(acc:Accomodation ): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Accomodations',
        acc, opts);
  }
}