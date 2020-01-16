import {Session} from './session';

export class Exercice {
  id: number;
  version: number;
  exerciceName: string;
  exerciceText: string;
  session: Session;
}
