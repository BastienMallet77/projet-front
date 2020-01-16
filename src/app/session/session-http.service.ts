import {Injectable} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Program} from '../model/program';
import {Observable} from 'rxjs';
import {Session} from '../model/session';

@Injectable({
  providedIn: 'root'
})

export class SessionHttpService {

  sessions: Array<Session>;

  constructor(private appConfig: AppConfigService, /*TODO private programService: ProgramService,*/ private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Array<Session>>(this.appConfig.backEnd + 'session').subscribe(resp => {
        this.sessions = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<Session> {
    return this.sessions;
  }

  findById(id: number): Observable<Session> {
    return this.http.get<Session>(this.appConfig.backEnd + 'session/' + id);
  }

  save(session: Session) {
    if (session) {
      /*TODO if (session.program && !session.program.id) {
        session.program = null;
      }*/
      if (!session.id) {
        this.http.post<Session>(this.appConfig.backEnd + 'session', session).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<Session>(this.appConfig.backEnd + 'session/' + session.id, session).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number) {
    this.http.delete<Session>(this.appConfig.backEnd + 'session/' + id).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }
}
