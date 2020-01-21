import {Program} from './program';
import {Sport} from "./sport";
import {Specialisation} from "./specialisation";

export class Level {
  id: number;
  version: number;
  levelName: string;
  levelDescription: string;
  sport: Sport;
  specialisation: Specialisation;
  programs: Array<Program>;
  img: string;

  constructor(id?: number, version?: number, levelName?: string, levelDescription?: string, sport?: Sport, specialisation?: Specialisation, programs?: Array<Program>, img?: string) {
    this.id = id;
    this.version = version;
    this.levelName = levelName;
    this.levelDescription = levelDescription;
    this.sport = sport;
    this.specialisation = specialisation;
    this.programs = programs;
    this.img = img;
  }
}
