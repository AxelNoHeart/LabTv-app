import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services-guards/auth.service';
import { DbRequestService } from '../services-guards/db-request.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{


  constructor(private router:Router, private auth:AuthService, private request:DbRequestService, private route:ActivatedRoute) {
    
  }

  topRatedTv:any;
  topRatedCoverTv:any;

  popularMovies:any;
  popularMoviesCover:any;

  popularsTv:any;
  popularsCover:any;

  topRatedMovies:any;
  topRatedMoviesCover:any;
  
  ngOnInit(): void {
    this.getTopRatedMovies()
    this.getTopRatedTv()
    this.getPopularsTv()
    this.getPopularMovies()
  }


  getTopRatedTv() {

    this.request.getRequest("tv", "top_rated").subscribe(
      data => {
        this.topRatedTv = data.results
        this.topRatedCoverTv = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getPopularsTv() {
    this.request.getRequest("tv", "popular").subscribe(
      data => {
        this.popularsTv = data.results
        this.popularsCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }
 
  getPopularMovies() {
    this.request.getRequest("movie", "popular").subscribe(
      data => {
        this.popularMovies = data.results
        this.popularMoviesCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getTopRatedMovies() {

    this.request.getRequest("movie", "top_rated").subscribe(
      data => {
        this.topRatedMovies = data.results
        this.topRatedMoviesCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }


  vaiASezioneTv(categoria:string) {
    this.router.navigate(['sezione-tv', categoria])
  }

  vaiASezioneFilm(categoria:string) {
    this.router.navigate(['sezione-film', categoria])
  }

  getNumeroRandom() {
    return Math.floor(Math.random()*10)
  }


}


