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


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'degrees', component: DegreeComponent},
  {path: 'exercices', component: ExerciceComponent},
  {path: 'in-progresses', component: InProgressComponent},
  {path: 'levels', component: LevelComponent},
  {path: 'programs', component: ProgramComponent},
  {path: 'sessions', component: SessionComponent},
  {path: 'specialisations', component: SpecialisationComponent},
  {path: 'sports', component: SportComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
