import { Component, OnInit } from '@angular/core';
import { Accomodation } from './accomodation.model';
import { Http, Response } from '@angular/http';
import { HttpAccomodationService } from "app/services/acc.service";
import { HttpCountryService } from '../services/http.country.service';
import {Country} from '../country/country.model';
import {AccType} from '../accomodation-type/accomodation-type.model';
import { HttpAccTypeService } from '../services/http.accType.service';


import {NgForm} from '@angular/forms';

@Component({
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
}