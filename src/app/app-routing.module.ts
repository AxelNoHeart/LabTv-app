import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CopertineListComponent } from './copertine-list/copertine-list.component';
import { CopertineDetailsComponent } from './copertine-details/copertine-details.component';
import { AuthGuardGuard } from './services-guards/auth-guard.guard';
import { CopertineListTvComponent } from './copertine-list-tv/copertine-list-tv.component';
import { CopertineDetailsTvComponent } from './copertine-details-tv/copertine-details-tv.component';
import { BuyComponent } from './buy/buy.component';
import { SearchComponent } from './search/search.component';
import { SezioneFilmComponent } from './sezione-film/sezione-film.component';
import { SezioneTvComponent } from './sezione-tv/sezione-tv.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'homepage', component: HomepageComponent, canActivate:[AuthGuardGuard]},
  {path: 'films', component: CopertineListComponent, canActivate:[AuthGuardGuard]},
  {path: 'films/:id', component: CopertineDetailsComponent},
  {path: 'serie-tv', component: CopertineListTvComponent, canActivate:[AuthGuardGuard]},
  {path: 'cerca', component: SearchComponent},
  {path: 'serie-tv/:id', component: CopertineDetailsTvComponent},
  {path:"acquistati", component: BuyComponent, canActivate:[AuthGuardGuard] },
  {path:"sezione-film/:categ", component:SezioneFilmComponent},
  {path:"sezione-tv/:categ", component:SezioneTvComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
