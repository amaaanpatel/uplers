import { createAction, props } from "@ngrx/store";
import { Movies } from "../../../movies/models/movies.model";

//add movies actions
export const addMovie = createAction(
    '[Movie Page] Add Movie',
    props<{ name: string }>()
);

//remove movie action
export const removeMovie = createAction(
    '[Movie Page] Remove Movie',
    props<{ name: string }>()
);
//search Movie Action
export const searchMovies = createAction(
    '[Movie Page] Search Movie',
    props<{ name: string }>()
);
//load movies form external api
export const loadMoviessSuccess = createAction(
    '[Movies API] Movies Load Success',
    props<Movies>()
);
