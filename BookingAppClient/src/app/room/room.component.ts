import { Component, OnInit } from '@angular/core';
import {Room} from './room.model'
import { Http, Response } from '@angular/http';
import { HttpRoomService } from '../services/http.room.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [HttpRoomService]
})
export class RoomComponent implements OnInit {

  rooms: Object[];
  room: Room;   

  constructor(private httpRoomService: HttpRoomService) { }


   ngOnInit() {
    this.httpRoomService.getRoom().subscribe(
      (at: any) => {this.rooms = at.json; console.log(this.rooms)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
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

