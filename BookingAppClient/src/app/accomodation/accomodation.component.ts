import { Component, OnInit } from '@angular/core';
import { Accommodation } from './accomodation.model';
import { Http, Response } from '@angular/http';
import { AccommodationService } from "../services/acc.service";
import { HttpCountryService } from '../services/http.country.service';
import { Country } from '../country/country.model';
import { AccType } from '../accomodation-type/accomodation-type.model';
import { HttpAccTypeService } from '../services/http.accType.service';
import { HttpPlaceService } from '../services/http.place.service';
import { HttpRegionService } from '../services/http.region.service';
import { Place } from '../place/place.model';
import { Region } from '../region/region.model';
import { NgForm } from '@angular/forms';
import { HttpAppUserService } from '../services/http.app-user.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css'],
  providers: [AccommodationService, HttpPlaceService, HttpRegionService, HttpCountryService, HttpAccTypeService, HttpAppUserService]
})
export class AccomodationComponent implements OnInit {

  file: File;

  Id: number;
  Name: string;
  Description: string;
  Address: string;
  AverageGrade: number;
  Latitude: number;
  Longtitude: number;
  ImageUrl: File;
  Approved: boolean;
  PlaceId: number;
  AccomodationTypeId: number;
  UserId: number;
  Place: Place;
  AccomodationType: AccType;
  accomodation: Accommodation;

  Region: Region;
  RegionId: number;
  Country: Country;
  CountryId: number;

  types: AccType[];
  places: Place[];
  countries: Country[];
  regions: Region[];
  accomodations: Accommodation[];
  url: string = "http://localhost:54042/";


  constructor(private accommodationService: AccommodationService, private placeService: HttpPlaceService,
    private countryService: HttpCountryService, private httpAccTypeService: HttpAccTypeService,
    private regionService: HttpRegionService, private httpAppUserService: HttpAppUserService) {
    this.places = [];
    this.types = [];
    this.regions = [];
    this.countries = [];
    this.accomodations = [];
    this.url = "http://localhost:54042/";
  }

  ngOnInit() {

    this.placeService.getPlaces().subscribe(x => this.places = x.json());
    this.httpAccTypeService.getAccTypes().subscribe(t => this.types = t.json());
    this.accommodationService.getAllAccommodations().subscribe((res: Response) => {

      this.accomodations = res.json();
      console.log(this.accomodations)
    });

    this.url = "http://localhost:54042/";
  }

  getTypesAndCountries() {
    this.httpAccTypeService.getAccTypes().subscribe(t => this.types = t.json(), error => {
      console.log(error), alert("Unsuccessful fetch operation")
    });
    this.countryService.getCountries().subscribe(c => this.countries = c.json(), error => {
      console.log(error), alert("Unsuccessful fetch operation")
    });
  }

  onSubmit(form: NgForm) {
    this.accommodationService.addAccommodation(new Accommodation(0, this.Name, this.Description, this.Address, false,
      "", this.Latitude, this.Longtitude, this.PlaceId, this.AccomodationTypeId,
      parseInt(localStorage.getItem("token_id"))), this.file).subscribe();

    alert("Successfully added accomodation!");

  }
  //Longitude
  resetForm() {
    this.Name = "";
    this.Description = "";
    this.Address = "";
    this.Latitude = null;
    this.Longtitude = null;
    this.ImageUrl = null;
    this.Place = null;
    this.Country = null;
    this.Region = null;
    this.AccomodationType = null;
    this.ImageUrl = null;
    this.Place = null;
    this.Country = null;
    this.Region = null;
    this.AccomodationTypeId = null;
    this.file = null;
  }

  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
  }
  
  DeleteAccomodation(Id: number) {
    this.accommodationService.DeleteAccomodation(Id).subscribe(() => { this.osvezi() });
  }

  osvezi() {
    this.accommodationService.getAllAccommodations().subscribe((res: Response) => { this.accomodations = res.json(); console.log(this.accomodations) });
  }

  PutAccomodation(accomodation: Accommodation): void {
    this.accommodationService.PutAccomodation(accomodation).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
    alert("Edited succesfully!");
  }
}

