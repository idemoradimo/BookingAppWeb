import { Component, OnInit } from '@angular/core';
import {Comment} from './comment.model';
import { Http, Response } from '@angular/http';
import { HttpCommentService } from '../services/http.comment.service';
import {NgForm} from '@angular/forms';
import {Accommodation} from '../accomodation/accomodation.model';
import { AccommodationService } from "../services/acc.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [HttpCommentService,]
})
export class CommentComponent implements OnInit {

  accommodation: Accommodation;  
  accommodations : Accommodation [];
  comment : Comment;
  comments : Comment[];
  

  constructor(private httpCommentService: HttpCommentService,private httpAccomodationService: AccommodationService) {}

  ngOnInit(){
    this.httpCommentService.getComment().subscribe((res:Response)=>{this.comments=res.json();
    console.log(this.comments)});
    this.httpAccomodationService.getAllAccommodations().subscribe(x => this.accommodations = x.json());
  }

  addComment(newComment: Comment, form: NgForm) : void{
      this.httpCommentService.postComment(newComment).subscribe(this.onPost);
      form.reset();
    }    

  deleteComment(Id: number) {
    this.httpCommentService.deleteComment(Id).subscribe(()=>{ this.osvezi()}); 
  }
  
  osvezi()
  {
      this.httpCommentService.getComment().subscribe((res:Response)=>{this.comments=res.json();console.log(this.comments)});
  }

  onPost(res : any) : void{
      console.log(res.json());
      alert("success!");
  }

    
  PutComment(comment:Comment): void {
    this.httpCommentService.PutComment(comment).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
    alert("Edited succesfully!");
  }

  clicked(comment: Comment): void {
    alert(comment.AppUsersId);
  }
}
  



