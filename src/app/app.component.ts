import { Component,OnInit} from '@angular/core';
import {selectMovies,moviesList,movieCount } from './modules/core/state/movies/movies.selector';
import { Store } from '@ngrx/store';
import {loadMoviessSuccess} from './modules/core/state/movies/movies.actions';
import { movieList } from './modules/movies/models/movies.model';
import {MoviesService} from './modules/movies/services/movies.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Uplers';

  constructor(private store: Store, private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService
      .getMovies()
      .subscribe((movies:movieList[]) => this.store.dispatch(loadMoviessSuccess({ movies:movies,moviesCount:movies.length })));
  }
}
