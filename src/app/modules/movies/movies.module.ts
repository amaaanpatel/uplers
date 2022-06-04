import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import {MoviesRoutingModule} from './movies-routing.module'
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    AddMoviesComponent,
    ListMoviesComponent,
    AboutProjectComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ]
})
export class MoviesModule { }
