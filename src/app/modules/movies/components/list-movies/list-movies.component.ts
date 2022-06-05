import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {searchMovies,loadMoviessSuccess} from '../../../core/state/movies/movies.actions';
import {MoviesService} from '../../services/movies.service';
import {movieCount,moviesList } from '../../../core/state/movies/movies.selector';
import { movieList } from '../../models/movies.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
   //movies list(array)
   public movies$:Observable<Array<movieList>> = this.store.select(moviesList);
   //movies count
   public moviesCount$:Observable<number> = this.store.select(movieCount);
   //store the name of the movie for adding and deleting
   public movieName = "";

  constructor(private store: Store, private moviesService: MoviesService) { }

  ngOnInit(): void {
  }
  //searchMovies
  searchMovies() {
    if(!this.movieName) return 
    this.store.dispatch(searchMovies({ name: this.movieName }));
  }

  resetMovies() {
    this.moviesService
      .getMovies()
      .subscribe((movies:movieList[]) => this.store.dispatch(loadMoviessSuccess({ movies:movies,moviesCount:movies.length })));
  }

}
