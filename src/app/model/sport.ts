export class Sport {

  id: number;
  version: number;
  sportName: string;
  sportDescription: string;
  img : string;


  constructor(id?: number, version?: number, sportName?: string, sportDescription?: string, img?: string) {
    this.id = id;
    this.version = version;
    this.sportName = sportName;
    this.sportDescription = sportDescription;
    this.img = img;
  }
}
