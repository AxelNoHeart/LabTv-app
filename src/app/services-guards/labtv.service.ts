import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, of, tap } from 'rxjs';
import { FilmResponse } from 'src/models/films';
import { TvResponse } from 'src/models/tv';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LabtvService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.LABTV_API_KEY
    })
  };
  

  searchMovie(page: number = 1): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(environment.LABTV_API_BASE_URL + "movie/popular?api_key=" + environment.LABTV_API_KEY + "&language=it&page=" + page )
      .pipe(
        catchError(this.handleError<FilmResponse>("search", undefined))
      );
  }

  searchTv(page: number = 1): Observable<TvResponse> {
    return this.http.get<TvResponse>(environment.LABTV_API_BASE_URL + "tv/popular?api_key=" + environment.LABTV_API_KEY + "&language=en&page=" + page)
      .pipe(
        catchError(this.handleError<TvResponse>("search", undefined))
      );
  }

  getByIdMovie(id: string): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(environment.LABTV_API_BASE_URL + "movie/" + id + "?api_key=" + environment.LABTV_API_KEY + "&language=it")
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.results)),
        catchError(this.handleError<FilmResponse>("getById", undefined))
      );
  }

  getByIdTv(id: string): Observable<TvResponse> {
    return this.http.get<TvResponse>(environment.LABTV_API_BASE_URL + "tv/" + id + "?api_key=" + environment.LABTV_API_KEY + "&language=en")
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.results)),
        catchError(this.handleError<TvResponse>("getById", undefined))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(operation, error);

      return of(result as T);
    }
  }
}
