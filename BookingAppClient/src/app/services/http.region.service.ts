import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Region } from '../region/region.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRegionService{

    region: Region;

    constructor (private http: Http){

    }

    getRegions(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Regions");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRegion(region): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Regions',region,opts);
  }
}