import { Component, OnInit } from '@angular/core';
import {SportHttpService} from '../sport/sport-http.service';
import {SpecialisationHttpService} from '../specialisation/specialisation-http.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {Sport} from '../model/sport';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Specialisation} from '../model/specialisation';
import {LevelHttpService} from '../level/level-http.service';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {Level} from '../model/level';

@Component({
  selector: 'app-list-level-sport',
  templateUrl: './list-level-sport.component.html',
  styleUrls: ['./list-level-sport.component.css']
})
export class ListLevelSportComponent implements OnInit {
  levels: Array<Level>
  monId : number;
  constructor(route: ActivatedRoute, private sportService: SportHttpService, private specialisationService: SpecialisationHttpService, private http: HttpClient, private appConfig: AppConfigService, private levelService: LevelHttpService) {
  route.params.subscribe( params => {
    console.log(params);
    this.monId = params.id;
    console.log("mon Id est " + this.monId)
  });
  }

  ngOnInit() {
    this.load(this.monId)
  }


  load(id: number) {
    this.http.get<Array<Level>>(this.appConfig.backEnd + 'level/' + id + '/levels').subscribe(resp => {
        this.levels = resp;
        console.log(resp)

      },
      err => console.log(err));
  }

  listLevel() {
    return this.levels;
  }
}
