import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { CopertineListComponent } from './copertine-list/copertine-list.component';
import { CopertineDetailsComponent } from './copertine-details/copertine-details.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CopertinePreviewComponent } from './copertine-preview/copertine-preview.component';
import { MatCardModule } from "@angular/material/card";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from "ngx-spinner";
import { CopertineDetailsTvComponent } from './copertine-details-tv/copertine-details-tv.component';
import { CopertineListTvComponent } from './copertine-list-tv/copertine-list-tv.component';
import { CopertinePreviewTvComponent } from './copertine-preview-tv/copertine-preview-tv.component';
import { BuyComponent } from './buy/buy.component';
import { MatMenuModule } from '@angular/material/menu';
import { SezioneFilmComponent } from './sezione-film/sezione-film.component';
import { SezioneTvComponent } from './sezione-tv/sezione-tv.component';
import { AuthGuardGuard } from './services-guards/auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrazioneComponent,
    CopertineListComponent,
    CopertineDetailsComponent,
    SearchComponent,
    NavbarComponent,
    CopertinePreviewComponent,
    CopertineDetailsTvComponent,
    CopertineListTvComponent,
    CopertinePreviewTvComponent,
    SafePipe,
    BuyComponent,
    SezioneFilmComponent,
    SezioneTvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatCardModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
