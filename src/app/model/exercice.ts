import {Session} from './session';

export class Exercice {
  id: number;
  version: number;
  exerciceName: string;
  exerciceText: string;
  session: Session;

  constructor(id?: number, version?: number, exerciceName?: string, exerciceText?: string, session?: Session) {
    this.id = id;
    this.version = version;
    this.exerciceName = exerciceName;
    this.exerciceText = exerciceText;
    this.session = session;
  }
}
