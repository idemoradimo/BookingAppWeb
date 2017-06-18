import { Component, OnInit } from '@angular/core';
import { Accommodation } from './accomodation.model';
import { Http, Response } from '@angular/http';
import { AccommodationService } from "../services/acc.service";
import { HttpCountryService } from '../services/http.country.service';
import {Country} from '../country/country.model';
import {AccType} from '../accomodation-type/accomodation-type.model';
import { HttpAccTypeService } from '../services/http.accType.service';
import { HttpPlaceService } from '../services/http.place.service';
import { HttpRegionService } from '../services/http.region.service';
import {Place} from '../place/place.model';
import {Region} from '../region/region.model';





import {NgForm} from '@angular/forms';

/*@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [HttpAccomodationService,HttpCountryService,HttpAccTypeService]
})
export class AccomodationComponent implements OnInit {

  acc: Accomodation;   //iz forme
  accs : Object []; //iz get metode - iz baze
  countries : Country
  file: File
  accTypes: AccType
  AccomodationTypeId: number
  accomodations:Accomodation

  constructor(private httpAccService: HttpAccomodationService,private httpCountryService:HttpCountryService, private httpAccomodationTypeService: HttpAccTypeService) { }

  ngOnInit() {

    this.httpAccService.getAccomodation().subscribe((res:Response)=>{this.accomodations=res.json();console.log(this.accomodations)});

      this.httpCountryService.getCountries().subscribe(c => this.countries = c.json(), error => 
      {
        console.log(error), alert("Unsuccessful fetch operation")
      });
       this.httpAccomodationTypeService.getAccTypes().subscribe(c => this.accTypes = c.json(), error => 
      {
        console.log(error), alert("Unsuccessful fetch operation")
      })
  }

  onChange(event: EventTarget) {
      let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
      let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
      let files: FileList = target.files;
      this.file = files[0];
    }
 addAccomodation(newAcc: Accomodation, form: NgForm) : void{
      newAcc.Approved= false;
      newAcc.AppUserId=parseInt(localStorage.getItem("user"));
      newAcc.AccomodationTypeId=this.AccomodationTypeId;
      this.httpAccService.postAccomodation(newAcc).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }
}*/
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [AccommodationService, HttpPlaceService, HttpRegionService, HttpCountryService,HttpAccTypeService]
})
export class AccomodationComponent implements OnInit {

    file: File;

    Id: number;
    Name: string;
    Description: string;
    Address: string;
    AvrageGrade: number;
    Latitude: number;
    Longitude: number;
    ImageUrl: File;
    Approved: boolean;
    PlaceId: number;
    AccomodationTypeId: number;
    UserId: number;
    Place: Place;
    AccomodationType: AccType;

    Region: Region;
    RegionId: number;
    Country: Country;
    CountryId: number;

    types: AccType[];
    places: Place[];
    countries: Country[];
    regions: Region[];
    

  constructor(private accommodationService: AccommodationService, private placeService: HttpPlaceService,
              private countryService: HttpCountryService, private httpAccTypeService: HttpAccTypeService,
               private regionService : HttpRegionService) {
                  this.places = [];
                  this.types = [];
                  this.regions = [];
                  this.countries = [];
             }

  ngOnInit() {

    this.placeService.getPlaces().subscribe(x => this.places = x.json());
    this.httpAccTypeService.getAccTypes().subscribe(t => this.types = t.json());
   // this.getTypesAndCountries();
    this.Place = null;
    this.Country = null;
    this.Region = null;
    this.AccomodationType = null;
  }

  getTypesAndCountries()
  {
    this.httpAccTypeService.getAccTypes().subscribe(t => this.types = t.json(), error => 
    {
        console.log(error), alert("Unsuccessful fetch operation")
    });
    this.countryService.getCountries().subscribe(c => this.countries = c.json(), error =>
    {
        console.log(error), alert("Unsuccessful fetch operation")
    });
  }

  onSubmit(form: NgForm){
    console.log("usao");
    
    this.accommodationService.addAccommodation(new Accommodation(0, this.Name, this.Description, this.Address, false,
                                    "", this.Latitude, this.Longitude, this.PlaceId, this.AccomodationTypeId, 
                                    parseInt(localStorage.getItem("token_id"))), this.file).subscribe(
                        x => 
                        {
                            var doc = document.getElementById("successMsg");
                            doc.innerText = "Accommodation successfully added.";   
                            doc.className = "show";
                            setTimeout(function(){ doc.className = doc.className.replace("show", ""); }, 3000); 
                         } );
                      /*   eror => 
                        {
                            var doc = document.getElementById("errorMsg");
                            doc.innerText = "Error while adding accommodation.";   
                            doc.className = "show";
                            setTimeout(function(){ doc.className = doc.className.replace("show", ""); }, 3000); 
                        }*/
                                    
  }

  resetForm()
  {
    this.Name = "";
    this.Description = "";
    this.Address = "";
    this.Latitude = null;
    this.Longitude = null;
    this.ImageUrl = null;
    this.Place = null;
    this.Country = null;
    this.Region = null;
    this.AccomodationType = null;
    this.ImageUrl = null;
    this.Place = null;
    this.Country = null;
    this.Region = null;
    this.AccomodationType = null;
    this.file = null;
  }

  onChange(event: EventTarget) {
      let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
      let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
      let files: FileList = target.files;
      this.file = files[0];
    }

 
  

    

      
  
}

