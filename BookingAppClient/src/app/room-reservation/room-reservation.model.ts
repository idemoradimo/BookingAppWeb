export class RoomReservations {

    public StartDate: Date;
    public EndDate: Date;
    public Timestamp: Date;
    /*[ForeignKey("AppUser")]*/
    public AppUserId: number;
    //public AppUser: AppUser;
    /*[ForeignKey("Room")]*/
    public RoomId: number;
    //public Room: Room;

    constructor(){}
}