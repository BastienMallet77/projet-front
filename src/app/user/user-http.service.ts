import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  users: Array<User>;
  // TODO à mettre dans le constructeur
  // , private programService : ProgramHttpService, private inProgressService: InProgressHttpService, private degreeService: DegreeHttpService
  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load(){
    this.http.get<Array<User>>(this.appConfig.backEnd + 'user').subscribe(resp => {
      this.users = resp;
    },
      err => console.log(err));
  }

  findAll(): Array<User> {
    return this.users;
  }

  findById(id: number): Observable<User>{
    return this.http.get<User>(this.appConfig.backEnd + 'user/' +id);
  }

  save(user: User) {
    if (user){
      if(!user.id){
        this.http.post<User>(this.appConfig.backEnd + 'user', user).subscribe(resp =>{
          this.load();
        }, err => console.log(err));
      }else {
        this.http.put<User>(this.appConfig.backEnd + 'user/' + user.id, user).subscribe(resp =>{
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number){
  this.http.delete<User>(this.appConfig.backEnd + 'user/' + id).subscribe(resp=>{
    this.load();
  }, err => console.log(err));
  }
}
