import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Session} from '../model/session';
import {SessionHttpService} from '../session/session-http.service';
import {User} from '../model/user';
import {UserHttpService} from '../user/user-http.service';
import {error} from 'util';
import {Program} from '../model/program';
import {ProgramHttpService} from '../program/program-http.service';
import {Exercice} from '../model/exercice';
import {ExerciceHttpService} from '../exercice/exercice-http.service';

@Component({
  selector: 'app-create-exercice',
  templateUrl: './create-exercice.component.html',
  styleUrls: ['./create-exercice.component.css']
})
export class CreateExerciceComponent implements OnInit {

  currentSession: Session = new Session();
  currentExo: Exercice = new Exercice();
  currentProg: Program = new Program();
  userLogged: User = JSON.parse(localStorage.getItem('userConnected'));
  idSessStopped: number;
  idProgStopped: number;
  currentUser: User;
  exoCree: boolean = false;

  constructor(private router: Router, private sessionService: SessionHttpService, private userService: UserHttpService, private programService: ProgramHttpService, private exerciceService: ExerciceHttpService) {
  }

  ngOnInit() {
  }

  cancel()
  {
    this.currentExo = null;
  }

  save()
  {
    this.userService.findById(this.userLogged.id).subscribe(resp =>
    {
      this.currentUser = resp;
      this.idSessStopped = this.currentUser.sessionStop;
      this.sessionService.findById(this.idSessStopped).subscribe(resp =>
      {
        this.currentSession = resp;
        this.idSessStopped = this.currentSession.id;
        this.currentExo.session = this.currentSession;
        this.exerciceService.save(this.currentExo);
        this.router.navigate(['createExo']);
        this.currentExo = new Exercice();
        this.exoCree = true;
      }, error1 => console.log(error1));
    }, error => console.log(error));

  }

  reset()
  {
    this.exoCree = false;
  }

}
