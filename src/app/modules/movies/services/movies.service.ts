import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies, movieList } from '../models/movies.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Array<movieList>> {
        return this.http
            .get<movieList[]>(environment.MOVIES_API).pipe((movies)=> movies || [])
    }
}
