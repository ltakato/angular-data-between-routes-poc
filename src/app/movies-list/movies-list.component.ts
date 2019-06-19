import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  items = [];

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = MoviesService.getItems();
  }

  seeMovieDetail(movie) {
    this.moviesService.setActiveId(movie.id);
    this.router.navigateByUrl('movie-detail');
  }

}
