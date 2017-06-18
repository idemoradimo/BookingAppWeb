import { Component, OnInit } from '@angular/core';
import {Region} from './region.model'
import { Http, Response } from '@angular/http';
import { HttpRegionService } from '../services/http.region.service';
import {NgForm} from '@angular/forms';
import {Country} from '../country/country.model'
import { HttpCountryService } from '../services/http.country.service';



@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpRegionService,HttpCountryService]
})
export class RegionComponent implements OnInit {

  regions: Object[];
  region: Region;   
  countries: Country[];

  constructor(private httpRegionService: HttpRegionService,private httpCountryService: HttpCountryService) { }


  ngOnInit() {
      this.httpCountryService.getCountries().subscribe(c => this.countries = c.json(), error => 
      {
        console.log(error), alert("Unsuccessful fetch operation")
      });
      this.httpRegionService.getRegions().subscribe((res:Response)=>{this.regions=res.json();
      console.log(this.regions)});
  }

  addRegion(newRegion: Region, form: NgForm) : void{
      this.httpRegionService.postRegion(newRegion).subscribe(this.onPost);
      form.reset();
    }
      deleteRegion(Id: number) {
      this.httpRegionService.deleteRegion(Id).subscribe(()=>{ this.osvezi();}); 
    }
    osvezi()
    {
       this.httpRegionService.getRegions().subscribe((res:Response)=>{this.regions=res.json();console.log(this.regions)});
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
      window.location.reload();  
    }

  clicked(region: Region): void {
    alert(region.Name);
  }

}