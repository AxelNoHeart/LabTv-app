import { Component, Input } from '@angular/core';
import { Tv } from 'src/models/tv';
import { Router } from '@angular/router';
import { LabtvService } from '../services-guards/labtv.service';

@Component({
  selector: 'app-copertine-preview-tv',
  templateUrl: './copertine-preview-tv.component.html',
  styleUrls: ['./copertine-preview-tv.component.css']
})
export class CopertinePreviewTvComponent {

  @Input()
  tv?: Tv;

  linkImg: string = "https://image.tmdb.org/t/p/original/"

  constructor(private labtvService: LabtvService, private router: Router) {

  }
}
