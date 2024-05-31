class Media {
  title;
  year;
  rating;
  date;

  constructor(title: String, year: Number, rating: Number, date: Date) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.date = date;
  }
}

export class Movie extends Media {
  director;
  cast;
  review;

  constructor(title: String, year: Number, rating: Number, date: Date,
    director: String, cast: Array<String>, review: String
  ) {
    super(title, year, rating, date);
    this.director = director;
    this.cast = cast;
    this.review = review;
  }
}

export class TVShow extends Media {
  season;
  episode;
  creator;
  cast;
  review;

  constructor(title: String, year: Number, rating: Number, date: Date,
    season: Number, episode: Number, creator: String,
    cast: Array<String>, review: String
  ) {
    super(title, year, rating, date);
    this.season = season;
    this.episode = episode;
    this.creator = creator;
    this.cast = cast;
    this.review = review;
  }
}
