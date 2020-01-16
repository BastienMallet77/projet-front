import { Injectable } from '@angular/core';
import {Level} from "../model/level";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  levels: Array<Level> = new Array<Level>();

  constructor() {
    this.levels.push(new Level(1, 0, 'Ceinture Blanche', "Ceinture blanche: Vous êtes débutant(e): vous n'avez jamais pratiqué de sport et partez de zéro, ou presque! Ce niveau vous premettra de démarrer par les fondamentaux et voir les bases."));
    this.levels.push(new Level(2, 0, 'Ceinture jaune', "Ceinture blablablabla     blablablad"));
    this.levels.push(new Level(3, 0, 'Ceinture bleue', "Ceinture blablablabla     blablablad"));
  }

  findAll(): Array<Level> {
    return this.levels;
  }

  findById(id: number): Level {
    for (const level of this.levels) {
      if (level.id == id) {
        return level;
      }
    }
    return null;
  }

  save(level: Level) {
    if (level) {
      if (!level.id) {
        let max = 0;
        for (let level of this.findAll()) {
          if (level.id > max) {
            max = level.id;
          }
        }

        level.id = ++max;
        level.version = 0;

        this.levels.push(level);
      } else {
        let indice: number = 0;
        let find: boolean = false;
        for (let el of this.findAll()) {
          if (el.id == level.id) {
            find = true;
            break;
          }
          indice++;
        }
        if (find) {
          level.version++;
          this.levels[indice] = level;
        }
      }
    }
  }

  delete(id: number) {
    let indice: number = 0;
    let find: boolean = false;
    for (let level of this.findAll()) {
      if (level.id == id) {
        find = true;
        break;
      }
      indice++;
    }

    if (find) {
      this.levels.splice(indice, 1);
    }
  }
}
