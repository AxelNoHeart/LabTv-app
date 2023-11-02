import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services-guards/auth.service';
import { DbRequestService } from '../services-guards/db-request.service';
import { LabtvService } from '../services-guards/labtv.service';

@Component({
  selector: 'app-copertine-details',
  templateUrl: './copertine-details.component.html',
  styleUrls: ['./copertine-details.component.css']
})
export class CopertineDetailsComponent implements OnInit{

  id:string = this.route.snapshot.params['id']


    constructor(
      private route: ActivatedRoute,
      private labTvService: LabtvService,
      private request: DbRequestService,
      private auth: AuthService,
      private router: Router){
    }  
    video: any | undefined
    film?: any
    errorMessage?: string;
    mostraTrailer:boolean = false;
    simili:boolean = false;
    similarMovies:any
    acquistato:boolean = false;
    idAcquisto:any
    linkImg: string = "https://image.tmdb.org/t/p/original/"

  ngOnInit(): void {
    this.simili = false;
    this.richiestaVideo()
    this.richiestaDettaglio()
    this.richiestaSimili()
    this.check()

      const id = this.route.snapshot.paramMap.get("id");
      if(id != null){
        this.labTvService.getByIdMovie(id).subscribe(res => {
          this.film = res          
        });
  
        this.errorMessage = undefined; 
      } else {
        this.errorMessage = "Parametro id non trovato"
        this.film = undefined
      }


      
  }

  richiestaVideo() {
    this.request.getDetail("movie", this.id + "/videos").subscribe(
      data => {
        this.video = data.results[0]
      },
      err => {
        console.log(err)
      }
    )
  }
  richiestaDettaglio() {
    this.request.getDetail("movie", this.id).subscribe(
      data => {
        this.film = data
      },
      err => {
        console.log(err)
      }
    )
  }


  richiestaSimili() {
    this.request.getDetail("movie", this.id + "/similar").subscribe(
      data => {
        this.similarMovies = data.results
  
      },
      err => {
        console.log(err)
      }
    )
  }

  mostraSimili() {
    this.simili = !this.simili
    setTimeout(() => window.scroll({top:350, left: 0}),1)
    
  }

  compra() {
    this.request.buy({title: this.film.title, poster_path: this.film.poster_path, media_id: this.id, id:null}).subscribe(
      data => {
        this.acquistato = true
        this.idAcquisto = data.id
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }

  restituisci () {
    this.request.return(this.idAcquisto).subscribe(
      data=> {
        this.acquistato = false
      }
    )
  }
  
  check() {
    this.request.checkAcquistato(this.id).subscribe(
      data => {
        if (data.length == 0) {
          this.acquistato = false
        }
        else {
          this.acquistato = true
          this.idAcquisto = data[0].id
        }
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }
}
