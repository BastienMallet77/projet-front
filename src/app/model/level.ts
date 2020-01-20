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

  constructor(id?: number, version?: number, levelName?: string, levelDescription?: string, sports?: Sport, specialisations?: Specialisation, programs?: Array<Program>) {
    this.id = id;
    this.version = version;
    this.levelName = levelName;
    this.levelDescription = levelDescription;
    this.sport = sports;
    this.specialisation = specialisations;
    this.programs = programs;
  }
}
