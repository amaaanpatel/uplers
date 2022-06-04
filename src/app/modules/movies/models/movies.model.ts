export interface Movies {
  moviesCount: number,
  movies:Array<movieList>
}

export interface movieList {
  Title: string,
  Year?: string,
  Runtime?: string,
  Poster?: string,
}