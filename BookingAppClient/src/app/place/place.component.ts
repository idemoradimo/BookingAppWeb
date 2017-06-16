import { Component, OnInit } from '@angular/core';
import {Place} from './place.model'
import { Http, Response } from '@angular/http';
import { HttpPlaceService } from '../services/http.place.service';
import {NgForm} from '@angular/forms';
import{Region} from '../region/region.model'
import { HttpRegionService } from '../services/http.region.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [HttpPlaceService,HttpRegionService]
})
export class PlaceComponent implements OnInit {

  places: Object[];
  place: Place;   
  regions: Region[];

  constructor(private httpPlaceService: HttpPlaceService, private httpRegionService: HttpRegionService) { }

  ngOnInit() {
      this.httpRegionService.getRegions().subscribe(c => this.regions = c.json(), error => 
      {
        console.log(error), alert("Unsuccessful fetch operation")
      });

      this.httpPlaceService.getPlaces().subscribe((res:Response)=>{this.places=res.json();
      console.log(this.places)});
  }

  addPlace(newPlace: Place, form: NgForm){
      this.httpPlaceService.postPlace(newPlace).subscribe(this.onPost);
      form.reset();
  }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
  }

  clicked(place: Place): void {
      alert(place.Name);
  }
}
