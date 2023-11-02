import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbRequestService } from '../services-guards/db-request.service';

@Component({
  selector: 'app-sezione-film',
  templateUrl: './sezione-film.component.html',
  styleUrls: ['./sezione-film.component.css']
})
export class SezioneFilmComponent implements OnInit {

  constructor(private request:DbRequestService, private route:ActivatedRoute, private router:Router ) {}

  film:Array<any> = []
  categoria:string = this.route.snapshot.params['categ']
  page:number = 1

  ngOnInit(): void {
   this.aggiungiCopertine("1")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollHeight - window.scrollY == window.innerHeight) {
      this.page++
      this.aggiungiCopertine(this.page.toString())
    }
  }

  aggiungiCopertine(page:string) {
    this.request.getRequest("movie", this.categoria, page).subscribe(
      data => {
        for (let movie of data.results) {
          this.film.push(movie)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  clickCopertina(id:number) {
    this.router.navigate(['films', id])
  }

 

}
