import { Component, OnInit } from '@angular/core';
import {SportHttpService} from '../sport/sport-http.service';

@Component({
  selector: 'app-list-sport-user',
  templateUrl: './list-sport-user.component.html',
  styleUrls: ['./list-sport-user.component.css']
})
export class ListSportUserComponent implements OnInit {
  search: string = "";
  constructor(private sportService: SportHttpService) { }

  ngOnInit() {
  }

  list() {
    return this.sportService.findAll().filter(s =>s.sportName.indexOf(this.search) != -1);
  }
}
