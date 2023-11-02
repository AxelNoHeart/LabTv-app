import { Component, Input } from '@angular/core';
import { Film } from 'src/models/films';
import { Router } from '@angular/router';
import { LabtvService } from '../services-guards/labtv.service';

@Component({
  selector: 'app-copertine-preview',
  templateUrl: './copertine-preview.component.html',
  styleUrls: ['./copertine-preview.component.css']
})
export class CopertinePreviewComponent {
  @Input()
  film?: Film;

  linkImg: string = "https://image.tmdb.org/t/p/original/"

  constructor(private labtvService: LabtvService, private router: Router) {

  }

}
