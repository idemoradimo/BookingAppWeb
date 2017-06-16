//import { AccType } from '../accomodation-type/accomodation-type.model';

export class Accomodation {
    
    /*[StringLength(50)]*/
    public Name: string;
    /*[StringLength(50)]*/
    public Description: string;
    /*[StringLength(50)]*/
    public Address: string;
    public AverageGrade: number;
    public Latitude: number;
    public Longtitude: number;
    /*[StringLength(50)]*/
    public ImageURL: string;
    public Approved: boolean;


    /*[ForeignKey("Place")]*/
    public PlaceId: number;
    //public Place: Place;
    /*[ForeignKey("AppUser")]*/
    public AppUserId: number;
    //public AppUser: AppUser;
    /*[ForeignKey("AccomodationType")]*/
    public AccomodationTypeId: number;
    //public AccomodationType: AccType;
}