import { Component, OnInit } from '@angular/core';
import {Room} from './room.model'
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

  rooms: Object[];
  room: Room;   
  accommodations: Accommodation[];

  constructor(private httpRoomService: HttpRoomService,private httpAccomodationService:AccommodationService)
   { /* this.accommodations = [];*/}


  /* ngOnInit() {
    this.httpRoomService.getRoom().subscribe(
      (at: any) => {this.rooms = at.json; console.log(this.rooms)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    this.httpAccomodationService.getAccomodation().subscribe(a => this.accommodations = a.json());
  }*/
  ngOnInit() {
    //this.httpAccomodationService.getAllAccommodations().subscribe(a => this.accommodations = a.json());
    this.httpAccomodationService.getAllAccommodations().subscribe(x => this.accommodations = x.json());
  }

  addRoom(newRoom: Room, form: NgForm) : void{
      this.httpRoomService.postRoom(newRoom).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }

  clicked(room: Room): void {
    alert(room.RoomNumber);
  }

}

