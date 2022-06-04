import { Movies } from "../../movies/models/movies.model";

  export interface AppState {
    movies: Array<Movies>
    collection:ReadonlyArray<string>;
  }
  
  

  