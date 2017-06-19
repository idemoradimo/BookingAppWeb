import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Room } from '../room/room.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpRoomService{

    room: Room;
    rooms:Room[];

    constructor (private http: Http){

    }

    getRoom(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Rooms");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postRoom(room): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Rooms',room, opts);
  }
    DeleteRoom(id : number) : Observable<any> {
        return this.http.delete(`http://localhost:54042/api/Rooms/${id}`);
    }

    PutRoom(room: Room) : Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.put(`http://localhost:54042/api/Rooms/${room.Id}`,  
        JSON.stringify(room), opts);
    }
}