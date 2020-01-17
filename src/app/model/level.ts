import {Program} from './program';
import {Sport} from "./sport";
import {Specialisation} from "./specialisation";

export class Level {
  id: number;
  version: number;
  levelName: string;
  levelDescription: string;
  sports: Array<Sport>;
  specialisations: Array<Specialisation>;
  programs: Array<Program>;

  constructor(id?: number, version?: number, levelName?: string, levelDescription?: string, sports?: Array<Sport>, specialisations?: Array<Specialisation>, programs?: Array<Program>) {
    this.id = id;
    this.version = version;
    this.levelName = levelName;
    this.levelDescription = levelDescription;
    this.sports = sports;
    this.specialisations = specialisations;
    this.programs = programs;
  }
}
