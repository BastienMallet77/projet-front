import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ListSpecSportComponent } from './list-spec-sport/list-spec-sport.component';
import { ListLevelSportComponent } from './list-level-sport/list-level-sport.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProgramUserComponent } from './list-program-user/list-program-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgramBoardViewComponent } from './program-board-view/program-board-view.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import {Router} from '@angular/router';
import {UserHttpService} from './user/user-http.service';
import { CreateSessionComponent } from './create-session/create-session.component';



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
    ListSportUserComponent,
    ListSpecSportComponent,
    ListLevelSportComponent,
    InfoUserComponent,
    DashboardComponent,
    ListProgramUserComponent,
    NotFoundComponent,
    InfoUserComponent,
    ProgramBoardViewComponent,
    CreateProgramComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
