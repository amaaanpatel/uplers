import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovie, removeMovie, loadMoviessSuccess, searchMovies,loadMovies } from '../../../core/state/movies/movies.actions';
import { Movies, movieList } from '../../models/movies.model';
import { selectMovies, moviesList, movieCount } from '../../../core/state/movies/movies.selector';
import { MoviesService } from '../../services/movies.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  //movies list(array)
  public movies$: Observable<Array<movieList>> = this.store.select(moviesList);
  //movies count
  public moviesCount$:Observable<number>= this.store.select(movieCount);
  //store the name of the movie for adding and deleting
  public movieName = "";

  constructor(private store: Store, private moviesService: MoviesService) { }

  ngOnInit() {

  }

  //add movies to the array 
  addMovie() {
    if(!this.movieName) return
    this.store.dispatch(addMovie({ name: this.movieName }));
  }
  //remove from the array by name
  removeMovies() {
    if(!this.movieName) return
    this.store.dispatch(removeMovie({ name: this.movieName }));
  }

  resetMovies() {
    // this.moviesService
    //   .getMovies()
    //   .subscribe((movies:movieList[]) => this.store.dispatch(loadMoviessSuccess({ movies:movies,moviesCount:movies.length })));
    //user effects to reset the movies
    this.store.dispatch(loadMovies())
  }

}
