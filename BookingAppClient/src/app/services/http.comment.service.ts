import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../comment/comment.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpCommentService{

    comment: Comment;

    constructor (private http: Http){

    }

    getComment(): Observable<any> {

        return this.http.get("http://localhost:54042/api/Comments");        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postComment(comment): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:54042/api/Comments',comment, opts);
    }

    deleteComment(Id : number) : Observable<any> {
        return this.http.delete(`http://localhost:54042/api/Comments/`+Id);
    }

    PutComment(comment: Comment) : Observable<any>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token_id'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.put(`http://localhost:54042/api/Comments/${comment.Id}`,  
        JSON.stringify(comment), opts);
    }
}