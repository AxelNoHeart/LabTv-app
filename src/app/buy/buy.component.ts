import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services-guards/auth.service';
import { DbRequestService } from '../services-guards/db-request.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private request:DbRequestService, private auth:AuthService, private router:Router) {}

  acquisti:any

  ngOnInit(): void {
    this.visualizzaAcquisti()
  }

  visualizzaAcquisti() {
    this.request.getAcquisti().subscribe(
      data => {
        this.acquisti = data
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }

  vaiADettaglio(id:string) {
    this.router.navigate(['films', id])
  }

  restituisci(id:string) {
    this.request.return(id).subscribe(
      data => {
        console.log(data)
        this.visualizzaAcquisti()
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

