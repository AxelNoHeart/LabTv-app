import { Component, OnInit } from '@angular/core';
import { LabtvService } from '../labtv.service';
import { Film } from 'src/models/films';

@Component({
  selector: 'app-copertine-list',
  templateUrl: './copertine-list.component.html',
  styleUrls: ['./copertine-list.component.css']
})
export class CopertineListComponent implements OnInit {

  constructor(private labtvService:LabtvService){}

  loading: boolean = true;

  films: Film[] = []

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.loading = true;
    this.labtvService.search().subscribe(res => {
      console.log(res);
      if (res != undefined) {
        this.films = res.data;
      }

      this.loading = false;
    });
  }
}
