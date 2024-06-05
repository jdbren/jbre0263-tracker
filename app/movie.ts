import { v4 as uuidv4 } from 'uuid';

async function getImage(name: string): Promise<string> {
  let url = 'https://api.themoviedb.org/3/search/movie?';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmM4NGZkZWM3NTI3MmMyZDM1OTg4MWU1NjQ2NzBhOSIsInN1YiI6IjY2MWYzODg0Yjg0Y2RkMDE3ZDY0ZDY4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZT6hiddk97-pcK9qRRBM_Xj9BiyrzTDOWgl232eTXXg'
    }
  };

  // Convert name to query string
  const query = new URLSearchParams({ query: name });
  console.log(query.toString());
  url += query.toString();

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  let json = await res.json();

  return json.results[0].poster_path;
}

class Media {
  uuid;
  title;
  imageUrl: string;
  relYear;
  rating;
  date;
  genre;

  constructor(title: string, year: number, rating: number, genre: string, uuid: string = '') {
    this.title = title;
    this.relYear = year;
    this.rating = rating;
    this.date = new Date(Date.now());
    if (uuid)
      this.uuid = uuid;
    else
      this.uuid = uuidv4();
    this.genre = genre;
    this.imageUrl = '';
    getImage(this.title).then((url) => {
      this.imageUrl = 'https://image.tmdb.org/t/p/w200' + url;
    }).catch((err) => {
      console.log(err);
    });
  }
}

export class Movie extends Media {
  director;
  cast;
  review;
  runtime;

  constructor(title: string, year: number, rating: number,
    genre: string, director: string, cast: string, review: string,
    runtime: number, uuid: string = ''
  ) {
    super(title, year, rating, genre, uuid);
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

  constructor(title: string, year: number, rating: number,
    genre: string, season: number, creator: string, cast: Array<string>,
    review: string
  ) {
    super(title, year, rating, genre);
    this.season = season;
    this.creator = creator;
    this.cast = cast;
    this.review = review;
  }
}
