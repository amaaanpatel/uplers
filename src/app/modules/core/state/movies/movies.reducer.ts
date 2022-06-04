import { createReducer, on, State } from "@ngrx/store";
import { addMovie, removeMovie, loadMoviessSuccess, searchMovies } from "./movies.actions"
import { Movies } from "../../../movies/models/movies.model";

export const initialState: Movies = {
    moviesCount: 0,
    movies: []
};

export const MoviesReducer = createReducer(
    // Supply the initial state
    initialState,
    //load movies form the external api
    on(loadMoviessSuccess, (state, { movies, moviesCount }) => ({ ...state, moviesCount: moviesCount, movies: movies })),
    // Add the new Movie to the Movies array
    on(addMovie, (state, { name }) => ({ movies: [...state.movies, { Title: name }], moviesCount: state.moviesCount + 1 })),
    // Remove the Movie from the Movie array
    on(removeMovie, (state, { name }) => ({
        movies: state.movies.filter((movie) => movie.Title.toLocaleLowerCase() !== name.toLocaleLowerCase()),
        moviesCount: state.movies.filter((movie) => movie.Title.toLocaleLowerCase() !== name.toLocaleLowerCase()).length
    })),
    // Search the Movie from the Movie array
    on(searchMovies, (state, { name }) => ({
        movies: state.movies.filter((movie) => movie.Title.toLocaleLowerCase() === name.toLocaleLowerCase()),
        moviesCount: state.movies.filter((movie) => movie.Title.toLocaleLowerCase() === name.toLocaleLowerCase()).length
    })),
);