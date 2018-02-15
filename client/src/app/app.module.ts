import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { NgxPaginationModule } from 'ngx-pagination';
import {MaterializeModule} from 'angular2-materialize';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2UiAuthModule } from 'ng2-ui-auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormHelperService } from './services/form-helper.service';
import { JsonInterceptorService } from './services/json-interceptor.service';
import {RouterModule, Routes} from '@angular/router';

import {MusiqueComponent} from './components/musique/musique.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AlertService} from './services/alert.service';
import {MusiquesService} from './services/musiques.service';
import {ArticlesService} from './services/articles.service';
import {AlertComponent} from './components/alert/alert.component';
import {UsersService} from './services/users.service';


const appRoutes: Routes = [
  {
    path: 'musiques',
    component: MusiqueComponent,
    data: { title: 'Liste des musiques' }
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'Liste des articles' }
  }
  ,
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Connexion' }
  }
  ,
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Inscripton' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    MusiqueComponent,
    ArticlesComponent,
    AlertComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterializeModule,
    NgxPaginationModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2UiAuthModule.forRoot({
      providers: {
        google: {
          clientId: '4082224860-ag848jbe95vr72hv2qg93ojd2d2ajfke.apps.googleusercontent.com'
        }
      }
    })
  ],
  providers: [
    AlertService,
    MusiquesService,
    ArticlesService,
    JsonInterceptorService,
    FormHelperService,
    UsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
