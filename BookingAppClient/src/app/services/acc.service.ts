/*import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Accomodation } from '../accomodation/accomodation.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpAccomodationService{

    accomodation: Accomodation;

    constructor (private http: Http){

    }
     addAccommodation(accommodation : Accomodation, file: File) : Observable<any> {
        //accommodation.Place = null;
      //  accommodation.Rooms = null;
       // accommodation.AccommodationType = null;
        let formData: FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accommodation));
        formData.append('uploadFile', file, file.name);
        console.log("aaaa" + formData);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        
        headers.append('Accept', 'application/json');
         headers.append("Authorization", "Bearer " + localStorage.getItem("user"));
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
  deleteAccomodation(id: number): Observable<any>
    {
        let header = new Headers();
        //header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Accomodations/${id}`, opts);
    }
}*/
import { Injectable } from '@angular/core';
import { Accommodation } from "../accomodation/accomodation.model";
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { DynamicUrl } from "app/DynamicUrl.model";
//import { LocalEnum } from "app/localEnum.model";

@Injectable()
export class AccommodationService {

    constructor(private http: Http) { }

    addAccommodation(accommodation: Accommodation, file: File): Observable<any> {
        accommodation.Place = null;
        accommodation.Rooms = null;
        accommodation.AccomodationType = null;
        let formData: FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accommodation));
        formData.append('uploadFile', file, file.name);
        console.log("aaaa" + formData);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');

        headers.append('Accept', 'application/json');
        headers.append("Authorization", "Bearer " + localStorage.getItem("token_id"));
        let opts = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:54042/api/Accomodations', formData, opts);
    }

    getAllAccommodations(): Observable<any> {
        // return this.http.get('http://localhost:54042/api/accomodation?$expand=AccommodationType,Place');
        return this.http.get("http://localhost:54042/api/Accomodations");
    }
    /*getAllAccomodationsList() : Observable<any> {
  
        return this.http.get("http://localhost:54042/api/Accomodations");
    }*/

    getAccommodationById(id: number): Observable<any> {
        return this.http.get(`http://localhost:54042/api/Accomodations/${id}`);
    }

    /* getByIdMap(Id : number) : Observable<any> {
          let ret = this.http.get(`http://localhost:54042/api/accomodation?$filter=Id eq ${Id} &$expand=AccommodationType,Place,Rooms,Comments`).map(res => res.json());
          return ret;
        }*/

    DeleteAccomodation(id: number): Observable<any> {
        return this.http.delete(`http://localhost:54042/api/Accomodations/${id}`);
    }

    /*deleteCountry(Id : number) : Observable<any> {
        return this.http.delete(`http://localhost:54042/api/Countries/`+Id);
    }*/
    PutAccomodation(accomodation: Accommodation): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.put(`http://localhost:54042/api/Accomodations/${accomodation.Id}`,
            JSON.stringify(accomodation), opts);
    }
}