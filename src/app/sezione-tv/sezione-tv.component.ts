import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbRequestService } from '../services-guards/db-request.service';

@Component({
  selector: 'app-sezione-tv',
  templateUrl: './sezione-tv.component.html',
  styleUrls: ['./sezione-tv.component.css']
})
export class SezioneTvComponent implements OnInit {

  constructor(private request:DbRequestService, private route:ActivatedRoute, private router:Router ) {}
  

  serie:Array<any> = []
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
    this.request.getRequest("tv", this.categoria, page).subscribe(
      data => {
        for (let serie of data.results) {
          this.serie.push(serie)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  clickCopertina(id:string) {
    this.router.navigate(['serie-tv', id])
  }

}
