import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AccomodationTypeComponent } from './accomodation-type/accomodation-type.component';
import { AppUserComponent } from './app-user/app-user.component';
import { CommentComponent } from './comment/comment.component';
import { PlaceComponent } from './place/place.component';
import { RegionComponent } from './region/region.component';
import { RoomComponent } from './room/room.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { ServicesComponent } from './services/services.component';
import { AgmCoreModule } from '@agm/core';

const Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "other", redirectTo: "home" },
  { path: "country", component: CountryComponent },
  { path: "accomodation-type", component: AccomodationTypeComponent },
  { path: "accomodation", component: AccomodationComponent },
  { path: "place", component: PlaceComponent },
  { path: "region", component: RegionComponent },
  { path: "room", component: RoomComponent },
  { path: "room-reservation", component: RoomReservationComponent },
  { path: "logout", component: LogoutComponent },
  {path : "comment",component: CommentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent,
    AccomodationComponent,
    AccomodationTypeComponent,
    AppUserComponent,
    CommentComponent,
    PlaceComponent,
    RegionComponent,
    RoomComponent,
    RoomReservationComponent,
    ServicesComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    //CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA7wzZb_UtWZMV01eD-MzmnTUC7b1K_OQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }