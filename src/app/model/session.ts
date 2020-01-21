import {Program} from './program';
import {Exercice} from './exercice';

export class Session {
  id: number;
  version: number;
  name: string;
  text: string;
  nbSession: number;
  program: Program;
  exercices: Array<Exercice> = new Array<Exercice>();
  isDone: Boolean = false;

  constructor(id?: number, version?: number, name?: string, text?: string,
              nbSession?: number, program?: Program, exercices?: Array<Exercice>) {
    this.id = id;
    this.version = version;
    this.name = name;
    this.text = text;
    this.nbSession = nbSession;
    this.program = program;
    this.exercices = exercices;
  }
}
