import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail = null;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    if (this.moviesService.activeId) {
      this.movieDetail = this.moviesService.getMovieDetail(this.moviesService.activeId);
    }
  }

}
