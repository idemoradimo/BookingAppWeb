export class Room {

    public RoomNumber: number;
    public BedCount: number;
    /*[StringLength(50)]*/
    public Description: string;
    public PricePerNight: number;
    /*[ForeignKey("Accomodation")]*/
    public AccomodationId: number;
    //public Accomodation: Accomodation;
}