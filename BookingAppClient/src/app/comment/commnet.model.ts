export class Comment {
    
    public Grade: number;
    /*[StringLength(50)]*/
    public Text: string;
    /*[ForeignKey("Accomodation")]*/
    public AccomodationId: number;
    //public Accomodation: Accomodation;
    /*[ForeignKey("AppUsers")]*/
    public AppUsersId: number;
    //public AppUsers: AppUser;
}