import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddMoviesComponent} from './components/add-movies/add-movies.component'
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
    data: { title: 'list Movies' }
  },
  {
    path: 'addmovies',
    component: AddMoviesComponent,
    data: { title: 'Add Movies' }
  },
  {
    path: 'aboutproject',
    component: AboutProjectComponent,
    data: { title: 'about project' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
