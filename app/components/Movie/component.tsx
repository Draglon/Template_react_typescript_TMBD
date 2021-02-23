import * as React from 'react';

import { formatMoney, formatTime } from '../../helpers/format';

import MovieCarousel from './MovieCarousel';
import MovieTitle from './MovieTitle';
import MovieOverview from './MovieOverview';
import MovieLabel from './MovieLabel';
import MovieGenres from './MovieGenres';
import MovieDetails from './MovieDetails';

interface Movie {
  id: string,
  title: string,
  backdrops: any,
  overview: string,
  language: string,
  runtime: string,
  budget: string,
  revenue: string,
  watchlist: any,
  favorite: any,
}

interface Props {
  movie: Movie,
  genres: any,
  cast: any,
  crew: any,
}

const MovieComponent = ({ movie, genres, cast, crew }: Props) => (
  <>
    {movie && (
      <>
        <MovieCarousel backdrops={movie.backdrops} title={movie.title} />
        <MovieTitle movie={movie} />
        <MovieOverview title="overview" overview={movie.overview} />
        <MovieLabel title="Original Language" text={movie.language} />
        <MovieLabel title="Runtime" text={formatTime(movie.runtime)} />
        <MovieLabel title="Budget" text={`$${formatMoney(movie.budget)}`} />
        <MovieLabel title="Revenue" text={`$${formatMoney(movie.revenue)}`} />
        <MovieGenres title="Genres" genres={genres} />
        <MovieDetails movieDetails={cast} title="Casts" />
        <MovieDetails movieDetails={crew} title="Crew" />
      </>
    )}
  </>
);

export default MovieComponent;
