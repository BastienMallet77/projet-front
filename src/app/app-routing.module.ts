import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DegreeComponent} from './degree/degree.component';
import {ExerciceComponent} from './exercice/exercice.component';
import {InProgressComponent} from './in-progress/in-progress.component';
import {LevelComponent} from './level/level.component';
import {ProgramComponent} from './program/program.component';
import {SessionComponent} from './session/session.component';
import {SpecialisationComponent} from './specialisation/specialisation.component';
import {SportComponent} from './sport/sport.component';
import {UserComponent} from './user/user.component';
import {ListSportUserComponent} from './list-sport-user/list-sport-user.component';
import {InfoUserComponent} from './info-user/info-user.component';
import {ProgramBoardViewComponent} from "./program-board-view/program-board-view.component";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListSpecSportComponent} from './list-spec-sport/list-spec-sport.component';
import {ListLevelSportComponent} from './list-level-sport/list-level-sport.component';
import {ListProgramUserComponent} from './list-program-user/list-program-user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CreateProgramComponent} from './create-program/create-program.component';
import {DashboardCoachComponent} from './dashboard-coach/dashboard-coach.component';
import {CreateSessionComponent} from './create-session/create-session.component';
import {CreateExerciceComponent} from './create-exercice/create-exercice.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'degrees', component: DegreeComponent},
  {path: 'exercices', component: ExerciceComponent},
  {path: 'in-progresses', component: InProgressComponent},
  {path: 'levels', component: LevelComponent},
  {path: 'programs', component: ProgramComponent},
  {path: 'program/:id', component: ProgramBoardViewComponent},
  {path: 'sessions', component: SessionComponent},
  {path: 'specialisations', component: SpecialisationComponent},
  {path: 'sports', component: SportComponent},
  {path: 'users', component: UserComponent},
  {path: 'user/:id/programs', component: UserComponent}, //TODO rajout pour test CaochBoard
  {path: 'sportUser', component: ListSportUserComponent},
  {path: 'infoUser', component: InfoUserComponent},
  {path: 'board', component: DashboardComponent},
  {path: 'coachBoard', component: DashboardCoachComponent},
  {path: 'sportUser/:id', component: ListSpecSportComponent},
  {path: 'sportUser/:id/level/:id', component: ListLevelSportComponent},
  {path: 'sportUser/:id/level/:id/spec/:id', component: ListProgramUserComponent},
  {path: 'sportUser/:id/level/:id/spec/:id/program/:id', component: ProgramBoardViewComponent},
  {path: 'createProgram', component: CreateProgramComponent},
  {path: 'createSession', component: CreateSessionComponent},
  {path: 'createExo', component: CreateExerciceComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
