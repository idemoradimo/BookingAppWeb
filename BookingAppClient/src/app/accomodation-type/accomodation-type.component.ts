import { Component, OnInit } from '@angular/core';
import {AccType} from './accomodation-type.model';
import { Http, Response } from '@angular/http';
import { HttpAccTypeService } from '../services/http.accType.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accomodation-type',
  templateUrl: './accomodation-type.component.html',
  styleUrls: ['./accomodation-type.component.css'],
  providers: [HttpAccTypeService]
})
export class AccomodationTypeComponent implements OnInit {

  accType: AccType;   //iz forme
  accTypes : Object []; //iz get metode - iz baze
  accTypeName: string;   //za edit i delete
  //id: number;

  constructor(private httpAccTypeService: HttpAccTypeService) { }
  


  ngOnInit() {
       this.httpAccTypeService.getAccTypes().subscribe((res:Response)=>{this.accTypes=res.json();console.log(this.accTypes)});//You can set the type to Product.
     
   //   error => {alert("Unsuccessful fetch operation!"); console.log(error);}
   // );
  }
  
 /* ngOnInit(){
this.httpCountryService.getCountries().subscribe((res:Response)=>{this.countries=res.json();console.log(this.countries)});
}*/
    deleteAccType(Id: number) {
      this.httpAccTypeService.deleteAccType(Id).subscribe(()=>{ this.osvezi();}); 
    }
    
    osvezi()
    {
       this.httpAccTypeService.getAccTypes().subscribe((res:Response)=>{this.accTypes=res.json();console.log(this.accTypes)});
    }

  addAccType(newAccType: AccType, form: NgForm) : void{
      this.httpAccTypeService.postAccType(newAccType).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();
    }
  }