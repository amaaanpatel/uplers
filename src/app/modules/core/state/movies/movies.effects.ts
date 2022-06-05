import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadMoviessSuccess,
  loadMovies,
  loadMoviesError
} from './movies.actions';
import { MoviesService } from '../../../movies/services/movies.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom,mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';


@Injectable()
export class MoviesEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private moviesService: MoviesService
  ) {}

    loadMovies$ = createEffect(()=>
    this.actions$.pipe(
        ofType(loadMovies),
        switchMap(()=>
        // Call the getMovies method, convert it to an observable
        from(this.moviesService.getMovies()).pipe(
            map((movies)=>loadMoviessSuccess({moviesCount:movies.length,movies:movies})),
            catchError((err)=> of(loadMoviesError({moviesCount:0,movies:[]})))
        ))
    )
    )
}
