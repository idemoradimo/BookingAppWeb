export class Place {

    /*[StringLength(50)]*/
    public Name: string;
    /*[ForeignKey("Region")]*/
    public RegionId: number;

    public Id : number;
    //public Region: Region;
    
}