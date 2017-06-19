import { Component, OnInit } from '@angular/core';
import {Room} from './room.model';
import { Http, Response } from '@angular/http';
import { HttpRoomService } from '../services/http.room.service';
import {NgForm} from '@angular/forms';
import { AccommodationService } from "../services/acc.service";
import { Accommodation } from '../accomodation/accomodation.model';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [HttpRoomService,AccommodationService]
})
export class RoomComponent implements OnInit {

  rooms: Room[];
  room: Room;   
  accommodations: Accommodation[];

  constructor(private httpRoomService: HttpRoomService,private httpAccomodationService:AccommodationService)
   { /* this.accommodations = []; this.rooms=[];*/}


  /* ngOnInit() {
    this.httpRoomService.getRoom().subscribe(
      (at: any) => {this.rooms = at.json; console.log(this.rooms)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    this.httpAccomodationService.getAccomodation().subscribe(a => this.accommodations = a.json());
  }*/
  ngOnInit() {
     this.httpRoomService.getRoom().subscribe((res:Response)=>{
      // debugger
      this.rooms=res.json(); 
    console.log(this.rooms)});
    //this.httpAccomodationService.getAllAccommodations().subscribe(a => this.accommodations = a.json());
    this.httpAccomodationService.getAllAccommodations().subscribe(x => this.accommodations = x.json());
   /* this.httpRoomService.getRoom().subscribe((res:Response)=>{this.rooms=res.json()
    console.log(this.rooms)});*/ 
  }

  addRoom(newRoom: Room, form: NgForm) : void{
      this.httpRoomService.postRoom(newRoom).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

  clicked(room: Room): void {
    alert(room.RoomNumber);
  }
  DeleteRoom(Id: number) {
    this.httpRoomService.DeleteRoom(Id).subscribe(()=>{ this.osvezi()}); 
  }
  
  osvezi()
  {
      this.httpRoomService.getRoom().subscribe((res:Response)=>{this.rooms=res.json();
        
        console.log(this.rooms)});
  }
   PutRoom(room:Room): void {
    this.httpRoomService.PutRoom(room).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
    alert("Edited succesfully!");
  }

}

