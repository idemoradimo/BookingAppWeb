export class AppUser {
    Id: number;
    Username: String;
    Email: String;
    Password: String;

    constructor(Username: string, Email: string, Password: string, Id: number){
        this.Id = Id;
        this.Username = Username;
        this.Email = Email;
        this.Password = Password;
    }
}