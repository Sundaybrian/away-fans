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
