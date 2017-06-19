import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RoomReservations } from '../room-reservation/room-reservation.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRoomReservationService{

    constructor (private http: Http){

    }

    getRoomReservation(): Observable<any> {

        return this.http.get("http://localhost:54042/api/RoomReservations");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRoomReservation(roomreservation): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token_id"));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/RoomReservations',roomreservation, opts);
  }
}