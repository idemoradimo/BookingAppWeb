export class Region {

    /*[StringLength(50)]*/
    public Name: string;    
    /*[ForeignKey("Country")]*/
    public CountryId: number;
    //public Country: Country;
    public Id : number;
}