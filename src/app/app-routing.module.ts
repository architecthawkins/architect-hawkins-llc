import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '', redirectTo: 'home ', pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
