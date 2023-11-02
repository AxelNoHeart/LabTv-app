import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DbRequestService } from '../services-guards/db-request.service';
import { LabtvService } from '../services-guards/labtv.service';


@Component({
  selector: 'app-copertine-details-tv',
  templateUrl: './copertine-details-tv.component.html',
  styleUrls: ['./copertine-details-tv.component.css']
})
export class CopertineDetailsTvComponent {

  id:string = this.route.snapshot.params['id']
  
  constructor(
    private route: ActivatedRoute,
    private labTvService: LabtvService,
    private request: DbRequestService,
    private location: Location,
    private router: Router){
  }  

  tv?: any
  video:any
  errorMessage?: string;
  simili:boolean = false;
  similarShows:any
  linkImg: string = "https://image.tmdb.org/t/p/original/"

ngOnInit(): void {

    this.richiestaVideo()
    const id = this.route.snapshot.paramMap.get("id");
    this.simili = false;

    if(id != null){
      this.labTvService.getByIdTv(id).subscribe(res => {
        this.tv = res
        console.log(res);
        
      });

      this.errorMessage = undefined; 
    } else {
      this.errorMessage = "Parametro id non trovato"
      this.tv = undefined
    }
    
}


richiestaVideo() {
  this.request.getDetail("tv", this.id + "/videos").subscribe(
    data => {
      this.video = data.results[0]
    },
    err => {
      console.log(err)
    }
  )
}

richiestaSimili() {
  this.request.getDetail("tv", this.id + "/similar").subscribe(
    data => {
      this.similarShows = data.results
    },
    err => {
      console.log(err)
    }
  )
}

clickCopertina(id:number) {
  this.router.navigate(['/serie-tv', id])
}

mostraSimili() {
  this.simili = !this.simili
  setTimeout(() => window.scroll({top:350, left: 0}),1)
  
}
}


