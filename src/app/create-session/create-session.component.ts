import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Session} from '../model/session';
import {SessionHttpService} from '../session/session-http.service';
import {User} from '../model/user';
import {UserHttpService} from '../user/user-http.service';
import {error} from 'util';
import {Program} from '../model/program';
import {ProgramHttpService} from '../program/program-http.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  currentSession: Session = new Session();
  currentProg: Program = new Program();
  userLogged: User = JSON.parse(localStorage.getItem('userConnected'));
  idProgStopped: number;
  currentUser: User;

  constructor(private router: Router, private sessionService: SessionHttpService, private userService: UserHttpService, private programService: ProgramHttpService) {
  }

  ngOnInit() {
  }

  cancel()
  {
    this.currentSession = null;
  }

  save()
  {
    this.userService.findById(this.userLogged.id).subscribe(resp =>
    {
      this.currentUser = resp;
      this.idProgStopped = this.currentUser.programStop;
      this.programService.findById(this.idProgStopped).subscribe(resp =>
      {
        this.currentProg = resp;
        this.currentSession.program = this.currentProg;
        this.sessionService.save(this.currentSession);
      }, error1 => console.log(error1));
    }, error => console.log(error));
    this.router.navigate(['createExo']);
  }

}
