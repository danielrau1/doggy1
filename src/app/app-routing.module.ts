import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './views/about/about.component';
import {RandomDogComponent} from './views/random-dog/random-dog.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent}, // Note 5: HOME component appears when nothing in the url except localhost
  {path: 'about', component: AboutComponent},
  {path: 'random', component: RandomDogComponent},
  {path: 'random/:name', component: RandomDogComponent}, // Note4: Input manually the name of the dog - see Random-Dog Component
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
