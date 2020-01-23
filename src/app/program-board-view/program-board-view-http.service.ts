import {Injectable, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Program} from "../model/program";
import {AppConfigService} from "../app-config.service";
import {UserHttpService} from "../user/user-http.service";
import {SportHttpService} from "../sport/sport-http.service";
import {LevelHttpService} from "../level/level-http.service";
import {HttpClient} from "@angular/common/http";
import {Session} from "../model/session";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {InProgress} from "../model/inProgress";

@Injectable({
  providedIn: 'root'
})
export class ProgramBoardViewHttpService {
  userCo: User;
  program: Program;
  sessions: Array<Session>;

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) {
  }

  load() {
    this.http.get<Program>(this.appConfig.backEnd + 'program/id/detail').subscribe(resp => {
      this.program = resp;
      console.log(this.program)
    }, err => console.log(err));
  }

  loadUser(userCoId: number)
  {
    return this.http.get<User>(this.appConfig.backEnd + 'user/' +userCoId);
  }

  findById(id: number): Observable<Program> {
    console.log(id);
    return this.http.get<Program>(this.appConfig.backEnd + 'program/' + id + '/detail/');
  }

  save(program: Program) {
    if (program) {
      this.http.put<Program>(this.appConfig.backEnd + 'program/' + program.id, program).subscribe(resp => {
        this.load();
      }, error => console.log(error));
    }
  }

  saveInProgress(inpro: InProgress) {
    this.http.put<InProgress>(this.appConfig.backEnd + 'inprogress/' + inpro.id, inpro).subscribe(resp => {
    });
  }


  sessionIsDone(sess: Session, prog: Program, monUser: User) {
    //SAVE SESSION DANS LA BDD (PUT=EDIT)!
    this.http.put<Session>(this.appConfig.backEnd + 'session/' + sess.id, sess).subscribe(resp => {

      //AUGMENTER LE NB SESSIONS FINIES DE L'USER   (SAVE LA MODIF USER)
      monUser.nbSessionFinished++;
      monUser.nbSessionFinished++;

      //SAVE USER!
      this.http.put<User>(this.appConfig.backEnd + 'user/' + monUser.id, monUser).subscribe(resp => {
      });

    });
  }


  programIsDone(prog: Program, monUser: User) {
    //SAVE prog et user en BDD (avec this htttp service PUT)
    this.http.put<Program>(this.appConfig.backEnd + 'program/' + prog.id, prog).subscribe(resp => {

      this.http.put<User>(this.appConfig.backEnd + 'user/' + monUser.id, monUser).subscribe(resp => {
      });

      //REDIRIGER VERS DASHBOARD USER
      this.router.navigate(['board']);

    });
  }

}
