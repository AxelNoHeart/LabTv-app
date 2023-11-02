import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tv } from 'src/models/tv';
import { LabtvService } from '../services-guards/labtv.service';

@Component({
  selector: 'app-copertine-list-tv',
  templateUrl: './copertine-list-tv.component.html',
  styleUrls: ['./copertine-list-tv.component.css']
})
export class CopertineListTvComponent implements OnInit {

  constructor(private labtvService:LabtvService, private spinner: NgxSpinnerService){}

  scrollPage: number = 1

  serieTv: Tv[] = []


  ngOnInit(): void {
    this.getSerieTv();
  }

  getSerieTv() {
    this.labtvService.searchTv(this.scrollPage).subscribe(res => {
      console.log(res);
      if (res != undefined) {
        if(this.scrollPage != 1){
          res.results.forEach(tv => {
            this.serieTv.push(tv)
          })
        }else{
          this.serieTv = res.results
        }
      }
    });
  }

  onScroll(){
      this.scrollPage++
      this.getSerieTv()

  }

}
