import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CopertineListComponent } from './copertine-list/copertine-list.component';
import { CopertineDetailsComponent } from './copertine-details/copertine-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'films', component: CopertineListComponent},
  {path: 'films/:id', component: CopertineDetailsComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
