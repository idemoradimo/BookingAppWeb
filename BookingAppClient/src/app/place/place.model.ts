export class Place {

    /*[StringLength(50)]*/
    public Name: string;
    /*[ForeignKey("Region")]*/
    public RegionId: number;
    //public Region: Region;
    
}