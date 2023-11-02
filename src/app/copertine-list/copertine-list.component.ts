import { Component, OnInit } from '@angular/core';
import { Film } from 'src/models/films';
import { NgxSpinnerService } from 'ngx-spinner';
import { LabtvService } from '../services-guards/labtv.service';

@Component({
  selector: 'app-copertine-list',
  templateUrl: './copertine-list.component.html',
  styleUrls: ['./copertine-list.component.css']
})
export class CopertineListComponent implements OnInit {

  constructor(private labtvService:LabtvService, private spinner: NgxSpinnerService){}

  loading: boolean = true;

  scrollPage: number = 1

  films: Film[] = []


  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.loading = true;
    this.labtvService.searchMovie(this.scrollPage).subscribe(res => {
      console.log(res);
      if (res != undefined) {
        if(this.scrollPage != 1){
          res.results.forEach(film => {
            this.films.push(film)
          })
        }else{
          this.films = res.results
        }
      }
      this.loading = false;
    });
  }

  onScroll(){
    this.scrollPage++
    this.getFilms()
  }

}
