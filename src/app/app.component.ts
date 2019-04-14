import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp';

  public movies;

  constructor(private movieService: MovieService) {}

  getMovies() {
    this.movieService.getMovies().subscribe(
      data => { this.movies = data },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  ngOnInit() {
    this.getMovies();
  }
}
