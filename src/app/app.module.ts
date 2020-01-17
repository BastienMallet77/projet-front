import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { DegreeComponent } from './degree/degree.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { LevelComponent } from './level/level.component';
import { ProgramComponent } from './program/program.component';
import { SessionComponent } from './session/session.component';
import { SpecialisationComponent } from './specialisation/specialisation.component';
import { SportComponent } from './sport/sport.component';
import { UserComponent } from './user/user.component';
import { DashboardCoachComponent } from './dashboard-coach/dashboard-coach.component';
import { ListSportUserComponent } from './list-sport-user/list-sport-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DegreeComponent,
    ExerciceComponent,
    InProgressComponent,
    LevelComponent,
    SportComponent,
    ProgramComponent,
    SessionComponent,
    SpecialisationComponent,
    SportComponent,
    UserComponent,
    DashboardCoachComponent,
    ListSportUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
