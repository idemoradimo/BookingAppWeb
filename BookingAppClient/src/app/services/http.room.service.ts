import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Room } from '../room/room.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRoomService{

    room: Room;

    constructor (private http: Http){

    }

    getRoom(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRoom(room): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Rooms',room, opts);
  }
}