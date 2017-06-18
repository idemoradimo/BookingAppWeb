//import { AccType } from '../accomodation-type/accomodation-type.model';

 /*   export class Accomodation {
    
    
    public Name: string;
   
    public Description: string;
  
    public Address: string;
    public AverageGrade: number;
    public Latitude: number;
    public Longtitude: number;
    
    public ImageURL: string;
    public Approved: boolean;


    public PlaceId: number;
   
    public AppUserId: number;
    
    public AccomodationTypeId: number;
    
}*/
import { Place } from "../place/place.model";
import { LoginModel } from "../login/login.model";
import { AccType } from '../accomodation-type/accomodation-type.model';
import { Room } from "app/room/room.model";

export class Accommodation {
    Id: number;
    Name: string;
    Description: string;
    Address: string;
    AvrageGrade: number;
    Latitude: number;
    Longtitude: number;
    ImageUrl: string;
    Approved: boolean;
    PlaceId: number;
    AccomodationTypeId: number;
    UserId: number;
    Place: Place;
    Rooms: Room[];
    LoginModel: LoginModel;
    AccomodationType: AccType;

    constructor(Id?: number, Name?: string, description?: string, address?: string, approved? : boolean, 
                imageUrl? : string, lat?: number, long?: number, placeId?: number, accommodationTypeId?: number, userId?: number
                ) {
        this.Id = Id;
        this.Name = Name;
        this.Description = description;
        this.Address = address;
        this.Latitude = lat;
        this.Longtitude = long;
        this.Rooms = [];
        this.Approved = approved;
        this.ImageUrl = imageUrl;
        this.AccomodationType = {} as AccType;
        this.Place = new Place();
        this.PlaceId = placeId;
        this.AccomodationTypeId = accommodationTypeId;
        this.UserId = userId;
    }
}