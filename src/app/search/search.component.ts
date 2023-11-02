import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbRequestService } from '../services-guards/db-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router, private request:DbRequestService) {}

  ngOnInit(): void {
    
  }


  term:string=""
  risultati:any
  
  cerca() {

    if (this.term.length >= 3) {
      this.request.search(this.term).subscribe(
      data => {
        this.risultati = data.results
      }
    )
    }
    
  }

  vaiADettaglio(id:string, media:string) {

    if (media == "tv") {
      this.router.navigate(['serie-tv', id])
    }
    else if (media == "movie") {
      this.router.navigate(['films', id])
    }

  }



}
