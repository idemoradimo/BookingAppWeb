import { Component, OnInit } from '@angular/core';
import {Country} from './country.model'
import { Http, Response } from '@angular/http';
import { HttpCountryService } from '../services/http.country.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [HttpCountryService]
})
export class CountryComponent implements OnInit {

  country: Country;  
  countries : Country [];
  imeCountry : string;

  constructor(private httpCountryService: HttpCountryService) {}

  ngOnInit(){
    this.httpCountryService.getCountries().subscribe((res:Response)=>{this.countries=res.json();
    console.log(this.countries)});
  }

  addCountry(newCountry: Country, form: NgForm) : void{
      this.httpCountryService.postCountry(newCountry).subscribe(this.onPost);
      form.reset();
    }    

  deleteCountry(Id: number) {
    this.httpCountryService.deleteCountry(Id).subscribe(()=>{ this.osvezi()}); 
  }
  
  osvezi()
  {
      this.httpCountryService.getCountries().subscribe((res:Response)=>{this.countries=res.json();console.log(this.countries)});
  }

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
  }

    
  PutCountry(country:Country): void {
    this.httpCountryService.PutCountry(country).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
    alert("Edited succesfully!");
  }

  clicked(country: Country): void {
    alert(country.Name);
  }
}
  


