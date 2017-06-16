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
  countries : Object []


  constructor(private httpCountryService: HttpCountryService) {}

ngOnInit(){
  this.httpCountryService.getCountries().subscribe((res:Response)=>{this.countries=res.json();
  console.log(this.countries)});
}

 /*  ngOnInit() {
    this.httpCountryService.getCountries().subscribe(
      (at: any) => {this.countries = at; console.log(this.countries)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }*/

  addCountry(newCountry: Country, form: NgForm) : void{
      this.httpCountryService.postCountry(newCountry).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }

  clicked(country: Country): void {
    alert(country.Name);
  }

}
