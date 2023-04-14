import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from 'src/models/films';
import { LabtvService } from '../labtv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copertine-preview',
  templateUrl: './copertine-preview.component.html',
  styleUrls: ['./copertine-preview.component.css']
})
export class CopertinePreviewComponent {
  @Input()
  film?: Film;

  // @Input()
  // catturato = false;

  // @Input()
  // idPokemonCatturato?: number;

  // @Output()
  // onPokemonLiberato = new EventEmitter<Film>();

  constructor(private labtvService: LabtvService, private router: Router) {

  }

  // cattura() {
  //   this.labtvService.cattura(this.film!)?.subscribe(p => {
  //     console.log(p);

  //     this.router.navigate(["pokemons", "catturati"]);
  //   })
  // }

  // libera() {
  //   this.ps.libera(this.idPokemonCatturato!)?.subscribe(p => {
  //     this.onPokemonLiberato.emit(this.pokemon);
  //   });
  // }
}
