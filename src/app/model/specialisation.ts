import {Sport} from "./sport";
import {Program} from "./program";
import {Level} from "./level";

export class Specialisation {
  id: number;
  version: number;
  speName: string;
  speDescription: string;
  sport: Sport;
  levelss: Array<Level> = new Array<Level>();
  programss: Array<Program> = new Array<Program>();
  img: string;


  constructor(id?: number, version?: number, speName?: string, speDescription?: string, sport?: Sport, levelss?: Array<Level>, programss?: Array<Program>, img?: string) {
    this.id = id;
    this.version = version;
    this.speName = speName;
    this.speDescription = speDescription;
    this.sport = sport;
    this.levelss = levelss;
    this.programss = programss;
    this.img = img;
  }
}
