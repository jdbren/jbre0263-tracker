import { v4 as uuidv4 } from 'uuid';

class Media {
  uuid;
  title;
  image;
  relYear;
  rating;
  date;
  genre;

  constructor(title: String, year: Number, rating: Number, genre: String) {
    this.title = title;
    this.relYear = year;
    this.rating = rating;
    this.date = new Date(Date.now());
    this.uuid = uuidv4();
    this.genre = genre;
    this.image = "https://via.placeholder.com/150";
  }
}

export class Movie extends Media {
  director;
  cast;
  review;
  runtime;

  constructor(title: String, year: Number, rating: Number,
    genre: String, director: String, cast: Array<String>, review: String,
    runtime: Number
  ) {
    super(title, year, rating, genre);
    this.director = director;
    this.cast = cast;
    this.review = review;
    this.runtime = runtime;
  }
}

export class TVShow extends Media {
  season;
  creator;
  cast;
  review;

  constructor(title: String, year: Number, rating: Number,
    genre: String, season: Number, creator: String, cast: Array<String>,
    review: String
  ) {
    super(title, year, rating, genre);
    this.season = season;
    this.creator = creator;
    this.cast = cast;
    this.review = review;
  }
}
