import { Injectable } from '@angular/core';
import {AppConfigService} from "../app-config.service";
import {HttpClient} from "@angular/common/http";
import {Program} from "../model/program";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class DashboardHttpService {

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load()
  {
  }

}
