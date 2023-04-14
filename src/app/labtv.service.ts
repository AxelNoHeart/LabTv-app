import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, of, tap } from 'rxjs';
import { FilmResponse } from 'src/models/films';

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

  search(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(environment.LABTV_API_BASE_URL + this.httpOptions.headers + "&language=enUS&page=1", )
      .pipe(
        catchError(this.handleError<FilmResponse>("search", undefined))
      );
  }

  getById(id: string): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(environment.LABTV_API_BASE_URL + "page=/" + id, this.httpOptions)
      .pipe(
        tap(r => console.log("Arrivato un nuovo dato dell'observable: " + r.data.name)),
        catchError(this.handleError<FilmResponse>("getById", undefined))
      );
  }

  // getPreferiti(): Observable<PokemonCatturato[]> {
  //   let loggedUser = this.authService.getLoggedUser();
  //   console.log(loggedUser);

  //   if (loggedUser != null) {
  //     return this.http.get<PokemonCatturato[]>(environment.USER_API_BASE_URL + "pokemons?userId=" + loggedUser.user.id, {
  //       headers: new HttpHeaders({
  //         "Authorization": "Bearer " + loggedUser.accessToken
  //       })
  //     });
  //   } else {
  //     return of([]);
  //   }
  // }

  // preferito(pokemon: Pokemon) {
  //   let loggedUser = this.authService.getLoggedUser();

  //   if (loggedUser != null) {

  //     let pokemonCatturato: PokemonCatturato = {
  //       userId: loggedUser.user.id,
  //       pokemon: pokemon
  //     };

  //     return this.http.post<PokemonCatturato>(environment.USER_API_BASE_URL + "pokemons", pokemonCatturato, {
  //       headers: new HttpHeaders({
  //         "Authorization": "Bearer " + loggedUser.accessToken
  //       })
  //     });
  //   }

  //   return null;
  // }

  // libera(id: number) {
  //   let loggedUser = this.authService.getLoggedUser();

  //   if (loggedUser != null) {
  //     return this.http.delete<any>(environment.USER_API_BASE_URL + "pokemons/" + id, {
  //       headers: new HttpHeaders({
  //         "Authorization": "Bearer " + loggedUser.accessToken
  //       })
  //     });
  //   }

  //   return null;
  // }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(operation, error);

      return of(result as T);
    }
  }
}
