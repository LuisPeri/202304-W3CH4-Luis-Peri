export type NetflixStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Netflix implements NetflixStructure {
  static generateID() {
    return Math.trunc(Math.random() * 100);
  }
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;

  constructor(
    public name: string,
    creator: string,
    year: number,
    poster: string,
    score: number,
    emmies: number
  ) {
    this.id = Netflix.generateID();
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.watched = false;
    this.score = score;
    this.emmies = emmies;
  }
  id: number;
}
