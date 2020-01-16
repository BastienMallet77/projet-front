import {Component, OnInit} from '@angular/core';
import {Sport} from '../model/sport';
import {SportHttpService} from './sport-http.service';

@Component({
  selector: 'sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  currentSport: Sport = null;

  constructor(private sportService: SportHttpService) {

  }

  ngOnInit() {
  }

  list() {
    return this.sportService.findAll();
  }

  add() {
    this.currentSport = new Sport();
  }

  detail(id: number) {

  }

  edit(id: number) {
    this.sportService.findById(id).subscribe(resp => {
      this.currentSport = resp;
    }, error => {
      console.log(error);
    });

  }

  save() {
    this.sportService.save(this.currentSport);
    this.cancel();
  }

  delete(id: number) {
    this.sportService.delete(id);
  }


  cancel() {
    this.currentSport = null;
  }
}
