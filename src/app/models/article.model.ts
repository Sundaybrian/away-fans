export class Article {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public description: string,
    public imageUrl: string
  ) {}
}

export interface Fixture {
  id: string;
  date: string;
  stadium: string;
  logoHome: string;
  logoAway: string;
  home: string;
  away: string;
  imageUrl: string;
}

export class Ticket {
  constructor(
    public id: string,
    public title: string,
    public competition: string,
    public subtitle: string,
    public imageUrl: string,
    public user: string
  ) {}
}

export class Travel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public user: string,
    public booked: boolean,
    public capacity: number,
    public from: Date,
    public to: Date
  ) {}
}
