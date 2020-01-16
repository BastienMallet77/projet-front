import {Injectable} from '@angular/core';
import {Exercice} from '../model/exercice';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Session} from '../model/session';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExerciceHttpService {

  exercices: Array<Exercice>;

  constructor(private appConfig: AppConfigService, /*TODO private sessionService: SessionService,*/ private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Array<Exercice>>(this.appConfig.backEnd + 'exercice').subscribe(resp => {
        this.exercices = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<Exercice> {
    return this.exercices;
  }

  findById(id: number): Observable<Exercice> {
    return this.http.get<Exercice>(this.appConfig.backEnd + 'exercice/' + id);
  }

  save(exercice: Exercice) {
    if (exercice) {
      /*TODO if (exercice.session && !exercice.session.id) {
        exercice.session = null;
      }*/
      if (!exercice.id) {
        this.http.post<Exercice>(this.appConfig.backEnd + 'exercice', exercice).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<Exercice>(this.appConfig.backEnd + 'exercice/' + exercice.id, exercice).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number) {
    this.http.delete<Exercice>(this.appConfig.backEnd + 'exercice/' + id).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }
}
