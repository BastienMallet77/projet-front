import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InProgressHttpService} from '../in-progress/in-progress-http.service';
import {DegreeHttpService} from '../degree/degree-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  users: Array<User>;
  roles: Array<String>;

  // TODO !! Si rajouté au constructeur : Circular
  // , private programService : ProgramHttpService
  constructor(private appConfig: AppConfigService, private inProgressService: InProgressHttpService, private degreeService: DegreeHttpService, private http: HttpClient) {
    this.load();
    this.loadRoles();
  }

  load(){
    this.http.get<Array<User>>(this.appConfig.backEnd + 'user').subscribe(resp => {
      this.users = resp;
    },
      err => console.log(err));
  }
  loadRoles()  {

    this.http.get<Array<string>>(this.appConfig.backEnd + 'user/roles').subscribe(resp => {
        this.roles = resp;
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
