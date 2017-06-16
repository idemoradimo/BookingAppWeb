import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRoomReservationService } from '../services/http.room-reservation.service';
import {NgForm} from '@angular/forms';
import { RoomReservations } from "app/room-reservation/room-reservation.model";
import {Room} from '../room/room.model';
import { HttpRoomService } from '../services/http.room.service';


@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css'],
  providers: [HttpRoomReservationService,HttpRoomService]
})
export class RoomReservationComponent implements OnInit {

  roomreservations: Object[];
  roomreservation: RoomReservations;  
  rooms: Room[]; 

  constructor(private httpRoomReservationService: HttpRoomReservationService, private httpRoomService: HttpRoomService) { }


  ngOnInit() {
      this.httpRoomService.getRoom().subscribe(c => this.rooms = c.json(), error => 
      {
        console.log(error), alert("Unsuccessful fetch operation")
      });
  }

  addRoomReservation(newRoomReservation: RoomReservations, form: NgForm) : void{
      this.httpRoomReservationService.postRoomReservation(newRoomReservation).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }

  clicked(roomreservation: RoomReservations): void {
    alert(roomreservation.AppUserId);
  }

}
