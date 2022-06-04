// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import {
//   addMovie,
//   removeMovie,
//   loadMovies,
//   loadMoviessSuccess,
//   loadMoviessFailure,
// } from './movies.actions';
// import { MoviesService } from '../../../movies/services/movies.service';
// import { of, from } from 'rxjs';
// import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
// import { Store } from '@ngrx/store';
// import { selectAllMovies } from './movies.selector';
// import { AppState } from '../app.state';

// @Injectable()
// export class MoviesEffect {
//   constructor(
//     private actions$: Actions,
//     private store: Store<AppState>,
//     private moviesService: MoviesService
//   ) {}

//   // Run this code when a loadTodos action is dispatched
// //   loadTodos$ = createEffect(() =>
// //     this.actions$.pipe(
// //       ofType(loadMovies),
// //       switchMap(() =>
// //         // Call the getTodos method, convert it to an observable
// //         from(this.moviesService.getTodos()).pipe(
// //           // Take the returned value and return a new success action containing the todos
// //           map((movies) => loadMoviessSuccess({ movies: movies })),
// //           // Or... if it errors return a new failure action containing the error
// //           catchError((error) => of(loadMoviessFailure({ error })))
// //         )
// //       )
// //     )
// //   );

//   // Run this code when the addTodo or removeTodo action is dispatched
// //   saveTodos$ = createEffect(
// //     () =>
// //       this.actions$.pipe(
// //         ofType(addMovie, removeMovie),
// //         withLatestFrom(this.store.select(selectAllMovies)),
// //         switchMap(([action, movie]) => from(this.moviesService.saveTodos(movie)))
// //       ),
// //     // Most effects dispatch another action, but this one is just a "fire and forget" effect
// //     { dispatch: false }
// //   );
// }
