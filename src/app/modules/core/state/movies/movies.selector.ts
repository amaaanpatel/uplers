import { createSelector,createFeatureSelector } from '@ngrx/store';
import {Movies,movieList} from '../../../movies/models/movies.model'
export const selectMovies = createFeatureSelector<Movies>('movies');
export const movieCount = createSelector(
    selectMovies,
    (movieData:Movies) => movieData.moviesCount
);

export const moviesList = createSelector(
    selectMovies,
    (movieData:Movies) => movieData.movies
);
