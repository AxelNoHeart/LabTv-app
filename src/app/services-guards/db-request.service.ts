import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbRequestService {

    constructor(private http:HttpClient) { }
  
    apiKey:string = "406d7ce80a569d7381271d932f093c4a"
  
    section:string = ""
    categoria:string = ""
    page:string = ""
    id:string = ""
  
    getRequest(section:string, categoria:string, page:string = "1"):Observable<any> {
      this.section = section
      this.categoria = categoria
      this.page = page;
      let wsRequest = `https://api.themoviedb.org/3/${this.section}/${this.categoria}?api_key=${this.apiKey}&language=it&page=${this.page}`
      return this.http.get(wsRequest)
    }
  
    getDetail(section:string, id:string):Observable<any> {
      this.section = section
      this.id = id
      let wsRequest = `https://api.themoviedb.org/3/${this.section}/${this.id}?api_key=${this.apiKey}&language=it`
      return this.http.get(wsRequest)
    }

    getTrailer(){
      return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=406d7ce80a569d7381271d932f093c4a&language=it&page=1")
    }


    search(term:string):Observable<any> {
      let wsRequest = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=it-IT&query=${encodeURIComponent(term)}&page=1`
      return this.http.get(wsRequest)
    }
  
    buy(film:any):Observable<any> {
      return this.http.post(`http://localhost:3000/users/${localStorage.getItem("user_id")}/film-acquistati`, film, {headers: new HttpHeaders (
        {"Authorization": `Bearer ${localStorage.getItem("token")}`})})
    }
  
    return(id:string):Observable<any> {
      return this.http.delete(`http://localhost:3000/film-acquistati/${id}`, {headers: new HttpHeaders (
        {"Authorization": `Bearer ${localStorage.getItem("token")}`})})
    }
  
    checkAcquistato(id:string):Observable<any> {
      return this.http.get(`http://localhost:3000/users/${localStorage.getItem("user_id")}/film-acquistati?media_id=${id}`, {headers: new HttpHeaders (
        {"Authorization": `Bearer ${localStorage.getItem("token")}`})})
    }
  
    getAcquisti():Observable<any> {
      return this.http.get(`http://localhost:3000/users/${localStorage.getItem("user_id")}/film-acquistati`, {headers: new HttpHeaders (
        {"Authorization": `Bearer ${localStorage.getItem("token")}`})})
    }
  
  }
